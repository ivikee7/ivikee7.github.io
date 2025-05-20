import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  extension: /\.mdx?$/,
};

const nextConfig = {
  // Important for GitHub Pages static export:
  output: 'export',
  trailingSlash: true, // Ensures compatibility with static hosting
  images: { unoptimized: true }, // Required when using `next export`
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

export default withMDX(nextConfig);
