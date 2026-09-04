import type { Metadata } from "next";
import { SITE } from "@/data";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Velora.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        About
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">{SITE.name}</h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        {SITE.tagline}. We edit slowly: fewer SKUs, better fabrics, and a storefront that
        stays out of the way. This build is a professional demo — dummy catalogue, local
        cart, and reusable UI — not a live warehouse.
      </p>
      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {[
          { n: "01", t: "Materials", d: "Merino, selvedge, calf, waxed cotton." },
          { n: "02", t: "Fit", d: "True to size. Size guide on every garment." },
          { n: "03", t: "Service", d: "Human replies, 14-day returns." },
        ].map((item) => (
          <div key={item.n} className="rounded-2xl border border-border p-5">
            <p className="text-xs text-muted-foreground">{item.n}</p>
            <h2 className="mt-2 font-semibold">{item.t}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{item.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
