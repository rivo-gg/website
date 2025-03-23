import { Hero } from "@/components/hero";
import { MarqueeWrapper } from "@/components/marquee";
import { Testimonials } from "@/components/testimonials";
import { AboutOwnerBox } from "@/components/founder-box";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<Hero />
			<MarqueeWrapper />
			<Testimonials />
			<AboutOwnerBox />
		</main>
	);
}
