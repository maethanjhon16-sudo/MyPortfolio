import project1 from "../assets/project1.png";

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    title: "Project One",
    description: "A short description of what this project does and the problem it solves.",
    image: project1,
    tags: ["React", "TypeScript", "Ant Design"],
    url: "#",
  },
  {
    title: "Project Two",
    description: "A short description of what this project does and the problem it solves.",
    image: project1,
    tags: ["Node.js", "PostgreSQL"],
    url: "#",
  },
  {
    title: "Project Three",
    description: "A short description of what this project does and the problem it solves.",
    image: project1,
    tags: ["Next.js", "REST API"],
    url: "#",
  },
];
