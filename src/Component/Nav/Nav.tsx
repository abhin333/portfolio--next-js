"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
} from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { BsSoundwave } from "react-icons/bs";

const navItems = [
  { href: "#hero", label: "Home", icon: <AiOutlineHome size={18} /> },
  { href: "#about", label: "About", icon: <AiOutlineUser size={18} /> },
  { href: "#skills", label: "Skills", icon: <BiBook size={18} /> },
  { href: "#projects", label: "Projects", icon: <AiOutlineProject size={18} /> },
  { href: "#contact", label: "Contact", icon: <BiMessageSquareDetail size={18} /> },
];

const Nav = () => {
  const [active, setActive] = useState("#hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Floating Nav */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        style={{
          position: "fixed",
          top: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          gap: "0.25rem",
          padding: "0.5rem 1rem",
          background: scrolled
            ? "rgba(6, 13, 20, 0.9)"
            : "rgba(6, 13, 20, 0.6)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(34, 211, 238, 0.15)",
          borderRadius: "50px",
          boxShadow: scrolled
            ? "0 8px 40px rgba(0,0,0,0.5), 0 0 20px rgba(34,211,238,0.08)"
            : "none",
          transition: "all 0.3s ease",
        }}
        className="hidden md:flex"
      >
        {/* Logo */}
        <Link href="#hero" style={{ textDecoration: "none", marginRight: "0.5rem" }}>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "1.1rem",
              background: "linear-gradient(135deg, #22d3ee, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              paddingRight: "0.75rem",
              borderRight: "1px solid rgba(34,211,238,0.2)",
            }}
          >
            Abhin
          </span>
        </Link>

        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setActive(item.href)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              padding: "0.4rem 0.85rem",
              borderRadius: "50px",
              fontSize: "0.85rem",
              fontWeight: 500,
              textDecoration: "none",
              transition: "all 0.2s ease",
              color: active === item.href ? "#22d3ee" : "#94a3b8",
              background:
                active === item.href
                  ? "rgba(34, 211, 238, 0.12)"
                  : "transparent",
              border:
                active === item.href
                  ? "1px solid rgba(34, 211, 238, 0.3)"
                  : "1px solid transparent",
            }}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}

        <a
          href="/assets/cv.pdf"
          download
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            padding: "0.4rem 1rem",
            borderRadius: "50px",
            fontSize: "0.82rem",
            fontWeight: 700,
            textDecoration: "none",
            background: "linear-gradient(135deg, #22d3ee, #06b6d4)",
            color: "#020408",
            marginLeft: "0.25rem",
            transition: "all 0.2s ease",
            boxShadow: "0 0 20px rgba(34,211,238,0.3)",
          }}
        >
          Resume
        </a>

        {/* AI Audio Guide Button */}
        <button
          onClick={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(
                new CustomEvent("trigger-ai-audio", {
                  detail: { prompt: "introduce" },
                })
              );
            }
          }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            padding: "0.4rem 0.85rem",
            borderRadius: "50px",
            fontSize: "0.82rem",
            fontWeight: 600,
            background: "rgba(34,211,238,0.12)",
            border: "1px solid rgba(34,211,238,0.35)",
            color: "#22d3ee",
            cursor: "pointer",
            marginLeft: "0.25rem",
            transition: "all 0.2s ease",
          }}
          title="Start AI Voice Guide"
        >
          <BsSoundwave size={15} />
          <span>AI Audio</span>
        </button>
      </motion.nav>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setMobileOpen(!mobileOpen)}
        style={{
          position: "fixed",
          top: "1rem",
          right: "1rem",
          zIndex: 1100,
          padding: "0.6rem",
          background: "rgba(6, 13, 20, 0.9)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(34, 211, 238, 0.2)",
          borderRadius: "12px",
          cursor: "pointer",
          color: "#22d3ee",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="flex md:hidden"
      >
        {mobileOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
      </motion.button>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "75%",
              maxWidth: "320px",
              zIndex: 1050,
              background: "rgba(6, 13, 20, 0.97)",
              backdropFilter: "blur(30px)",
              borderLeft: "1px solid rgba(34,211,238,0.15)",
              display: "flex",
              flexDirection: "column",
              padding: "5rem 2rem 2rem",
              gap: "0.5rem",
            }}
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={item.href}
                  onClick={() => {
                    setActive(item.href);
                    setMobileOpen(false);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.9rem 1.25rem",
                    borderRadius: "12px",
                    fontSize: "1rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    color: active === item.href ? "#22d3ee" : "#94a3b8",
                    background:
                      active === item.href
                        ? "rgba(34, 211, 238, 0.1)"
                        : "transparent",
                    border: "1px solid",
                    borderColor:
                      active === item.href
                        ? "rgba(34,211,238,0.3)"
                        : "transparent",
                    transition: "all 0.2s ease",
                  }}
                >
                  {item.icon}
                  {item.label}
                </Link>
              </motion.div>
            ))}

            {/* Mobile AI Voice Guide Button */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              style={{ marginTop: "1rem" }}
            >
              <button
                onClick={() => {
                  setMobileOpen(false);
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(
                      new CustomEvent("trigger-ai-audio", {
                        detail: { prompt: "introduce" },
                      })
                    );
                  }
                }}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.9rem 1.25rem",
                  borderRadius: "12px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  background:
                    "linear-gradient(135deg, rgba(34,211,238,0.2), rgba(168,85,247,0.2))",
                  border: "1px solid rgba(34,211,238,0.4)",
                  color: "#22d3ee",
                  cursor: "pointer",
                }}
              >
                <BsSoundwave size={20} />
                <span>🎙️ AI Audio Guide</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.6)",
              zIndex: 1040,
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
