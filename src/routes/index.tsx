import { createFileRoute } from "@tanstack/react-router";
import { PageOne } from "@/components/resume/PageOne";
import { PageTwo } from "@/components/resume/PageTwo";

const title = "Sabrina Heydel — AI Product Builder & Digital Systems Consultant";
const description =
  "Product discovery, UX, AI and automation: from business need to a working MVP. Editorial resume and case studies of Sabrina Heydel.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-surface py-[10mm] font-sans antialiased print:bg-white print:py-0">
      <div className="no-print mx-auto mb-[8mm] flex w-[210mm] max-w-full items-center justify-between px-[16mm]">
        <p className="text-[13px] font-medium tracking-[-0.01em] text-ink/50">
          Curriculum · A4 · 2 pages
        </p>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-[12px] bg-ink px-4 py-2 text-[13px] font-medium text-paper shadow-[0_1px_2px_rgba(15,23,42,0.12)] transition-colors hover:bg-accent-blue"
        >
          Download PDF
        </button>
      </div>
      <div className="flex flex-col items-center gap-[10mm] print:gap-0">
        <PageOne />
        <PageTwo />
      </div>
    </main>
  );
}
