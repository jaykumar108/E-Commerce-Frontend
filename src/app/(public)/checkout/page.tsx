"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { CartSummary } from "@/components/cart/CartSummary";
import { EmptyState } from "@/components/shared/EmptyState";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { formatINR } from "@/lib/format";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  if (placed) {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <CheckCircle2 className="mx-auto text-emerald-600" size={48} />
        <h1 className="mt-6 text-3xl font-semibold">Order placed</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Demo checkout complete. Reference <span className="font-medium text-foreground">{orderId}</span>.
          No payment was taken.
        </p>
        <Button className="mt-8 rounded-full" onClick={() => router.push("/shop")}>
          Back to shop
        </Button>
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16">
        <EmptyState
          title="Checkout is empty"
          description="Add something to the bag first."
          actionHref="/shop"
          actionLabel="Shop"
        />
      </div>
    );
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = `VL-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(id);
    clearCart();
    setPlaced(true);
    toast.success("Order confirmed", { description: id });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Checkout</h1>
      <form onSubmit={onSubmit} className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="space-y-8">
          <section className="rounded-2xl border border-border p-6">
            <h2 className="font-semibold">Contact</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required placeholder="you@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="first">First name</Label>
                <Input id="first" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last">Last name</Label>
                <Input id="last" required />
              </div>
            </div>
          </section>
          <section className="rounded-2xl border border-border p-6">
            <h2 className="font-semibold">Shipping</h2>
            <div className="mt-4 grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" required placeholder="Street, building" />
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" required defaultValue="Mumbai" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" required defaultValue="Maharashtra" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pin">PIN</Label>
                  <Input id="pin" required defaultValue="400050" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" required placeholder="+91" />
              </div>
            </div>
          </section>
          <section className="rounded-2xl border border-border p-6">
            <h2 className="font-semibold">Payment (demo)</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Card fields are decorative. Subtotal {formatINR(subtotal)}.
            </p>
            <div className="mt-4 grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="card">Card number</Label>
                <Input id="card" placeholder="4242 4242 4242 4242" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="exp">Expiry</Label>
                  <Input id="exp" placeholder="MM/YY" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" required />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="lg:sticky lg:top-24 lg:self-start">
          <CartSummary showCheckout={false} />
          <Button type="submit" size="lg" className="mt-4 w-full rounded-full">
            Place order
          </Button>
        </div>
      </form>
    </div>
  );
}
