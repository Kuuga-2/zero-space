/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui", "@workspace/contracts"],
  reactStrictMode: false,
}

export default nextConfig
