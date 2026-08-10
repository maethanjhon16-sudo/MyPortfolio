import { GithubOutlined, LinkedinOutlined, TwitterOutlined, MailOutlined } from "@ant-design/icons";
import type { ComponentType } from "react";

export interface SocialLink {
  label: string;
  url: string;
  icon: ComponentType;
}

// Replace the URLs below with your own profiles.
export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/your-username", icon: GithubOutlined },
  { label: "LinkedIn", url: "https://linkedin.com/in/your-username", icon: LinkedinOutlined },
  { label: "Twitter", url: "https://twitter.com/your-username", icon: TwitterOutlined },
  { label: "Email", url: "mailto:you@example.com", icon: MailOutlined },
];
