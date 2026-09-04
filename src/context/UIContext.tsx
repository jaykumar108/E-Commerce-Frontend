"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { Product } from "@/types";

type ConfirmState = {
  title: string;
  description: string;
  confirmLabel?: string;
  onConfirm: () => void;
} | null;

type UIContextValue = {
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  authOpen: boolean;
  setAuthOpen: (open: boolean) => void;
  quickView: Product | null;
  setQuickView: (product: Product | null) => void;
  sizeGuideOpen: boolean;
  setSizeGuideOpen: (open: boolean) => void;
  confirm: ConfirmState;
  askConfirm: (state: ConfirmState) => void;
};

const UIContext = createContext<UIContextValue | null>(null);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [quickView, setQuickView] = useState<Product | null>(null);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [confirm, setConfirm] = useState<ConfirmState>(null);

  const askConfirm = useCallback((state: ConfirmState) => setConfirm(state), []);

  const value = useMemo(
    () => ({
      cartOpen,
      setCartOpen,
      searchOpen,
      setSearchOpen,
      authOpen,
      setAuthOpen,
      quickView,
      setQuickView,
      sizeGuideOpen,
      setSizeGuideOpen,
      confirm,
      askConfirm,
    }),
    [cartOpen, searchOpen, authOpen, quickView, sizeGuideOpen, confirm, askConfirm]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within UIProvider");
  return ctx;
}
