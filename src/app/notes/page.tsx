"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { PenLine } from "lucide-react";

export default function NotesPage() {
  return (
    <div className="pt-32 pb-24 md:pb-32 min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-6xl px-6 md:px-8 text-center">
        <ScrollReveal>
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-bg-subtle border border-border flex items-center justify-center text-text-tertiary">
              <PenLine size={32} />
            </div>
          </div>
          <h1
            className="font-semibold tracking-tight mb-6"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", letterSpacing: "-0.03em" }}
          >
            The user is thinking...
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-lg mx-auto">
            But he procrastinates too much.
            <br />
            (Blogs and notes will be published here eventually.)
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
