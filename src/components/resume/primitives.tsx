import type { ReactNode } from "react";

export function Sheet({ children }: { children: ReactNode }) {
  return (
    <div className="sheet mx-auto border border-line/60 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_16px_48px_-24px_rgba(15,23,42,0.18)]">
      {children}
    </div>
  );
}

export function SectionTitle({ label, hint }: { label: string; hint?: string }) {
  return (
    <div className="mb-[3mm] flex items-baseline justify-between border-b border-line pb-[1.6mm]">
      <h2 className="eyebrow">{label}</h2>
      {hint ? (
        <span className="text-[7.5pt] font-medium tracking-wide text-ink/40">{hint}</span>
      ) : null}
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-[12px] border border-line bg-surface px-[2.4mm] py-[1.1mm] text-[7.8pt] font-medium leading-none text-ink/80">
      {children}
    </span>
  );
}

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[12px] border border-line/80 bg-surface/60 px-[3mm] py-[2.6mm]">
      {children}
    </div>
  );
}

export function MetaLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-[1mm] text-[6.8pt] font-semibold uppercase tracking-[0.14em] text-ink/35">
      {children}
    </div>
  );
}