/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // pdfjs-dist has an optional Node-only require of "canvas"
    config.resolve.alias.canvas = false;
    return config;
  },
};

export default nextConfig;
