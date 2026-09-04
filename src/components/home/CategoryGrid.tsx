import Link from "next/link";
import Image from "next/image";
import { featuredCategories } from "@/data/categories";
import { categoryHref } from "@/data/categories";
import { getProductCount } from "@/data/products";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <SectionHeader
        eyebrow="Collections"
        title="Shop by category"
        description="Start with the rooms we actually stock."
      />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {featuredCategories.map((cat) => (
          <Link
            key={cat.id}
            href={categoryHref(cat.slug)}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
          >
            <Image
              src={cat.image}
              alt={cat.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-white md:p-5">
              <h3 className="text-lg font-semibold">{cat.name}</h3>
              <p className="mt-0.5 text-xs text-white/75">{getProductCount(cat.slug)} pieces</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
