/** @type {import('next').NextConfig} */
const nextConfig = {

  //https://stackoverflow.com/questions/64909447/got-an-error-invalid-src-prop-here-is-a-link-on-next-image-hostname-loca
  swcMinify: true,
  optimizeFonts: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
    minimumCacheTTL: 15000000,
  },
}

module.exports = nextConfig
