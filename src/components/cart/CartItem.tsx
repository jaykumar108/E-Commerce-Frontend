"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import type { CartItem } from "@/types";
import { formatINR } from "@/lib/format";
import { QuantitySelector } from "@/components/product/QuantitySelector";
import { itemKey, useCart } from "@/context/CartContext";
import { useUI } from "@/context/UIContext";

export function CartLineItem({ item, compact }: { item: CartItem; compact?: boolean }) {
  const { updateQuantity, removeItem } = useCart();
  const { askConfirm } = useUI();
  const key = itemKey(item);

  return (
    <div className="flex gap-4">
      <Link
        href={`/product/${item.slug}`}
        className="relative h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-muted"
      >
        <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
      </Link>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link href={`/product/${item.slug}`} className="font-medium leading-tight hover:text-primary">
              {item.name}
            </Link>
            <p className="mt-1 text-xs text-muted-foreground">
              {[item.color, item.size].filter(Boolean).join(" · ") || "Standard"}
            </p>
          </div>
          <p className="shrink-0 text-sm font-semibold">{formatINR(item.price * item.quantity)}</p>
        </div>
        <div className="mt-auto flex items-center justify-between pt-3">
          <QuantitySelector
            value={item.quantity}
            onChange={(n) => updateQuantity(key, n)}
            className={compact ? "h-8 scale-90 origin-left" : undefined}
          />
          <button
            type="button"
            className="text-muted-foreground hover:text-red-600"
            aria-label="Remove item"
            onClick={() =>
              askConfirm({
                title: "Remove item?",
                description: `${item.name} will be removed from your bag.`,
                confirmLabel: "Remove",
                onConfirm: () => removeItem(key),
              })
            }
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
