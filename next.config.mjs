/**
 * @file next.config.mjs
 * @description Next.js configuration for the Jumpstart platform.
 *
 * KEY DECISIONS:
 * - typescript.ignoreBuildErrors: true → We use TypeScript loosely during rapid prototyping.
 *   Once the product stabilizes, flip this to false and fix all type errors.
 * - images.unoptimized: true → Allows us to use ANY image URL (Unsplash, pravatar, etc.)
 *   without configuring each domain. In production, switch to remotePatterns for performance.
 * - images.remotePatterns → Whitelist of external image sources we use for mock data.
 *   This ensures Next.js Image component works correctly during SSR/prerendering.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // TODO: Set to false once TypeScript types are stabilized across all components
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "i.pravatar.cc" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "img.logoipsum.com" },
    ],
  },
}

export default nextConfig
