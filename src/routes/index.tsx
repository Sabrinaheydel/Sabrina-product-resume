import { createFileRoute } from "@tanstack/react-router";
import { ResumeDocument } from "@/components/resume/ResumeDocument";
import { en } from "@/content/resume";

const title = en.meta.title;
const description = en.meta.description;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <ResumeDocument content={en} />;
}
