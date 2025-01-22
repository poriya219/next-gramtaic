/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async()=> {
        return [
          {
            source: "/api/info/user", // Proxy requests to /api/*
            destination: "https://gramatic.ir/api/user/info", // External API
          },
        ];
      },
};

export default nextConfig;
