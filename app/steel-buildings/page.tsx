import type { Metadata } from "next";
import Link from "next/link";
import {
  IconWarehouse,
  IconFactory,
  IconVehicle,
  IconHangar,
  IconRenovation,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Steel Building Construction",
  description:
    "Cemetco Engineering builds warehouses, factories, vehicle sheds, aircraft hangars, and factory renovations using advanced steel construction techniques in Sri Lanka.",
};

const buildings = [
  {
    slug: "warehouses",
    title: "Warehouses",
    desc: "Spacious, cost-effective warehouse solutions built to maximize your storage and operational needs.",
    icon: IconWarehouse,
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    color: "#1A3C6E",
  },
  {
    slug: "factories",
    title: "Factories",
    desc: "High-performance industrial factory structures for manufacturing, processing, and production operations.",
    icon: IconFactory,
    img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80",
    color: "#C8102E",
  },
  {
    slug: "vehicle-sheds",
    title: "Vehicle Sheds",
    desc: "Robust vehicle protection structures for any fleet size — from cars to heavy commercial vehicles.",
    icon: IconVehicle,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    color: "#C8102E",
  },
  {
    slug: "aircraft-hangars",
    title: "Aircraft Hangars",
    desc: "Precision-engineered aircraft hangar structures meeting CAASL and international aviation standards.",
    icon: IconHangar,
    img: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600&q=80",
    color: "#1A3C6E",
  },
  {
    slug: "factory-renovations",
    title: "Factory Renovations",
    desc: "Expert renovation services to modernize, strengthen, and upgrade existing industrial buildings.",
    icon: IconRenovation,
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    color: "#C8102E",
  },
];

export default function SteelBuildingsPage() {
  return (
    <div>
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <span>Steel Building Construction</span>
          </nav>
          <h1>Steel Building Construction</h1>
          <p>
            Comprehensive steel building solutions for every industrial
            application — designed and built by expert engineers.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3.5rem" }}>
            <span className="section-label">Our Specializations</span>
            <h2 className="section-title">What We Build</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Click on any building type to learn more about our capabilities,
              specifications, and past projects.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {buildings.map((b) => {
              const IconComp = b.icon;
              return (
                <Link
                  key={b.slug}
                  href={`/steel-buildings/${b.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div style={{
                    borderRadius: "12px", overflow: "hidden",
                    boxShadow: "var(--shadow-sm)", border: "1px solid var(--color-gray-100)",
                    background: "var(--color-white)",
                    transition: "all 0.25s ease",
                    cursor: "pointer",
                  }}
                  >
                    <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                      <img
                        src={b.img}
                        alt={b.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                      <div style={{
                        position: "absolute", inset: 0,
                        background: "linear-gradient(to top, rgba(13,17,23,0.7) 0%, transparent 60%)",
                      }} />
                      <div style={{
                        position: "absolute", bottom: "1rem", left: "1rem",
                        width: "44px", height: "44px", borderRadius: "10px",
                        background: "var(--color-white)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        boxShadow: "var(--shadow-md)",
                      }}>
                        <IconComp size={24} color={b.color} />
                      </div>
                    </div>
                    <div style={{ padding: "1.5rem" }}>
                      <h3 style={{ fontSize: "1.125rem", marginBottom: "0.5rem", color: "var(--color-gray-900)" }}>
                        {b.title}
                      </h3>
                      <p style={{ fontSize: "0.875rem", color: "var(--color-gray-500)", marginBottom: "1rem" }}>
                        {b.desc}
                      </p>
                      <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-primary)", display: "flex", alignItems: "center", gap: "6px" }}>
                        Learn More →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-off-white">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label">Get Started</span>
          <h2 className="section-title" style={{ maxWidth: "500px", margin: "0 auto 1rem" }}>
            Not Sure What You Need?
          </h2>
          <p style={{ marginBottom: "2rem", maxWidth: "500px", margin: "0 auto 2rem" }}>
            Our engineering team is happy to assess your requirements and
            recommend the best steel building solution for your needs.
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Talk to an Engineer
          </Link>
        </div>
      </section>
    </div>
  );
}
