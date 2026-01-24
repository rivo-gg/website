import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Rivo - Impressum",
};

export default function Page() {
	return (
		<main className="legals">
			<section className="flex w-full max-w-7xl flex-col gap-6 text-lg text-foreground/80">
				<h1>Impressum</h1>
				<span>Informationen gemäß § 5 TMG.</span>
				<div>
					<h4 className="mb-1">Kontakt</h4>
					<ul className="pl-4">
						<li>Dominik Koch</li>
						<li>c/o IP-Management #8532</li>
						<li>Ludwig-Erhard-Str. 18</li>
						<li>20459 Hamburg</li>
						<li>Deutschland</li>
						<li>
							Email: <a href="mailto:dominik@rivo.gg">dominik@rivo.gg</a>
						</li>
						<li>Phone: +49 151 23793107</li>
						<li className="text-yellow-200">🛈 Keine Annahme von Paketen oder Päckchen.</li>
					</ul>
				</div>
				<div>
					<h4>Datenschutzerklärung</h4>
					<Link href="/privacy">https://rivo.gg/privacy</Link>
				</div>
			</section>
		</main>
	);
}
