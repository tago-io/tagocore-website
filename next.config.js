const nextConfig = {
  target: "serverless",
  images: {
    domains: ["tagocore-plugins.s3.us-east-1.amazonaws.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
