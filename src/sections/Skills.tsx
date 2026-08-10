import { Row, Col } from "antd";
import SectionWrapper from "../components/SectionWrapper";
import SkillBadge from "../components/SkillBadge";
import { skills } from "../data/skills";

const CATEGORIES = ["Frontend", "Backend", "Tools & Platforms"] as const;

export default function Skills() {
  return (
    <SectionWrapper id="skills" eyebrow="Skills" title="What I Work With">
      <Row gutter={[24, 32]}>
        {CATEGORIES.map((category) => (
          <Col xs={24} md={8} key={category}>
            <h3 style={{ fontSize: "1rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
              {category}
            </h3>
            <div className="skills-grid" style={{ gridTemplateColumns: "1fr" }}>
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <SkillBadge key={skill.name} {...skill} />
                ))}
            </div>
          </Col>
        ))}
      </Row>
    </SectionWrapper>
  );
}
