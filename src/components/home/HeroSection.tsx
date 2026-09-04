"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { heroSlides } from "@/data/banners";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 5500;

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = heroSlides[index];
  const count = heroSlides.length;

  const goTo = useCallback((next: number) => {
    setIndex((next + count) % count);
  }, [count]);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => goTo(index + 1), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [index, paused, goTo]);

  useEffect(() => {
    heroSlides.forEach((s) => {
      const img = new window.Image();
      img.src = s.image;
    });
  }, []);

  return (
    <section
      className="relative min-h-[78vh] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured collections"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.id}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />

      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center px-4 py-24 md:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45 }}
            className="max-w-xl text-white"
          >
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              {slide.title}
            </h1>
            <p className="mt-4 text-base text-white/80 md:text-lg">{slide.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-7">
                <Link href={slide.href}>
                  {slide.cta}
                  <ArrowRight size={16} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/40 bg-white/10 px-7 text-white hover:bg-white hover:text-black"
              >
                <Link href="/shop?filter=new">New arrivals</Link>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2" role="tablist" aria-label="Hero slides">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1}: ${s.title}`}
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                i === index ? "w-10 bg-white" : "w-5 bg-white/40 hover:bg-white/70"
              )}
            />
          ))}
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => goTo(index - 1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-black"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => goTo(index + 1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-black"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
