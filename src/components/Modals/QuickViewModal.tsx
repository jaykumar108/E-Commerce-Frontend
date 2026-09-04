"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { useUI } from "@/context/UIContext";
import { useCart } from "@/context/CartContext";
import { Modal } from "@/components/Modals/Modal";
import { PriceTag } from "@/components/product/PriceTag";
import { QuantitySelector } from "@/components/product/QuantitySelector";
import { RatingStars } from "@/components/product/RatingStars";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function QuickViewModal() {
  const { quickView, setQuickView, setCartOpen, setSizeGuideOpen } = useUI();
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState<string>();
  const [size, setSize] = useState<string>();

  const product = quickView;

  const onOpenChange = (open: boolean) => {
    if (!open) {
      setQuickView(null);
      setQty(1);
      setColor(undefined);
      setSize(undefined);
    }
  };

  if (!product) {
    return (
      <Modal open={false} onOpenChange={onOpenChange}>
        <span />
      </Modal>
    );
  }

  const selectedColor = color ?? product.colors[0]?.name;
  const selectedSize = size ?? product.sizes?.[0];

  const add = () => {
    addItem({ product, quantity: qty, color: selectedColor, size: selectedSize });
    toast.success("Added to bag", { description: product.name });
    setQuickView(null);
    setCartOpen(true);
  };

  return (
    <Modal
      open={!!product}
      onOpenChange={onOpenChange}
      className="max-w-3xl sm:rounded-2xl"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            sizes="400px"
          />
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {product.subcategory}
          </p>
          <h3 className="mt-1 text-xl font-semibold">{product.name}</h3>
          <RatingStars rating={product.rating} count={product.reviewCount} className="mt-2" />
          <PriceTag
            price={product.price}
            originalPrice={product.originalPrice}
            className="mt-3"
            size="lg"
          />
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <div className="mt-5">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider">Colour</p>
            <div className="flex gap-2">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  title={c.name}
                  onClick={() => setColor(c.name)}
                  className={cn(
                    "h-8 w-8 rounded-full border-2",
                    selectedColor === c.name ? "border-primary" : "border-transparent"
                  )}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>

          {product.sizes && (
            <div className="mt-4">
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
                      "h-9 min-w-9 rounded-full border px-3 text-xs font-medium",
                      selectedSize === s
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

          <div className="mt-6 flex items-center gap-3">
            <QuantitySelector value={qty} onChange={setQty} max={product.stock} />
            <Button className="flex-1 rounded-full" onClick={add}>
              Add to bag
            </Button>
          </div>
          <Link
            href={`/product/${product.slug}`}
            onClick={() => setQuickView(null)}
            className="mt-4 inline-block text-sm underline underline-offset-4"
          >
            View full details
          </Link>
        </div>
      </div>
    </Modal>
  );
}
