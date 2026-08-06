import portrait from "@/assets/portrait.jpg";
import { MetaLabel, Pill, SectionTitle, Sheet } from "./primitives";

const contacts = [
  { label: "France", href: null },
  { label: "sabrina@agence360digital.fr", href: "mailto:sabrina@agence360digital.fr" },
  { label: "+33 6 00 00 00 00", href: "tel:+33600000000" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sabrinaheydel" },
  { label: "Portfolio", href: "https://www.agence360digital.fr" },
  { label: "Malt", href: "https://www.malt.fr" },
];

type Project = {
  index: string;
  name: string;
  challenge: string;
  solution: string[];
  role: string[];
  stack: string[];
  impact: string;
};

const projects: Project[] = [
  {
    index: "01",
    name: "TalentFlow AI",
    challenge: "Recruiters waste time switching between ATS, notes, emails and AI tools.",
    solution: [
      "AI recruitment platform",
      "Pipeline",
      "Dashboard",
      "Candidate profile",
      "AI Copilot",
      "Interview tracking",
    ],
    role: [
      "Product Discovery",
      "UX",
      "Architecture",
      "AI-assisted Development",
      "Testing",
      "Delivery",
    ],
    stack: ["Next.js", "GitHub", "TypeScript", "Figma", "Lovable", "OpenAI Ready"],
    impact: "One interface replacing several disconnected tools.",
  },
  {
    index: "02",
    name: "Real Estate Platform",
    challenge:
      "Real estate agencies lose time managing qualification, calculations and customer follow-up across multiple tools.",
    solution: [
      "Website",
      "Interactive map",
      "Qualification forms",
      "CRM",
      "Admin",
      "Intelligent calculators",
      "Automated workflows",
    ],
    role: [
      "Business Analysis",
      "UX",
      "System Design",
      "Automation",
      "Data structure",
      "Testing",
    ],
    stack: ["Lovable", "Supabase", "Automation", "APIs"],
    impact: "A single operating system for qualification, pricing and follow-up.",
  },
  {
    index: "03",
    name: "Melissa Breathwork",
    challenge: "Create an international digital ecosystem.",
    solution: [
      "3-language website",
      "Booking",
      "CRM",
      "Newsletter",
      "Lead Magnet",
      "Brevo",
      "Automation",
      "Training",
    ],
    role: ["UX", "Customer Journey", "Copywriting", "Automation", "Training"],
    stack: ["Lovable", "Brevo", "Cal.com"],
    impact: "An autonomous acquisition and booking system across three languages.",
  },
];

function ProjectCard({ project }: { project: Project }) {
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
          Case study
        </span>
      </div>
      <div className="mt-[2mm] grid grid-cols-12 gap-x-[4mm] gap-y-[1.8mm]">
        <div className="col-span-5">
          <MetaLabel>Business challenge</MetaLabel>
          <p className="text-[8pt] leading-[1.4] text-ink/75">{project.challenge}</p>
        </div>
        <div className="col-span-7">
          <MetaLabel>Solution designed</MetaLabel>
          <p className="text-[8pt] leading-[1.4] text-ink/85">
            {project.solution.join(" · ")}
          </p>
        </div>
        <div className="col-span-5">
          <MetaLabel>My role</MetaLabel>
          <p className="text-[8pt] leading-[1.4] text-ink/75">
            {project.role.join(" · ")}
          </p>
        </div>
        <div className="col-span-7">
          <MetaLabel>Stack</MetaLabel>
          <div className="flex flex-wrap gap-[1.5mm]">
            {project.stack.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-[2.2mm] flex items-start gap-[2.5mm] border-t border-line/70 pt-[1.8mm]">
        <span className="mt-[0.6mm] text-[6.8pt] font-semibold uppercase tracking-[0.14em] text-accent-blue">
          Impact
        </span>
        <p className="text-[8.4pt] font-medium leading-[1.4]">{project.impact}</p>
      </div>
    </div>
  );
}

export function PageOne() {
  return (
    <Sheet>
      <header className="grid grid-cols-12 gap-[6mm]">
        <div className="col-span-8">
          <h1 className="text-[22pt] font-semibold leading-[1.02] tracking-[-0.03em]">
            Sabrina Heydel
          </h1>
          <p className="mt-[2mm] text-[11pt] font-medium leading-[1.3] text-ink/70">
            AI Product Builder
            <span className="mx-[1.5mm] text-line">&amp;</span>
            Digital Systems Consultant
          </p>
          <p className="mt-[3mm] max-w-[105mm] border-l-2 border-accent-blue pl-[3mm] text-[9pt] leading-[1.5] text-ink/70">
            De la compréhension du besoin au MVP fonctionnel : produit, UX, IA et
            automatisation.
          </p>
        </div>
        <div className="col-span-4 flex justify-end">
          <img
            src={portrait}
            alt="Portrait de Sabrina Heydel, AI Product Builder"
            width={896}
            height={1152}
            className="h-[28mm] w-auto rounded-[12px] object-contain"
          />
        </div>
      </header>
      <div className="mt-[4mm] flex flex-wrap items-center gap-x-[4mm] gap-y-[1.5mm] border-y border-line py-[1.8mm] text-[8pt] text-ink/70">
        {contacts.map((c) =>
          c.href ? (
            <a
              key={c.label}
              href={c.href}
              className="font-medium text-ink/80 underline decoration-line decoration-1 underline-offset-[3px] transition-colors hover:text-accent-blue"
            >
              {c.label}
            </a>
          ) : (
            <span key={c.label} className="font-medium">
              {c.label}
            </span>
          ),
        )}
      </div>
      <section className="mt-[4mm]">
        <SectionTitle label="About" />
        <div className="grid grid-cols-12 gap-[5mm]">
          <p className="col-span-6 text-[8.6pt] leading-[1.55] text-ink/80">
            Je transforme des problématiques métier en produits et systèmes digitaux
            fonctionnels. J'accompagne les entreprises depuis la compréhension du besoin
            jusqu'au MVP fonctionnel en combinant stratégie produit, UX, intelligence
            artificielle, automatisation et développement no-code.
          </p>
          <p className="col-span-6 text-[8.6pt] leading-[1.55] text-ink/80">
            Mon objectif est de créer des outils réellement utilisés par les équipes,
            simples à prendre en main et capables de faire gagner du temps, réduire les
            tâches répétitives et améliorer la prise de décision.
          </p>
        </div>
      </section>
      <section className="mt-[4mm] flex-1">
        <SectionTitle
          label="Featured projects"
          hint="Challenge → Solution → Role → Stack → Impact"
        />
        <div className="space-y-[2mm]">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </section>
      <footer className="mt-[2.5mm] flex items-center justify-between text-[6.8pt] uppercase tracking-[0.16em] text-ink/35">
        <span>Sabrina Heydel — AI Product Builder</span>
        <span>Page 1 / 2</span>
      </footer>
    </Sheet>
  );
}