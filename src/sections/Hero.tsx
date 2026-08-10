import profile from "../assets/2024-049_thumb.png";
import Button from "../components/Button";

const STATS = [
  { value: "2+", label: "Years Building" },
  { value: "15+", label: "Projects Shipped" },
  { value: "100%", label: "Remote Ready" },
];

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div>
          <span className="eyebrow hero-kicker">Game Developer</span>
          <h1 className="hero-title">
            I build <span className="highlight">enjoyable, highly engaging</span> games for people to play.
          </h1>
          <p className="hero-lead">
            Hi, I'm Maethan Jhon B. Hermac — I design and build hyper-realistic, high-performance games,
            turning ideas into experiences people enjoy playing.
          </p>
          <div className="hero-actions">
            <Button variant="signal" href="#projects">
              View My Work
            </Button>
            <Button variant="ghost" href="#contact">
              Get In Touch
            </Button>
          </div>
          <div className="hero-stats">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="hero-stat-value">{stat.value}</div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-ring" aria-hidden />
          <div className="hero-visual-frame">
            <img src={profile} alt="Portrait of Your Name" />
          </div>
        </div>
      </div>
    </section>
  );
}
