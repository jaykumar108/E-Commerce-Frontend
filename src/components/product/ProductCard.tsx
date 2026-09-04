"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import type { Product } from "@/types";
import { Badge } from "@/components/ui/badge";
import { PriceTag } from "@/components/product/PriceTag";
import { RatingStars } from "@/components/product/RatingStars";
import { useCart } from "@/context/CartContext";
import { useUI } from "@/context/UIContext";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { setQuickView, setCartOpen } = useUI();

  const handleAdd = () => {
    addItem({
      product,
      quantity: 1,
      color: product.colors[0]?.name,
      size: product.sizes?.[0],
    });
    toast.success("Added to bag", { description: product.name });
    setCartOpen(true);
  };

  return (
    <article className="group">
      <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-2xl bg-muted">
        <Link href={`/product/${product.slug}`} className="absolute inset-0">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        <div className="pointer-events-none absolute left-3 top-3 z-10 flex flex-col gap-1.5">
          {product.isNew && <Badge variant="new">New</Badge>}
          {product.originalPrice && product.originalPrice > product.price && (
            <Badge variant="sale">Sale</Badge>
          )}
          {product.isBestseller && !product.isNew && (
            <Badge variant="secondary">Bestseller</Badge>
          )}
        </div>
        <div className="absolute inset-x-3 bottom-3 z-10 flex gap-2 opacity-100 transition-all duration-300 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          <button
            type="button"
            onClick={handleAdd}
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-background/95 px-3 py-2.5 text-xs font-semibold shadow-lg backdrop-blur hover:bg-primary hover:text-primary-foreground"
          >
            <ShoppingBag size={14} />
            Add
          </button>
          <button
            type="button"
            onClick={() => setQuickView(product)}
            className="grid h-10 w-10 place-items-center rounded-full bg-background/95 shadow-lg backdrop-blur hover:bg-primary hover:text-primary-foreground"
            aria-label="Quick view"
          >
            <Eye size={14} />
          </button>
        </div>
      </div>
      <Link href={`/product/${product.slug}`} className="block">
        <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          {product.subcategory}
        </p>
        <h3 className="mt-1 font-medium tracking-tight group-hover:text-primary">
          {product.name}
        </h3>
        <PriceTag
          price={product.price}
          originalPrice={product.originalPrice}
          size="sm"
          className="mt-1.5"
        />
        <RatingStars
          rating={product.rating}
          count={product.reviewCount}
          className="mt-2"
        />
      </Link>
    </article>
  );
}
