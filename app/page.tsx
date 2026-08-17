"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "./page.module.css";
import {
  IconFactory,
  IconWarehouse,
  IconVehicle,
  IconHangar,
  IconRenovation,
  IconEngineering,
  IconPin,
  IconPhone,
  IconMail,
  IconDrafting,
} from "@/components/Icons";

const ProjectsMap = dynamic(() => import("@/components/ProjectsMap/ProjectsMap"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: "100%",
        height: "580px",
        borderRadius: "16px",
        background: "#e5e9ec",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--color-gray-500)",
        fontWeight: 600,
      }}
    >
      Loading Interactive Project Map...
    </div>
  ),
});

// ─── Scroll Animation Hook ───────────────────────────────
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const container = ref.current;
    if (!container) return;

    const animatedEls = container.querySelectorAll(
      ".fade-up, .fade-in, .fade-left, .fade-right"
    );
    animatedEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return ref;
}

// ─── Counter Animation ────────────────────────────────────
function useCountAnimation(target: number, duration = 2000) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            el.textContent = target.toString();
            clearInterval(timer);
          } else {
            el.textContent = Math.floor(start).toString();
          }
        }, 16);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);
  return ref;
}

// ─── Stats Item ───────────────────────────────────────────
function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const numRef = useCountAnimation(value);
  return (
    <div className={styles.statItem}>
      <div className={styles.statValue}>
        <span ref={numRef}>0</span>
        <span className={styles.statSuffix}>{suffix}</span>
      </div>
      <p className={styles.statLabel}>{label}</p>
    </div>
  );
}

// ─── Service Card Data ────────────────────────────────────
const services = [
  {
    icon: IconFactory,
    title: "Factories",
    desc: "State-of-the-art steel factory structures designed for efficiency, safety, and durability.",
    href: "/steel-buildings/factories",
    color: "#C8102E",
  },
  {
    icon: IconWarehouse,
    title: "Warehouses",
    desc: "Spacious, cost-effective warehouse solutions built to maximize your storage and operational needs.",
    href: "/steel-buildings/warehouses",
    color: "#1A3C6E",
  },
  {
    icon: IconVehicle,
    title: "Vehicle Sheds",
    desc: "Robust vehicle protection structures for any fleet size — from cars to heavy machinery.",
    href: "/steel-buildings/vehicle-sheds",
    color: "#C8102E",
  },
  {
    icon: IconHangar,
    title: "Aircraft Hangars",
    desc: "Precision-engineered aircraft hangar structures meeting international aviation standards.",
    href: "/steel-buildings/aircraft-hangars",
    color: "#1A3C6E",
  },
  {
    icon: IconRenovation,
    title: "Factory Renovations",
    desc: "Expert renovation and upgrade services to modernize existing industrial buildings.",
    href: "/steel-buildings/factory-renovations",
    color: "#C8102E",
  },
  {
    icon: IconEngineering,
    title: "Engineering Services",
    desc: "Comprehensive structural design, fabrication, and erection services using Staad Pro & Prokon.",
    href: "/services",
    color: "#1A3C6E",
  },
];

// ─── Projects ─────────────────────────────────────────────
const projects = [
  {
    title: "Industrial Warehouse",
    category: "Warehouse",
    location: "Colombo, Sri Lanka",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
  {
    title: "Manufacturing Factory",
    category: "Factory",
    location: "Kandy, Sri Lanka",
    img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80",
  },
  {
    title: "Aircraft Hangar",
    category: "Aircraft Hangar",
    location: "Bandaranaike Airport",
    img: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600&q=80",
  },
  {
    title: "Multi-Bay Vehicle Shed",
    category: "Vehicle Shed",
    location: "Gampaha, Sri Lanka",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
];

// ─── Why Choose Items ─────────────────────────────────────
const whyUs = [
  "15+ years of specialized steel building expertise",
  "Advanced structural design using Staad Pro & Prokon",
  "Cost-efficient engineering with optimized steel usage",
  "End-to-end service from design to completion",
  "Experienced professional engineering team",
  "Customer-centric approach with on-time delivery",
];

// ─── Main Page Component ──────────────────────────────────
export default function HomePage() {
  const pageRef = useScrollAnimation();

  return (
    <div ref={pageRef}>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85"
            alt="Steel construction building"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={`container ${styles.heroContent}`}>
          <div className={`${styles.heroBadge} fade-up`}>
            <IconDrafting size={16} color="var(--color-primary)" />
            <span>Sri Lanka&apos;s Premier Steel Building Experts</span>
          </div>
          <h1 className={`${styles.heroTitle} fade-up delay-1`}>
            Building Excellence<br />
            <span className={styles.heroHighlight}>in Steel</span>
          </h1>
          <p className={`${styles.heroDesc} fade-up delay-2`}>
            CEMETCO Engineering specializes in industrial metal buildings — from
            warehouses and factories to aircraft hangars. Modern technology,
            structural excellence, 15+ years of expertise.
          </p>
          <div className={`${styles.heroCtas} fade-up delay-3`}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Get a Free Quote
            </Link>
            <Link href="/projects" className="btn btn-outline btn-lg">
              View Our Projects
            </Link>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <span />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            <StatItem value={150} suffix="+" label="Completed Projects" />
            <StatItem value={15} suffix="+" label="Years Experience" />
            <StatItem value={200} suffix="+" label="Happy Clients" />
            <StatItem value={30} suffix="+" label="Expert Engineers" />
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className={`section ${styles.aboutSection}`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={`${styles.aboutText} fade-left`}>
              <span className="section-label">Who We Are</span>
              <h2 className="section-title">
                The Construction<br />Excellence in Sri Lanka
              </h2>
              <p style={{ marginBottom: "1.5rem" }}>
                CEMETCO focuses on the industrial metal building market, filling
                critical gaps with new technology and structural design techniques
                to meet cost-efficient, high-level industrial building needs.
              </p>
              <p style={{ marginBottom: "2rem" }}>
                Steel price goes up day by day. As engineers, we have a greater
                responsibility to save steel for future use. That&apos;s why efficient
                structural engineering design is so important. We use modern
                software such as <strong>Staad Pro</strong> and{" "}
                <strong>Prokon</strong> to optimize our structural designs — saving
                you money while preserving resources for future generations.
              </p>
              <div className={`check-list`} style={{ marginBottom: "2rem" }}>
                {whyUs.slice(0, 4).map((item, i) => (
                  <div className="check-item" key={i}>
                    <div className="check-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className={`${styles.aboutImages} fade-right`}>
              <div className={styles.imgMain}>
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Cemetco construction team"
                  fill
                  style={{ objectFit: "cover", borderRadius: "12px" }}
                />
              </div>
              <div className={styles.imgAccent}>
                <Image
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=400&q=80"
                  alt="Steel structure engineering"
                  fill
                  style={{ objectFit: "cover", borderRadius: "12px" }}
                />
              </div>
              <div className={styles.expBadge}>
                <span className={styles.expNum}>15+</span>
                <span className={styles.expText}>Years of<br />Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS & INTERACTIVE MAP SECTION ── */}
      <section className={`section bg-off-white`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center fade-up`} style={{ marginBottom: "3.5rem" }}>
            <span className="section-label">Building Solutions & Project Footprint</span>
            <h2 className="section-title">Structures for Every Industrial Need</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Explore our core building capabilities on the left, and view our live project locations pin-pointed across Sri Lanka on the map.
            </p>
          </div>

          <div className={styles.solutionsSectionGrid}>
            {/* LEFT: 6 Service Cards Vertical List */}
            <div className={`${styles.servicesVerticalList} fade-left`}>
              {services.map((service) => {
                const IconComp = service.icon;
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={styles.serviceCardRect}
                  >
                    <div
                      className={styles.serviceIconRect}
                      style={{ background: `${service.color}12` }}
                    >
                      <IconComp size={24} color={service.color} />
                    </div>
                    <div className={styles.serviceCardRectContent}>
                      <h3 className={styles.serviceTitleRect}>{service.title}</h3>
                      <p className={styles.serviceDescRect}>{service.desc}</p>
                    </div>
                    <span className={styles.serviceArrowRect}>→</span>
                  </Link>
                );
              })}
            </div>

            {/* RIGHT: Interactive Projects Map */}
            <div className={`${styles.mapSectionRight} fade-right`}>
              <ProjectsMap />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className={`section`}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={`${styles.whyImg} fade-left`}>
              <Image
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80"
                alt="Engineering team at work"
                fill
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
              <div className={styles.whyImgOverlay}>
                <div className={styles.whyBadge}>
                  <span className={styles.whyBadgeNum}>100%</span>
                  <span className={styles.whyBadgeText}>Client Satisfaction</span>
                </div>
              </div>
            </div>
            <div className={`${styles.whyText} fade-right`}>
              <span className="section-label">Why Choose Us</span>
              <h2 className="section-title">
                Why CEMETCO is the Right Choice
              </h2>
              <p style={{ marginBottom: "2rem" }}>
                Even though there are engineering organizations who do mega civil
                infrastructural building constructions, they outsource metal
                constructions since this is a specialized area. CEMETCO focuses
                on this specialized area and capitalizes on 15 years of
                experience, professional background, and market awareness.
              </p>
              <div className="check-list">
                {whyUs.map((item, i) => (
                  <div className="check-item" key={i}>
                    <div className="check-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className={`section bg-off-white`}>
        <div className="container">
          <div
            className={`${styles.sectionHeader}`}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "3rem",
            }}
          >
            <div className="fade-up">
              <span className="section-label">Our Work</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>
                Featured Projects
              </h2>
            </div>
            <Link href="/projects" className={`btn btn-outline-primary fade-up delay-2`}>
              View All Projects
            </Link>
          </div>
          <div className={styles.projectsGrid}>
            {projects.map((project, i) => (
              <div
                key={project.title}
                className={`${styles.projectCard} fade-up delay-${i + 1}`}
              >
                <div className={styles.projectImg}>
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className={styles.projectOverlay}>
                    <span className={styles.projectCategory}>
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className={styles.projectInfo}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectLocation} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <IconPin size={14} color="var(--color-primary)" />
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`section ${styles.processSection}`}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center fade-up`}>
            <span className="section-label">How We Work</span>
            <h2 className="section-title">Our Simple 4-Step Process</h2>
          </div>
          <div className={styles.processGrid}>
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "We meet with you to understand your requirements, site conditions, and project goals.",
              },
              {
                step: "02",
                title: "Design & Planning",
                desc: "Our engineers use Staad Pro & Prokon to create optimized structural designs.",
              },
              {
                step: "03",
                title: "Fabrication",
                desc: "High-quality steel components are fabricated to exact specifications in our facilities.",
              },
              {
                step: "04",
                title: "Erection & Handover",
                desc: "Expert on-site assembly, finishing, and final handover with full documentation.",
              },
            ].map((step, i) => (
              <div
                key={step.step}
                className={`${styles.processCard} fade-up delay-${i + 1}`}
              >
                <div className={styles.processStep}>{step.step}</div>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT TEASER ── */}
      <section className={`section bg-off-white`}>
        <div className="container">
          <div className={styles.contactTeaser}>
            <div className={`${styles.contactTeaserText} fade-left`}>
              <span className="section-label">Get In Touch</span>
              <h2 className="section-title">
                Ready to Start Your Project?
              </h2>
              <p>
                Contact our expert engineering team for a free consultation and
                quote. We&apos;re ready to bring your construction vision to life
                with precision and excellence.
              </p>
              <div className={styles.contactInfoItems}>
                <div className={styles.contactInfoItem}>
                  <div className={styles.contactIconWrap}>
                    <IconPin size={18} color="var(--color-primary)" />
                  </div>
                  <div>
                    <strong>Address</strong>
                    <p>1/1, 236 Colombo - Galle Main Rd, Dehiwala, Mount Lavinia</p>
                  </div>
                </div>
                <div className={styles.contactInfoItem}>
                  <div className={styles.contactIconWrap}>
                    <IconPhone size={18} color="var(--color-primary)" />
                  </div>
                  <div>
                    <strong>Phone</strong>
                    <p><a href="tel:+94112721662">+94 112 721 662</a></p>
                  </div>
                </div>
                <div className={styles.contactInfoItem}>
                  <div className={styles.contactIconWrap}>
                    <IconMail size={18} color="var(--color-primary)" />
                  </div>
                  <div>
                    <strong>Email</strong>
                    <p><a href="mailto:info@cemetco.lk">info@cemetco.lk</a></p>
                  </div>
                </div>
              </div>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: "1.5rem" }}>
                Send Us a Message
              </Link>
            </div>
            <div className={`${styles.contactTeaserForm} fade-right`}>
              <QuickContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Quick Contact Form ───────────────────────────────────
function QuickContactForm() {
  return (
    <form className={styles.quickForm} onSubmit={(e) => e.preventDefault()}>
      <h3 className={styles.formTitle}>Quick Inquiry</h3>
      <div className={styles.formGroup}>
        <label htmlFor="qname">Full Name</label>
        <input id="qname" type="text" placeholder="John Silva" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="qphone">Contact Number</label>
        <input id="qphone" type="tel" placeholder="+94 77 000 0000" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="qemail">Email Address</label>
        <input id="qemail" type="email" placeholder="john@example.com" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="qmessage">Project Details</label>
        <textarea
          id="qmessage"
          rows={4}
          placeholder="Tell us about your project..."
          required
        />
      </div>
      <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
        Send Inquiry →
      </button>
    </form>
  );
}
