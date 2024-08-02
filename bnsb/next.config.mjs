const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['lh3.googleusercontent.com'],
    },
    pwa: {
      dest: 'public', // Specify the destination directory for the service worker and other PWA files
      disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
    },
};

// export default nextConfig;
module.exports = withPWA(nextConfig);