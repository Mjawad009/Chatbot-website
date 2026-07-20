"use client";

import { BarChart3, MessageSquare, Users, Settings, Search, Bell } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";

// Static mock of the admin dashboard — gives visitors a sense of what's
// behind the sign-in, without needing a live demo environment embedded here.
const sidebarItems = [
  { icon: MessageSquare, label: "Conversations", active: true },
  { icon: Users, label: "Contacts" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Settings" },
];

const conversationRows = [
  { name: "Visa eligibility — student route", status: "Resolved", time: "2m ago" },
  { name: "Document checklist for renewal", status: "Handed off", time: "14m ago" },
  { name: "Processing time estimate", status: "Resolved", time: "26m ago" },
  { name: "Internal: onboarding protocol lookup", status: "Resolved", time: "41m ago" },
];

export function DashboardPreviewSection() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal className="max-w-2xl mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground mb-6">
            Dashboard Preview
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.05]">
            Every conversation,
            <span className="text-muted-foreground"> in one place.</span>
          </h2>
        </Reveal>

        <Reveal delay={150} className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-[220px_1fr]">
            {/* Sidebar */}
            <div className="border-b lg:border-b-0 lg:border-r border-foreground/10 p-6 flex lg:flex-col gap-1 overflow-x-auto">
              {sidebarItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm shrink-0 ${
                    item.active
                      ? "bg-foreground text-background"
                      : "text-muted-foreground"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </div>
              ))}
            </div>

            {/* Main panel */}
            <div className="p-6 lg:p-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background rounded-full border border-foreground/10 px-4 py-2 flex-1 max-w-sm">
                  <Search className="w-3.5 h-3.5" />
                  Search conversations...
                </div>
                <Bell className="w-4 h-4 text-muted-foreground ml-4" />
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                <div className="rounded-xl border border-foreground/10 p-5">
                  <span className="text-2xl font-display block mb-1">1,284</span>
                  <span className="text-xs text-muted-foreground">Conversations today</span>
                </div>
                <div className="rounded-xl border border-foreground/10 p-5">
                  <span className="text-2xl font-display block mb-1">94%</span>
                  <span className="text-xs text-muted-foreground">Resolved without a human</span>
                </div>
                <div className="rounded-xl border border-foreground/10 p-5">
                  <span className="text-2xl font-display block mb-1">&lt;2s</span>
                  <span className="text-xs text-muted-foreground">Average response time</span>
                </div>
              </div>

              <div className="space-y-2">
                {conversationRows.map((row) => (
                  <div
                    key={row.name}
                    className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-foreground/[0.03] text-sm"
                  >
                    <span className="truncate pr-4">{row.name}</span>
                    <div className="flex items-center gap-4 shrink-0">
                      <span
                        className={`text-xs font-mono px-2 py-1 rounded-full ${
                          row.status === "Resolved"
                            ? "bg-[#eca8d6]/15 text-[#eca8d6]"
                            : "bg-foreground/10 text-muted-foreground"
                        }`}
                      >
                        {row.status}
                      </span>
                      <span className="text-xs text-muted-foreground w-16 text-right">{row.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
