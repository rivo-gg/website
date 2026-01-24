import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Rivo - Legal Notice",
};

export default function Page() {
	return (
		<main className="legals">
			<section className="flex w-full max-w-7xl flex-col gap-6 text-lg text-foreground/80">
				<h1>Legal Notice</h1>
				<span>
					🇩🇪 For the German version please <Link href="legal-de">visit this page</Link>.
				</span>
				<span>Information according to § 5 TMG.</span>
				<div>
					<h4 className="mb-1">Contact</h4>
					<ul className="pl-4">
						<li>Dominik Koch</li>
						<li>c/o IP-Management #8532</li>
						<li>Ludwig-Erhard-Str. 18</li>
						<li>20459 Hamburg</li>
						<li>Germany</li>
						<li>
							Email: <a href="mailto:dominik@rivo.gg">dominik@rivo.gg</a>
						</li>
						<li>Phone: +49 151 23793107</li>
						<li className="text-yellow-200">🛈 No acceptance of parcels or packages.</li>
					</ul>
				</div>
				<div>
					<h4>Privacy Policy</h4>
					<Link href="/privacy">https://rivo.gg/privacy</Link>
				</div>
			</section>
		</main>
	);
}
