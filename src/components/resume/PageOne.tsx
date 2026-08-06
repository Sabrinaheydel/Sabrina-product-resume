import portrait from "@/assets/portrait.jpg";
import { MetaLabel, Pill, SectionTitle, Sheet } from "./primitives";
import type { Project, ResumeContent } from "@/content/resume";

function ProjectCard({ project, c }: { project: Project; c: ResumeContent }) {
  return (
    <div className="rounded-[12px] border border-line/80 bg-paper px-[3.6mm] py-[2.2mm] shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
      <div className="flex items-baseline gap-[3mm] border-b border-line/70 pb-[1.8mm]">
        <span className="text-[7.5pt] font-semibold tabular-nums text-accent-blue">
          {project.index}
        </span>
        <h3 className="text-[11.5pt] font-semibold leading-none tracking-[-0.01em]">
          {project.name}
        </h3>
        <span className="ml-auto text-[7pt] font-medium uppercase tracking-[0.14em] text-ink/35">
          {c.ui.caseStudy}
        </span>
      </div>
      <div className="mt-[2mm] grid grid-cols-12 gap-x-[4mm] gap-y-[1.8mm]">
        <div className="col-span-5">
          <MetaLabel>{c.ui.challenge}</MetaLabel>
          <p className="text-[8pt] leading-[1.4] text-ink/75">{project.challenge}</p>
        </div>
        <div className="col-span-7">
          <MetaLabel>{c.ui.solution}</MetaLabel>
          <p className="text-[8pt] leading-[1.4] text-ink/85">
            {project.solution.join(" · ")}
          </p>
        </div>
        <div className="col-span-5">
          <MetaLabel>{c.ui.myRole}</MetaLabel>
          <p className="text-[8pt] leading-[1.4] text-ink/75">
            {project.role.join(" · ")}
          </p>
        </div>
        <div className="col-span-7">
          <MetaLabel>{c.ui.stack}</MetaLabel>
          <div className="flex flex-wrap gap-[1.5mm]">
            {project.stack.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-[2.2mm] flex items-start gap-[2.5mm] border-t border-line/70 pt-[1.8mm]">
        <span className="mt-[0.6mm] text-[6.8pt] font-semibold uppercase tracking-[0.14em] text-accent-blue">
          {c.ui.impact}
        </span>
        <p className="text-[8.4pt] font-medium leading-[1.4]">{project.impact}</p>
      </div>
    </div>
  );
}

export function PageOne({ content: c }: { content: ResumeContent }) {
  return (
    <Sheet>
      <header className="grid grid-cols-12 gap-[6mm]">
        <div className="col-span-8">
          <h1 className="text-[22pt] font-semibold leading-[1.02] tracking-[-0.03em]">
            {c.name}
          </h1>
          <p className="mt-[2mm] text-[11pt] font-medium leading-[1.3] text-ink/70">
            {c.title[0]}
            <span className="mx-[1.5mm] text-line">&amp;</span>
            {c.title[1]}
          </p>
          <p className="mt-[3mm] max-w-[105mm] border-l-2 border-accent-blue pl-[3mm] text-[9pt] leading-[1.5] text-ink/70">
            {c.lead}
          </p>
        </div>
        <div className="col-span-4 flex justify-end">
          <img
            src={portrait}
            alt={`${c.name} — AI Product Builder`}
            width={896}
            height={1152}
            className="h-[28mm] w-auto rounded-[12px] object-contain"
          />
        </div>
      </header>
      <div className="mt-[4mm] flex flex-wrap items-center gap-x-[4mm] gap-y-[1.5mm] border-y border-line py-[1.8mm] text-[8pt] text-ink/70">
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
      <section className="mt-[4mm]">
        <SectionTitle label={c.ui.about} />
        <div className="grid grid-cols-12 gap-[5mm]">
          {c.about.map((p) => (
            <p key={p} className="col-span-6 text-[8.6pt] leading-[1.55] text-ink/80">
              {p}
            </p>
          ))}
        </div>
      </section>
      <section className="mt-[4mm] flex-1">
        <SectionTitle label={c.ui.featured} hint={c.ui.featuredHint} />
        <div className="space-y-[2mm]">
          {c.projects.map((p) => (
            <ProjectCard key={p.name} project={p} c={c} />
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