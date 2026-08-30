/**
 * Client-side A4 PDF export for desktop and mobile browsers.
 *
 * The on-screen A4 sheets are rasterised at ~300 DPI using lossless PNG,
 * then placed full-bleed on A4 pages. Because rasterising HTML removes native
 * anchor semantics, link annotations are recreated from the DOM so Portfolio,
 * LinkedIn and email remain clickable in the exported PDF.
 */
export async function exportSheetsToPdf(sheets: HTMLElement[], fileName: string): Promise<void> {
  if (sheets.length === 0) return;

  const [{ default: jsPDF }, { default: html2canvas }] = await Promise.all([
    import("jspdf"),
    import("html2canvas-pro"),
  ]);

  const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  // CSS is rendered at 96 DPI in browsers. 300 / 96 = 3.125.
  // This keeps an A4 page below common mobile canvas size limits while
  // producing a much sharper document than the previous scale-2 JPEG export.
  const renderScale = 300 / 96;

  for (const [index, sheet] of sheets.entries()) {
    const sheetRect = sheet.getBoundingClientRect();
    const links = Array.from(sheet.querySelectorAll<HTMLAnchorElement>("a[href]"))
      .map((anchor) => {
        const href = anchor.href;
        const rect = anchor.getBoundingClientRect();
        return {
          href,
          x: ((rect.left - sheetRect.left) / sheetRect.width) * pageWidth,
          y: ((rect.top - sheetRect.top) / sheetRect.height) * pageHeight,
          width: (rect.width / sheetRect.width) * pageWidth,
          height: (rect.height / sheetRect.height) * pageHeight,
        };
      })
      .filter(
        (link) =>
          link.width > 0 &&
          link.height > 0 &&
          /^(https?:|mailto:)/i.test(link.href),
      );

    const canvas = await html2canvas(sheet, {
      scale: renderScale,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
      imageTimeout: 15000,
    });

    if (index > 0) pdf.addPage();

    pdf.addImage(
      canvas.toDataURL("image/png"),
      "PNG",
      0,
      0,
      pageWidth,
      pageHeight,
      undefined,
      "FAST",
    );

    for (const link of links) {
      pdf.link(link.x, link.y, link.width, link.height, { url: link.href });
    }

    // Release the large canvas backing store before rendering the next page,
    // which helps memory-constrained mobile browsers.
    canvas.width = 1;
    canvas.height = 1;
  }

  pdf.save(fileName);
}
