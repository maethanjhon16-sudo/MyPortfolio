import project1 from "../assets/event-driven-architecture-outline-icon-260nw-2583445197.webp";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/images.jpg";

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    title: "Event-Driven Programming Activities",
    description: "A collection of event-driven programming activities designed to teach students the fundamentals of event-driven programming in a fun and interactive way.",
    image: project1,
    tags: ["React", "TypeScript", "Ant Design"],
    url: "https://github.com/maethanjhon16-sudo/Event-Driven-Programming",
  },
  {
    title: "Web Systems and Technologies",
    description: "A web-page that contains information about the school I attended using html and css. It is a simple web-page that contains information about the school I attended, the courses I took, and the projects I worked on.",
    image: project2,
    tags: ["HTML/CSS"],
    url: "https://github.com/maethanjhon16-sudo/WS-1011",
  },
  {
    title: "My Profile",
    description: "My first web-based profile that contains information about me, my skills, and my projects. It is a simple web-page that contains information about me, my skills, and my projects.",
    image: project3,
    tags: ["HTML/CSS", "XML"],
    url: "https://maethanjhon15-alt.github.io/myprofile.github.io/",
  },
];
