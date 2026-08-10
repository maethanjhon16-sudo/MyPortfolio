import { Tag } from "antd";
import type { Project } from "../data/projects";

interface ProjectCardProps extends Project {
  index: number;
}

export default function ProjectCard({ title, description, image, tags, url, index }: ProjectCardProps) {
  const CardInner = (
    <div className="project-card">
      <div className="project-card-image">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="project-card-body">
        <span className="project-card-index">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="project-card-title">{title}</h3>
        <p>{description}</p>
        <div className="project-card-tags">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </div>
  );

  if (!url) return CardInner;

  return (
    <a href={url} target="_blank" rel="noreferrer" aria-label={`View ${title}`}>
      {CardInner}
    </a>
  );
}
