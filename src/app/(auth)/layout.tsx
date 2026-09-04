import Link from "next/link";
import { SITE } from "@/data";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-muted/30">
      <header className="border-b border-border bg-background px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-[0.22em] uppercase">
          {SITE.name}
        </Link>
      </header>
      <main className="flex flex-1 items-center justify-center px-4 py-16">{children}</main>
    </div>
  );
}
