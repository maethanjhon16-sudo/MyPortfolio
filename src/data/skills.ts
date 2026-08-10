export interface Skill {
  name: string;
  level: number; // 0-100, drives the antd Progress bar
  category: "Frontend" | "Backend" | "Tools & Platforms";
}

export const skills: Skill[] = [
  { name: "React / TypeScript", level: 92, category: "Frontend" },
  { name: "Ant Design", level: 85, category: "Frontend" },
  { name: "CSS / Animation", level: 80, category: "Frontend" },
  { name: "C++", level: 70, category: "Backend" },
  { name: "MySQL", level: 78, category: "Backend" },
  { name: "Python", level: 85, category: "Backend" },
  { name: "Git & CI/CD", level: 88, category: "Tools & Platforms" },
  { name: "Docker", level: 70, category: "Tools & Platforms" },
];
