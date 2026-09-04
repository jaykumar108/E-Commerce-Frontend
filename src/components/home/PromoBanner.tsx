import Link from "next/link";
import Image from "next/image";
import { promoBanners } from "@/data/banners";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PromoBanner() {
  return (
    <section className="mx-auto grid max-w-7xl gap-4 px-4 py-8 md:grid-cols-2 md:px-6">
      {promoBanners.map((banner) => (
        <article
          key={banner.id}
          className="relative min-h-[320px] overflow-hidden rounded-2xl md:min-h-[420px]"
        >
          <Image
            src={banner.image}
            alt={banner.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent"
            )}
          />
          <div className="absolute inset-x-0 bottom-0 p-8 text-white">
            <h3 className="text-2xl font-semibold tracking-tight">{banner.title}</h3>
            <p className="mt-2 max-w-sm text-sm text-white/80">{banner.subtitle}</p>
            <Button asChild className="mt-5 rounded-full" variant="secondary">
              <Link href={banner.href}>{banner.cta}</Link>
            </Button>
          </div>
        </article>
      ))}
    </section>
  );
}
