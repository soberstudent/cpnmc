/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ['cdn.builder.io'],
    //formats: ['image/jpeg', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },

      {
        hostname: 'login.girirajmanipokharel.com',
        protocol: 'http',
        port: '8055',
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};
module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      // '/blog/nextjs': { page: '/blog/[post]/comment/[id]' },        // wrong
      'app/[lang]/[category]/page.tsx': { page: 'app/[lang]/[category]' }, // correct
    };
  },
};

module.exports = nextConfig;
