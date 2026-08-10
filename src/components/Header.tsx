import { useEffect, useState } from "react";
import Button from "./Button";

const NAV_ITEMS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [activeHash, setActiveHash] = useState("#hero");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.querySelector(item.href)).filter(
      (el): el is Element => Boolean(el)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const renderLinks = () => (
    <nav className="site-nav">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={activeHash === item.href ? "is-active" : ""}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );

  return (
    <header className="site-header">
      <div className="container">
        <a href="#hero" className="brand-mark">
          Maethan Jh<span>on B. Hermac</span>
        </a>

        {renderLinks()}

        <Button variant="signal" href="#contact">
          Let's talk
        </Button>
      </div>
    </header>
  );
}
