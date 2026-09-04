"use client";

import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99,
  className,
}: {
  value: number;
  onChange: (next: number) => void;
  min?: number;
  max?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex h-10 items-center rounded-full border border-border",
        className
      )}
    >
      <button
        type="button"
        aria-label="Decrease quantity"
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
        className="grid h-10 w-10 place-items-center text-muted-foreground transition-colors hover:text-foreground disabled:opacity-40"
      >
        <Minus size={14} />
      </button>
      <span className="min-w-8 text-center text-sm font-medium tabular-nums">
        {value}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
        className="grid h-10 w-10 place-items-center text-muted-foreground transition-colors hover:text-foreground disabled:opacity-40"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
