import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  className,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
        align === "center" && "sm:flex-col sm:items-center text-center",
        className
      )}
    >
      <div className={cn(align === "center" && "max-w-xl")}>
        {eyebrow && (
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        {description && (
          <p className="mt-2 max-w-xl text-sm text-muted-foreground md:text-base">
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
