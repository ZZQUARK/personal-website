/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: ['images.unsplash.com', 'cdn.sanity.io', 'covers.openlibrary.org'],
  },
}

module.exports = nextConfig