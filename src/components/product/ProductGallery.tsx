"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-3 md:grid-cols-[80px_1fr]">
      <div className="order-2 flex gap-2 overflow-x-auto md:order-1 md:flex-col">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "relative h-20 w-16 shrink-0 overflow-hidden rounded-lg border",
              active === i ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
            )}
          >
            <Image src={src} alt={`${name} ${i + 1}`} fill className="object-cover" sizes="80px" />
          </button>
        ))}
      </div>
      <div className="relative order-1 aspect-[3/4] overflow-hidden rounded-2xl bg-muted md:order-2">
        <Image
          src={images[active]}
          alt={name}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
