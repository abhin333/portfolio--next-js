"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink, HiChevronLeft, HiChevronRight } from "react-icons/hi";

import IMG2 from "../../../public/assets/portfolio2.png";
import IMG3 from "../../../public/assets/portfolio3.png";
import IMG4 from "../../../public/assets/portfolio4.jpg";
import IMG6 from "../../../public/assets/movie-logo.jpg";
import IMG1 from "../../../public/assets/portfolio1.jpg";
import IMG5 from "../../../public/assets/portfolio5.jpg";

const PROJECTS = [
  {
    id: 1,
    title: "Easy Food — MERN Stack",
    description:
      "A full-stack food ordering application built with MongoDB, Express, React, and Node.js. Features real-time cart updates, user authentication, and order tracking.",
    image: IMG2,
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/abhin333/easy-foode-node",
    demo: "https://easy-fastfood.netlify.app",
    featured: true,
  },
  {
    id: 2,
    title: "Easy Food — React & Firebase",
    description:
      "Mobile-first food ordering PWA with Firebase backend, real-time database sync, and Google Authentication for seamless user experience.",
    image: IMG2,
    tags: ["React", "Firebase", "Firestore", "PWA"],
    github: "https://github.com/abhin333/Easy_Food.git",
    demo: "https://easy-food-123.netlify.app/",
    featured: true,
  },
  {
    id: 3,
    title: "OLX Clone",
    description:
      "A classified ads platform clone featuring product listings, category filters, user authentication with Firebase, and real-time data updates.",
    image: IMG3,
    tags: ["React", "Firebase", "CSS"],
    github: "https://github.com/abhin333/olx.git",
    demo: "https://olx-clone-e55a9.web.app/",
  },
  {
    id: 4,
    title: "Netflix Clone",
    description:
      "A pixel-perfect Netflix UI clone with TMDB API integration, movie trailers, and responsive browsing with genre filters.",
    image: IMG4,
    tags: ["React", "TMDB API", "Firebase Auth"],
    github: "https://github.com/abhin333/Netflix.git",
    demo: "https://netflixsnew.netlify.app/",
  },
  {
    id: 5,
    title: "Movie App",
    description:
      "A movie discovery platform powered by TMDB API with advanced search, filtering by genres, ratings, and detailed movie info pages.",
    image: IMG6,
    tags: ["React", "TMDB API", "Axios"],
    github: "https://github.com/abhin333/movies",
    demo: "https://moviesnew.netlify.app/",
  },
  {
    id: 6,
    title: "Books & Stationery",
    description:
      "An e-commerce storefront for books and stationery products with product catalog, shopping cart, and a clean modern UI.",
    image: IMG1,
    tags: ["React", "Firebase", "CSS"],
    github: "https://github.com/abhin333",
    demo: "https://books-stationery-4f20c4.netlify.app/",
  },
  {
    id: 7,
    title: "Personal Portfolio",
    description:
      "My original personal portfolio showcasing my projects and skills, built with vanilla HTML, CSS, and JavaScript.",
    image: IMG5,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/abhin333/fb.git",
    demo: "https://abhin333.github.io/abhin/",
  },
];

const TAG_COLORS: Record<string, string> = {
  "React": "#22d3ee",
  "Next.js": "#94a3b8",
  "Node.js": "#22c55e",
  "MongoDB": "#22c55e",
  "Express": "#f59e0b",
  "Firebase": "#fb923c",
  "TypeScript": "#3b82f6",
  "TMDB API": "#f472b6",
  "Firestore": "#fb923c",
  "PWA": "#a855f7",
  "Axios": "#818cf8",
  "CSS": "#38bdf8",
  "HTML": "#f97316",
  "JavaScript": "#facc15",
  "Firebase Auth": "#fb923c",
  "Docker": "#38bdf8",
};

const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" style={{ padding: "6rem 0" }}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <p className="section-eyebrow">My Recent Work</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: "#94a3b8", marginTop: "1rem", maxWidth: "500px", margin: "1rem auto 0" }}>
            A showcase of real-world applications I&apos;ve designed and built — from MVPs to full-stack platforms.
          </p>
        </motion.div>

        {/* Featured Projects (first 2) */}
        <div style={{ marginBottom: "2rem" }}>
          {PROJECTS.filter((p) => p.featured).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
                gap: "0",
                marginBottom: "2rem",
                background: "rgba(10, 22, 40, 0.7)",
                backdropFilter: "blur(16px)",
                border: "1px solid",
                borderColor: hoveredId === project.id ? "rgba(34,211,238,0.4)" : "rgba(34,211,238,0.12)",
                borderRadius: "20px",
                overflow: "hidden",
                transition: "all 0.4s ease",
                boxShadow: hoveredId === project.id ? "0 0 40px rgba(34,211,238,0.15)" : "none",
                flexDirection: i % 2 === 0 ? "row" : "row-reverse",
              }}
              className={`featured-card ${i % 2 !== 0 ? "reverse" : ""}`}
            >
              {/* Image */}
              <div style={{ position: "relative", height: "300px", overflow: "hidden" }} className={i % 2 !== 0 ? "order-2" : ""}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                    transform: hoveredId === project.id ? "scale(1.06)" : "scale(1)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(${i % 2 === 0 ? "90deg" : "270deg"}, rgba(10,22,40,0.8), transparent)`,
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "center", gap: "1rem" }} className={i % 2 !== 0 ? "order-1" : ""}>
                <span style={{ fontSize: "0.75rem", color: "#22d3ee", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  ⭐ Featured Project
                </span>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "#f0f9ff", margin: 0 }}>
                  {project.title}
                </h3>
                <p style={{ color: "#94a3b8", lineHeight: 1.7, margin: 0, fontSize: "0.9rem" }}>
                  {project.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "0.25rem 0.65rem",
                        borderRadius: "6px",
                        fontSize: "0.72rem",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 500,
                        color: TAG_COLORS[tag] || "#94a3b8",
                        background: `${TAG_COLORS[tag] || "#94a3b8"}15`,
                        border: `1px solid ${TAG_COLORS[tag] || "#94a3b8"}30`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "0.5rem 1.1rem", fontSize: "0.82rem" }}>
                    <FaGithub size={15} /> GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.5rem 1.1rem", fontSize: "0.82rem" }}>
                    <HiExternalLink size={15} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rest Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {PROJECTS.filter((p) => !p.featured).map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                background: "rgba(10, 22, 40, 0.7)",
                backdropFilter: "blur(16px)",
                border: "1px solid",
                borderColor: hoveredId === project.id ? "rgba(34,211,238,0.4)" : "rgba(34,211,238,0.12)",
                borderRadius: "16px",
                overflow: "hidden",
                transition: "all 0.3s ease",
                boxShadow: hoveredId === project.id ? "0 0 30px rgba(34,211,238,0.12), 0 20px 40px rgba(0,0,0,0.4)" : "none",
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", height: "180px", overflow: "hidden" }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                    transform: hoveredId === project.id ? "scale(1.08)" : "scale(1)",
                  }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(10,22,40,0.9) 100%)" }} />
              </div>

              {/* Content */}
              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "#f0f9ff", margin: 0 }}>
                  {project.title}
                </h3>
                <p style={{ color: "#94a3b8", lineHeight: 1.65, margin: 0, fontSize: "0.85rem", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {project.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "0.2rem 0.55rem",
                        borderRadius: "5px",
                        fontSize: "0.68rem",
                        fontFamily: "'JetBrains Mono', monospace",
                        color: TAG_COLORS[tag] || "#94a3b8",
                        background: `${TAG_COLORS[tag] || "#94a3b8"}15`,
                        border: `1px solid ${TAG_COLORS[tag] || "#94a3b8"}25`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "0.6rem", marginTop: "0.25rem" }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "0.45rem 0.9rem", fontSize: "0.78rem", flex: 1, justifyContent: "center" }}>
                    <FaGithub size={14} /> GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.45rem 0.9rem", fontSize: "0.78rem", flex: 1, justifyContent: "center" }}>
                    <HiExternalLink size={14} /> Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .featured-card {
            grid-template-columns: 1fr !important;
          }
          .featured-card .order-1,
          .featured-card .order-2 {
            order: unset !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
