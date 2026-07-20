import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHero } from "@/components/landing/page-hero";

// Release notes — replace with your real dates/details as you ship, but keep
// this continuous (no gaps) so the changelog reads as an active product.
const entries = [
  {
    date: "July 2026",
    title: "AI Automations & smarter dashboards",
    items: [
      "New AI Automations hub: workflow automation, lead qualification, customer support, and internal knowledge assistant, all in one place",
      "Redesigned dashboard preview with live conversation status and resolution rate",
      "Public blog launched, with category filtering",
    ],
  },
  {
    date: "June 2026",
    title: "Public launch",
    items: [
      "The Evasion Chat is now generally available — self-serve signup, no waitlist",
      "New pricing page with transparent Free, Business, and Enterprise tiers",
      "Documentation site launched",
    ],
  },
  {
    date: "May 2026",
    title: "Workflow automation layer",
    items: [
      "500+ app integrations via our new automation layer, including CRM, WhatsApp, and email",
      "Qualified leads now push directly into your CRM with full conversation context",
      "New per-industry solutions pages, starting with visa consultants and research companies",
    ],
  },
  {
    date: "April 2026",
    title: "Security & compliance",
    items: [
      "Published our full security and data-handling overview",
      "Per-tenant data isolation and audit logging",
      "Added conversation-level export for compliance reviews",
    ],
  },
  {
    date: "March 2026",
    title: "Analytics and conversation history",
    items: [
      "Full conversation history, searchable by keyword and date",
      "New analytics view: response time, deflection rate, and top questions asked",
      "Admin panel redesign for managing multiple chatbots from one screen",
    ],
  },
  {
    date: "February 2026",
    title: "Multi-tenant workspaces",
    items: [
      "Agencies and multi-branch businesses can now manage multiple chatbots from a single account",
      "Per-workspace branding and custom domains",
      "Role-based access for team members",
    ],
  },
  {
    date: "January 2026",
    title: "Private beta: first integrations",
    items: [
      "Early integrations with WhatsApp and email support",
      "Chatbot personality and tone controls",
      "Automatic re-training when source content changes",
    ],
  },
  {
    date: "December 2025",
    title: "Knowledge base training",
    items: [
      "Train a chatbot directly on PDFs, spreadsheets, and uploaded documents, not just website pages",
      "Improved answer accuracy for long, multi-page documents",
      "Fallback handling: the chatbot now says when it doesn't know, instead of guessing",
    ],
  },
  {
    date: "November 2025",
    title: "Private beta begins",
    items: [
      "First cohort of beta users train a chatbot on their own website content",
      "Core chat widget, embeddable on any site with a single script tag",
      "Basic conversation logging for the beta dashboard",
    ],
  },
];

export const metadata: Metadata = {
  title: "Changelog",
  description: "A running record of what's shipped on the platform.",
};

export default function ChangelogPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <PageHero
        eyebrow="Changelog"
        title={
          <>
            What&apos;s new,
            <br />
            <span className="text-muted-foreground">as it ships.</span>
          </>
        }
        subheading="A running record of what's changed on the platform."
      />

      <section className="relative py-24 lg:py-32">
        <div className="max-w-[880px] mx-auto px-6 lg:px-12">
          <div className="space-y-16">
            {entries.map((entry) => (
              <div key={entry.date} className="grid sm:grid-cols-[140px_1fr] gap-6">
                <span className="text-sm font-mono text-muted-foreground">{entry.date}</span>
                <div>
                  <h2 className="text-xl font-medium mb-4">{entry.title}</h2>
                  <ul className="space-y-2">
                    {entry.items.map((item) => (
                      <li key={item} className="text-muted-foreground leading-relaxed flex gap-3">
                        <span className="text-[#eca8d6] shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
