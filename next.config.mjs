/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async()=> {
        return [
          {
            source: "/api/info/user", // Proxy requests to /api/*
            destination: "https://gramatic.ir/api/user/info", // External API
          },
          {
            source: '/api/user/history',
            destination: "https://gramatic.ir/api/user/history?index=0"
          }
        ];
      },
};

export default nextConfig;
