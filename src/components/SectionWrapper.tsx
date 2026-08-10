import { useEffect, useRef, useState, type ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Wraps every page section with a consistent id anchor, optional
 * eyebrow/title header, and a fade-up reveal triggered once the
 * section enters the viewport.
 */
export default function SectionWrapper({ id, eyebrow, title, children, className }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={["section", "reveal", isVisible ? "is-visible" : "", className].filter(Boolean).join(" ")}
    >
      <div className="container">
        {(eyebrow || title) && (
          <header className="section-head">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && <h2>{title}</h2>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
