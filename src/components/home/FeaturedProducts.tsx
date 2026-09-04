import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts, getNewProducts } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";

export function FeaturedProducts() {
  const featured = getFeaturedProducts().slice(0, 8);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
      <SectionHeader
        eyebrow="Featured"
        title="Pieces we stand behind"
        description="A short edit of what we actually wear and keep."
        action={
          <Button asChild variant="ghost" className="rounded-full">
            <Link href="/shop">
              View all <ArrowRight size={16} />
            </Link>
          </Button>
        }
      />
      <ProductGrid products={featured} />
    </section>
  );
}

export function NewArrivals() {
  const items = getNewProducts().slice(0, 4);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <SectionHeader
        eyebrow="Just in"
        title="New arrivals"
        action={
          <Button asChild variant="ghost" className="rounded-full">
            <Link href="/shop?filter=new">
              See new <ArrowRight size={16} />
            </Link>
          </Button>
        }
      />
      <ProductGrid products={items} />
    </section>
  );
}
