"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackButton({
  fallbackHref = "/shop",
  label = "Back",
  className,
}: {
  fallbackHref?: string;
  label?: string;
  className?: string;
}) {
  const router = useRouter();

  const onBack = () => {
    const fromSameSite =
      typeof document !== "undefined" &&
      document.referrer &&
      document.referrer.includes(window.location.host);

    if (fromSameSite) {
      router.back();
      return;
    }
    router.push(fallbackHref);
  };

  return (
    <button
      type="button"
      onClick={onBack}
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
        className
      )}
    >
      <ArrowLeft size={16} />
      {label}
    </button>
  );
}
