import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { PageOne } from "./PageOne";
import { PageTwo } from "./PageTwo";
import { exportSheetsToPdf } from "@/lib/export-pdf";
import type { Locale, ResumeContent } from "@/content/resume";

export function ResumeDocument({ content }: { content: ResumeContent }) {
  const other: Locale = content.locale === "en" ? "fr" : "en";
  const pagesRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  async function handleExport() {
    if (isExporting) return;
    setIsExporting(true);
    try {
      const sheets = Array.from(pagesRef.current?.querySelectorAll<HTMLElement>(".sheet") ?? []);
      await exportSheetsToPdf(sheets, content.ui.fileName);
    } catch {
      window.print();
    } finally {
      setIsExporting(false);
    }
  }

  return (
    <main className="min-h-screen bg-surface py-[10mm] font-sans antialiased print:bg-white print:py-0">
      <div className="no-print mx-auto mb-[8mm] flex w-[210mm] max-w-full flex-wrap items-center justify-between gap-3 px-[16mm]">
        <p className="text-[13px] font-medium tracking-[-0.01em] text-ink/50">
          {content.ui.docLabel}
        </p>
        <div className="flex items-center gap-3">
          <Link
            to={other === "en" ? "/en" : "/fr"}
            className="rounded-[12px] border border-line bg-paper px-4 py-2 text-[13px] font-medium text-ink/70 transition-colors hover:text-accent-blue"
          >
            {content.ui.switchTo}
          </Link>
          <button
            type="button"
            onClick={handleExport}
            disabled={isExporting}
            aria-busy={isExporting}
            className="rounded-[12px] bg-ink px-4 py-2 text-[13px] font-medium text-paper shadow-[0_1px_2px_rgba(15,23,42,0.12)] transition-colors hover:bg-accent-blue disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isExporting ? content.ui.exporting : content.ui.exportPdf}
          </button>
        </div>
      </div>
      <div ref={pagesRef} className="flex flex-col items-center gap-[10mm] print:gap-0">
        <PageOne content={content} />
        <PageTwo content={content} />
      </div>
    </main>
  );
}
