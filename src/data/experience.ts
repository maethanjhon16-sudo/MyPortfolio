export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  type: "work" | "education";
}

export const experience: ExperienceItem[] = [
  {
    role: "ICT Student",
    organization: "KCNHS",
    period: "2022 - 2024",
    description:
      "Learning the fundamentals about web and game development. Deplyoing portfolio and game projects.",
    type: "work",
  },
  {
    role: "Junior Programmer - BSIT 1st-2nd Year",
    organization: "Notre Dame of Kidapawan College",
    period: "2024 - 2026",
    description:
      "Enhanced my programming, networking skills and deploying real-world applications.",
    type: "work",
  },
  {
    role: "Bachelor of Science in Information Technology",
    organization: "Notre Dame of Kidapawan College",
    period: "Present",
    description: "Currently pursuing a degree in Information Technology, and applying all the knowledge and skills I have learned to real-world projects.\n Upcoming capstone project: Developing a game using Unity and C#.",
    type: "education",
  },
];
