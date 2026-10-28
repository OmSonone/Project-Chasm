import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    dangerouslyAllowSVG: true,
    // Local placeholders are served with decorative query strings
    // (e.g. `?height=200&width=200`); Next 16 requires this allow-list.
    localPatterns: [
      { pathname: '/static/images/**' },
      { pathname: '/placeholder.svg' },
    ],
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
