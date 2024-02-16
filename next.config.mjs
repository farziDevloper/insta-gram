// @ts-check

export default (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "dummyimage.com",
          port: "",
          // pathname: "/account123/**",
        },
      ],
    },
  };
  return nextConfig;
};
