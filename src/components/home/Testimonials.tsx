import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { RatingStars } from "@/components/product/RatingStars";

export function Testimonials() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          align="center"
          eyebrow="Notes from the floor"
          title="What customers say"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.id}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <RatingStars rating={t.rating} />
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">“{t.quote}”</p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-muted">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="40px" />
                </div>
                <div>
                  <cite className="not-italic text-sm font-medium">{t.name}</cite>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
