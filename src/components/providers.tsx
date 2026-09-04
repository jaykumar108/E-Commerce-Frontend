"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { CartProvider } from "@/context/CartContext";
import { UIProvider } from "@/context/UIContext";
import { Toaster } from "@/components/ui/sonner";
import {
  AuthModal,
  CartModal,
  ConfirmModal,
  QuickViewModal,
  SearchModal,
  SizeGuideModal,
} from "@/components/Modals";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <CartProvider>
        <UIProvider>
          {children}
          <CartModal />
          <SearchModal />
          <QuickViewModal />
          <AuthModal />
          <ConfirmModal />
          <SizeGuideModal />
          <Toaster />
        </UIProvider>
      </CartProvider>
    </ThemeProvider>
  );
}
