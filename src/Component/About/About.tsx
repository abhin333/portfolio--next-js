"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Me from "../../../public/assets/me-about.jpeg";
import { FaAward, FaUsers, FaCode } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const STATS = [
  { icon: <FaAward size={22} />, label: "Experience", value: "1+ Year" },
  { icon: <FaUsers size={22} />, label: "Clients", value: "5+" },
  { icon: <FaCode size={22} />, label: "Projects", value: "10+" },
];

// Typed as Variants so `ease` is checked as a cubic-bezier tuple, not number[]
const EASE_OUT: [number, number, number, number] = [0.4, 0, 0.2, 1];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: EASE_OUT },
  }),
};

const About = () => {
  return (
    <section id="about" style={{ padding: "6rem 0" }}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <p className="section-eyebrow">Get To Know</p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE_OUT }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ position: "relative" }}>
              {/* Decorative ring */}
              <div
                style={{
                  position: "absolute",
                  inset: "-16px",
                  borderRadius: "50%",
                  background:
                    "conic-gradient(from 0deg, #22d3ee, #a855f7, #ec4899, #22d3ee)",
                  animation: "spin-slow 8s linear infinite",
                  zIndex: 0,
                  opacity: 0.6,
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  borderRadius: "50%",
                  overflow: "hidden",
                  width: "280px",
                  height: "280px",
                  border: "4px solid #020408",
                  boxShadow: "0 0 60px rgba(34,211,238,0.3)",
                }}
              >
                <Image
                  src={Me}
                  alt="Abhin.v — Web Developer"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  bottom: "-10px",
                  right: "-20px",
                  padding: "0.6rem 1rem",
                  background: "rgba(6, 13, 20, 0.95)",
                  border: "1px solid rgba(34,211,238,0.3)",
                  borderRadius: "12px",
                  backdropFilter: "blur(16px)",
                  zIndex: 2,
                }}
              >
                <p
                  style={{
                    fontSize: "0.72rem",
                    color: "#94a3b8",
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  Currently at
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#22d3ee",
                    fontWeight: 700,
                    margin: "2px 0 0",
                  }}
                >
                  🚀 Tiqr Events
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            {/* Stats */}
            <motion.div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i}
                  variants={fadeInUp}
                  className="glass-card"
                  style={{
                    padding: "1.25rem 1rem",
                    textAlign: "center",
                    cursor: "default",
                  }}
                >
                  <div
                    style={{
                      color: "#22d3ee",
                      marginBottom: "0.5rem",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {stat.icon}
                  </div>
                  <p
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 800,
                      color: "#f0f9ff",
                      fontFamily: "'Space Grotesk', sans-serif",
                      margin: 0,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: "#94a3b8",
                      margin: "0.2rem 0 0",
                    }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: 1.85,
                  fontSize: "1rem",
                  marginBottom: "1rem",
                }}
              >
                I&apos;m a passionate Full-Stack Web Developer with over 1 year
                of professional experience building modern, high-performance web
                applications. I specialize in crafting seamless user experiences
                using React, Next.js, and Node.js — with a strong eye for design
                and detail.
              </p>
              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: 1.85,
                  fontSize: "1rem",
                }}
              >
                From responsive front-ends to robust back-end APIs, I love
                turning complex problems into elegant, scalable solutions.
                Currently working at{" "}
                <span style={{ color: "#22d3ee", fontWeight: 600 }}>
                  Tiqr Events
                </span>
                , building next-generation event management platforms.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="#contact" className="btn-primary">
                Let&apos;s Talk <HiArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
