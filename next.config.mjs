/** @type {import('next').NextConfig} */
const nextConfig = {
 
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'scontent.fmnl13-4.fna.fbcdn.net',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'scontent.fmnl13-2.fna.fbcdn.net',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
