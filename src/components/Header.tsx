import { useEffect, useState } from "react";
import Button from "./Button";

const NAV_ITEMS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certification", label: "Certification" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [activeHash, setActiveHash] = useState("#hero");

  useEffect(() => {
    const getSections = () =>
      NAV_ITEMS.map((item) => document.querySelector(item.href)).filter(
        (el): el is Element => Boolean(el)
      );

    const updateActiveHash = () => {
      const sections = getSections();
      if (sections.length === 0) return;

      const scrollPosition = window.scrollY + window.innerHeight * 0.25;

      const nearest = sections.reduce(
        (closest, section) => {
          const top = section.getBoundingClientRect().top + window.scrollY;
          return Math.abs(top - scrollPosition) < Math.abs(closest.top - scrollPosition)
            ? { section, top }
            : closest;
        },
        {
          section: sections[0],
          top: sections[0].getBoundingClientRect().top + window.scrollY,
        }
      );

      setActiveHash(`#${nearest.section.id}`);
    };

    updateActiveHash();
    window.addEventListener("scroll", updateActiveHash, { passive: true });
    window.addEventListener("resize", updateActiveHash);

    return () => {
      window.removeEventListener("scroll", updateActiveHash);
      window.removeEventListener("resize", updateActiveHash);
    };
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