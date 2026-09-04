"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { CartLineItem } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";
import { EmptyState } from "@/components/shared/EmptyState";

export default function CartPage() {
  const { items } = useCart();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Your bag</h1>
      {items.length === 0 ? (
        <div className="mt-10">
          <EmptyState
            icon={<ShoppingBag size={32} />}
            title="Nothing in the bag yet"
            description="The shop is a short walk from here."
            actionHref="/shop"
            actionLabel="Start shopping"
          />
        </div>
      ) : (
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="space-y-8">
            {items.map((item) => (
              <div
                key={`${item.productId}-${item.color}-${item.size}`}
                className="border-b border-border pb-8 last:border-0"
              >
                <CartLineItem item={item} />
              </div>
            ))}
            <Link href="/shop" className="text-sm underline underline-offset-4">
              Continue shopping
            </Link>
          </div>
          <div className="lg:sticky lg:top-24 lg:self-start">
            <CartSummary />
          </div>
        </div>
      )}
    </div>
  );
}
