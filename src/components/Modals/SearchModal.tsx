"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { searchProducts } from "@/data/products";
import { useUI } from "@/context/UIContext";
import { Modal } from "@/components/Modals/Modal";
import { Input } from "@/components/ui/input";
import { formatINR } from "@/lib/format";

export function SearchModal() {
  const { searchOpen, setSearchOpen } = useUI();
  const [query, setQuery] = useState("");
  const results = searchProducts(query);

  useEffect(() => {
    if (!searchOpen) setQuery("");
  }, [searchOpen]);

  return (
    <Modal
      open={searchOpen}
      onOpenChange={setSearchOpen}
      title="Search"
      description="Find a piece by name, category, or tag."
      className="max-w-lg"
    >
      <div className="relative">
        <Search
          size={16}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try merino, boots, home…"
          className="h-11 rounded-full pl-9"
        />
      </div>
      <div className="mt-4 max-h-80 space-y-1 overflow-y-auto">
        {query && results.length === 0 && (
          <p className="px-2 py-8 text-center text-sm text-muted-foreground">
            No matches for “{query}”.
          </p>
        )}
        {results.map((p) => (
          <Link
            key={p.id}
            href={`/product/${p.slug}`}
            onClick={() => setSearchOpen(false)}
            className="flex items-center gap-3 rounded-xl p-2 hover:bg-accent"
          >
            <div className="relative h-12 w-10 overflow-hidden rounded-md bg-muted">
              <Image src={p.images[0]} alt={p.name} fill className="object-cover" sizes="40px" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{p.name}</p>
              <p className="text-xs text-muted-foreground">{p.subcategory}</p>
            </div>
            <p className="text-sm font-medium">{formatINR(p.price)}</p>
          </Link>
        ))}
      </div>
    </Modal>
  );
}
