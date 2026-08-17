import type { Metadata } from "next";
import Link from "next/link";
import {
  IconDrafting,
  IconFactory,
  IconCrane,
  IconRoof,
  IconRenovation,
  IconManagement,
  IconZap,
  IconLeaf,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Cemetco Engineering's comprehensive steel building services including structural design, fabrication, erection, roofing, and renovation services in Sri Lanka.",
};

const services = [
  {
    icon: IconDrafting,
    title: "Structural Design",
    desc: "Advanced structural design using Staad Pro and Prokon software. Our engineers create optimized designs that minimize steel usage while maximizing structural performance.",
    features: ["3D Structural Modeling", "Load Analysis & Calculations", "Steel Optimization", "Foundation Design"],
  },
  {
    icon: IconFactory,
    title: "Steel Fabrication",
    desc: "High-quality steel component fabrication to exact specifications. We source premium steel and fabricate all components in-house for quality control.",
    features: ["CNC Precision Cutting", "Welding & Assembly", "Surface Treatment", "Quality Inspection"],
  },
  {
    icon: IconCrane,
    title: "Steel Erection",
    desc: "Expert on-site assembly and erection of steel structures by our experienced teams. Safety-first approach with all regulatory compliance.",
    features: ["Crane Operations", "Bolt-Up Assembly", "Plumb & Level Verification", "Safety Compliance"],
  },
  {
    icon: IconRoof,
    title: "Roofing Solutions",
    desc: "Complete roofing solutions for industrial buildings — from corrugated sheets to insulated panels, designed for Sri Lanka's climate.",
    features: ["Corrugated Steel Roofing", "Insulated Panel Roofing", "Skylight Installation", "Guttering & Drainage"],
  },
  {
    icon: IconRenovation,
    title: "Renovation & Retrofit",
    desc: "Modernize and upgrade existing industrial buildings. We assess current structures and provide cost-effective renovation solutions.",
    features: ["Structural Assessment", "Strengthening Works", "Extension & Expansion", "Modern Upgrades"],
  },
  {
    icon: IconManagement,
    title: "Project Management",
    desc: "End-to-end project management ensuring on-time, on-budget delivery. A dedicated project manager is assigned to each project.",
    features: ["Timeline Planning", "Resource Coordination", "Progress Reporting", "Handover Documentation"],
  },
  {
    icon: IconZap,
    title: "MEP Integration",
    desc: "Coordination of mechanical, electrical, and plumbing systems within steel structures for complete building solutions.",
    features: ["Electrical Conduit Planning", "HVAC Provisions", "Plumbing Rough-Ins", "Fire Protection Planning"],
  },
  {
    icon: IconLeaf,
    title: "Green Building",
    desc: "Sustainable building solutions that reduce environmental impact through optimized material use and energy-efficient design.",
    features: ["Steel Optimization", "Energy-Efficient Design", "Sustainable Materials", "LEED Guidance"],
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <span>Services</span>
          </nav>
          <h1>Our Engineering Services</h1>
          <p>
            Comprehensive steel building services from design to delivery —
            every stage handled by our expert engineering team.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Complete Steel Building Solutions</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              From structural design to final handover — we handle every aspect
              of your steel building project with precision and expertise.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
            {services.map((service, i) => {
              const IconComp = service.icon;
              const color = i % 2 === 0 ? "var(--color-primary)" : "var(--color-accent)";
              return (
                <div
                  key={service.title}
                  style={{
                    background: "var(--color-white)",
                    borderRadius: "12px",
                    padding: "2rem",
                    boxShadow: "var(--shadow-sm)",
                    border: "1px solid var(--color-gray-100)",
                    display: "flex",
                    gap: "1.5rem",
                    transition: "all 0.25s ease",
                  }}
                >
                  <div style={{
                    width: "60px", height: "60px", flexShrink: 0,
                    borderRadius: "12px",
                    background: i % 2 === 0 ? "rgba(200,16,46,0.1)" : "rgba(26,60,110,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <IconComp size={28} color={color} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ marginBottom: "0.5rem", fontSize: "1.125rem" }}>{service.title}</h3>
                    <p style={{ fontSize: "0.875rem", marginBottom: "1rem" }}>{service.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {service.features.map((f) => (
                        <span
                          key={f}
                          style={{
                            background: "var(--color-gray-50)",
                            border: "1px solid var(--color-gray-200)",
                            borderRadius: "100px",
                            padding: "3px 10px",
                            fontSize: "0.75rem",
                            color: "var(--color-gray-600)",
                            fontWeight: 500,
                          }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <span className="section-label">How We Work</span>
            <h2 className="section-title">Our Service Delivery Process</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {["Initial Consultation", "Design & Engineering", "Fabrication", "Erection & Handover"].map((step, i) => (
              <div key={step} style={{ textAlign: "center", padding: "2rem 1rem" }}>
                <div style={{
                  width: "64px", height: "64px", borderRadius: "50%",
                  background: "var(--color-primary)",
                  color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.25rem", fontWeight: 800, margin: "0 auto 1rem",
                  boxShadow: "var(--shadow-primary)",
                }}>{i + 1}</div>
                <h4 style={{ color: "var(--color-gray-900)", marginBottom: "0.5rem" }}>{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
            <span className="section-label">Get Started</span>
            <h2 className="section-title">Ready to Discuss Your Project?</h2>
            <p style={{ marginBottom: "2rem" }}>
              Contact our team for a free consultation. We&apos;ll assess your
              requirements and provide a detailed proposal tailored to your needs.
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Request a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
