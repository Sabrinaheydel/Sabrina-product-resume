/**
 * Client-side A4 PDF export.
 *
 * Each `.sheet` element (210mm x 297mm) is rasterised to a canvas and placed
 * full-bleed on its own A4 page, which keeps the on-screen editorial layout
 * pixel-identical in the PDF and works on mobile browsers (unlike window.print).
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

  for (const [index, sheet] of sheets.entries()) {
    const canvas = await html2canvas(sheet, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
    });

    if (index > 0) pdf.addPage();
    pdf.addImage(
      canvas.toDataURL("image/jpeg", 0.94),
      "JPEG",
      0,
      0,
      pageWidth,
      pageHeight,
      undefined,
      "FAST",
    );
  }

  pdf.save(fileName);
}
