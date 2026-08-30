# Sabrina Heydel - Product Resume

**AI Product Builder · Full-Stack Digital Systems**

A bilingual, print-ready product resume built as a small web product rather than a static CV. It presents my experience through business problems, product decisions, system architecture and delivered outcomes.

## Positioning

I design and build digital products from the initial business problem to a deployed MVP or operational system. My work combines product discovery, UX, information architecture, data modelling, APIs, automation, QA, deployment, analytics and observability.

The goal is not to add technology for its own sake. It is to turn fragmented workflows into clear, usable systems that teams can actually operate.

## Selected product work

### TalentFlow AI

Bilingual recruitment workspace designed around a fragmented recruiter workflow.

**Product scope:** dashboard, candidate pipeline, candidate intelligence, interview preparation, Copilot UX, guided demo, feedback and product analytics.

**My role:** product discovery, workflow analysis, UX, information architecture, front-end architecture, AI-assisted development, QA, analytics instrumentation, deployment and documentation.

**Stack:** Next.js, React, TypeScript, Webflow Cloud, GitHub, PostHog, AI-ready architecture.

### Real Estate Platform & CRM

A real-estate website extended into a full acquisition, qualification and sales follow-up system.

**Product scope:** property experience, qualification forms, loan and rental calculators, CRM lead creation, pipeline, scoring, notes, assignment, next actions, appointments, property matching, admin/demo roles, isolated sandbox and secure Supabase persistence.

**My role:** business analysis, product discovery, UX, system design, data modelling, Supabase/RLS, server authorization, automation logic, QA, demo architecture and deployment.

**Stack:** React, TanStack, TypeScript, Supabase, PostgreSQL, RLS, APIs, Brevo, GitHub.

### Melissa Breathwork

Public client project for an international wellness business.

**Product scope:** multilingual website, booking, newsletter, lead magnet, CRM, Brevo automation, Cal.com integration, training and handover.

## Resume features

- English and French versions
- Responsive web experience
- Two-page A4 editorial layout
- Direct PDF export on desktop and mobile
- Locale-specific PDF filenames
- Print fallback
- Clickable portfolio and LinkedIn links
- No phone number exposed in the public source

## PDF export

The web resume is composed of two A4 sheets. Each sheet is rendered client-side with `html2canvas-pro`, then inserted into an A4 document with `jsPDF`.

This provides a real downloadable PDF on mobile and desktop instead of relying only on `window.print()`.

## Tech stack

**Core:** React, TypeScript, TanStack Start, Tailwind CSS

**PDF:** jsPDF, html2canvas-pro

**Product stack represented in the resume:** Next.js, Lovable, Webflow, Supabase, PostgreSQL, GitHub, PostHog, Sentry, n8n, Make, Zapier, Brevo, APIs, Webhooks, JSON and AI tooling.

## Project structure

```text
src/
├── components/resume/     # A4 document layout
├── content/resume.ts      # FR/EN resume content
├── lib/export-pdf.ts      # Mobile-safe PDF export
└── routes/                # Locale routes
```

## Run locally

```bash
bun install
bun run dev
```

Production build:

```bash
bun run build
```

## Links

- Portfolio: https://www.agence360digital.fr/
- LinkedIn: https://www.linkedin.com/in/sabrina-heydel-86021a23b/

## About

Built and maintained by **Sabrina Heydel**, founder of **Agence 360 Digital**.

I focus on turning real business problems into simple, useful digital products and systems.
