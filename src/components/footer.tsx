import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/data";
import { featuredCategories } from "@/data/categories";

const footerLinks = [
  { name: "Shop all", href: "/shop" },
  { name: "New arrivals", href: "/shop?filter=new" },
  { name: "Bestsellers", href: "/shop?filter=bestsellers" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-muted/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="md:col-span-1">
          <Link href="/" className="text-xl font-semibold tracking-[0.22em] uppercase">
            {SITE.name}
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {SITE.tagline}. Clothing, objects, and accessories made to last — not to trend.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em]">Shop</h4>
          <ul className="mt-4 space-y-2.5">
            {featuredCategories.map((c) => (
              <li key={c.id}>
                <Link
                  href={`/shop?category=${c.slug}`}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em]">Visit</h4>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-muted-foreground hover:text-foreground">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em]">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <Mail size={16} className="mt-0.5 shrink-0" />
              {SITE.email}
            </li>
            <li className="flex gap-2">
              <Phone size={16} className="mt-0.5 shrink-0" />
              {SITE.phone}
            </li>
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              {SITE.address}
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <Instagram size={16} />
                @velora
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-[11px] text-muted-foreground md:flex-row md:px-6">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Dummy storefront · Prices in INR</p>
        </div>
      </div>
    </footer>
  );
}
