import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your The Evasion Chat dashboard.",
};

// This is a marketing-site placeholder for the sign-in form. The actual
// authenticated app (dashboard, admin panel, multi-tenant workspace) is a
// separate application — wire this form's submit handler to that app's
// auth endpoint, or redirect straight to the app's own hosted sign-in page.
export default function SignInPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <section className="relative py-40 lg:py-48">
        <div className="max-w-md mx-auto px-6">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-display mb-3">Sign in</h1>
            <p className="text-muted-foreground text-sm">
              Welcome back. Sign in to your dashboard.
            </p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Work email</Label>
              <Input id="email" name="email" type="email" required placeholder="jane@acme.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required placeholder="••••••••" />
            </div>
            <Button
              type="submit"
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background w-full h-12 rounded-full group"
            >
              Sign in
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Don&apos;t have an account yet?{" "}
            <Link href="/book-demo" className="text-foreground underline underline-offset-4">
              Book a demo
            </Link>
          </p>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
