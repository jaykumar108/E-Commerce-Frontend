"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { featuredCategories } from "@/data/categories";
import { ProductGrid } from "@/components/product/ProductGrid";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const sorts = [
  { value: "featured", label: "Featured" },
  { value: "new", label: "Newest" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "rating", label: "Top rated" },
];

export function ShopCatalog() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const category = params.get("category") ?? "all";
  const filter = params.get("filter") ?? "all";
  const sort = params.get("sort") ?? "featured";

  const setParam = (key: string, value: string) => {
    const next = new URLSearchParams(params.toString());
    if (value === "all") next.delete(key);
    else next.set(key, value);
    const q = next.toString();
    router.push(q ? `${pathname}?${q}` : pathname);
  };

  const filtered = useMemo(() => {
    let list = [...products];
    if (category !== "all") list = list.filter((p) => p.category === category);
    if (filter === "new") list = list.filter((p) => p.isNew);
    if (filter === "bestsellers") list = list.filter((p) => p.isBestseller);
    if (filter === "sale") list = list.filter((p) => p.originalPrice && p.originalPrice > p.price);

    switch (sort) {
      case "new":
        list.sort((a, b) => Number(b.isNew) - Number(a.isNew));
        break;
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        list.sort((a, b) => Number(b.isFeatured) - Number(a.isFeatured));
    }
    return list;
  }, [category, filter, sort]);

  const chips = [
    { id: "all", label: "All" },
    ...featuredCategories.map((c) => ({ id: c.slug, label: c.name })),
  ];

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {chips.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setParam("category", c.id)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-colors",
                category === c.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-foreground"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex gap-2">
            {[
              { id: "all", label: "All" },
              { id: "new", label: "New" },
              { id: "bestsellers", label: "Bestsellers" },
              { id: "sale", label: "Sale" },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setParam("filter", f.id)}
                className={cn(
                  "text-xs uppercase tracking-wider",
                  filter === f.id ? "font-semibold text-foreground" : "text-muted-foreground"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
          <Select value={sort} onValueChange={(v) => setParam("sort", v)}>
            <SelectTrigger className="w-[180px] rounded-full">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              {sorts.map((s) => (
                <SelectItem key={s.value} value={s.value}>
                  {s.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <p className="mb-6 text-sm text-muted-foreground">{filtered.length} pieces</p>
      <ProductGrid products={filtered} />
    </div>
  );
}
