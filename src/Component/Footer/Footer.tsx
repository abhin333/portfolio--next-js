"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiArrowUp } from "react-icons/hi";
import { BsCodeSlash } from "react-icons/bs";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const SOCIALS = [
  {
    href: "https://github.com/abhin333",
    icon: <FaGithub size={18} />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/abhin-v-974252215/",
    icon: <FaLinkedinIn size={18} />,
    label: "LinkedIn",
  },
  {
    href: "mailto:abhinpradeepan@gmail.com",
    icon: <MdEmail size={18} />,
    label: "Email",
  },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      style={{
        position: "relative",
        borderTop: "1px solid rgba(34,211,238,0.12)",
        padding: "3rem 0 2rem",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "200px",
          background:
            "radial-gradient(ellipse at center bottom, rgba(34,211,238,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            gap: "2rem",
            marginBottom: "2.5rem",
          }}
          className="footer-grid"
        >
          {/* Logo & tagline */}
          <div>
            <Link href="#hero" style={{ textDecoration: "none" }}>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.5rem",
                  background: "linear-gradient(135deg, #22d3ee, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "block",
                  marginBottom: "0.4rem",
                }}
              >
                Abhin.v
              </span>
            </Link>
            <p style={{ color: "#475569", fontSize: "0.82rem", margin: 0 }}>
              Web Developer
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                marginTop: "0.5rem",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 8px #22c55e",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "#22c55e",
                  fontWeight: 500,
                }}
              >
                Available for opportunities
              </span>
            </div>
          </div>

          {/* Nav Links (center) */}
          <nav
            style={{
              display: "flex",
              gap: "1.5rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: "#94a3b8",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#22d3ee")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#94a3b8")
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social + Back to top (right) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {SOCIALS.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    background: "rgba(34,211,238,0.06)",
                    border: "1px solid rgba(34,211,238,0.15)",
                    color: "#94a3b8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#22d3ee";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(34,211,238,0.4)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 0 16px rgba(34,211,238,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(34,211,238,0.15)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.4rem 0.85rem",
                background: "rgba(34,211,238,0.06)",
                border: "1px solid rgba(34,211,238,0.2)",
                borderRadius: "8px",
                color: "#22d3ee",
                cursor: "pointer",
                fontSize: "0.78rem",
                fontWeight: 600,
                transition: "all 0.2s",
              }}
            >
              <HiArrowUp size={14} /> Back to Top
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(34,211,238,0.2), transparent)",
            margin: "0 0 1.5rem",
          }}
        />

        {/* Copyright */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <BsCodeSlash size={14} style={{ color: "#22d3ee" }} />
          <p
            style={{
              color: "#475569",
              fontSize: "0.8rem",
              margin: 0,
              textAlign: "center",
            }}
          >
            © {new Date().getFullYear()} Abhin.v — Built with using Next.js &
            Tailwind CSS
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .footer-grid > *:last-child {
            align-items: center !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
