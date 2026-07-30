"use client";

import { Download } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { experiences, certifications } from "@/lib/data";

export default function CVPage() {
  return (
    <div className="pt-32 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="max-w-3xl">
          {/* Header */}
          <ScrollReveal>
            <div className="flex items-start justify-between mb-12">
              <div>
                <h1
                  className="font-semibold tracking-tight mb-2"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Curriculum Vitae
                </h1>
                <p className="text-text-secondary">Arya Pokharel</p>
              </div>
              <button className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-border text-text-secondary hover:text-text-primary hover:border-accent/40 transition-all duration-200 shrink-0">
                <Download size={14} />
                Download PDF
              </button>
            </div>
          </ScrollReveal>



          {/* Experience */}
          <ScrollReveal delay={0.1}>
            <section className="mb-12">
              <h2 className="text-xs font-mono text-text-tertiary uppercase tracking-widest mb-6">
                Professional & Academic Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, i) => (
                  <div key={i}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h3 className="text-base font-medium text-text-primary">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-mono text-text-tertiary shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-accent mb-3">{exp.company}</p>
                    {exp.description && (
                      <p className="text-sm text-text-secondary mb-3">
                        {exp.description}
                      </p>
                    )}
                    <ul className="space-y-1">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="text-sm text-text-secondary flex items-start gap-2"
                        >
                          <span className="text-text-tertiary mt-1 shrink-0">
                            ·
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

        </div>
          <hr className="border-border mb-12" />

          {/* Certifications */}
          <ScrollReveal delay={0.15}>
            <section className="mb-12">
              <h2 className="text-xs font-mono text-text-tertiary uppercase tracking-widest mb-6">
                Certifications
              </h2>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                  >
                    <div className="flex items-center gap-2">
                      {cert.verifyUrl ? (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-text-primary font-medium hover:text-accent transition-colors duration-200"
                        >
                          {cert.name}
                        </a>
                      ) : (
                        <span className="text-sm text-text-primary font-medium">
                          {cert.name}
                        </span>
                      )}
                      <span className="text-xs text-text-tertiary">
                        - {cert.issuer}
                      </span>
                    </div>
                    {cert.year && (
                      <span className="text-xs font-mono text-text-tertiary">
                        {cert.year}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>
      </div>
    </div>
  );
}
