import type { Metadata } from "next";
import React from "react";
import "../src/index.css";

export const metadata: Metadata = {
  title: "abhin-Portfolio",
  description: "Personal portfolio website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
