import { createFileRoute } from "@tanstack/react-router";
import { ResumeDocument } from "@/components/resume/ResumeDocument";
import { fr } from "@/content/resume";

export const Route = createFileRoute("/fr")({
  head: () => ({
    meta: [
      { title: fr.meta.title },
      { name: "description", content: fr.meta.description },
      { property: "og:title", content: fr.meta.title },
      { property: "og:description", content: fr.meta.description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ResumeDocument content={fr} />,
});
