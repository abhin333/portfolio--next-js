"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiDocker,
  SiFigma,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import Image from "next/image";

const CATEGORIES = [
  {
    title: "Frontend",
    emoji: "⚡",
    color: "#22d3ee",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs size={28} />, level: "Expert" },
      { name: "React.js", icon: <SiReact size={28} />, level: "Expert" },
      { name: "TypeScript", icon: <SiTypescript size={28} />, level: "Expert" },
      { name: "JavaScript", icon: <SiJavascript size={28} />, level: "Expert" },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={28} />, level: "Expert" },
      { name: "Bootstrap", icon: <SiBootstrap size={28} />, level: "Expert" },
    ],
  },
  {
    title: "Backend",
    emoji: "🛠️",
    color: "#a855f7",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs size={28} />, level: "Intermediate" },
      { name: "MongoDB", icon: <SiMongodb size={28} />, level: "Intermediate" },
      { name: "Firebase", icon: <SiFirebase size={28} />, level: "Intermediate" },
      { name: "REST APIs", icon: <TbApi size={28} />, level: "Intermediate" },
    ],
  },
  {
    title: "DevOps & Tools",
    emoji: "🚀",
    color: "#ec4899",
    skills: [
      { name: "Git & GitHub", icon: <SiGit size={28} />, level: "Expert" },
      { name: "Docker", icon: <SiDocker size={28} />, level: "Beginner" },
      { name: "Figma", icon: <SiFigma size={28} />, level: "Intermediate" },
    ],
  },
];

const COMPANIES = [
  {
    name: "Kiebot",
    period: "4 months",
    role: "Frontend Developer",
    logoUrl: "https://static.ambitionbox.com/alpha/company/photos/logos/kiebot.jpg",
  },
  {
    name: "Tiqr Events",
    period: "2024 – Present",
    role: "Full-Stack Developer",
    logoUrl: "https://tiqr.events/og-image.png",
  },
];

const levelColors: Record<string, string> = {
  Expert: "#22d3ee",
  Intermediate: "#a855f7",
  Beginner: "#ec4899",
};

const Experence = () => {
  return (
    <section id="skills" style={{ padding: "6rem 0" }}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <p className="section-eyebrow">What I Work With</p>
          <h2 className="section-title">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p style={{ color: "#94a3b8", marginTop: "1rem", maxWidth: "500px", margin: "1rem auto 0" }}>
            A curated set of tools and technologies I use to build scalable, high-performance web applications.
          </p>
        </motion.div>

        {/* Company Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "4rem" }}
        >
          <p style={{ textAlign: "center", color: "#475569", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Professional Experience
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            {COMPANIES.map((company, i) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card"
                style={{
                  padding: "1.5rem 2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  minWidth: "240px",
                }}
              >
                <div style={{ width: "50px", height: "50px", borderRadius: "10px", overflow: "hidden", background: "white", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Image src={company.logoUrl} alt={company.name} width={40} height={40} style={{ objectFit: "contain" }} />
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: "#f0f9ff", margin: 0, fontSize: "1rem" }}>{company.name}</p>
                  <p style={{ color: "#22d3ee", fontSize: "0.8rem", margin: "2px 0 0", fontWeight: 500 }}>{company.role}</p>
                  <p style={{ color: "#475569", fontSize: "0.75rem", margin: "1px 0 0" }}>{company.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid by Category */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.15 }}
              className="glass-card"
              style={{ padding: "2rem" }}
            >
              {/* Category Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: `${cat.color}18`,
                    border: `1px solid ${cat.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                  }}
                >
                  {cat.emoji}
                </div>
                <h3 style={{ margin: 0, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#f0f9ff", fontSize: "1.1rem" }}>
                  {cat.title}
                </h3>
              </div>

              {/* Skill Badges */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.1 + si * 0.07 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      padding: "0.75rem",
                      background: "rgba(34,211,238,0.04)",
                      border: "1px solid rgba(34,211,238,0.1)",
                      borderRadius: "10px",
                      cursor: "default",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}50`;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${cat.color}20`;
                      (e.currentTarget as HTMLElement).style.background = `${cat.color}08`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,211,238,0.1)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      (e.currentTarget as HTMLElement).style.background = "rgba(34,211,238,0.04)";
                    }}
                  >
                    <span style={{ color: cat.color, flexShrink: 0 }}>{skill.icon}</span>
                    <div style={{ minWidth: 0 }}>
                      <p style={{ margin: 0, fontSize: "0.82rem", fontWeight: 600, color: "#e2e8f0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {skill.name}
                      </p>
                      <p style={{ margin: 0, fontSize: "0.68rem", color: levelColors[skill.level], fontWeight: 500 }}>
                        {skill.level}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experence;
