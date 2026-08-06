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
    download: string;
    switchTo: string;
  };
  name: string;
  title: string[];
  lead: string;
  contacts: { label: string; href: string | null }[];
  about: string[];
  projects: Project[];
  expertise: { group: string; items: string[] }[];
  experience: { company: string; role: string; detail: string }[];
  education: { title: string; org: string }[];
  languages: { name: string; level: string }[];
  techStack: string[];
  closing: string;
  meta: { title: string; description: string };
};

const sharedStack = [
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
    download: "Download PDF",
    switchTo: "Version française",
  },
  name: "Sabrina Heydel",
  title: ["AI Product Builder", "Digital Systems Consultant"],
  lead:
    "From understanding the business need to a working MVP: product, UX, AI and automation.",
  contacts: [
    { label: "France", href: null },
    { label: "sabrina@agence360digital.fr", href: "mailto:sabrina@agence360digital.fr" },
    { label: "+33 6 00 00 00 00", href: "tel:+33600000000" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sabrinaheydel" },
    { label: "Portfolio", href: "https://www.agence360digital.fr" },
    { label: "Malt", href: "https://www.malt.fr" },
  ],
  about: [
    "I turn business problems into working digital products and systems. I support companies from the first framing of the need through to a functional MVP, combining product strategy, UX, artificial intelligence, automation and no-code development.",
    "My goal is to build tools that teams actually use: simple to adopt, saving time, removing repetitive tasks and improving decision-making.",
  ],
  projects: [
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
      items: ["AI-assisted Development", "Automation", "No-Code", "Supabase", "APIs"],
    },
    {
      group: "Systems",
      items: ["CRM", "Customer Portals", "Internal Tools", "Prompt Engineering"],
    },
  ],
  experience: [
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
    title: "Sabrina Heydel — AI Product Builder & Digital Systems Consultant",
    description:
      "Product discovery, UX, AI and automation: from business need to a working MVP. Editorial resume and case studies of Sabrina Heydel.",
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
    download: "Télécharger le PDF",
    switchTo: "English version",
  },
  name: "Sabrina Heydel",
  title: ["AI Product Builder", "Consultante Systèmes Digitaux"],
  lead:
    "De la compréhension du besoin au MVP fonctionnel : produit, UX, IA et automatisation.",
  contacts: [
    { label: "France", href: null },
    { label: "sabrina@agence360digital.fr", href: "mailto:sabrina@agence360digital.fr" },
    { label: "+33 6 00 00 00 00", href: "tel:+33600000000" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sabrinaheydel" },
    { label: "Portfolio", href: "https://www.agence360digital.fr" },
    { label: "Malt", href: "https://www.malt.fr" },
  ],
  about: [
    "Je transforme des problématiques métier en produits et systèmes digitaux fonctionnels. J'accompagne les entreprises depuis la compréhension du besoin jusqu'au MVP fonctionnel en combinant stratégie produit, UX, intelligence artificielle, automatisation et développement no-code.",
    "Mon objectif est de créer des outils réellement utilisés par les équipes, simples à prendre en main et capables de faire gagner du temps, réduire les tâches répétitives et améliorer la prise de décision.",
  ],
  projects: [
    {
      index: "01",
      name: "TalentFlow AI",
      challenge:
        "Les recruteurs perdent du temps entre ATS, notes, emails et outils d'IA dispersés.",
      solution: [
        "Plateforme de recrutement IA",
        "Pipeline",
        "Dashboard",
        "Profil candidat",
        "Copilote IA",
        "Suivi des entretiens",
      ],
      role: [
        "Product Discovery",
        "UX",
        "Architecture",
        "Développement assisté par IA",
        "Tests",
        "Livraison",
      ],
      stack: ["Next.js", "GitHub", "TypeScript", "Figma", "Lovable", "OpenAI Ready"],
      impact: "Une seule interface qui remplace plusieurs outils déconnectés.",
    },
    {
      index: "02",
      name: "Plateforme Immobilière",
      challenge:
        "Les agences immobilières perdent du temps à gérer qualification, calculs et suivi client sur plusieurs outils.",
      solution: [
        "Site web",
        "Carte interactive",
        "Formulaires de qualification",
        "CRM",
        "Admin",
        "Calculateurs intelligents",
        "Workflows automatisés",
      ],
      role: [
        "Analyse métier",
        "UX",
        "Design système",
        "Automatisation",
        "Structuration des données",
        "Tests",
      ],
      stack: ["Lovable", "Supabase", "Automatisation", "APIs"],
      impact: "Un système unique pour la qualification, le chiffrage et le suivi.",
    },
    {
      index: "03",
      name: "Melissa Breathwork",
      challenge: "Créer un écosystème digital international.",
      solution: [
        "Site en 3 langues",
        "Réservation",
        "CRM",
        "Newsletter",
        "Lead Magnet",
        "Brevo",
        "Automatisation",
        "Formation",
      ],
      role: [
        "UX",
        "Parcours client",
        "Copywriting",
        "Automatisation",
        "Formation",
      ],
      stack: ["Lovable", "Brevo", "Cal.com"],
      impact: "Un système d'acquisition et de réservation autonome en trois langues.",
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
      items: [
        "Développement assisté par IA",
        "Automatisation",
        "No-Code",
        "Supabase",
        "APIs",
      ],
    },
    {
      group: "Systèmes",
      items: ["CRM", "Portails clients", "Outils internes", "Prompt Engineering"],
    },
  ],
  experience: [
    {
      company: "Agence 360 Digital",
      role: "Fondatrice — AI Product Builder",
      detail:
        "Product discovery, livraison assistée par IA et systèmes digitaux pour les PME.",
    },
    {
      company: "Balenciaga",
      role: "Hospitality Manager",
      detail: "Opérations · Management · Expérience client premium",
    },
    {
      company: "Adone Conseil",
      role: "Assistante de direction / PMO",
      detail: "Coordination projet · Reporting · Gouvernance · Transformation digitale",
    },
    {
      company: "Chanel",
      role: "Assistante chef de projet",
      detail:
        "Déploiement RFID mondial · Support projet · Tests · Documentation · Coordination internationale",
    },
    {
      company: "USIDE",
      role: "Coordinatrice commerciale internationale",
      detail: "Coordination multi-marchés et opérations clients.",
    },
    {
      company: "BNP Paribas",
      role: "Assistante de direction",
      detail: "Support de direction dans un environnement corporate réglementé.",
    },
  ],
  education: [
    { title: "BTS Tourisme", org: "IST Paris" },
    { title: "Baccalauréat — Histoire de l'art, Muséologie", org: "UQAM, Montréal" },
    { title: "LLCE Anglais", org: "Paris Sorbonne" },
    { title: "Marketing digital & Copywriting", org: "LiveMentor" },
    { title: "Copywriting avancé", org: "Marketing Mania" },
    { title: "IA · Automatisation · APIs · Product Building", org: "Auto-formation continue" },
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
    title: "Sabrina Heydel — AI Product Builder & Consultante Systèmes Digitaux",
    description:
      "Produit, UX, IA et automatisation : de la compréhension du besoin au MVP fonctionnel. CV éditorial et études de cas de Sabrina Heydel.",
  },
};

export const resumeContent: Record<Locale, ResumeContent> = { en, fr };