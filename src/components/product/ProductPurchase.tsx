"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Heart } from "lucide-react";
import type { Product } from "@/types";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useUI } from "@/context/UIContext";
import { QuantitySelector } from "@/components/product/QuantitySelector";
import { Button } from "@/components/ui/button";

export function ProductPurchase({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { setCartOpen, setSizeGuideOpen } = useUI();
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(product.colors[0]?.name);
  const [size, setSize] = useState(product.sizes?.[0]);
  const [saved, setSaved] = useState(false);

  const add = () => {
    addItem({ product, quantity: qty, color, size });
    toast.success("Added to bag", { description: `${product.name}` });
    setCartOpen(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider">
          Colour — {color}
        </p>
        <div className="flex gap-2">
          {product.colors.map((c) => (
            <button
              key={c.name}
              type="button"
              title={c.name}
              onClick={() => setColor(c.name)}
              className={cn(
                "h-9 w-9 rounded-full border-2 shadow-inner",
                color === c.name ? "border-primary" : "border-transparent"
              )}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </div>

      {product.sizes && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs font-medium uppercase tracking-wider">Size</p>
            <button
              type="button"
              className="text-xs underline underline-offset-2"
              onClick={() => setSizeGuideOpen(true)}
            >
              Size guide
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                className={cn(
                  "h-10 min-w-10 rounded-full border px-3 text-sm font-medium",
                  size === s
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:border-foreground"
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      <p className="text-sm text-muted-foreground">
        {product.stock > 8 ? "In stock" : `Only ${product.stock} left`}
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <QuantitySelector value={qty} onChange={setQty} max={product.stock} />
        <Button size="lg" className="flex-1 rounded-full" onClick={add}>
          Add to bag
        </Button>
        <Button
          type="button"
          size="lg"
          variant="outline"
          className="rounded-full px-4"
          aria-label="Save"
          onClick={() => {
            setSaved((v) => !v);
            toast.success(saved ? "Removed from wishlist" : "Saved to wishlist");
          }}
        >
          <Heart size={18} className={saved ? "fill-current" : ""} />
        </Button>
      </div>
    </div>
  );
}
