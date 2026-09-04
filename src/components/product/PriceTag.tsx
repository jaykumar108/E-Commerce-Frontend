import { formatINR, discountPercent } from "@/lib/format";
import { cn } from "@/lib/utils";

export function PriceTag({
  price,
  originalPrice,
  className,
  size = "md",
}: {
  price: number;
  originalPrice?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const off = discountPercent(price, originalPrice);
  const sizeClass =
    size === "lg"
      ? "text-2xl"
      : size === "sm"
        ? "text-sm"
        : "text-base";

  return (
    <div className={cn("flex flex-wrap items-baseline gap-2", className)}>
      <span className={cn("font-semibold tracking-tight", sizeClass)}>
        {formatINR(price)}
      </span>
      {originalPrice && originalPrice > price && (
        <>
          <span className="text-sm text-muted-foreground line-through">
            {formatINR(originalPrice)}
          </span>
          {off > 0 && (
            <span className="text-xs font-medium text-red-600">-{off}%</span>
          )}
        </>
      )}
    </div>
  );
}
