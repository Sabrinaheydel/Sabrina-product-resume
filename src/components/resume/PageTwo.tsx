import QRCode from "react-qr-code";
import { Card, Pill, SectionTitle, Sheet } from "./primitives";

const expertise: { group: string; items: string[] }[] = [
  {
    group: "Discovery & Strategy",
    items: ["Product Discovery", "Business Analysis", "Product Thinking"],
  },
  {
    group: "Design & Structure",
    items: ["UX", "Information Architecture", "Dashboards"],
  },
  {
    group: "Build & Automate",
    items: ["AI-assisted Development", "Automation", "No-Code", "Supabase", "APIs"],
  },
  {
    group: "Systems",
    items: ["CRM", "Customer Portals", "Internal Tools", "Prompt Engineering"],
  },
];

const experience = [
  {
    company: "Agence 360 Digital",
    role: "Founder — AI Product Builder",
    detail: "Product discovery, AI-assisted delivery and digital systems for SMB teams.",
  },
  {
    company: "Balenciaga",
    role: "Hospitality Manager",
    detail: "Operations · Leadership · Premium customer experience",
  },
  {
    company: "Adone Conseil",
    role: "Executive Assistant / PMO",
    detail: "Project coordination · Reporting · Governance · Digital transformation",
  },
  {
    company: "Chanel",
    role: "Assistant Project Manager",
    detail:
      "Global RFID deployment · Project support · Testing · Documentation · International coordination",
  },
  {
    company: "USIDE",
    role: "International Sales Coordinator",
    detail: "Multi-market coordination and client operations.",
  },
  {
    company: "BNP Paribas",
    role: "Executive Assistant",
    detail: "Executive support in a regulated corporate environment.",
  },
];

const education = [
  { title: "BTS Tourisme", org: "IST Paris" },
  { title: "Bachelor — History of Art, Museum Studies", org: "UQAM, Montreal" },
  { title: "LLCE English", org: "Paris Sorbonne" },
  { title: "Digital Marketing & Copywriting", org: "LiveMentor" },
  { title: "Advanced Copywriting", org: "Marketing Mania" },
  { title: "AI · Automation · APIs · Product Building", org: "Continuous self-training" },
];

const languages = [
  { name: "French", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "German", level: "Intermediate" },
  { name: "Spanish", level: "Basic" },
];

const stack = [
  "Lovable",
  "Supabase",
  "ChatGPT",
  "Claude",
  "GitHub",
  "Next.js",
  "Figma",
  "Notion",
  "Brevo",
  "Make",
  "Zapier",
  "Google Workspace",
  "APIs",
  "Webhooks",
  "Cal.com",
  "SEO",
];

export function PageTwo() {
  return (
    <Sheet>
      <section>
        <SectionTitle label="Core expertise" />
        <div className="grid grid-cols-4 gap-[3mm]">
          {expertise.map((group) => (
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
        <SectionTitle label="Professional experience" />
        <div className="border-l border-line pl-[5mm]">
          {experience.map((item) => (
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
        <SectionTitle label="Education & training" />
        <div className="grid grid-cols-2 gap-x-[6mm] gap-y-[2.2mm]">
          {education.map((e) => (
            <div key={e.title} className="border-t border-line/70 pt-[2mm]">
              <div className="text-[8.6pt] font-semibold leading-[1.3]">{e.title}</div>
              <div className="mt-[0.8mm] text-[7.8pt] text-ink/55">{e.org}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-[4mm]">
        <SectionTitle label="Languages" />
        <div className="grid grid-cols-4 gap-[3mm]">
          {languages.map((l) => (
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
        <SectionTitle label="Tech stack" />
        <div className="flex flex-wrap gap-[1.8mm]">
          {stack.map((s) => (
            <Pill key={s}>{s}</Pill>
          ))}
        </div>
      </section>
      <div className="flex-1" />
      <footer className="mt-[4mm] border-t border-line pt-[3mm]">
        <div className="flex items-end justify-between gap-[6mm]">
          <p className="max-w-[110mm] text-[10.5pt] font-medium leading-[1.35] tracking-[-0.01em]">
            I enjoy turning complex business problems into simple digital products.
          </p>
          <div className="flex items-center gap-[3mm]">
            <div className="text-right">
              <div className="text-[6.8pt] font-semibold uppercase tracking-[0.14em] text-ink/35">
                Portfolio
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
          <span>Sabrina Heydel — AI Product Builder</span>
          <span>Page 2 / 2</span>
        </div>
      </footer>
    </Sheet>
  );
}