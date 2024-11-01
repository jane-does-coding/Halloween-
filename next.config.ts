import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	swcMinify: true,

	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
