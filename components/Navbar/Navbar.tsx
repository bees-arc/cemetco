"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

interface SteelLink {
  href: string;
  label: string;
}

interface NavItem {
  href: string;
  label: string;
  children?: SteelLink[];
}

const steelBuildingLinks: SteelLink[] = [
  { href: "/steel-buildings/warehouses", label: "Warehouses" },
  { href: "/steel-buildings/factories", label: "Factories" },
  { href: "/steel-buildings/vehicle-sheds", label: "Vehicle Sheds" },
  { href: "/steel-buildings/aircraft-hangars", label: "Aircraft Hangars" },
  { href: "/steel-buildings/factory-renovations", label: "Factory Renovations" },
];

const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/steel-buildings",
    label: "Steel Buildings",
    children: steelBuildingLinks,
  },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [steelOpen, setSteelOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = mobileOpen ? "hidden" : "";
    }
  }, [mobileOpen]);

  const transparent = isHome && !scrolled;
  const navClassName = `${styles.navbar} ${transparent ? styles.transparent : styles.scrolled}`;

  return (
    <React.Fragment>
      <nav className={navClassName}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
            <Image
              src="/logo.svg"
              alt="Cemetco Engineering"
              width={160}
              height={52}
              className={styles.logoImg}
              priority
            />
          </Link>

          <div className={styles.navLinks}>
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <div key={link.href} className={`${styles.navLink} ${styles.hasDropdown}`}>
                    <span className={pathname.startsWith("/steel-buildings") ? styles.active : ""}>
                      {link.label}
                    </span>
                    <svg className={styles.dropdownIcon} viewBox="0 0 12 12" fill="none">
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className={styles.dropdown}>
                      {link.children.map((child) => (
                        <Link key={child.href} href={child.href} className={styles.dropdownLink}>
                          <span className={styles.dropdownIcon2} />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/contact" className={`${styles.navLink} ${styles.navCta}`}>
              Get a Quote
            </Link>
          </div>

          <button
            className={`${styles.mobileToggle} ${mobileOpen ? styles.open : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className={styles.mobileBackdrop} onClick={() => setMobileOpen(false)} />
      )}

      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ""}`}>
        {navLinks.map((link) => {
          if (link.children) {
            return (
              <div key={link.href}>
                <button
                  className={styles.mobileNavBtn}
                  onClick={() => setSteelOpen(!steelOpen)}
                >
                  <span>{link.label}</span>
                  <span className={styles.arrowSpan}>{steelOpen ? "▲" : "▼"}</span>
                </button>
                {steelOpen && (
                  <div className={styles.mobileSubLinks}>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={styles.mobileSubLink}
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileNavLink} ${pathname === link.href ? styles.active : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          );
        })}
        <Link href="/contact" className={styles.mobileCta} onClick={() => setMobileOpen(false)}>
          Get a Free Quote →
        </Link>
      </div>
    </React.Fragment>
  );
}
