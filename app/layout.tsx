/**
 * @file app/layout.tsx
 * @description Root layout for the Jumpstart Next.js application.
 *
 * ARCHITECTURE:
 * This is the top-level layout that wraps EVERY page in the app.
 * It provides:
 * 1. HTML document structure (<html>, <body>)
 * 2. Google Fonts (Geist Sans + Geist Mono)
 * 3. Global CSS import (Tailwind + custom styles)
 * 4. Vercel Analytics integration
 * 5. SEO metadata (title, description, favicons)
 *
 * FONTS:
 * - Geist Sans: Primary UI font (clean, modern, professional)
 * - Geist Mono: Used for code snippets and technical content
 * Both are loaded from Google Fonts via next/font for optimal performance.
 *
 * METADATA:
 * The metadata object defines the default SEO tags for all pages.
 * Individual pages can override these with their own metadata exports.
 *
 * FAVICON SETUP:
 * - Light mode: /icon-light-32x32.png
 * - Dark mode: /icon-dark-32x32.png
 * - SVG fallback: /icon.svg
 * - Apple Touch Icon: /apple-icon.png
 */

import React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants"
import "./globals.css"

// ── Font Configuration ──
const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

// ── SEO Metadata ──
export const metadata: Metadata = {
  title: `${SITE_NAME} — The New Standard of Early-Career Hiring`,
  description: SITE_DESCRIPTION,
  generator: "Next.js",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

// ── Root Layout ──
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
