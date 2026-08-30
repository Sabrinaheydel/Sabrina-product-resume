import { createFileRoute } from "@tanstack/react-router";
import { ResumeDocument } from "@/components/resume/ResumeDocument";
import { en } from "@/content/resume";

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      { title: en.meta.title },
      { name: "description", content: en.meta.description },
      { property: "og:title", content: en.meta.title },
      { property: "og:description", content: en.meta.description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ResumeDocument content={en} />,
});
