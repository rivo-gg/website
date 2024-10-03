import { Hero } from "@/components/hero";
import { MarqueeWrapper } from "@/components/marquee";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<Hero />
			<MarqueeWrapper />
			<Testimonials />
		</main>
	);
}
