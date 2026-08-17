"use client";

import { useState } from "react";
import {
  IconPin,
  IconPhone,
  IconMail,
  IconClock,
  IconCheckCircle,
} from "@/components/Icons";

export const dynamic = "force-dynamic";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Home</a>
            <span>›</span>
            <span>Contact Us</span>
          </nav>
          <h1>Get In Touch</h1>
          <p>
            Ready to start your steel building project? Contact our expert
            engineering team for a free consultation and quote.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "4rem", alignItems: "start" }}>
            {/* Contact Info */}
            <div>
              <span className="section-label">Contact Information</span>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "1rem" }}>
                We&apos;d Love to Hear From You
              </h2>
              <p style={{ marginBottom: "2.5rem" }}>
                Whether you have a question about our services, want to request a
                quote, or are ready to start a project — we&apos;re here to help.
              </p>

              {[
                {
                  icon: IconPin,
                  label: "Our Office",
                  value: "1/1, 236 Colombo - Galle Main Rd, Dehiwala, Mount Lavinia",
                  link: null,
                },
                {
                  icon: IconPhone,
                  label: "Phone",
                  value: "+94 112 721 662",
                  link: "tel:+94112721662",
                },
                {
                  icon: IconMail,
                  label: "Email",
                  value: "info@cemetco.lk",
                  link: "mailto:info@cemetco.lk",
                },
                {
                  icon: IconClock,
                  label: "Working Hours",
                  value: "Monday – Friday: 8:00 AM – 5:30 PM",
                  link: null,
                },
              ].map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      gap: "1.25rem",
                      alignItems: "flex-start",
                      marginBottom: "1.5rem",
                      padding: "1.25rem",
                      background: "var(--color-gray-50)",
                      borderRadius: "12px",
                      border: "1px solid var(--color-gray-100)",
                    }}
                  >
                    <div style={{
                      width: "48px", height: "48px", flexShrink: 0,
                      background: "rgba(200,16,46,0.1)",
                      borderRadius: "10px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <IconComp size={22} color="var(--color-primary)" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-gray-400)", marginBottom: "4px" }}>
                        {item.label}
                      </div>
                      {item.link ? (
                        <a href={item.link} style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                          {item.value}
                        </a>
                      ) : (
                        <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--color-gray-700)" }}>
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Map container */}
              <div style={{ borderRadius: "12px", overflow: "hidden", marginTop: "1rem", height: "200px", background: "var(--color-gray-100)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.5697424556!2d79.86830511480386!3d6.821714495052117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b83c3d72d3f%3A0xf72f8e5d33b9feba!2sDehiwala-Mount%20Lavinia!5e0!3m2!1sen!2slk!4v1695000000000!5m2!1sen!2slk"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {submitted ? (
                <div style={{
                  background: "var(--color-white)",
                  borderRadius: "16px",
                  padding: "3rem",
                  boxShadow: "var(--shadow-xl)",
                  textAlign: "center",
                }}>
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                    <IconCheckCircle size={56} color="var(--color-primary)" />
                  </div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
                    Message Sent!
                  </h3>
                  <p style={{ marginBottom: "2rem" }}>
                    Thank you for reaching out. Our team will get back to you
                    within 24 hours with a detailed response.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => { setSubmitted(false); setFormData({ name: "", phone: "", email: "", service: "", message: "" }); }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    background: "var(--color-white)",
                    borderRadius: "16px",
                    padding: "2.5rem",
                    boxShadow: "var(--shadow-xl)",
                    border: "1px solid var(--color-gray-100)",
                  }}
                >
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                    Request a Free Quote
                  </h3>
                  <p style={{ fontSize: "0.875rem", marginBottom: "2rem" }}>
                    Fill in the form below and we&apos;ll get back to you within 24 hours.
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                    <FormGroup label="Full Name *" id="name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Silva"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      />
                    </FormGroup>
                    <FormGroup label="Contact Number *" id="phone">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+94 77 000 0000"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      />
                    </FormGroup>
                  </div>

                  <FormGroup label="Email Address *" id="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                    />
                  </FormGroup>

                  <FormGroup label="Service Required" id="service">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{ ...inputStyle, appearance: "none" }}
                    >
                      <option value="">Select a service...</option>
                      <option>Warehouse Construction</option>
                      <option>Factory Construction</option>
                      <option>Vehicle Shed</option>
                      <option>Aircraft Hangar</option>
                      <option>Factory Renovation</option>
                      <option>Structural Design Only</option>
                      <option>Other</option>
                    </select>
                  </FormGroup>

                  <FormGroup label="Project Details *" id="message">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project — location, size, timeline, and any specific requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{ ...inputStyle, resize: "vertical" }}
                    />
                  </FormGroup>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "100%", justifyContent: "center", marginTop: "0.5rem", opacity: loading ? 0.7 : 1 }}
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FormGroup({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem" }}>
      <label htmlFor={id} style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--color-gray-700)" }}>
        {label}
      </label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "0.75rem 1rem",
  border: "1.5px solid var(--color-gray-200)",
  borderRadius: "8px",
  fontSize: "0.875rem",
  color: "var(--color-gray-900)",
  background: "var(--color-gray-50)",
  fontFamily: "inherit",
  outline: "none",
  width: "100%",
  transition: "all 0.15s ease",
};
