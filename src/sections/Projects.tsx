import SectionWrapper from "../components/SectionWrapper";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <SectionWrapper id="projects" eyebrow="Portfolio" title="Selected Projects">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
