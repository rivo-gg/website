import createMDX from "@next/mdx";
import type { NextConfig } from 'next';
 
const nextConfig: NextConfig = {
	output: "standalone",
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  compiler: {
		removeConsole: process.env.NODE_ENV === 'production' && {
			exclude: ['error']
		}
    
	},
  async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=31536000; includeSubDomains; preload'
					},
					{
						key: 'Content-Security-Policy',
						value: "frame-ancestors 'self'"
					},
					{
						key: 'X-Frame-Options',
						value: 'SAMEORIGIN'
					},
					{
						key: 'Referrer-Policy',
						value: 'origin-when-cross-origin'
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff'
					}
				]
			}
		]
	},
};

const withMDX = createMDX();

export default withMDX(nextConfig);
