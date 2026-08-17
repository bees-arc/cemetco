"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { IconPin } from "@/components/Icons";

const categories = ["All", "Warehouse", "Factory", "Vehicle Shed", "Aircraft Hangar", "Renovation"];

const projects = [
  { title: "Central Warehouse Complex", category: "Warehouse", location: "Colombo, Sri Lanka", area: "12,000 sqft", year: "2023", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" },
  { title: "Garment Factory Building", category: "Factory", location: "Kandy, Sri Lanka", area: "8,500 sqft", year: "2023", img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80" },
  { title: "International Airport Hangar", category: "Aircraft Hangar", location: "Katunayake, Sri Lanka", area: "25,000 sqft", year: "2022", img: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600&q=80" },
  { title: "Auto Dealer Vehicle Shed", category: "Vehicle Shed", location: "Gampaha, Sri Lanka", area: "6,000 sqft", year: "2022", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  { title: "Export Processing Warehouse", category: "Warehouse", location: "Hambantota, Sri Lanka", area: "18,000 sqft", year: "2022", img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80" },
  { title: "Food Processing Factory", category: "Factory", location: "Kurunegala, Sri Lanka", area: "9,200 sqft", year: "2021", img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&q=80" },
  { title: "Heavy Equipment Shed", category: "Vehicle Shed", location: "Galle, Sri Lanka", area: "4,500 sqft", year: "2021", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80" },
  { title: "Pharmaceutical Factory", category: "Factory", location: "Kelaniya, Sri Lanka", area: "11,000 sqft", year: "2021", img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80" },
  { title: "Cold Storage Warehouse", category: "Warehouse", location: "Nuwara Eliya, Sri Lanka", area: "7,800 sqft", year: "2020", img: "https://images.unsplash.com/photo-1607400201515-c2c41c07d307?w=600&q=80" },
  { title: "Factory Structural Renovation", category: "Renovation", location: "Moratuwa, Sri Lanka", area: "14,000 sqft", year: "2020", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80" },
  { title: "Aviation Training Hangar", category: "Aircraft Hangar", location: "Ratmalana, Sri Lanka", area: "16,500 sqft", year: "2020", img: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=600&q=80" },
  { title: "Industrial Park Expansion", category: "Factory", location: "Biyagama, Sri Lanka", area: "22,000 sqft", year: "2019", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80" },
];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <span>Projects</span>
          </nav>
          <h1>Our Projects</h1>
          <p>
            A portfolio of 150+ successfully completed steel building projects
            across Sri Lanka.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Filter Tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "3rem", justifyContent: "center" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: "0.5rem 1.25rem",
                  borderRadius: "100px",
                  border: active === cat ? "none" : "1.5px solid var(--color-gray-200)",
                  background: active === cat ? "var(--color-primary)" : "transparent",
                  color: active === cat ? "#fff" : "var(--color-gray-600)",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  fontFamily: "inherit",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {filtered.map((project) => (
              <div
                key={project.title}
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-sm)",
                  border: "1px solid var(--color-gray-100)",
                  background: "var(--color-white)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-xl)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
                }}
              >
                <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                  <img
                    src={project.img}
                    alt={project.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.06)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                  />
                  <div style={{
                    position: "absolute", top: "1rem", right: "1rem",
                    background: "var(--color-primary)", color: "#fff",
                    fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase",
                    letterSpacing: "0.08em", padding: "4px 10px", borderRadius: "100px",
                  }}>
                    {project.category}
                  </div>
                </div>
                <div style={{ padding: "1.25rem 1.5rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-gray-900)", marginBottom: "0.5rem" }}>
                    {project.title}
                  </h3>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", alignItems: "center" }}>
                    <span style={{ fontSize: "0.8rem", color: "var(--color-gray-500)", display: "flex", alignItems: "center", gap: "4px" }}>
                      <IconPin size={13} color="var(--color-primary)" />
                      {project.location}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "var(--color-gray-400)" }}>{project.area} · {project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <p style={{ marginBottom: "1.5rem", color: "var(--color-gray-600)" }}>
              Have a project in mind? Let&apos;s discuss how we can bring it to life.
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Start Your Project →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
