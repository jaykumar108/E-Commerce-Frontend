"use client";

import { useCart } from "@/context/CartContext";
import { formatINR } from "@/lib/format";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SHIPPING_THRESHOLD = 2999;
const SHIPPING_FEE = 149;

export function CartSummary({
  onCheckout,
  checkoutHref = "/checkout",
  showCheckout = true,
}: {
  onCheckout?: () => void;
  checkoutHref?: string;
  showCheckout?: boolean;
}) {
  const { subtotal, itemCount } = useCart();
  const shipping = subtotal >= SHIPPING_THRESHOLD || subtotal === 0 ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;
  const remaining = Math.max(0, SHIPPING_THRESHOLD - subtotal);

  return (
    <aside className="rounded-2xl border border-border bg-card p-6">
      <h3 className="text-lg font-semibold">Order summary</h3>
      <dl className="mt-5 space-y-3 text-sm">
        <div className="flex justify-between">
          <dt className="text-muted-foreground">Subtotal ({itemCount})</dt>
          <dd className="font-medium">{formatINR(subtotal)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-muted-foreground">Shipping</dt>
          <dd className="font-medium">{shipping === 0 ? "Free" : formatINR(shipping)}</dd>
        </div>
        <div className="flex justify-between border-t border-border pt-3 text-base">
          <dt className="font-semibold">Total</dt>
          <dd className="font-semibold">{formatINR(total)}</dd>
        </div>
      </dl>
      {remaining > 0 && (
        <p className="mt-4 text-xs text-muted-foreground">
          Add {formatINR(remaining)} more for free shipping.
        </p>
      )}
      {showCheckout &&
        (onCheckout ? (
          <Button className="mt-6 w-full rounded-full" size="lg" onClick={onCheckout} disabled={!itemCount}>
            Checkout
          </Button>
        ) : (
          <Button asChild className="mt-6 w-full rounded-full" size="lg">
            <Link href={checkoutHref}>Checkout</Link>
          </Button>
        ))}
      <p className="mt-3 text-center text-[11px] text-muted-foreground">
        Taxes calculated at checkout. 14-day returns.
      </p>
    </aside>
  );
}
