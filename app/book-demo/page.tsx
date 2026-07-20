import type { Metadata } from "next";
import { BookDemoClient, bookDemoFaqs } from "./book-demo-client";
import { faqPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Book a Demo",
  description: "Tell us about your business and we'll show you a chatbot trained on your own website — no pressure, no sales script.",
};

export default function BookDemoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(bookDemoFaqs)) }}
      />
      <BookDemoClient />
    </>
  );
}
