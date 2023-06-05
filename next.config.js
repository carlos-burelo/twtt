const { join } = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [join(__dirname, 'src', 'styles')],
  },
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'pbs.twimg.com',
      'www.geekmi.news',
    ],
  },
}

module.exports = nextConfig
