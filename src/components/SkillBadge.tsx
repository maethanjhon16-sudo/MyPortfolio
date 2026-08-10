import { Progress } from "antd";
import type { Skill } from "../data/skills";

export default function SkillBadge({ name, level }: Skill) {
  return (
    <div className="skill-badge">
      <div className="skill-badge-head">
        <span className="skill-badge-name">{name}</span>
        <span className="skill-badge-level">{level}%</span>
      </div>
      <Progress
        percent={level}
        showInfo={false}
        strokeColor={{ "0%": "#4cc9f0", "100%": "#7b61ff" }}
        trailColor="#1f2530"
        size="small"
      />
    </div>
  );
}
