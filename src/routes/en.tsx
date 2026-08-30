import { createFileRoute } from "@tanstack/react-router";
import { ResumeDocument } from "@/components/resume/ResumeDocument";
import { en } from "@/content/resume";

const PAGE_URL = "https://product-craft-suite-68.lovable.app/en";
const SOCIAL_IMAGE = "https://product-craft-suite-68.lovable.app/og-resume.jpg";

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      { title: en.meta.title },
      { name: "description", content: en.meta.description },
      { property: "og:title", content: en.meta.title },
      { property: "og:description", content: en.meta.description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: SOCIAL_IMAGE },
      { property: "og:image:width", content: "600" },
      { property: "og:image:height", content: "315" },
      { property: "og:image:type", content: "image/jpeg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: en.meta.title },
      { name: "twitter:description", content: en.meta.description },
      { name: "twitter:image", content: SOCIAL_IMAGE },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
  }),
  component: () => <ResumeDocument content={en} />,
});
