"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Enter a valid email");
      return;
    }
    toast.success("You're on the list", { description: "First look at drops, no spam." });
    setEmail("");
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="rounded-3xl border border-border bg-card px-6 py-14 text-center md:px-16">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Newsletter
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
          New drops, quietly announced
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          One email when something is actually worth opening. Unsubscribe anytime.
        </p>
        <form
          onSubmit={onSubmit}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <Input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="h-11 rounded-full px-5"
          />
          <Button type="submit" className="h-11 rounded-full px-8">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
