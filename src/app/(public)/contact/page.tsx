"use client";

import { useState } from "react";
import { toast } from "sonner";
import { SITE } from "@/data";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message received", { description: "We'll reply on this demo inbox." });
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <div className="mx-auto grid max-w-5xl gap-12 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Contact
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Write to us</h1>
        <p className="mt-4 text-muted-foreground">
          Studio hours 10am–7pm IST. For order help, include your reference number.
        </p>
        <dl className="mt-10 space-y-4 text-sm">
          <div>
            <dt className="text-muted-foreground">Email</dt>
            <dd className="font-medium">{SITE.email}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Phone</dt>
            <dd className="font-medium">{SITE.phone}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Studio</dt>
            <dd className="font-medium">{SITE.address}</dd>
          </div>
        </dl>
      </div>
      <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border p-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="msg">Message</Label>
          <Textarea id="msg" required rows={6} />
        </div>
        <Button type="submit" className="w-full rounded-full" disabled={sending}>
          {sending ? "Sending…" : "Send message"}
        </Button>
      </form>
    </div>
  );
}
