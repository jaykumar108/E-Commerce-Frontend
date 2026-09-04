import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopCatalog } from "@/components/product/ShopCatalog";
import { CategoryCarousel } from "@/components/home/CategoryCarousel";
import { SectionHeader } from "@/components/shared/SectionHeader";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse the Velora collection — apparel, footwear, accessories, and home.",
};

export default function ShopPage() {
  return (
    <>
      <Suspense fallback={<div className="h-[108px] border-b border-border" />}>
        <CategoryCarousel />
      </Suspense>
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <SectionHeader
          eyebrow="Catalogue"
          title="Shop all"
          description="Filter by room, then sort. Everything here is in stock as dummy inventory."
        />
        <Suspense fallback={<p className="text-sm text-muted-foreground">Loading catalogue…</p>}>
          <ShopCatalog />
        </Suspense>
      </div>
    </>
  );
}
