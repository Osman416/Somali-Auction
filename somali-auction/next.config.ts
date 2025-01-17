/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pub-aabe847a49de4f68acd1092a31c68b0a.r2.dev",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;