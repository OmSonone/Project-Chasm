import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },

    /**Uncomment this whenever you want to enable maintainance mode **/

    // async redirects() {
    //     return [
    //       {
    //         source: '/((?!maintenance).*)',
    //         destination: '/maintenance',
    //         permanent: false
    //       }
    //     ]
    // }
}

export default nextConfig
