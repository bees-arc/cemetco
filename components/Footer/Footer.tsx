import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact Us" },
];

const steelBuildings = [
  { href: "/steel-buildings/warehouses", label: "Warehouses" },
  { href: "/steel-buildings/factories", label: "Factories" },
  { href: "/steel-buildings/vehicle-sheds", label: "Vehicle Sheds" },
  { href: "/steel-buildings/aircraft-hangars", label: "Aircraft Hangars" },
  { href: "/steel-buildings/factory-renovations", label: "Factory Renovations" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* CTA Strip */}
      <div className={styles.ctaStrip}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <h2>Ready to Build Your Dream Structure?</h2>
              <p>Get a free consultation and quote from our expert engineers today.</p>
            </div>
            <Link href="/contact" className={styles.ctaBtn}>
              Get a Free Quote →
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Main */}
      <div className="container">
        <div className={styles.footerTop}>
          {/* Brand */}
          <div className={styles.brand}>
            <Image
              src="/logo.svg"
              alt="Cemetco Engineering"
              width={150}
              height={50}
              className={styles.footerLogo}
            />
            <p className={styles.brandDesc}>
              CEMETCO Engineering (Pvt) Ltd is Sri Lanka&apos;s premier steel
              building construction company. Specializing in industrial metal
              buildings with modern technology and structural design excellence
              for over 15 years.
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Twitter"
              >
                𝕏
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <nav className={styles.footerLinks}>
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className={styles.footerLink}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Steel Buildings */}
          <div>
            <h4 className={styles.colTitle}>Steel Buildings</h4>
            <nav className={styles.footerLinks}>
              {steelBuildings.map((link) => (
                <Link key={link.href} href={link.href} className={styles.footerLink}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📍</div>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>Address</span>
                  <span className={styles.contactValue}>
                    1/1, 236 Colombo - Galle Main Rd,<br />
                    Dehiwala, Mount Lavinia
                  </span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📞</div>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>Phone</span>
                  <span className={styles.contactValue}>
                    <a href="tel:+94112721662">+94 112 721 662</a>
                  </span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>✉</div>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>Email</span>
                  <span className={styles.contactValue}>
                    <a href="mailto:info@cemetco.lk">info@cemetco.lk</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} <span>Cemetco Engineering (Pvt) Ltd</span>. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/contact" className={styles.bottomLink}>Privacy Policy</Link>
            <Link href="/contact" className={styles.bottomLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
