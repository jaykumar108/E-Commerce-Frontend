"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { SITE } from "@/data";

const PageNotFound = () => {
  return (
    <div className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-background px-4">
      <div className="max-w-xl text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {SITE.name}
          </p>
          <h1 className="mt-4 text-[100px] font-semibold leading-none text-primary/15 md:text-[140px]">
            404
          </h1>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">Page not found</h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            This URL is not in the catalogue. Head home or back to the shop.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Home size={16} />
              Home
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-semibold"
            >
              Shop
            </Link>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft size={16} />
              Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PageNotFound;
