import type { Metadata } from "next";
import React from "react";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "../src/index.css";

// Optimize Google Fonts with next/font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  // Set the base URL for relative image and canonical link resolutions
  metadataBase: new URL("https://abhin-portfolio.netlify.app"),
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
    "Software Developer",
  ],
  authors: [{ name: "Abhin.v" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Abhin.v — Full-Stack Web Developer",
    description: "Crafting Fast, Interactive & Scalable Web Experiences.",
    url: "https://abhin-portfolio.netlify.app",
    siteName: "Abhin.v Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Place an og-image.jpg in your public folder
        width: 1200,
        height: 630,
        alt: "Abhin.v — Full-Stack Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhin.v — Full-Stack Web Developer",
    description: "Crafting Fast, Interactive & Scalable Web Experiences.",
    images: ["/og-image.jpg"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abhin.v",
    url: "https://abhin-portfolio.netlify.app",
    jobTitle: "Full-Stack Web Developer",
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "JavaScript",
    ],
    sameAs: [
      "https://github.com/your-github-username",
      "https://linkedin.com/in/your-linkedin-username",
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ background: "#020408", color: "#f0f9ff" }}>
        {children}
      </body>
    </html>
  );
}
