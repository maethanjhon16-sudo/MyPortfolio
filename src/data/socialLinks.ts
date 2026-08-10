import { GithubOutlined, LinkedinOutlined, MailOutlined, FacebookOutlined } from "@ant-design/icons";
import type { ComponentType } from "react";

export interface SocialLink {
  label: string;
  url: string;
  icon: ComponentType;
}

// Replace the URLs below with your own profiles.
export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/maethanjhon16-sudo", icon: GithubOutlined },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/maethan-jhon-hermac-22b570428/", icon: LinkedinOutlined },
  { label: "Facebook", url: "https://www.facebook.com/maethan.hermac", icon: FacebookOutlined },
  { label: "Email", url: "mailto:mjhermac@ndkc.edu.ph", icon: MailOutlined },
];
