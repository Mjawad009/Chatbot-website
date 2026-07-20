import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHero } from "@/components/landing/page-hero";
import { CtaSection } from "@/components/landing/cta-section";
import { aiAutomations } from "@/lib/ai-automations-data";
import { Check } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";

// Each automation is shown as its own anchored section on this single page
// for v1. Slugs are already reserved (aiAutomations[].slug) so these can be
// split into true /ai-automations/[slug] sub-routes later without touching
// any links elsewhere in the site — every internal link already points at
// the #slug anchor on this page.
export const metadata: Metadata = {
  title: "AI Automations",
  description: "Workflow automation, lead qualification, customer support, and internal knowledge — all built on The Evasion Chat.",
};

export default function AiAutomationsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <PageHero
        eyebrow="AI Automations"
        title={
          <>
            Beyond answering.
            <br />
            <span className="text-muted-foreground">It gets things done.</span>
          </>
        }
        subheading="Every conversation can trigger a real workflow — qualifying a lead, routing a ticket, or updating a system of record — powered by our 500+ app automation layer."
      />

      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-24 lg:space-y-32">
          {aiAutomations.map((automation, i) => (
            <div
              key={automation.slug}
              id={automation.slug}
              className={`grid lg:grid-cols-12 gap-12 items-start scroll-mt-32 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal className="lg:col-span-7">
                <automation.icon className="w-8 h-8 mb-6 text-[#eca8d6]" />
                <h2 className="text-3xl lg:text-4xl font-display tracking-tight mb-4">{automation.title}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8 max-w-xl">
                  {automation.description}
                </p>
                <ul className="space-y-3">
                  {automation.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-[#eca8d6] mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={150} className="lg:col-span-5">
                <div className="aspect-square rounded-2xl border border-foreground/10 bg-foreground/[0.02] flex items-center justify-center">
                  <automation.icon className="w-16 h-16 text-foreground/10" />
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
      <FooterSection />
    </main>
  );
}
