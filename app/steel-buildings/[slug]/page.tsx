import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

type Slug = "warehouses" | "factories" | "vehicle-sheds" | "aircraft-hangars" | "factory-renovations";

const pages: Record<Slug, {
  title: string;
  subtitle: string;
  description: string;
  longDesc: string;
  features: string[];
  specs: { label: string; value: string }[];
  images: string[];
  category: string;
}> = {
  warehouses: {
    title: "Warehouse Construction",
    subtitle: "Spacious, cost-effective steel warehouse solutions",
    description: "Modern steel warehouses designed and built to maximize your storage capacity, operational efficiency, and long-term durability.",
    longDesc: `Our steel warehouses are engineered to meet the demanding requirements of modern logistics and storage operations. Using advanced structural design software, we optimize every element to reduce steel consumption while maintaining maximum structural integrity.

Whether you need a small storage shed or a large distribution center, Cemetco delivers warehouse structures that stand the test of time — built to withstand Sri Lanka's tropical climate with quality materials and expert craftsmanship.`,
    features: [
      "Clear-span design for maximum usable floor space",
      "High eave heights for racking and crane systems",
      "Wide bay spacing for forklift and vehicle access",
      "Insulated roofing for temperature control",
      "Multiple entry points and loading dock options",
      "Natural ventilation and lighting provisions",
      "Fire suppression system provisions",
      "Expandable structure for future growth",
    ],
    specs: [
      { label: "Clear Span", value: "Up to 60m" },
      { label: "Eave Height", value: "5m – 20m+" },
      { label: "Bay Spacing", value: "6m – 10m" },
      { label: "Roof Pitch", value: "5° – 15°" },
      { label: "Wind Load", value: "As per SLAS 1792" },
      { label: "Floor Load", value: "Custom to requirement" },
    ],
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
      "https://images.unsplash.com/photo-1607400201515-c2c41c07d307?w=800&q=80",
    ],
    category: "Warehouse",
  },
  factories: {
    title: "Factory Construction",
    subtitle: "High-performance industrial factory structures",
    description: "Purpose-built steel factory structures designed for manufacturing, processing, and production — combining structural strength with operational flexibility.",
    longDesc: `Cemetco's factory buildings are designed to support the most demanding manufacturing operations. From garment factories to pharmaceutical plants, we create steel structures that meet your operational, safety, and regulatory requirements.

Our experienced engineers collaborate with your team from day one to understand production workflows, equipment layouts, and future expansion plans — delivering a factory that truly works for your business.`,
    features: [
      "Heavy floor load capacity for machinery",
      "Overhead crane provisions and runway beams",
      "Mezzanine floor options for office spaces",
      "Specialized ventilation and exhaust provisions",
      "High-bay configurations for tall equipment",
      "Clean room and controlled environment options",
      "Multiple utilities integration (electrical, plumbing)",
      "Compliant with industrial safety standards",
    ],
    specs: [
      { label: "Clear Span", value: "Up to 50m" },
      { label: "Eave Height", value: "6m – 18m" },
      { label: "Crane Capacity", value: "Up to 50 tons" },
      { label: "Floor Load", value: "Up to 20 kN/m²" },
      { label: "Roof Pitch", value: "5° – 20°" },
      { label: "Bay Spacing", value: "6m – 9m" },
    ],
    images: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80",
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    ],
    category: "Factory",
  },
  "vehicle-sheds": {
    title: "Vehicle Sheds",
    subtitle: "Robust protection for any vehicle or fleet",
    description: "Durable steel vehicle sheds designed to protect your fleet investment — from passenger cars to heavy commercial vehicles and construction equipment.",
    longDesc: `Vehicle sheds from Cemetco provide reliable, cost-effective protection for any type of vehicle. Our structures are designed to be sturdy, weather-resistant, and visually appealing, suitable for commercial, institutional, and industrial applications.

Whether you need covered parking for a vehicle fleet, a workshop for heavy machinery, or a combined facility, we design structures that are both functional and economical.`,
    features: [
      "Single and multi-bay configurations",
      "Open, semi-open, or enclosed options",
      "Wide column spacing for easy vehicle access",
      "Heavy vehicle configurations available",
      "Integrated drainage systems",
      "Optional side cladding and roller shutters",
      "Security lighting provisions",
      "Can accommodate car wash and workshop facilities",
    ],
    specs: [
      { label: "Bay Width", value: "3.5m – 6m" },
      { label: "Eave Height", value: "4m – 8m" },
      { label: "Bay Depth", value: "6m – 12m" },
      { label: "Number of Bays", value: "2 – 50+" },
      { label: "Roof Type", value: "Mono-slope / Gable" },
      { label: "Cladding", value: "Optional sides & back" },
    ],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?w=800&q=80",
    ],
    category: "Vehicle Shed",
  },
  "aircraft-hangars": {
    title: "Aircraft Hangars",
    subtitle: "Precision-engineered aviation structures",
    description: "Specialized aircraft hangar structures meeting international aviation standards — from small private hangars to large commercial maintenance facilities.",
    longDesc: `Aircraft hangars represent some of the most technically demanding steel structures due to their large clear spans, door systems, and strict aviation authority requirements. Cemetco brings specialized expertise in hangar design and construction.

Our hangars are designed in consultation with aviation authorities and operators to ensure full compliance with Civil Aviation Authority of Sri Lanka (CAASL) requirements and international standards.`,
    features: [
      "Extra-large clear spans for aircraft accommodation",
      "Hangar door systems (bi-fold, sliding, hydraulic)",
      "Anti-static flooring provisions",
      "Specialized fire suppression systems",
      "High-bay lighting for maintenance work",
      "Fuel storage and dispensing provisions",
      "CAASL compliant design",
      "Adjacent office and workshop spaces",
    ],
    specs: [
      { label: "Clear Span", value: "Up to 100m" },
      { label: "Eave Height", value: "6m – 25m+" },
      { label: "Door Width", value: "Up to 80m" },
      { label: "Door Height", value: "6m – 20m" },
      { label: "Floor Load", value: "As per aircraft type" },
      { label: "Standards", value: "CAASL / ICAO compliant" },
    ],
    images: [
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80",
      "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    ],
    category: "Aircraft Hangar",
  },
  "factory-renovations": {
    title: "Factory Renovations",
    subtitle: "Modernize and upgrade your existing industrial buildings",
    description: "Expert renovation and retrofit services to upgrade existing industrial buildings — improving structural integrity, expanding capacity, and modernizing facilities.",
    longDesc: `Many industrial buildings in Sri Lanka are aging and no longer meet the demands of modern manufacturing operations. Cemetco's renovation services provide a cost-effective alternative to complete rebuilding, extending the life and functionality of existing structures.

Our engineers conduct detailed structural assessments before recommending renovation approaches. We minimize operational disruption, often completing renovation work in phases to allow production to continue.`,
    features: [
      "Full structural assessment and evaluation",
      "Structural strengthening and reinforcement",
      "Roof replacement and upgrade",
      "Building extension and expansion",
      "Column addition and bay extension",
      "Floor slab reinforcement",
      "Cladding replacement and weatherproofing",
      "Phased execution to minimize production downtime",
    ],
    specs: [
      { label: "Assessment Method", value: "Non-destructive testing" },
      { label: "Design Software", value: "Staad Pro / Prokon" },
      { label: "Execution", value: "Phased to minimize disruption" },
      { label: "Strengthening", value: "Steel plate / section addition" },
      { label: "Roof Types", value: "All types supported" },
      { label: "Standards", value: "SLS / BS compliant" },
    ],
    images: [
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    ],
    category: "Renovation",
  },
};

export async function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug as Slug];
  if (!page) return { title: "Not Found" };
  return {
    title: page.title,
    description: page.description,
  };
}

export default async function SteelBuildingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug as Slug];
  if (!page) notFound();

  return (
    <div>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <a href="/steel-buildings">Steel Buildings</a>
            <span>›</span>
            <span>{page.title}</span>
          </nav>
          <h1>{page.title}</h1>
          <p>{page.subtitle}</p>
        </div>
      </div>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "4rem", alignItems: "start" }}>
            {/* Text */}
            <div>
              <span className="section-label">{page.category}</span>
              <h2 className="section-title">{page.title}</h2>
              <p style={{ marginBottom: "1.5rem", fontSize: "1.0625rem" }}>{page.description}</p>
              {page.longDesc.split("\n\n").map((para, i) => (
                <p key={i} style={{ marginBottom: "1rem" }}>{para}</p>
              ))}

              <h3 style={{ marginTop: "2rem", marginBottom: "1.25rem", fontSize: "1.25rem" }}>
                Key Features
              </h3>
              <div className="check-list">
                {page.features.map((f) => (
                  <div className="check-item" key={f}>
                    <div className="check-icon" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn btn-primary" style={{ marginTop: "2rem" }}>
                Get a Quote for {page.title}
              </Link>
            </div>

            {/* Images + Specs */}
            <div>
              {/* Main Image */}
              <div style={{ borderRadius: "12px", overflow: "hidden", marginBottom: "1rem", boxShadow: "var(--shadow-lg)" }}>
                <img src={page.images[0]} alt={page.title} style={{ width: "100%", height: "280px", objectFit: "cover" }} />
              </div>
              {/* Two Smaller Images */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
                {page.images.slice(1).map((img, i) => (
                  <div key={i} style={{ borderRadius: "10px", overflow: "hidden", boxShadow: "var(--shadow-md)" }}>
                    <img src={img} alt={`${page.title} ${i + 2}`} style={{ width: "100%", height: "160px", objectFit: "cover" }} />
                  </div>
                ))}
              </div>

              {/* Specs */}
              <div style={{ background: "var(--color-off-white)", borderRadius: "12px", padding: "1.5rem", border: "1px solid var(--color-gray-200)" }}>
                <h4 style={{ marginBottom: "1rem", color: "var(--color-gray-900)" }}>Technical Specifications</h4>
                {page.specs.map((spec) => (
                  <div
                    key={spec.label}
                    style={{ display: "flex", justifyContent: "space-between", paddingBlock: "0.625rem", borderBottom: "1px solid var(--color-gray-200)" }}
                  >
                    <span style={{ fontSize: "0.875rem", color: "var(--color-gray-500)" }}>{spec.label}</span>
                    <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-gray-900)" }}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Building Types */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "2.5rem" }}>
            <span className="section-label">Explore More</span>
            <h2 className="section-title" style={{ fontSize: "1.75rem" }}>Other Steel Building Solutions</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            {Object.entries(pages)
              .filter(([s]) => s !== slug)
              .map(([s, p]) => (
                <Link
                  key={s}
                  href={`/steel-buildings/${s}`}
                  className="btn btn-outline-primary"
                >
                  {p.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
