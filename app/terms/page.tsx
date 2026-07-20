import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHero } from "@/components/landing/page-hero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of The Evasion Chat.",
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <PageHero
        eyebrow="Legal"
        title={
          <>
            Terms of
            <br />
            <span className="text-muted-foreground">Service.</span>
          </>
        }
        subheading="Last updated: July 19, 2026"
      />

      <section className="relative py-16 lg:py-24">
        <div className="max-w-[760px] mx-auto px-6 lg:px-12">
          <div className="rounded-xl border border-foreground/10 bg-foreground/[0.02] p-6 mb-16 text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">This is a starting template, not legal advice.</strong>{" "}
            Have this reviewed by a lawyer before publishing — especially the liability,
            termination, and payment sections, which need to match your actual business terms.
          </div>

          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">1. Using the service</h2>
              <p>
                By creating an account, you agree to these terms. You must be authorized to act
                on behalf of your organization, and the content you train your chatbot on must be
                content you have the rights to use.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">2. Your account</h2>
              <p>
                You&apos;re responsible for maintaining the security of your account credentials
                and for all activity under your account. Notify us immediately at{" "}
                <a href="mailto:support@evasionchat.pinktree.co" className="text-foreground underline underline-offset-4">
                  support@evasionchat.pinktree.co
                </a>{" "}
                if you suspect unauthorized access.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">3. Acceptable use</h2>
              <p className="mb-3">You agree not to use the service to:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Train a chatbot on content you don&apos;t have rights to use</li>
                <li>Deploy a chatbot that impersonates a real person without consent</li>
                <li>Attempt to reverse-engineer, resell, or white-label the platform without a separate agreement</li>
                <li>Use the service to send spam or unsolicited bulk messages</li>
                <li>Violate any applicable law or third party&apos;s rights</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">4. Billing</h2>
              <p>
                Paid plans are billed monthly or annually as selected at signup. [Specify your
                actual refund policy, proration rules, and what happens on failed payment.]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">5. Your content, your data</h2>
              <p>
                You retain ownership of the content you upload and the conversation data your
                chatbot generates. We only use it to provide the service to you, as described in
                our{" "}
                <a href="/privacy" className="text-foreground underline underline-offset-4">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">6. Service availability</h2>
              <p>
                We aim for high availability but don&apos;t guarantee the service will be
                uninterrupted or error-free. [Add your actual SLA and uptime commitment here if
                you offer one, especially for Enterprise plans.]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">7. Termination</h2>
              <p>
                You can cancel your account at any time from your dashboard. We may suspend or
                terminate accounts that violate these terms, with notice where practical.
                [Specify your actual notice period and data export window on termination.]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">8. Limitation of liability</h2>
              <p>
                [This section needs a lawyer. It typically caps liability at fees paid in the
                preceding 12 months and excludes indirect/consequential damages — but the exact
                language should match your risk tolerance and insurance coverage.]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">9. Changes to these terms</h2>
              <p>
                We&apos;ll update the &ldquo;Last updated&rdquo; date above and notify active
                customers by email of material changes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">10. Contact</h2>
              <p>
                Questions about these terms? Reach us at{" "}
                <a href="mailto:support@evasionchat.pinktree.co" className="text-foreground underline underline-offset-4">
                  support@evasionchat.pinktree.co
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
