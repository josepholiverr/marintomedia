/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
        port: "",
        pathname: "**",
      },
    ],
  },

  webpack: (config) => {
    config.module.generator.asset.publicPath = "/_next/"

    return config
  },
}

module.exports = nextConfig
