import type { LucideIcon } from "lucide-react";
import { Stamp, Microscope } from "lucide-react";

export interface SolutionData {
  slug: string;
  industry: string;
  icon: LucideIcon;
  headline: string;
  subheading: string;
  stats: { value: string; label: string }[];
  painPoints: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  quote: {
    text: string;
    role: string;
    company: string;
  };
}

// Scoped to our two initial target industries. The data shape below is
// intentionally generic (painPoints/faqs/stats/quote) so more industries can
// be appended here later without touching the page templates that render them.
export const solutions: SolutionData[] = [
  {
    slug: "visa-consultants",
    industry: "Visa Consultants",
    icon: Stamp,
    headline: "Answer visa questions instantly, without giving legal advice you can't stand behind.",
    subheading:
      "Train The Evasion Chat on your service list, eligibility criteria, and process timelines — so prospects get accurate, consistent answers 24/7, and your consultants only step in for the cases that actually need judgment.",
    stats: [
      { value: "65%", label: "of routine eligibility questions answered without a consultant" },
      { value: "24/7", label: "coverage across time zones for international applicants" },
      { value: "48 hours", label: "to train on your visa categories and process docs" },
    ],
    painPoints: [
      {
        title: "The same eligibility questions, on repeat, in every time zone",
        description:
          "Applicants message at all hours asking whether they qualify for a given visa category. The Evasion Chat answers from your own eligibility criteria and process docs, consistently, without your team on call overnight.",
      },
      {
        title: "Consultants spend hours on questions before the qualifying call",
        description:
          "Multi-tenant setup lets each consultant or branch train the assistant on their own service list and pricing, so pre-qualification happens in chat — and the call starts with a warm, informed lead instead of a first-touch Q&A.",
      },
      {
        title: "Sensitive applicant data needs to stay contained",
        description:
          "Conversation data is isolated per tenant and encrypted, with an audit trail — built for a setting where applicants share passport numbers, employment history, and other sensitive details.",
      },
    ],
    faqs: [
      {
        question: "Can it give legal or immigration advice?",
        answer:
          "No — it answers from the eligibility criteria, service list, and process information you train it on, and is configured to clearly hand off anything case-specific to a licensed consultant. It's built to inform, not to advise.",
      },
      {
        question: "Can different branches or consultants have their own assistant?",
        answer:
          "Yes — multi-tenant support means each branch or consultant can have their own trained assistant, own knowledge base, and own analytics, all managed from a single admin panel.",
      },
      {
        question: "How is applicant data handled?",
        answer:
          "Conversations are encrypted and isolated per tenant. See our Security page for the full breakdown of data handling and compliance posture.",
      },
      {
        question: "Can we review conversations before they reach an applicant?",
        answer:
          "You can configure a review step for anything the assistant flags as uncertain, and full conversation logs are always available in the dashboard for after-the-fact review.",
      },
    ],
    quote: {
      text: "Prospects get consistent, accurate answers on eligibility before they ever book a call — our consultants only step in once it's actually worth their time.",
      role: "Managing Consultant",
      company: "Meridian Visa Partners",
    },
  },
  {
    slug: "research-companies",
    industry: "Research Companies",
    icon: Microscope,
    headline: "Turn scattered research documentation into instant, cited internal answers.",
    subheading:
      "Point The Evasion Chat at your papers, protocols, internal wikis, and reports — so researchers and staff get answers pulled directly from your own documentation, instead of digging through folders or interrupting a colleague.",
    stats: [
      { value: "6 hrs/week", label: "less time spent hunting for existing findings or protocols" },
      { value: "500+", label: "app and data-source integrations for internal knowledge" },
      { value: "48 hours", label: "to index existing documents and knowledge bases" },
    ],
    painPoints: [
      {
        title: "Institutional knowledge locked in PDFs, wikis, and old emails",
        description:
          "Train the assistant directly on PDFs, Word docs, spreadsheets, and your internal knowledge base — no reformatting required — so it can answer from your organization's actual research output.",
      },
      {
        title: "New researchers re-asking questions that are already answered somewhere",
        description:
          "An internal knowledge assistant gives new team members a single place to ask about existing protocols, prior findings, or internal processes — answered from source material, with the source referenced.",
      },
      {
        title: "External inquiries about published research or services",
        description:
          "A public-facing assistant can field common questions about your published work, methodology, or collaboration process, freeing research staff from repeating the same explanations to external contacts.",
      },
    ],
    faqs: [
      {
        question: "Can it cite the source document it pulled an answer from?",
        answer:
          "Yes — answers reference the underlying document or knowledge base entry they were drawn from, so researchers can verify the source rather than taking the answer at face value.",
      },
      {
        question: "Can it stay internal-only, not public facing?",
        answer:
          "Yes — the internal knowledge assistant configuration is meant for staff-only use behind your existing access controls, separate from any public-facing chatbot you might also run.",
      },
      {
        question: "Does it work with our existing document management system?",
        answer:
          "It connects to common document, storage, and knowledge-base tools out of the box; for anything more specialized, our workflow automation layer can typically bridge the gap — talk to us about your specific stack.",
      },
      {
        question: "How often does it re-index new or updated documents?",
        answer:
          "New and edited documents are picked up automatically — there's no manual re-training step required when your source material changes.",
      },
    ],
    quote: {
      text: "Our new researchers stopped pinging senior staff for things that were already written down somewhere — now they just ask the assistant and get the source document back.",
      role: "Research Operations Lead",
      company: "Brightwell Research Institute",
    },
  },
];

export function getSolutionBySlug(slug: string): SolutionData | undefined {
  return solutions.find((s) => s.slug === slug);
}
