import type { LucideIcon } from "lucide-react";
import { Workflow, UserCheck, Headphones, BrainCircuit, Wand2 } from "lucide-react";

export interface AiAutomation {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
}

export const aiAutomations: AiAutomation[] = [
  {
    slug: "workflow-automation",
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Let a conversation trigger the next step automatically — no manual re-entry, no dropped handoffs between tools.",
    details: [
      "Trigger actions in 500+ connected apps directly from a chat",
      "Route data between your CRM, helpdesk, and internal tools",
      "Build multi-step automations without writing code",
    ],
  },
  {
    slug: "lead-qualification",
    icon: UserCheck,
    title: "Lead Qualification",
    description:
      "Ask the right follow-up questions automatically, and pass along only the visitors worth your team's time.",
    details: [
      "Custom qualification questions per campaign or landing page",
      "Automatic scoring based on your own criteria",
      "Qualified leads pushed straight to your CRM with full context",
    ],
  },
  {
    slug: "customer-support",
    icon: Headphones,
    title: "Customer Support",
    description:
      "Handle the repetitive questions instantly, day or night, and hand off to a human the moment a conversation needs one.",
    details: [
      "Trained on your existing help docs, policies, and FAQs",
      "Smooth handoff to a human agent with full conversation context",
      "Deflects routine tickets so your team handles the exceptions",
    ],
  },
  {
    slug: "internal-knowledge-assistant",
    icon: BrainCircuit,
    title: "Internal Knowledge Assistant",
    description:
      "Give your team one place to ask about internal docs, wikis, and process knowledge — answered from source, with the source referenced.",
    details: [
      "Indexes PDFs, Word docs, spreadsheets, and your knowledge base",
      "Answers reference the source document for verification",
      "Staff-only access, separate from any public-facing assistant",
    ],
  },
  {
    slug: "custom-automations",
    icon: Wand2,
    title: "Custom Automations",
    description:
      "Have a workflow that doesn't fit a template? Our team can build a custom automation on top of the same platform.",
    details: [
      "Tailored to your specific tools and process",
      "Built on the same reliable automation layer as everything else",
      "Talk to us about your specific setup",
    ],
  },
];
