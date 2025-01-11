/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    swcPlugins: [[
      'next-superjson-plugin', {}
    ]]
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com'
    ]
  }
};

module.exports = nextConfig;