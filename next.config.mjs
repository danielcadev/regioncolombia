import { withPayload } from "@payloadcms/next/withPayload";
/** @type {import('next').NextConfig} */
const nextConfig = {

    reactStrictMode: true,
    images: {
        domains: ['localhost'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**',
          },
        ],
    },
};

export default withPayload(nextConfig);