"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Menu, Moon, Palette, Search, ShoppingBag, Sun, User, X } from "lucide-react";
import { SITE } from "@/data";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useUI } from "@/context/UIContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "New in", href: "/shop?filter=new" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [accentColor, setAccentColor] = useState("default");
  const { itemCount } = useCart();
  const { setCartOpen, setSearchOpen, setAuthOpen } = useUI();

  useEffect(() => {
    setMounted(true);
    const savedAccent = localStorage.getItem("velora-accent") || "default";
    setAccentColor(savedAccent);
    document.documentElement.setAttribute("data-theme", savedAccent);

    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const changeAccent = (color: string) => {
    setAccentColor(color);
    localStorage.setItem("velora-accent", color);
    document.documentElement.setAttribute("data-theme", color);
  };

  const accents = [
    { name: "default", label: "Ink", color: "bg-zinc-900 dark:bg-white" },
    { name: "blue", label: "Blue", color: "bg-blue-500" },
    { name: "red", label: "Red", color: "bg-red-500" },
    { name: "green", label: "Green", color: "bg-emerald-500" },
    { name: "purple", label: "Purple", color: "bg-purple-500" },
    { name: "yellow", label: "Gold", color: "bg-yellow-500" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 shadow-sm backdrop-blur-md"
          : "bg-background/60 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-[72px] md:px-6">
        <button
          type="button"
          className="grid h-10 w-10 place-items-center md:hidden"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <Link href="/" className="flex flex-col leading-none">
          <span className="text-xl font-semibold tracking-[0.22em] uppercase">
            {SITE.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "relative text-sm font-medium text-foreground/75 transition-colors hover:text-foreground",
                pathname === link.href && "text-foreground"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 hover:w-full group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          {mounted && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="hidden h-10 w-10 place-items-center rounded-full hover:bg-accent sm:grid"
                  aria-label="Appearance"
                >
                  <Palette size={18} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52 rounded-2xl p-3">
                <p className="mb-2 px-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Mode
                </p>
                <div className="mb-3 grid grid-cols-2 gap-2">
                  {[
                    { name: "light", icon: Sun, label: "Light" },
                    { name: "dark", icon: Moon, label: "Dark" },
                  ].map((m) => (
                    <button
                      key={m.name}
                      type="button"
                      onClick={() => setTheme(m.name)}
                      className={cn(
                        "flex flex-col items-center gap-1.5 rounded-xl border p-2.5 text-[10px]",
                        theme === m.name
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:bg-accent"
                      )}
                    >
                      <m.icon size={14} />
                      {m.label}
                    </button>
                  ))}
                </div>
                <p className="mb-2 px-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Accent
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {accents.map((a) => (
                    <button
                      key={a.name}
                      type="button"
                      onClick={() => changeAccent(a.name)}
                      className={cn(
                        "flex flex-col items-center gap-1 rounded-xl border p-2",
                        accentColor === a.name ? "border-primary" : "border-border"
                      )}
                    >
                      <span className={cn("h-4 w-4 rounded-full", a.color)} />
                      <span className="text-[9px]">{a.label}</span>
                    </button>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full hover:bg-accent"
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
          >
            <Search size={18} />
          </button>
          <button
            type="button"
            className="hidden h-10 w-10 place-items-center rounded-full hover:bg-accent sm:grid"
            aria-label="Account"
            onClick={() => setAuthOpen(true)}
          >
            <User size={18} />
          </button>
          <button
            type="button"
            className="relative grid h-10 w-10 place-items-center rounded-full hover:bg-accent"
            aria-label="Bag"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBag size={18} />
            {itemCount > 0 && (
              <span className="absolute right-1 top-1 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="rounded-xl px-3 py-3 text-base font-medium hover:bg-accent"
                >
                  {link.name}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setAuthOpen(true);
                }}
                className="rounded-xl px-3 py-3 text-left text-base font-medium hover:bg-accent"
              >
                Sign in
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
