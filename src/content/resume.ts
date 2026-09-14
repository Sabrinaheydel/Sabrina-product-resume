export type Locale = "en" | "fr";

export type PrimaryProject = {
  index: string;
  name: string;
  problem: string;
  solution: string;
  principle?: string;
  tags: string[];
};

export type SecondaryProject = {
  name: string;
  summary: string;
};

export type ResumeContent = {
  locale: Locale;
  ui: {
    callout: string;
    about: string;
    capabilities: string;
    featured: string;
    featuredHint: string;
    problem: string;
    solution: string;
    principle: string;
    approach: string;
    secondary: string;
    experience: string;
    education: string;
    languages: string;
    toolkit: string;
    portfolio: string;
    demoOnRequest: string;
    page: (n: number) => string;
    tagline: string;
    docLabel: string;
    exportPdf: string;
    exporting: string;
    switchTo: string;
    fileName: string;
  };
  name: string;
  title: string[];
  lead: string;
  contacts: { label: string; href: string | null }[];
  callout: string[];
  about: string[];
  capabilities: { group: string; items: string[] }[];
  primaryProjects: PrimaryProject[];
  secondaryProjects: SecondaryProject[];
  experience: { company: string; role: string; period: string; detail: string }[];
  education: { title: string; org: string }[];
  languages: { name: string; level: string }[];
  stackGroups: { group: string; items: string[] }[];
  closing: string;
  meta: { title: string; description: string };
};

const CONTACT_EMAIL = "sabrinaheydel@gmail.com";

const sharedContacts = [
  { label: "France", href: null },
  { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sabrina-heydel-86021a23b/" },
  { label: "GitHub", href: "https://github.com/Sabrinaheydel" },
  { label: "Portfolio", href: "https://www.agence360digital.fr/" },
];

export const demoRequestHref = `mailto:${CONTACT_EMAIL}?subject=Demo%20request`;

export const en: ResumeContent = {
  locale: "en",
  ui: {
    callout: "Call me when…",
    about: "About",
    capabilities: "How I work",
    featured: "Featured products",
    featuredHint: "Proprietary systems · Demo on request",
    problem: "Business problem",
    solution: "System built",
    principle: "Principle",
    approach: "Scope",
    secondary: "Other products I've built",
    experience: "Professional experience",
    education: "Education & training",
    languages: "Languages",
    toolkit: "Toolkit",
    portfolio: "Portfolio",
    demoOnRequest: "Demo on request",
    page: (n) => `Page ${n} / 2`,
    tagline: "Sabrina Heydel — AI Product Builder",
    docLabel: "Resume · A4 · 2 pages",
    exportPdf: "Export PDF",
    exporting: "Generating…",
    switchTo: "Version française",
    fileName: "Sabrina-Heydel-AI-Product-Builder-Resume-EN.pdf",
  },
  name: "Sabrina Heydel",
  title: ["AI Product Builder", "Business Systems, Automation & AI"],
  lead: "From business problem to working product. I design and build digital systems that connect workflows, data, automation and AI — from discovery and UX to implementation and deployment.",
  contacts: sharedContacts,
  callout: [
    "Your teams are losing time between disconnected tools.",
    "A critical workflow still relies on spreadsheets, emails or manual tasks.",
    "You need a CRM, internal tool or business interface that actually fits the way your team works.",
    "You want to introduce AI, but need to identify where it creates real business value first.",
    "You have an idea or operational problem and need someone who can turn it into a working product.",
  ],
  about: [
    "I sit between business, product and technology. My role is to understand how a business actually works, identify where the friction is, and turn that problem into a digital product or system people can use.",
    "I can take a project from discovery to a working implementation: workflows, UX, data structure, APIs, automation, AI integration, testing and deployment. I don't start with AI. I start with the business problem — then use AI where it genuinely improves the workflow, access to information or decision-making.",
  ],
  capabilities: [
    {
      group: "Understand",
      items: ["Business discovery", "Process mapping", "User needs", "Use cases"],
    },
    {
      group: "Build",
      items: ["UX", "Internal tools", "CRM", "Dashboards", "Data", "APIs", "AI workflows"],
    },
    {
      group: "Deliver",
      items: ["Testing", "Implementation", "Documentation", "User adoption", "Analytics"],
    },
  ],
  primaryProjects: [
    {
      index: "01",
      name: "A360 OS | AI-Powered Business Operating System",
      problem:
        "Business information, customer data, actions and decisions are often fragmented across CRM, emails, documents and multiple tools.",
      solution:
        "A unified business interface where teams can access the right information, manage workflows and make better decisions. An AI copilot orchestrates specialized agents to retrieve and exploit information, prepare actions and automate execution — while keeping human validation at key decision points.",
      tags: [
        "Product strategy",
        "Business process analysis",
        "UX",
        "Data architecture",
        "AI orchestration",
        "Automation",
        "Human-in-the-loop workflows",
        "Implementation",
      ],
    },
    {
      index: "02",
      name: "Radar 360 | AI-Assisted Prospecting System",
      problem:
        "B2B prospecting requires too much manual research, qualification, personalization and follow-up.",
      solution:
        "A multi-source prospecting system that identifies and qualifies companies, detects business opportunities, prepares contextual outreach, tracks follow-ups and analyzes responses to recommend the next best action.",
      principle:
        "AI assists research, qualification and decision-making. Humans remain in control of sensitive outreach and commercial decisions.",
      tags: [
        "Product discovery",
        "AI workflows",
        "Multi-source data",
        "CRM",
        "Lead scoring",
        "Automation",
        "LLM integration",
        "Business logic",
      ],
    },
  ],
  secondaryProjects: [
    {
      name: "TalentFlow AI",
      summary:
        "A bilingual recruitment workspace combining candidate pipeline, dashboards, candidate intelligence and interview preparation into a single experience.",
    },
    {
      name: "Real Estate CRM & Platform",
      summary:
        "A connected real-estate platform turning website interactions, calculators and qualification forms into actionable CRM leads, with scoring, pipeline management and next actions.",
    },
  ],
  experience: [
    {
      company: "Agence 360 Digital",
      role: "Founder — AI Product Builder",
      period: "2025–Present",
      detail: "Business discovery, product building and digital systems for SMB teams.",
    },
    {
      company: "OPAL / VINCI Facilities | Balenciaga Couture",
      role: "Operations Manager",
      period: "Jul 2022–Apr 2025",
      detail: "Operations · Leadership · Premium customer experience",
    },
    {
      company: "Adone Conseil",
      role: "Executive Assistant / PMO",
      period: "Sep 2020–Feb 2022",
      detail: "Project coordination · Reporting · Governance · Digital transformation",
    },
    {
      company: "Chanel",
      role: "Assistant Project Manager",
      period: "Jun 2019–Aug 2020",
      detail: "Global RFID deployment · Testing · Documentation · International coordination",
    },
    {
      company: "USIDE",
      role: "International Sales Coordinator",
      period: "Oct 2017–Apr 2019",
      detail: "Multi-market coordination and client operations.",
    },
    {
      company: "BNP Paribas",
      role: "Executive Assistant",
      period: "Jun 2016–Aug 2017",
      detail: "Executive support in a regulated corporate environment.",
    },
  ],
  education: [
    { title: "BTS Tourism", org: "IST Paris" },
    { title: "Baccalaureate — History of Art, Museology", org: "UQAM, Montreal" },
    { title: "LLCE English", org: "Paris Sorbonne" },
    { title: "Digital Marketing & Copywriting", org: "LiveMentor" },
    { title: "Advanced Copywriting", org: "Marketing Mania" },
    { title: "AI · Automation · APIs · Product Building", org: "Continuous self-training" },
  ],
  languages: [
    { name: "French", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "German", level: "Intermediate" },
    { name: "Spanish", level: "Basic" },
  ],
  stackGroups: [
    {
      group: "Core toolkit",
      items: [
        "Lovable",
        "Supabase / PostgreSQL",
        "APIs",
        "n8n / Make",
        "GitHub",
        "Figma",
        "PostHog",
      ],
    },
    { group: "AI", items: ["OpenAI", "Claude", "Gemini", "AI-assisted development"] },
    {
      group: "Also worked with",
      items: ["React", "TypeScript", "Next.js", "Webflow", "Brevo", "Cal.com"],
    },
  ],
  closing:
    "Give me a business problem, a fragmented workflow or an AI use case — I'll turn it into a working system.",
  meta: {
    title: "Sabrina Heydel — AI Product Builder | Business Systems, Automation & AI",
    description:
      "AI Product Builder and implementation consultant: from business problem to working product — workflows, internal tools, CRM, data, APIs, automation and AI integration.",
  },
};

export const fr: ResumeContent = {
  locale: "fr",
  ui: {
    callout: "Appelez-moi quand…",
    about: "À propos",
    capabilities: "Ma façon de travailler",
    featured: "Produits phares",
    featuredHint: "Produits propriétaires · Démo sur demande",
    problem: "Problème métier",
    solution: "Système construit",
    principle: "Principe",
    approach: "Périmètre",
    secondary: "Autres produits construits",
    experience: "Expérience professionnelle",
    education: "Formation & certifications",
    languages: "Langues",
    toolkit: "Outils",
    portfolio: "Portfolio",
    demoOnRequest: "Démo sur demande",
    page: (n) => `Page ${n} / 2`,
    tagline: "Sabrina Heydel — AI Product Builder",
    docLabel: "CV · A4 · 2 pages",
    exportPdf: "Exporter en PDF",
    exporting: "Génération…",
    switchTo: "English version",
    fileName: "Sabrina-Heydel-AI-Product-Builder-CV-FR.pdf",
  },
  name: "Sabrina Heydel",
  title: ["AI Product Builder", "Systèmes métiers, automatisation & IA"],
  lead: "Du problème métier au produit fonctionnel. Je conçois et construis des systèmes digitaux qui relient workflows, données, automatisation et IA — du cadrage au déploiement.",
  contacts: sharedContacts,
  callout: [
    "Vos équipes perdent du temps entre des outils qui ne communiquent pas.",
    "Un processus critique repose encore sur Excel, des emails ou des tâches manuelles.",
    "Vous avez besoin d'un CRM, d'un outil interne ou d'une interface métier adaptée à votre fonctionnement réel.",
    "Vous voulez intégrer l'IA mais devez d'abord identifier où elle crée réellement de la valeur.",
    "Vous avez une idée ou un problème opérationnel et cherchez quelqu'un capable de le transformer en produit fonctionnel.",
  ],
  about: [
    "Je travaille à l'interface entre métier, produit et technologie. Mon rôle est de comprendre comment une entreprise fonctionne réellement, d'identifier les frictions, puis de transformer le problème en produit ou système digital utilisable.",
    "Je peux prendre un projet du cadrage jusqu'à une implémentation fonctionnelle : workflows, UX, structure des données, APIs, automatisation, intégration IA, tests et déploiement. Je ne pars pas de l'IA. Je pars du problème métier — puis j'utilise l'IA là où elle améliore réellement le workflow, l'accès à l'information ou la prise de décision.",
  ],
  capabilities: [
    {
      group: "Comprendre",
      items: [
        "Discovery métier",
        "Cartographie des processus",
        "Besoins utilisateurs",
        "Cas d'usage",
      ],
    },
    {
      group: "Construire",
      items: ["UX", "Outils internes", "CRM", "Dashboards", "Données", "APIs", "Workflows IA"],
    },
    {
      group: "Déployer",
      items: ["Tests", "Implémentation", "Documentation", "Adoption utilisateurs", "Analytics"],
    },
  ],
  primaryProjects: [
    {
      index: "01",
      name: "A360 OS | Système d'exploitation métier augmenté par l'IA",
      problem:
        "Les informations métier, données clients, actions et décisions sont souvent dispersées entre CRM, emails, documents et multiples outils.",
      solution:
        "Une interface métier unifiée où les équipes retrouvent la bonne information, pilotent leurs workflows et prennent de meilleures décisions. Un copilote IA orchestre des agents spécialisés pour rechercher et exploiter l'information, préparer les actions et automatiser leur exécution, avec validation humaine aux étapes clés.",
      tags: [
        "Stratégie produit",
        "Analyse des processus métier",
        "UX",
        "Architecture des données",
        "Orchestration IA",
        "Automatisation",
        "Workflows human-in-the-loop",
        "Implémentation",
      ],
    },
    {
      index: "02",
      name: "Radar 360 | Système de prospection assisté par IA",
      problem:
        "La prospection B2B demande trop de recherche manuelle, de qualification, de personnalisation et de suivi.",
      solution:
        "Un système multi-source qui identifie et qualifie les entreprises, détecte les opportunités métier, prépare une approche contextualisée, suit les relances et analyse les réponses pour recommander la prochaine meilleure action.",
      principle:
        "L'IA assiste la recherche, la qualification et la décision. L'humain garde le contrôle des prises de contact sensibles et des décisions commerciales.",
      tags: [
        "Product discovery",
        "Workflows IA",
        "Données multi-sources",
        "CRM",
        "Lead scoring",
        "Automatisation",
        "Intégration LLM",
        "Logique métier",
      ],
    },
  ],
  secondaryProjects: [
    {
      name: "TalentFlow AI",
      summary:
        "Espace de recrutement bilingue réunissant pipeline candidats, tableaux de bord, intelligence candidat et préparation des entretiens dans une seule expérience.",
    },
    {
      name: "Plateforme Immobilière & CRM",
      summary:
        "Plateforme immobilière connectée transformant les interactions du site, calculateurs et formulaires de qualification en leads CRM exploitables, avec scoring, pipeline et prochaines actions.",
    },
  ],
  experience: [
    {
      company: "Agence 360 Digital",
      role: "Fondatrice — AI Product Builder",
      period: "2025–Aujourd'hui",
      detail: "Discovery métier, construction de produits et systèmes digitaux pour PME.",
    },
    {
      company: "OPAL / VINCI Facilities | Balenciaga Couture",
      role: "Manager des opérations",
      period: "Juil. 2022–Avr. 2025",
      detail: "Opérations · Management · Expérience client premium",
    },
    {
      company: "Adone Conseil",
      role: "Assistante de direction / PMO",
      period: "Sept. 2020–Févr. 2022",
      detail: "Coordination projet · Reporting · Gouvernance · Transformation digitale",
    },
    {
      company: "Chanel",
      role: "Assistante chef de projet",
      period: "Juin 2019–Août 2020",
      detail: "Déploiement RFID mondial · Tests · Documentation · Coordination internationale",
    },
    {
      company: "USIDE",
      role: "Coordinatrice commerciale internationale",
      period: "Oct. 2017–Avr. 2019",
      detail: "Coordination multi-marchés et opérations clients.",
    },
    {
      company: "BNP Paribas",
      role: "Assistante de direction",
      period: "Juin 2016–Août 2017",
      detail: "Support de direction dans un environnement corporate réglementé.",
    },
  ],
  education: [
    { title: "BTS Tourisme", org: "IST Paris" },
    { title: "Baccalauréat — Histoire de l'art, Muséologie", org: "UQAM, Montréal" },
    { title: "LLCE Anglais", org: "Paris Sorbonne" },
    { title: "Marketing digital & Copywriting", org: "LiveMentor" },
    { title: "Copywriting avancé", org: "Marketing Mania" },
    { title: "IA · Automatisation · APIs · Product", org: "Auto-formation continue" },
  ],
  languages: [
    { name: "Français", level: "Langue maternelle" },
    { name: "Anglais", level: "Professionnel" },
    { name: "Allemand", level: "Intermédiaire" },
    { name: "Espagnol", level: "Notions" },
  ],
  stackGroups: [
    {
      group: "Outils principaux",
      items: [
        "Lovable",
        "Supabase / PostgreSQL",
        "APIs",
        "n8n / Make",
        "GitHub",
        "Figma",
        "PostHog",
      ],
    },
    { group: "IA", items: ["OpenAI", "Claude", "Gemini", "Développement assisté par IA"] },
    {
      group: "Également utilisés",
      items: ["React", "TypeScript", "Next.js", "Webflow", "Brevo", "Cal.com"],
    },
  ],
  closing:
    "Donnez-moi un problème métier, un workflow fragmenté ou un cas d'usage IA — j'en fais un système fonctionnel.",
  meta: {
    title: "Sabrina Heydel — AI Product Builder | Systèmes métiers, automatisation & IA",
    description:
      "AI Product Builder et consultante en implémentation : du problème métier au produit fonctionnel — workflows, outils internes, CRM, données, APIs, automatisation et IA.",
  },
};

export const resumeContent: Record<Locale, ResumeContent> = { en, fr };
