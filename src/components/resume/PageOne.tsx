import portrait from "@/assets/portrait.jpg";
import { MetaLabel, Pill, SectionTitle, Sheet } from "./primitives";
import { demoRequestHref, type PrimaryProject, type ResumeContent } from "@/content/resume";

function PrimaryProjectCard({ project, c }: { project: PrimaryProject; c: ResumeContent }) {
  return (
    <div className="rounded-[12px] border border-line bg-paper px-[3.4mm] py-[2.4mm] shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <div className="flex items-start gap-[3mm] border-b border-line/70 pb-[1.8mm]">
        <span className="mt-[0.4mm] text-[9pt] font-semibold tabular-nums text-accent-blue">
          {project.index}
        </span>
        <h3 className="text-[11.4pt] font-semibold leading-[1.15] tracking-[-0.015em]">
          {project.name}
        </h3>
        <a
          href={demoRequestHref}
          className="ml-auto shrink-0 rounded-[10px] bg-accent-blue px-[2.6mm] py-[1.4mm] text-[7pt] font-semibold uppercase tracking-[0.1em] text-paper no-underline"
        >
          {c.ui.demoOnRequest}
        </a>
      </div>
      <div className="mt-[1.8mm] grid grid-cols-12 gap-x-[4mm] gap-y-[1.4mm]">
        <div className="col-span-4">
          <MetaLabel>{c.ui.problem}</MetaLabel>
          <p className="text-[7.7pt] leading-[1.38] text-ink/70">{project.problem}</p>
        </div>
        <div className="col-span-8">
          <MetaLabel>{c.ui.solution}</MetaLabel>
          <p className="text-[7.9pt] leading-[1.38] text-ink/85">{project.solution}</p>
        </div>
      </div>
      {project.principle ? (
        <p className="mt-[1.6mm] border-l-2 border-accent-blue pl-[2.6mm] text-[7.5pt] leading-[1.35] text-ink/70">
          <span className="font-semibold text-ink/80">{c.ui.principle} · </span>
          {project.principle}
        </p>
      ) : null}
      <div className="mt-[1.8mm] flex flex-wrap gap-[1.4mm] border-t border-line/70 pt-[1.6mm]">
        {project.tags.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
    </div>
  );
}

export function PageOne({ content: c }: { content: ResumeContent }) {
  return (
    <Sheet>
      <header className="grid grid-cols-12 gap-[6mm]">
        <div className="col-span-9">
          <h1 className="text-[21pt] font-semibold leading-[1.02] tracking-[-0.03em]">{c.name}</h1>
          <p className="mt-[1.8mm] text-[10.6pt] font-medium leading-[1.3] text-ink/70">
            {c.title[0]}
            <span className="mx-[1.8mm] text-line">|</span>
            {c.title[1]}
          </p>
          <p className="mt-[2.4mm] max-w-[118mm] border-l-2 border-accent-blue pl-[3mm] text-[8.6pt] leading-[1.45] text-ink/70">
            {c.lead}
          </p>
        </div>
        <div className="col-span-3 flex justify-end">
          <img
            src={portrait}
            alt={`${c.name} — AI Product Builder`}
            width={896}
            height={1152}
            className="h-[26mm] w-auto rounded-[12px] object-contain"
          />
        </div>
      </header>
      <div className="mt-[2.6mm] flex flex-wrap items-center gap-x-[4mm] gap-y-[1.5mm] border-y border-line py-[1.6mm] text-[8pt] text-ink/70">
        {c.contacts.map((item) =>
          item.href ? (
            <a
              key={item.label}
              href={item.href}
              className="font-medium text-ink/80 underline decoration-line decoration-1 underline-offset-[3px] transition-colors hover:text-accent-blue"
            >
              {item.label}
            </a>
          ) : (
            <span key={item.label} className="font-medium">
              {item.label}
            </span>
          ),
        )}
      </div>
      <section className="mt-[2.8mm]">
        <SectionTitle label={c.ui.callout} />
        <ul className="grid grid-cols-2 gap-x-[5mm] gap-y-[1.2mm]">
          {c.callout.map((item) => (
            <li key={item} className="flex gap-[1.8mm] text-[8pt] leading-[1.35] text-ink/75">
              <span className="mt-[1.3mm] h-[1.2mm] w-[1.2mm] shrink-0 rounded-full bg-accent-blue" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-[2.8mm]">
        <SectionTitle label={c.ui.about} />
        <div className="grid grid-cols-12 gap-[5mm]">
          {c.about.map((p) => (
            <p key={p} className="col-span-6 text-[8pt] leading-[1.45] text-ink/80">
              {p}
            </p>
          ))}
        </div>
      </section>
      <section className="mt-[2.8mm] flex-1">
        <SectionTitle label={c.ui.featured} hint={c.ui.featuredHint} />
        <div className="space-y-[2.2mm]">
          {c.primaryProjects.map((p) => (
            <PrimaryProjectCard key={p.name} project={p} c={c} />
          ))}
        </div>
      </section>
      <footer className="mt-[2.5mm] flex items-center justify-between text-[6.8pt] uppercase tracking-[0.16em] text-ink/35">
        <span>{c.ui.tagline}</span>
        <span>{c.ui.page(1)}</span>
      </footer>
    </Sheet>
  );
}
