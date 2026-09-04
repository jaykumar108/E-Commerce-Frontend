"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { useUI } from "@/context/UIContext";
import { Modal } from "@/components/Modals/Modal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function AuthModal() {
  const { authOpen, setAuthOpen } = useUI();
  const [loading, setLoading] = useState(false);

  const fakeSubmit = (label: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success(label);
      setAuthOpen(false);
    }, 700);
  };

  return (
    <Modal
      open={authOpen}
      onOpenChange={setAuthOpen}
      title="Account"
      description="Sign in or create an account. This is a demo — no data is stored on a server."
      className="max-w-md"
    >
      <Tabs defaultValue="login">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Sign in</TabsTrigger>
          <TabsTrigger value="register">Create account</TabsTrigger>
        </TabsList>
        <TabsContent value="login" className="mt-5 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="login-email">Email</Label>
            <Input id="login-email" type="email" placeholder="you@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="login-password">Password</Label>
            <Input id="login-password" type="password" placeholder="••••••••" />
          </div>
          <Button
            className="w-full rounded-full"
            disabled={loading}
            onClick={() => fakeSubmit("Welcome back")}
          >
            {loading ? "Please wait…" : "Sign in"}
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            Prefer a full page?{" "}
            <Link href="/login" onClick={() => setAuthOpen(false)} className="underline">
              Go to login
            </Link>
          </p>
        </TabsContent>
        <TabsContent value="register" className="mt-5 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="reg-name">Name</Label>
            <Input id="reg-name" placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reg-email">Email</Label>
            <Input id="reg-email" type="email" placeholder="you@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reg-password">Password</Label>
            <Input id="reg-password" type="password" placeholder="At least 8 characters" />
          </div>
          <Button
            className="w-full rounded-full"
            disabled={loading}
            onClick={() => fakeSubmit("Account created")}
          >
            {loading ? "Please wait…" : "Create account"}
          </Button>
        </TabsContent>
      </Tabs>
    </Modal>
  );
}
