import SectionWrapper from "../components/SectionWrapper";

const FACTS = [
  { label: "Based in", value: "Kidapawan City, North Cotabato" },
  { label: "Focus", value: "Game Development, UI/UX Design" },
  { label: "Available for", value: "Freelance & Full-time" },
  { label: "Experience", value: "2+ Years" },
];

export default function About() {
  return (
    <SectionWrapper id="about" eyebrow="About Me" title="Who I Am">
      <div className="about-grid">
        <div className="about-copy">
          <p>
            I'm a game developer and UI/UX designer who uses imagination, creativity, and technical skill to craft engaging experiences for players. I specialize in building games that are not only visually stunning but also intuitive and enjoyable to play.
          </p>
          <p>
            I always make sure that the games I create are optimized for performance and accessibility, ensuring that players of all skill levels can enjoy them. My goal is to create games that leave a lasting impression and provide players with memorable experiences.
          </p>
        </div>

        <div className="about-facts">
          {FACTS.map((fact) => (
            <div className="about-fact" key={fact.label}>
              <div className="about-fact-label">{fact.label}</div>
              <div className="about-fact-value">{fact.value}</div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
