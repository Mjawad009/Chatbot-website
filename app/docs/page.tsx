import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHero } from "@/components/landing/page-hero";
import { Reveal } from "@/components/landing/reveal";

// Documentation landing page. This is a marketing-site placeholder that
// scaffolds the IA — the actual docs content is substantial enough to warrant
// its own MDX-based docs system (e.g. Fumadocs / Nextra) rather than living
// as hardcoded JSX here. Treat this as the entry point / nav card layer only.
const docSections = [
  {
    title: "Getting Started",
    description: "Create your workspace, train your first assistant, and go live.",
    href: "#",
  },
  {
    title: "API Reference",
    description: "Endpoints, authentication, rate limits, and request/response shapes.",
    href: "#",
  },
  {
    title: "Integrations",
    description: "Connect your CRM, helpdesk, and 500+ apps through our automation layer.",
    href: "/integrations",
  },
  {
    title: "AI Automations",
    description: "Configure workflow automation, lead qualification, and support routing.",
    href: "/ai-automations",
  },
  {
    title: "Multi-Tenant & Admin",
    description: "Manage multiple workspaces, roles, and permissions from one panel.",
    href: "#",
  },
  {
    title: "Security & Compliance",
    description: "Data isolation, encryption, and audit logging.",
    href: "/security",
  },
];

export const metadata: Metadata = {
  title: "Documentation",
  description: "Guides and reference material for setting up and building on The Evasion Chat.",
};

export default function DocsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <PageHero
        eyebrow="Documentation"
        title={
          <>
            Everything you need
            <br />
            <span className="text-muted-foreground">to build with it.</span>
          </>
        }
        subheading="Setup guides, API reference, and configuration docs for The Evasion Chat."
      />

      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10">
            {docSections.map((section, i) => (
              <Reveal key={section.title} delay={i * 80}>
                <Link
                  href={section.href}
                  className="group block h-full bg-background p-8 lg:p-10 transition-colors hover:bg-foreground/[0.03]"
                >
                  <h2 className="text-lg font-medium mb-2">{section.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{section.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                    Read more
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
