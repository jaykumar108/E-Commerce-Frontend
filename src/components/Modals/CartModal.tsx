"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag, X } from "lucide-react";
import { useUI } from "@/context/UIContext";
import { useCart } from "@/context/CartContext";
import { CartLineItem } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";
import { EmptyState } from "@/components/shared/EmptyState";
import { Button } from "@/components/ui/button";

export function CartModal() {
  const { cartOpen, setCartOpen } = useUI();
  const { items } = useCart();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setCartOpen(false);
  }, [pathname, setCartOpen]);

  useEffect(() => {
    if (!cartOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [cartOpen]);

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
          />
          <motion.aside
            className="fixed right-0 top-0 z-[70] flex h-dvh w-full max-w-md flex-col bg-background shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h2 className="text-lg font-semibold">Your bag</h2>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-full hover:bg-accent"
                aria-label="Close bag"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5">
              {items.length === 0 ? (
                <EmptyState
                  icon={<ShoppingBag size={28} />}
                  title="Your bag is empty"
                  description="Add a piece you actually want to keep."
                  actionHref="/shop"
                  actionLabel="Continue shopping"
                />
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <CartLineItem
                      key={`${item.productId}-${item.color}-${item.size}`}
                      item={item}
                      compact
                    />
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-border p-5">
                <CartSummary
                  onCheckout={() => {
                    setCartOpen(false);
                    router.push("/checkout");
                  }}
                />
                <Button asChild variant="ghost" className="mt-2 w-full rounded-full">
                  <Link href="/cart" onClick={() => setCartOpen(false)}>
                    View full bag
                  </Link>
                </Button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
