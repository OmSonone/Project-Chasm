import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },

  /** Uncomment this whenever you want to enable maintenance mode **/

  // async redirects() {
  //     return [
  //       {
  //         source: '/((?!maintenance).*)',
  //         destination: '/maintenance',
  //         permanent: false
  //       }
  //     ]
  // }
};

export default nextConfig;
