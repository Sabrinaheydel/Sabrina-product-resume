export type Locale = "en" | "fr";

export type Project = {
  index: string;
  name: string;
  challenge: string;
  solution: string[];
  role: string[];
  stack: string[];
  impact: string;
};

export type ResumeContent = {
  locale: Locale;
  ui: {
    caseStudy: string;
    challenge: string;
    solution: string;
    myRole: string;
    stack: string;
    impact: string;
    about: string;
    featured: string;
    featuredHint: string;
    coreExpertise: string;
    experience: string;
    education: string;
    languages: string;
    techStack: string;
    portfolio: string;
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
  about: string[];
  projects: Project[];
  expertise: { group: string; items: string[] }[];
  experience: { company: string; role: string; period: string; detail: string }[];
  education: { title: string; org: string }[];
  languages: { name: string; level: string }[];
  techStack: string[];
  closing: string;
  meta: { title: string; description: string };
};

const sharedStack = [
  "TypeScript",
  "React",
  "Next.js",
  "TanStack",
  "Lovable",
  "Webflow",
  "Bubble",
  "Supabase",
  "PostgreSQL",
  "APIs",
  "Webhooks",
  "JSON",
  "GitHub",
  "PostHog",
  "Sentry",
  "n8n",
  "Make",
  "Zapier",
  "Brevo",
  "Cal.com",
  "ChatGPT",
  "Claude",
  "Gemini",
  "Figma",
  "Notion",
  "Google Workspace",
  "SEO",
];

export const en: ResumeContent = {
  locale: "en",
  ui: {
    caseStudy: "Case study",
    challenge: "Business challenge",
    solution: "Solution designed",
    myRole: "My role",
    stack: "Stack",
    impact: "Impact",
    about: "About",
    featured: "Featured projects",
    featuredHint: "Challenge → Solution → Role → Stack → Impact",
    coreExpertise: "Core expertise",
    experience: "Professional experience",
    education: "Education & training",
    languages: "Languages",
    techStack: "Tech stack",
    portfolio: "Portfolio",
    page: (n) => `Page ${n} / 2`,
    tagline: "Sabrina Heydel — AI Product Builder",
    docLabel: "Resume · A4 · 2 pages",
    exportPdf: "Export PDF",
    exporting: "Generating…",
    switchTo: "Version française",
    fileName: "Sabrina-Heydel-AI-Product-Builder-Resume-EN.pdf",
  },
  name: "Sabrina Heydel",
  title: ["AI Product Builder", "Full-Stack Digital Systems"],
  lead:
    "From the business problem to a deployed, production-ready system: product discovery, UX, architecture, data, APIs, automation, QA and deployment.",
  contacts: [
    { label: "France", href: null },
    { label: "sabrinaheydel@gmail.com", href: "mailto:sabrinaheydel@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sabrina-heydel-86021a23b/" },
    { label: "Portfolio", href: "https://www.agence360digital.fr/" },
  ],
  about: [
    "I own digital products end to end, autonomously: framing the business need, choosing the architecture, designing the UX, modelling the data, wiring APIs and automations, then testing, deploying and instrumenting what I ship.",
    "My focus is business usefulness rather than technology for its own sake: connecting front-end, database, APIs, automation and observability into tools that teams actually adopt, save time with and can maintain.",
  ],
  projects: [
    {
      index: "01",
      name: "TalentFlow AI",
      challenge:
        "Recruiter workflow is fragmented across ATS, notes, email and separate AI tools.",
      solution: [
        "Bilingual recruitment workspace",
        "Pipeline",
        "Dashboard",
        "Candidate intelligence",
        "Interview preparation",
        "Copilot UX",
        "Guided demo",
        "Product analytics",
      ],
      role: [
        "Product Discovery",
        "Workflow analysis",
        "UX",
        "Information architecture",
        "Front-end architecture",
        "AI-assisted development",
        "QA",
        "Analytics instrumentation",
        "Deployment & documentation",
      ],
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Webflow Cloud",
        "GitHub",
        "PostHog",
        "AI-ready architecture",
      ],
      impact:
        "One coherent product workflow replacing several disconnected interfaces, shipped as a credible public beta.",
    },
    {
      index: "02",
      name: "Real Estate Platform & CRM",
      challenge:
        "Agencies scatter acquisition, qualification, pricing and sales follow-up across disconnected tools.",
      solution: [
        "Public real-estate experience",
        "Property search & interactive listings",
        "Lead qualification forms",
        "Loan & rental calculators creating CRM leads",
        "CRM pipeline with lead scoring, notes, assignment, next actions",
        "Appointments & property matching",
        "Admin/demo roles with RLS and isolated sandbox",
        "Simulated follow-up actions, feedback capture and analytics",
      ],
      role: [
        "Business Analysis",
        "Product Discovery",
        "UX",
        "System Design",
        "Data Modelling",
        "Supabase / RLS",
        "Server authorization",
        "Automation logic",
        "QA",
        "Demo architecture",
        "Deployment",
      ],
      stack: [
        "Lovable",
        "React / TanStack",
        "TypeScript",
        "Supabase / PostgreSQL",
        "RLS",
        "APIs",
        "Brevo",
        "GitHub",
      ],
      impact:
        "The website becomes an operating system for acquisition, qualification and sales follow-up — not just a showcase.",
    },
    {
      index: "03",
      name: "Melissa Breathwork",
      challenge: "Create an international digital ecosystem for a solo practitioner.",
      solution: [
        "3-language website",
        "Booking",
        "CRM",
        "Newsletter",
        "Lead magnet",
        "Brevo automation",
        "Training & handover",
      ],
      role: ["UX", "Customer Journey", "Copywriting", "Automation", "Training"],
      stack: ["Lovable", "Brevo", "Cal.com"],
      impact:
        "An autonomous acquisition and booking system across three languages. Client project · public testimonial available.",
    },
  ],
  expertise: [
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
      items: ["AI-assisted Development", "Data modelling", "APIs", "Automation", "Supabase"],
    },
    {
      group: "Ship & Operate",
      items: ["QA", "Deployment", "Analytics & observability", "Prompt Engineering"],
    },
  ],
  experience: [
    {
      company: "Agence 360 Digital",
      role: "Founder — AI Product Builder",
      period: "2025–Present",
      detail: "Product discovery, AI-assisted delivery and digital systems for SMB teams.",
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
      detail:
        "Global RFID deployment · Project support · Testing · Documentation · International coordination",
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
  techStack: sharedStack,
  closing: "I enjoy turning complex business problems into simple digital products.",
  meta: {
    title: "Sabrina Heydel — AI Product Builder & Full-Stack Digital Systems",
    description:
      "From business problem to deployed system: product discovery, UX, data, APIs, automation, QA and deployment. Editorial resume and case studies of Sabrina Heydel.",
  },
};

export const fr: ResumeContent = {
  locale: "fr",
  ui: {
    caseStudy: "Étude de cas",
    challenge: "Problématique métier",
    solution: "Solution conçue",
    myRole: "Mon rôle",
    stack: "Stack",
    impact: "Impact",
    about: "À propos",
    featured: "Projets clés",
    featuredHint: "Problématique → Solution → Rôle → Stack → Impact",
    coreExpertise: "Expertises clés",
    experience: "Expérience professionnelle",
    education: "Formation & certifications",
    languages: "Langues",
    techStack: "Stack technique",
    portfolio: "Portfolio",
    page: (n) => `Page ${n} / 2`,
    tagline: "Sabrina Heydel — AI Product Builder",
    docLabel: "CV · A4 · 2 pages",
    exportPdf: "Exporter en PDF",
    exporting: "Génération…",
    switchTo: "English version",
    fileName: "Sabrina-Heydel-AI-Product-Builder-CV-FR.pdf",
  },
  name: "Sabrina Heydel",
  title: ["AI Product Builder", "Systèmes digitaux full-stack"],
  lead:
    "De la problématique métier au système déployé et prêt pour la production : discovery produit, UX, architecture, données, APIs, automatisation, QA et déploiement.",
  contacts: [
    { label: "France", href: null },
    { label: "sabrinaheydel@gmail.com", href: "mailto:sabrinaheydel@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sabrina-heydel-86021a23b/" },
    { label: "Portfolio", href: "https://www.agence360digital.fr/" },
  ],
  about: [
    "Je pilote des produits digitaux de bout en bout, en autonomie : cadrage du besoin métier, choix d'architecture, UX, modélisation des données, intégration des APIs et automatisations, puis tests, déploiement et instrumentation.",
    "Ma priorité reste l'utilité métier plutôt que la technologie : relier front-end, base de données, APIs, automatisation et observabilité pour créer des outils réellement adoptés, qui font gagner du temps et restent maintenables.",
  ],
  projects: [
    {
      index: "01",
      name: "TalentFlow AI",
      challenge:
        "Le travail des recruteurs est fragmenté entre ATS, notes, emails et outils d'IA séparés.",
      solution: [
        "Espace de recrutement bilingue",
        "Pipeline",
        "Dashboard",
        "Intelligence candidat",
        "Préparation d'entretien",
        "UX Copilote",
        "Démo guidée",
        "Analytics produit",
      ],
      role: [
        "Product Discovery",
        "Analyse des workflows",
        "UX",
        "Architecture de l'information",
        "Architecture front-end",
        "Développement assisté par IA",
        "QA",
        "Instrumentation analytics",
        "Déploiement & documentation",
      ],
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Webflow Cloud",
        "GitHub",
        "PostHog",
        "Architecture AI-ready",
      ],
      impact:
        "Un parcours produit unique qui remplace plusieurs interfaces déconnectées, livré en bêta publique crédible.",
    },
    {
      index: "02",
      name: "Plateforme Immobilière & CRM",
      challenge:
        "Les agences dispersent acquisition, qualification, chiffrage et suivi commercial sur des outils déconnectés.",
      solution: [
        "Expérience immobilière publique",
        "Recherche & annonces interactives",
        "Formulaires de qualification",
        "Calculateurs prêt & location créant des leads CRM",
        "Pipeline CRM : scoring, notes, attribution, prochaines actions",
        "Rendez-vous & matching de biens",
        "Rôles admin/démo avec RLS et sandbox isolée",
        "Actions de suivi simulées, feedback et analytics",
      ],
      role: [
        "Analyse métier",
        "Product Discovery",
        "UX",
        "Design système",
        "Modélisation des données",
        "Supabase / RLS",
        "Autorisation serveur",
        "Logique d'automatisation",
        "QA",
        "Architecture de démo",
        "Déploiement",
      ],
      stack: [
        "Lovable",
        "React / TanStack",
        "TypeScript",
        "Supabase / PostgreSQL",
        "RLS",
        "APIs",
        "Brevo",
        "GitHub",
      ],
      impact:
        "Le site devient un système d'exploitation pour l'acquisition, la qualification et le suivi commercial — pas une simple vitrine.",
    },
    {
      index: "03",
      name: "Melissa Breathwork",
      challenge: "Créer un écosystème digital international pour une praticienne indépendante.",
      solution: [
        "Site en 3 langues",
        "Réservation",
        "CRM",
        "Newsletter",
        "Lead magnet",
        "Automatisation Brevo",
        "Formation & passation",
      ],
      role: ["UX", "Parcours client", "Copywriting", "Automatisation", "Formation"],
      stack: ["Lovable", "Brevo", "Cal.com"],
      impact:
        "Un système d'acquisition et de réservation autonome en trois langues. Projet client · témoignage public disponible.",
    },
  ],
  expertise: [
    {
      group: "Discovery & Stratégie",
      items: ["Product Discovery", "Analyse métier", "Product Thinking"],
    },
    {
      group: "Design & Structure",
      items: ["UX", "Architecture de l'information", "Dashboards"],
    },
    {
      group: "Build & Automatisation",
      items: ["Développement IA", "Modélisation données", "APIs", "Automatisation", "Supabase"],
    },
    {
      group: "Livraison & Ops",
      items: ["QA", "Déploiement", "Analytics & observabilité", "Prompt Engineering"],
    },
  ],
  experience: [
    {
      company: "Agence 360 Digital",
      role: "Fondatrice — AI Product Builder",
      period: "2025–Aujourd'hui",
      detail: "Product discovery, livraison assistée par IA et systèmes digitaux pour PME.",
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
      detail:
        "Déploiement RFID mondial · Tests · Documentation · Coordination internationale",
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
  techStack: sharedStack,
  closing:
    "J'aime transformer des problématiques métier complexes en produits digitaux simples.",
  meta: {
    title: "Sabrina Heydel — AI Product Builder & Systèmes digitaux full-stack",
    description:
      "De la problématique métier au système déployé : produit, UX, données, APIs, automatisation, QA et déploiement. CV éditorial et études de cas de Sabrina Heydel.",
  },
};

export const resumeContent: Record<Locale, ResumeContent> = { en, fr };
