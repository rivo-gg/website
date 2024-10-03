import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Rivo - The Digital Product Agency you can trust",
	description:
		"Rivo is a digital agency that you can trust. We work with community managers, creators, game developers, and entrepreneurs to help them achieve their goals faster.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<script defer data-domain="rivo.gg" src="https://stats.wouldyoubot.gg/js/script.js" />
			<body className={cn("flex min-h-screen w-screen flex-col", barlow.className)}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
					<Navbar />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
