import createMDX from "@next/mdx";
import type { NextConfig } from 'next';
 
const nextConfig: NextConfig = {
	output: "standalone",
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX();

export default withMDX(nextConfig);
