/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: branchName,
  basePath: branchName,
};

const branchName = process.env.BRANCH_NAME ? "/" + process.env.BRANCH_NAME : "";

module.exports = nextConfig;
