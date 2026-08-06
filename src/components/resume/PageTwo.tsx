import QRCode from "react-qr-code";
import { Card, Pill, SectionTitle, Sheet } from "./primitives";
import type { ResumeContent } from "@/content/resume";

export function PageTwo({ content: c }: { content: ResumeContent }) {
  return (
    <Sheet>
      <section>
        <SectionTitle label={c.ui.coreExpertise} />
        <div className="grid grid-cols-4 gap-[3mm]">
          {c.expertise.map((group) => (
            <Card key={group.group}>
              <div className="text-[8pt] font-semibold leading-none tracking-[-0.01em]">
                {group.group}
              </div>
              <ul className="mt-[2mm] space-y-[1mm]">
                {group.items.map((item) => (
                  <li key={item} className="text-[7.8pt] leading-[1.35] text-ink/65">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
      <section className="mt-[4mm]">
        <SectionTitle label={c.ui.experience} />
        <div className="border-l border-line pl-[5mm]">
          {c.experience.map((item) => (
            <div key={item.company} className="relative pb-[3.2mm] last:pb-0">
              <span className="absolute -left-[5mm] top-[1.6mm] h-[1.6mm] w-[1.6mm] -translate-x-[0.8mm] rounded-full bg-accent-blue" />
              <div className="flex items-baseline justify-between gap-[4mm]">
                <h3 className="text-[10pt] font-semibold leading-none tracking-[-0.01em]">
                  {item.company}
                </h3>
                <span className="text-[8.2pt] font-medium text-ink/60">{item.role}</span>
              </div>
              <p className="mt-[1.4mm] text-[8.2pt] leading-[1.45] text-ink/60">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-[4mm]">
        <SectionTitle label={c.ui.education} />
        <div className="grid grid-cols-2 gap-x-[6mm] gap-y-[2.2mm]">
          {c.education.map((e) => (
            <div key={e.title} className="border-t border-line/70 pt-[2mm]">
              <div className="text-[8.6pt] font-semibold leading-[1.3]">{e.title}</div>
              <div className="mt-[0.8mm] text-[7.8pt] text-ink/55">{e.org}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-[4mm]">
        <SectionTitle label={c.ui.languages} />
        <div className="grid grid-cols-4 gap-[3mm]">
          {c.languages.map((l) => (
            <div
              key={l.name}
              className="rounded-[12px] border border-line/80 bg-surface/60 px-[3mm] py-[2mm]"
            >
              <div className="text-[9pt] font-semibold leading-none">{l.name}</div>
              <div className="mt-[1.4mm] text-[7.8pt] text-ink/55">{l.level}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-[4mm]">
        <SectionTitle label={c.ui.techStack} />
        <div className="flex flex-wrap gap-[1.8mm]">
          {c.techStack.map((s) => (
            <Pill key={s}>{s}</Pill>
          ))}
        </div>
      </section>
      <div className="flex-1" />
      <footer className="mt-[4mm] border-t border-line pt-[3mm]">
        <div className="flex items-end justify-between gap-[6mm]">
          <p className="max-w-[110mm] text-[10.5pt] font-medium leading-[1.35] tracking-[-0.01em]">
            {c.closing}
          </p>
          <div className="flex items-center gap-[3mm]">
            <div className="text-right">
              <div className="text-[6.8pt] font-semibold uppercase tracking-[0.14em] text-ink/35">
                {c.ui.portfolio}
              </div>
              <a
                href="https://www.agence360digital.fr"
                className="text-[8pt] font-medium text-accent-blue"
              >
                agence360digital.fr
              </a>
            </div>
            <div className="rounded-[12px] border border-line p-[2mm]">
              <QRCode
                value="https://www.agence360digital.fr"
                size={64}
                bgColor="#FFFFFF"
                fgColor="#0F172A"
                style={{ height: "16mm", width: "16mm" }}
              />
            </div>
          </div>
        </div>
        <div className="mt-[3mm] flex items-center justify-between text-[6.8pt] uppercase tracking-[0.16em] text-ink/35">
          <span>{c.ui.tagline}</span>
          <span>{c.ui.page(2)}</span>
        </div>
      </footer>
    </Sheet>
  );
}