import SectionWrapper from "../components/SectionWrapper";

interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
  link: string;
}

const certifications: CertificationItem[] = [
  {
    title: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco",
    date: "2024",
    description: "Networking fundamentals, routing, switching, and foundational security concepts.",
    link: "https://www.credly.com/badges/dcc19b55-ae9a-4a7f-bca1-1e36d1553a54/public_url",
  },
];

export default function Certification() {
  return (
    <SectionWrapper id="certification" eyebrow="Certification" title="Cisco Certification">
      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        }}
      >
        {certifications.map((cert) => (
          <div
            key={cert.title}
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "16px",
              padding: "1.25rem",
              background: "rgba(255,255,255,0.04)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
              minHeight: "220px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.8rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  opacity: 0.75,
                }}
              >
                {cert.issuer}
              </p>
              <h3 style={{ margin: "0.4rem 0", fontSize: "1.05rem" }}>{cert.title}</h3>
              <p style={{ margin: "0 0 0.5rem", fontWeight: 600, opacity: 0.85 }}>{cert.date}</p>
              <p style={{ margin: 0, lineHeight: 1.6, opacity: 0.9 }}>{cert.description}</p>
            </div>
            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              style={{
                marginTop: "1rem",
                display: "inline-block",
                color: "#4cc9f0",
                textDecoration: "underline",
              }}
            >
              View credential
            </a>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}