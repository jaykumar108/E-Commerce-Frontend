"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
  Apple,
  Armchair,
  Baby,
  Bike,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Footprints,
  HardHat,
  LampDesk,
  Laptop,
  Shirt,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Trophy,
  Tv,
  Watch,
} from "lucide-react";
import { categories, categoryHref } from "@/data/categories";
import type { CategoryIcon } from "@/types";
import { cn } from "@/lib/utils";

const icons: Record<CategoryIcon, React.ComponentType<{ size?: number; className?: string }>> = {
  bag: ShoppingBag,
  shirt: Shirt,
  smartphone: Smartphone,
  laptop: Laptop,
  lipstick: Sparkles,
  lamp: LampDesk,
  tv: Tv,
  toy: Baby,
  food: Apple,
  helmet: HardHat,
  sports: Trophy,
  armchair: Armchair,
  book: BookOpen,
  scooter: Bike,
  watch: Watch,
  footprints: Footprints,
};

export function CategoryCarousel() {
  const pathname = usePathname();
  const params = useSearchParams();
  const current = params.get("category");
  const scrollerRef = useRef<HTMLDivElement>(null);
  const drag = useRef({
    active: false,
    startX: 0,
    scrollLeft: 0,
    moved: false,
    pointerId: -1,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [grabbing, setGrabbing] = useState(false);

  const isActive = (slug: string) => {
    if (slug === "for-you") {
      return (pathname === "/" || pathname === "/shop") && !current;
    }
    return current === slug;
  };

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateArrows();

    const onWheel = (e: WheelEvent) => {
      if (el.scrollWidth <= el.clientWidth) return;
      const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (delta === 0) return;
      e.preventDefault();
      el.scrollLeft += delta;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    const el = scrollerRef.current;
    if (!el) return;
    drag.current = {
      active: true,
      startX: e.clientX,
      scrollLeft: el.scrollLeft,
      moved: false,
      pointerId: e.pointerId,
    };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active || !scrollerRef.current) return;
    const dx = e.clientX - drag.current.startX;
    if (!drag.current.moved) {
      if (Math.abs(dx) < 10) return;
      drag.current.moved = true;
      setGrabbing(true);
      scrollerRef.current.setPointerCapture(e.pointerId);
    }
    scrollerRef.current.scrollLeft = drag.current.scrollLeft - dx;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (
      drag.current.moved &&
      scrollerRef.current?.hasPointerCapture(e.pointerId)
    ) {
      scrollerRef.current.releasePointerCapture(e.pointerId);
    }
    drag.current.active = false;
    setGrabbing(false);
  };

  const onClickCapture = (e: React.MouseEvent) => {
    if (!drag.current.moved) return;
    e.preventDefault();
    e.stopPropagation();
    drag.current.moved = false;
  };

  const scrollByDir = (dir: number) => {
    scrollerRef.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  return (
    <section className="border-b border-border bg-background">
      <div className="relative mx-auto max-w-7xl px-4 py-4 md:px-6">
        {canPrev && (
          <button
            type="button"
            aria-label="Scroll categories left"
            onClick={() => scrollByDir(-1)}
            className="absolute left-2 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-border bg-background shadow-md md:grid"
          >
            <ChevronLeft size={16} />
          </button>
        )}
        {canNext && (
          <button
            type="button"
            aria-label="Scroll categories right"
            onClick={() => scrollByDir(1)}
            className="absolute right-2 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-border bg-background shadow-md md:grid"
          >
            <ChevronRight size={16} />
          </button>
        )}

        <div
          ref={scrollerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={onClickCapture}
          className={cn(
            "flex gap-1 overflow-x-auto scroll-smooth select-none",
            grabbing ? "cursor-grabbing" : "cursor-grab"
          )}
        >
          {categories.map((cat) => {
            const Icon = icons[cat.icon];
            const active = isActive(cat.slug);
            return (
              <Link
                key={cat.id}
                href={categoryHref(cat.slug)}
                draggable={false}
                className="group flex w-[88px] shrink-0 cursor-pointer flex-col items-center gap-1.5 px-1 py-1 sm:w-[100px]"
              >
                <span
                  className={cn(
                    "relative grid h-14 w-14 place-items-center rounded-2xl transition-colors",
                    active ? "bg-primary/10" : "group-hover:bg-muted"
                  )}
                >
                  <span className="pointer-events-none absolute bottom-2 h-3.5 w-8 rounded-full bg-yellow-400/85" />
                      <Icon size={26} className="pointer-events-none relative text-foreground" />
                </span>
                <span
                  className={cn(
                    "w-full truncate text-center text-[11px] leading-tight sm:text-xs",
                    active
                      ? "font-semibold text-foreground underline decoration-2 underline-offset-4 decoration-primary"
                      : "font-medium text-foreground/80"
                  )}
                >
                  {cat.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
