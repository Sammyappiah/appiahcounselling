/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  turbopack: {
    root: __dirname,
  },

  async redirects() {
    return [
      // Redirect old homepage URLs
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home/',
        destination: '/',
        permanent: true,
      },

      // Redirect old booking URLs if pages don't exist
      {
        source: '/booking/individual',
        destination: 'https://calendly.com/YOUR-INDIVIDUAL-LINK',
        permanent: false,
      },
      {
        source: '/booking/couples',
        destination: 'https://calendly.com/YOUR-COUPLES-LINK',
        permanent: false,
      },

      // Redirect old blog URLs
      {
        source: '/blog/:slug*',
        destination: '/blog',
        permanent: true,
      },
    ]
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
