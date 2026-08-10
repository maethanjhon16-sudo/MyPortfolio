import { Timeline } from "antd";
import SectionWrapper from "../components/SectionWrapper";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <SectionWrapper id="experience" eyebrow="Resume" title="Where I've Been">
      <Timeline
        className="experience-timeline"
        items={experience.map((item) => ({
          color: item.type === "education" ? "#7b61ff" : "#4cc9f0",
          children: (
            <div>
              <h3 className="experience-role">{item.role}</h3>
              <div className="experience-meta">
                <span className="org">{item.organization}</span>
                <span>·</span>
                <span>{item.period}</span>
              </div>
              <p className="experience-desc">{item.description}</p>
            </div>
          ),
        }))}
      />
    </SectionWrapper>
  );
}
