"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import HeroVisual from "@/components/HeroVisual";
import { focusAreas } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div className="order-2 lg:order-1">
              <ScrollReveal>
                <h1
                  className="font-semibold tracking-tight leading-[1.1]"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  <span className="text-text-primary">Cybersecurity,</span>
                  <br />
                  <span className="text-text-tertiary">without the noise.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-lg">
                  Offensive security professional and university-level cybersecurity lecturer.
                  Focused on application security, vulnerability research, and security education.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="mt-8 flex items-center gap-6">
                  <Link
                    href="/cv"
                    className="text-sm text-accent hover:text-accent-hover transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    View CV
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </Link>
                  <a
                    href="#about"
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    About Me
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Visual */}
            <div className="order-1 lg:order-2 h-64 md:h-80 lg:h-[480px]">
              <ScrollReveal delay={0.2} direction="none">
                <div className="w-full h-64 md:h-80 lg:h-[480px]">
                  <HeroVisual />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ME ===== */}
      <section className="py-24 md:py-32 bg-bg-subtle" id="about">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* Left Column - Heading */}
            <div className="md:col-span-4">
              <ScrollReveal>
                <div className="sticky top-32">
                  <p className="text-xs font-mono text-text-tertiary uppercase tracking-widest mb-4">
                    About Me
                  </p>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    Background
                  </h2>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column - Content */}
            <div className="md:col-span-8">
              <ScrollReveal delay={0.1}>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-text-secondary leading-relaxed mb-6">
                    I am an offensive security professional and university-level cybersecurity lecturer with over 3 years of combined industry and academic experience. My work spans manual web and mobile penetration testing, secure software engineering education, and vulnerability research.
                  </p>
                  <p className="text-lg text-text-secondary leading-relaxed mb-6">
                    I design and develop intentionally vulnerable full-stack applications and hands-on laboratory platforms for university teaching. Rather than maintaining a complex portfolio of case studies, my work is open and available for students and the community.
                  </p>
                  
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://github.com/aryapokharel2000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-sm font-medium hover:text-accent hover:border-accent/40 transition-all duration-200 bg-bg"
                    >
                      View GitHub Profile
                    </a>
                    <a
                      href="https://hub.docker.com/search?q=arya057"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-sm font-medium hover:text-accent hover:border-accent/40 transition-all duration-200 bg-bg"
                    >
                      View Docker Hub
                    </a>
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-border">
                    <h3 className="text-xl font-medium mb-4 text-text-primary">Direction</h3>
                    <p className="text-text-secondary leading-relaxed">
                      I am actively pivoting from on-premise red teaming toward GRC (Governance, Risk, and Compliance) and Cloud Security. I am deeply interested in vulnerability research, securing cloud infrastructure, and finding innovative ways to integrate practical security education into university curricula.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CURRENTLY EXPLORING ===== */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="text-xs font-mono text-text-tertiary uppercase tracking-widest mb-2">
                Currently
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
                Exploring
              </h2>
              <div className="flex flex-wrap gap-3">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="text-sm px-4 py-2 rounded-full border border-border text-text-secondary hover:border-accent/40 hover:text-accent transition-all duration-200 cursor-default"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>


    </>
  );
}
