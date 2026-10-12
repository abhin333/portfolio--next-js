import type { Metadata } from "next";
import React from "react";
import "../src/index.css";

export const metadata: Metadata = {
  title: "Abhin.v — Full-Stack Web Developer",
  description:
    "Portfolio of Abhin.v — Full-Stack Web Developer specializing in Next.js, React, TypeScript, and Node.js. Building fast, interactive, and scalable web experiences.",
  keywords: [
    "Next.js developer",
    "React developer",
    "Full-stack developer",
    "Web developer portfolio",
    "Abhin",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Abhin.v" }],
  openGraph: {
    title: "Abhin.v — Full-Stack Web Developer",
    description: "Crafting Fast, Interactive & Scalable Web Experiences.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "Zr7-J_vi1zCYu5Tb808brMBF5u1cGIJ6Q2LTOEIhwHk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ colorScheme: "dark" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: "#020408", color: "#f0f9ff" }}>
        {children}
      </body>
    </html>
  );
}
