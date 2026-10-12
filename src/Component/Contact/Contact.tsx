"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdEmail, MdContentCopy, MdCheck } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { HiPaperAirplane } from "react-icons/hi";
import emailjs from "emailjs-com";

const EMAIL = "abhinpradeepan@gmail.com";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/abhin333",
    icon: <FaGithub size={22} />,
    label: "GitHub",
    color: "#f0f9ff",
  },
  {
    href: "https://www.linkedin.com/in/abhin-v-974252215",
    icon: <FaLinkedinIn size={22} />,
    label: "LinkedIn",
    color: "#0ea5e9",
  },
  {
    href: "https://api.whatsapp.com/send?phone=917902314666",
    icon: <FaWhatsapp size={22} />,
    label: "WhatsApp",
    color: "#22c55e",
  },
  {
    href: `mailto:${EMAIL}`,
    icon: <MdEmail size={22} />,
    label: "Email",
    color: "#22d3ee",
  },
];

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(
        "service_x3mflno",
        "template_qggt1zg",
        form.current,
        "Y_HlEaixg-so_4Km8",
      );
      setStatus("success");
      form.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const inputStyle = (name: string) => ({
    width: "100%",
    padding: "0.9rem 1rem",
    background: "rgba(10, 22, 40, 0.6)",
    border: `1px solid ${focused === name ? "rgba(34,211,238,0.5)" : "rgba(34,211,238,0.15)"}`,
    borderRadius: "10px",
    color: "#f0f9ff",
    fontSize: "0.95rem",
    fontFamily: "inherit",
    outline: "none",
    transition: "all 0.2s ease",
    boxShadow: focused === name ? "0 0 20px rgba(34,211,238,0.1)" : "none",
  });

  return (
    <section id="contact" style={{ padding: "6rem 0" }}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="section-title">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p
            style={{
              color: "#94a3b8",
              marginTop: "1rem",
              maxWidth: "450px",
              margin: "1rem auto 0",
            }}
          >
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left — Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {/* Email Copy Card */}
            <div className="glass-card" style={{ padding: "2rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(34,211,238,0.1)",
                    border: "1px solid rgba(34,211,238,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#22d3ee",
                  }}
                >
                  <MdEmail size={22} />
                </div>
                <div>
                  <p style={{ margin: 0, fontWeight: 700, color: "#f0f9ff" }}>
                    Email
                  </p>
                  <p
                    style={{ margin: 0, fontSize: "0.78rem", color: "#94a3b8" }}
                  >
                    Drop me a line anytime
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.75rem 1rem",
                  background: "rgba(34,211,238,0.05)",
                  border: "1px solid rgba(34,211,238,0.15)",
                  borderRadius: "8px",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.82rem",
                    color: "#22d3ee",
                    fontFamily: "'JetBrains Mono', monospace",
                    wordBreak: "break-all",
                  }}
                >
                  {EMAIL}
                </span>
                <motion.button
                  onClick={copyEmail}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: copied ? "#22c55e" : "#94a3b8",
                    padding: "0.25rem",
                    flexShrink: 0,
                    transition: "color 0.2s",
                  }}
                  title="Copy email"
                >
                  {copied ? <MdCheck size={18} /> : <MdContentCopy size={18} />}
                </motion.button>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card" style={{ padding: "2rem" }}>
              <p
                style={{
                  margin: "0 0 1.25rem",
                  fontWeight: 600,
                  color: "#f0f9ff",
                }}
              >
                Find Me On
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {SOCIAL_LINKS.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.75rem 1rem",
                      background: "rgba(34,211,238,0.04)",
                      border: "1px solid rgba(34,211,238,0.1)",
                      borderRadius: "10px",
                      color: "#94a3b8",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = link.color;
                      (e.currentTarget as HTMLElement).style.borderColor =
                        `${link.color}40`;
                      (e.currentTarget as HTMLElement).style.background =
                        `${link.color}08`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(34,211,238,0.1)";
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(34,211,238,0.04)";
                    }}
                  >
                    <span style={{ color: "inherit" }}>{link.icon}</span>
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-card"
            style={{ padding: "2.5rem" }}
          >
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "1.3rem",
                color: "#f0f9ff",
                marginBottom: "1.75rem",
              }}
            >
              Send a Message
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
                className="form-row"
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      color: "#94a3b8",
                      marginBottom: "0.4rem",
                      fontWeight: 500,
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    autoComplete="off"
                    required
                    style={inputStyle("name")}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      color: "#94a3b8",
                      marginBottom: "0.4rem",
                      fontWeight: 500,
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    autoComplete="off"
                    required
                    style={inputStyle("email")}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.82rem",
                    color: "#94a3b8",
                    marginBottom: "0.4rem",
                    fontWeight: 500,
                  }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry / Collaboration"
                  autoComplete="off"
                  style={inputStyle("subject")}
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.82rem",
                    color: "#94a3b8",
                    marginBottom: "0.4rem",
                    fontWeight: 500,
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  autoComplete="off"
                  required
                  style={{
                    ...inputStyle("message"),
                    resize: "vertical",
                    minHeight: "120px",
                  }}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    padding: "0.75rem 1rem",
                    background: "rgba(34,197,94,0.1)",
                    border: "1px solid rgba(34,197,94,0.3)",
                    borderRadius: "8px",
                    color: "#22c55e",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  ✅ Message sent! I&apos;ll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    padding: "0.75rem 1rem",
                    background: "rgba(239,68,68,0.1)",
                    border: "1px solid rgba(239,68,68,0.3)",
                    borderRadius: "8px",
                    color: "#ef4444",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  ❌ Oops! Something went wrong. Please try again.
                </motion.div>
              )}

              <div style={{ display: "flex", gap: "0.75rem" }}>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={status === "sending"}
                  className="btn-primary"
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    opacity: status === "sending" ? 0.7 : 1,
                  }}
                >
                  {status === "sending" ? (
                    <>⏳ Sending...</>
                  ) : (
                    <>
                      <HiPaperAirplane size={16} /> Send Message
                    </>
                  )}
                </motion.button>
                <motion.button
                  type="reset"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-outline"
                  style={{ padding: "0.75rem 1.25rem" }}
                >
                  Reset
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
