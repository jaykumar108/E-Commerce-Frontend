import { Truck, RotateCcw, ShieldCheck, Headphones } from "lucide-react";

const items = [
  { icon: Truck, title: "Free shipping", text: "On orders over ₹2,999 across India." },
  { icon: RotateCcw, title: "14-day returns", text: "Unworn pieces, original tags." },
  { icon: ShieldCheck, title: "Secure checkout", text: "Encrypted payments, no surprises." },
  { icon: Headphones, title: "Human support", text: "hello@velora.store, 10am–7pm IST." },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4 md:px-6">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex gap-3">
            <Icon size={20} className="mt-0.5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold">{title}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
