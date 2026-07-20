import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHero } from "@/components/landing/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How The Evasion Chat collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <PageHero
        eyebrow="Legal"
        title={
          <>
            Privacy
            <br />
            <span className="text-muted-foreground">Policy.</span>
          </>
        }
        subheading="Last updated: July 19, 2026"
      />

      <section className="relative py-16 lg:py-24">
        <div className="max-w-[760px] mx-auto px-6 lg:px-12">
          <div className="rounded-xl border border-foreground/10 bg-foreground/[0.02] p-6 mb-16 text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">This is a starting template, not legal advice.</strong>{" "}
            It covers the sections a SaaS chatbot product typically needs, but the specific
            commitments below (data retention periods, sub-processor names, contact details) are
            placeholders. Have this reviewed by a lawyer familiar with your jurisdiction and
            actual data practices before publishing.
          </div>

          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">1. What we collect</h2>
              <p className="mb-3">
                When you use The Evasion Chat, we collect account information (name, email,
                company), billing information (processed by our payment provider, not stored
                directly by us), and the content you upload to train your chatbot (website
                content, documents, FAQs).
              </p>
              <p>
                We also collect conversation data from your chatbot&apos;s interactions with your
                end users, which you control and can export or delete from your dashboard.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">2. How we use it</h2>
              <p>
                We use collected data to operate and improve the product, provide customer
                support, send service-related communications, and — only with your explicit
                opt-in — product updates and marketing emails. We do not sell your data or your
                end users&apos; conversation data to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">3. Data isolation & multi-tenancy</h2>
              <p>
                Each workspace&apos;s training content and conversation data is logically isolated
                from other workspaces. See our{" "}
                <a href="/security" className="text-foreground underline underline-offset-4">
                  Security page
                </a>{" "}
                for details on encryption, access controls, and audit logging.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">4. Third-party sub-processors</h2>
              <p>
                We use a small number of third-party services to operate the product — for
                example, cloud hosting, payment processing, and email delivery. [List your actual
                sub-processors here, e.g. AWS, Stripe, Postmark.]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">5. Data retention & deletion</h2>
              <p>
                We retain account and conversation data for as long as your account is active.
                You can export or delete your data at any time from the dashboard, or request
                full account deletion by contacting us. [Specify your actual retention period
                after account closure, e.g. 30 days.]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">6. Your rights</h2>
              <p>
                Depending on your location, you may have rights under regulations like GDPR or
                CCPA to access, correct, export, or delete your personal data. Contact us at{" "}
                <a href="mailto:privacy@evasionchat.pinktree.co" className="text-foreground underline underline-offset-4">
                  privacy@evasionchat.pinktree.co
                </a>{" "}
                to exercise these rights.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">7. Cookies</h2>
              <p>
                We use essential cookies to keep you signed in and remember your preferences, and
                analytics cookies to understand product usage. [Add a cookie table or link to a
                cookie preferences tool if you use one.]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">8. Changes to this policy</h2>
              <p>
                We&apos;ll update the &ldquo;Last updated&rdquo; date above whenever this policy
                changes, and notify active customers of material changes by email.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">9. Contact</h2>
              <p>
                Questions about this policy? Reach us at{" "}
                <a href="mailto:privacy@evasionchat.pinktree.co" className="text-foreground underline underline-offset-4">
                  privacy@evasionchat.pinktree.co
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
