import Projects from "@/components/Projects";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of my recent full-stack and frontend development projects.",
};

export default async function ProjectPage() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title">my projects.</h1>
      <Projects />
    </article>
  );
}
