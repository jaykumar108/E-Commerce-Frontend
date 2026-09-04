import type { Product } from "@/types";
import { ProductCard } from "@/components/product/ProductCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { Search } from "lucide-react";

export function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length) {
    return (
      <EmptyState
        icon={<Search size={32} />}
        title="No products found"
        description="Try another category, size, or search term."
        actionHref="/shop"
        actionLabel="Clear filters"
      />
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 md:gap-x-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
