import { socialLinks } from "../data/socialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <span className="footer-copy">© {year} Your Name. All rights reserved.</span>
        <div className="footer-socials">
          {socialLinks.map(({ label, url, icon: Icon }) => (
            <a key={label} href={url} target="_blank" rel="noreferrer" aria-label={label}>
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
