const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/uc",
      },
    ],
  },

  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
