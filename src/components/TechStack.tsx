import {
  NextJsIcon,
  TailwindIcon,
  ReactIcon,
  NodeIcon,
  ExpressIcon,
  PostgresIcon,
  MongoIcon,
  GitIcon,
  GithubIcon,
  PrismaIcon,
  HtmlIcon,
  CssIcon,
  JavascriptIcon,
  TypescriptIcon,
} from "./icons/TechIcons";

const techStack = [
  { name: "HTML", icon: HtmlIcon },
  { name: "CSS", icon: CssIcon },
  { name: "Tailwind CSS", icon: TailwindIcon },
  { name: "JavaScript", icon: JavascriptIcon },
  { name: "TypeScript", icon: TypescriptIcon },
  { name: "React.js", icon: ReactIcon },
  { name: "Next.js", icon: NextJsIcon },
  { name: "Node.js", icon: NodeIcon },
  { name: "Express.js", icon: ExpressIcon },
  { name: "MongoDB", icon: MongoIcon },
  { name: "PostgreSQL", icon: PostgresIcon },
  { name: "Prisma", icon: PrismaIcon },
  { name: "Git", icon: GitIcon },
];

export default function TechStack() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-2xl font-bold sm:text-3xl title">Tech Stack</h2>
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            <tech.icon className="h-4 w-4" />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
