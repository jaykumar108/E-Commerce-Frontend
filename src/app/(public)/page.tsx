import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { CategoryCarousel } from "@/components/home/CategoryCarousel";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedProducts, NewArrivals } from "@/components/home/FeaturedProducts";
import { PromoBanner } from "@/components/home/PromoBanner";
import { Testimonials } from "@/components/home/Testimonials";
import { Newsletter } from "@/components/home/Newsletter";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<div className="h-[108px] border-b border-border" />}>
        <CategoryCarousel />
      </Suspense>
      <TrustBar />
      <CategoryGrid />
      <FeaturedProducts />
      <PromoBanner />
      <NewArrivals />
      <Testimonials />
      <Newsletter />
    </>
  );
}
