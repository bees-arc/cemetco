import type { Metadata } from "next";
import {
  IconTarget,
  IconShield,
  IconDrafting,
  IconEngineering,
  IconLeaf,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Cemetco Engineering's 15+ years of steel building expertise, our mission, vision, and the professional team behind Sri Lanka's premier construction company.",
};

const milestones = [
  { year: "2009", title: "Company Founded", desc: "Cemetco Engineering established with a vision to revolutionize steel building construction in Sri Lanka." },
  { year: "2012", title: "First Major Project", desc: "Completed our first large-scale industrial warehouse for a leading manufacturing company." },
  { year: "2015", title: "Expanded Services", desc: "Extended our portfolio to include aircraft hangars and specialized industrial structures." },
  { year: "2018", title: "100+ Projects", desc: "Reached a major milestone of completing over 100 steel building projects across Sri Lanka." },
  { year: "2021", title: "Modern Software Adoption", desc: "Fully integrated Staad Pro and Prokon for advanced structural design optimization." },
  { year: "2024", title: "150+ Projects & Beyond", desc: "Continuing to grow with 150+ completed projects and a team of 30+ expert engineers." },
];

const values = [
  {
    icon: IconEngineering,
    title: "Innovation",
    desc: "We continuously adopt the latest structural engineering software and construction methodologies.",
  },
  {
    icon: IconShield,
    title: "Integrity",
    desc: "Transparent pricing, honest timelines, and unwavering commitment to quality in every project.",
  },
  {
    icon: IconLeaf,
    title: "Sustainability",
    desc: "Optimizing steel usage to reduce waste and preserve resources for future generations.",
  },
  {
    icon: IconTarget,
    title: "Client Focus",
    desc: "Every design decision is guided by our clients' specific needs, budgets, and timelines.",
  },
];

const team = [
  {
    name: "Managing Director",
    role: "Founder & CEO",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Chief Engineer",
    role: "Structural Engineering Lead",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
  },
  {
    name: "Project Manager",
    role: "Senior Project Coordinator",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Design Engineer",
    role: "Staad Pro & Prokon Specialist",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <span>About Us</span>
          </nav>
          <h1>About Cemetco Engineering</h1>
          <p>
            Sri Lanka&apos;s premier steel building construction company — 15+
            years of engineering excellence.
          </p>
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="section-title">Building Sri Lanka&apos;s Industrial Future</h2>
              <p style={{ marginBottom: "1.5rem" }}>
                CEMETCO Engineering (Pvt) Ltd was founded with a clear focus on the
                industrial metal building market — a sector that was growing fast
                but still had significant gaps to fill with new technology and
                structural design techniques.
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                Even though large engineering organizations perform mega civil
                infrastructural constructions, they outsource metal constructions
                since this is a highly specialized area in civil engineering.
                CEMETCO focuses exclusively on this specialty, capitalizing on 15+
                years of experience, professional expertise, and deep market knowledge.
              </p>
              <p>
                Steel prices continue to rise globally due to scarcity. As engineers,
                we take our responsibility seriously — using modern structural design
                software like <strong>Staad Pro</strong> and{" "}
                <strong>Prokon</strong> to optimize every design, reducing steel
                consumption while delivering maximum structural performance.
              </p>
            </div>
            <div style={{ position: "relative", height: "480px" }}>
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Cemetco construction site"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px", boxShadow: "var(--shadow-xl)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION / VALUES ── */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <span className="section-label">Our Foundation</span>
            <h2 className="section-title">Mission, Vision & Values</h2>
          </div>

          <div className="grid-3" style={{ marginBottom: "4rem" }}>
            <div style={cardStyle}>
              <div style={iconWrap("#C8102E")}>
                <IconTarget size={28} color="#C8102E" />
              </div>
              <h3 style={{ marginBottom: "1rem" }}>Our Mission</h3>
              <div className="check-list">
                <div className="check-item"><div className="check-icon"/><span>Promoting Sustainable Growth and Green Development</span></div>
                <div className="check-item"><div className="check-icon"/><span>Empowering Communities Through Innovation</span></div>
                <div className="check-item"><div className="check-icon"/><span>Customer-Centric Approach</span></div>
                <div className="check-item"><div className="check-icon"/><span>Building Stronger Communities</span></div>
              </div>
            </div>
            <div style={cardStyle}>
              <div style={iconWrap("#1A3C6E")}>
                <IconDrafting size={28} color="#1A3C6E" />
              </div>
              <h3 style={{ marginBottom: "1rem" }}>Our Vision</h3>
              <div className="check-list">
                <div className="check-item"><div className="check-icon"/><span>Inspiring Modern Architecture</span></div>
                <div className="check-item"><div className="check-icon"/><span>Pioneering Sustainable Construction</span></div>
                <div className="check-item"><div className="check-icon"/><span>Empowering Communities Through Innovation</span></div>
                <div className="check-item"><div className="check-icon"/><span>Leading the Future of Building Solutions</span></div>
              </div>
            </div>
            <div style={cardStyle}>
              <div style={iconWrap("#C8102E")}>
                <IconShield size={28} color="#C8102E" />
              </div>
              <h3 style={{ marginBottom: "1rem" }}>Our History</h3>
              <div className="check-list">
                <div className="check-item"><div className="check-icon"/><span>Humble Beginnings</span></div>
                <div className="check-item"><div className="check-icon"/><span>Milestones and Achievements</span></div>
                <div className="check-item"><div className="check-icon"/><span>Building a Legacy of Trust</span></div>
                <div className="check-item"><div className="check-icon"/><span>Shaping the Future, Rooted in the Past</span></div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center" style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Our Core Values</h3>
          </div>
          <div className="grid-4">
            {values.map((v) => {
              const IconComp = v.icon;
              return (
                <div key={v.title} style={{ ...cardStyle, textAlign: "center" }}>
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                    <div style={iconWrap("#1A3C6E")}>
                      <IconComp size={28} color="#1A3C6E" />
                    </div>
                  </div>
                  <h4 style={{ marginBottom: "0.75rem", color: "var(--color-gray-900)" }}>{v.title}</h4>
                  <p style={{ fontSize: "0.875rem" }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">Company Milestones</h2>
          </div>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {milestones.map((m, i) => (
              <div key={m.year} style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{
                    width: "56px", height: "56px", borderRadius: "50%",
                    background: i % 2 === 0 ? "var(--color-primary)" : "var(--color-accent)",
                    color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 800, fontSize: "0.75rem", flexShrink: 0,
                  }}>{m.year}</div>
                  {i < milestones.length - 1 && (
                    <div style={{ width: "2px", flex: 1, background: "var(--color-gray-200)", minHeight: "2rem", marginTop: "8px" }} />
                  )}
                </div>
                <div style={{ paddingTop: "0.75rem", paddingBottom: "1rem" }}>
                  <h4 style={{ color: "var(--color-gray-900)", marginBottom: "0.5rem" }}>{m.title}</h4>
                  <p style={{ fontSize: "0.875rem" }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <span className="section-label">Our Team</span>
            <h2 className="section-title">Meet the Experts Behind Cemetco</h2>
          </div>
          <div className="grid-4">
            {team.map((member) => (
              <div key={member.name} style={{ textAlign: "center" }}>
                <div style={{ width: "100%", paddingBottom: "100%", position: "relative", borderRadius: "12px", overflow: "hidden", marginBottom: "1rem", boxShadow: "var(--shadow-md)" }}>
                  <img
                    src={member.img}
                    alt={member.name}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <h4 style={{ color: "var(--color-gray-900)", marginBottom: "0.25rem" }}>{member.name}</h4>
                <p style={{ fontSize: "0.875rem", color: "var(--color-primary)", fontWeight: 600 }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  background: "var(--color-white)",
  borderRadius: "12px",
  padding: "2rem",
  boxShadow: "var(--shadow-sm)",
  border: "1px solid var(--color-gray-100)",
};

function iconWrap(color: string): React.CSSProperties {
  return {
    width: "56px", height: "56px",
    borderRadius: "12px",
    background: `${color}18`,
    display: "flex", alignItems: "center", justifyContent: "center",
    marginBottom: "1.25rem",
  };
}
