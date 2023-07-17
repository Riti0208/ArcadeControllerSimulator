/** @type {import('next').NextConfig} */

const branchName = process.env.BRANCH_NAME ? "/" + process.env.BRANCH_NAME : "";

const nextConfig = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  reactStrictMode: true,
  assetPrefix: branchName,
  basePath: branchName,
});

module.exports = nextConfig;
