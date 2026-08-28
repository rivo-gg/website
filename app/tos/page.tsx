import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Rivo - Terms of Service",
};

export default function Page() {
	return (
		<main className="legals">
			<section className="flex w-full max-w-7xl flex-col gap-6 text-lg text-foreground/80">
				<div className="mb-3">
					<h1 className="mb-2">Terms of Service</h1>
					<span className="text-base">Last updated and effective: August 28, 2026</span>
				</div>
				<div className="flex flex-col gap-4">
					<h4>Agreement to Terms</h4>
					<span>
						These terms of service (the &quot;Terms&quot;) govern your access to and use of the services provided by
						Rivo (&quot;Rivo&quot;, the &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;),
						including the Rivo Discord bot (the &quot;Bot&quot;) and the &quot;Truth or Dare&quot; mobile application
						(the &quot;App&quot;), together with our related websites, content, and features (collectively, the
						&quot;Services&quot;). References in these Terms to the &quot;Site&quot;, the &quot;Services&quot;, or the
						&quot;Marketplace Offerings&quot; apply to all of the Services, including the Bot and the App, unless the
						context clearly relates to a single product. By using any of the Services, you agree to be bound by these
						Terms and any additional terms that may be provided by the Company. If you do not agree to these Terms, you
						may not use the Services.
					</span>
					<span>
						The Bot is a bot for the chat and social platform &quot;Discord&quot; (accessible at{" "}
						<Link href="https://discord.com" target={"_blank"} className="text-foreground underline">
							https://discord.com
						</Link>
						), provided by Discord Inc. This service allows you to make use of Discord&apos;s public API (its
						documentation is accessible at{" "}
						<Link href="https://discord.dev" target={"_blank"} className="text-foreground underline">
							https://discord.dev
						</Link>
						, including its Terms of Service and Privacy Policy). Rivo is strictly following Discord&apos;s
						&quot;Developer terms&quot;, does not want, is not trying to and is not knowingly abusing any of
						Discord&apos;s services.
					</span>
					<span>
						The App is a mobile application published by the Company through third-party app stores (such as the Apple
						App Store and Google Play). Your download and use of the App is also subject to the terms, policies, and
						age ratings of the applicable app store.
					</span>
				</div>
				<div className="flex flex-col gap-4">
					<h4>1. Age Restriction</h4>
					<span>
						The Services are not intended for use by individuals under the age of 13. By using the Services, you
						represent and warrant that you are at least 13 years of age. In addition, the App is intended for users
						within the age range stated on the applicable app store listing, and certain content categories are
						age-gated within the App as described in Section 13. If you are under the applicable minimum age, you are
						not permitted to use the relevant Service. If we become aware that a user is under the applicable minimum
						age, we will take steps to terminate their access and delete any personal information collected from them,
						where applicable.
					</span>
				</div>
				<div className="flex flex-col gap-4">
					<h4>2. Premium Subscriptions</h4>
					<span>
						The Bot and the App may each offer separate premium subscriptions that provide additional features and
						benefits. The price, currency, billing period, and benefits of each subscription are shown before you
						confirm a purchase.
					</span>
				</div>
				<div className="flex flex-col gap-4">
					<h4>2.1 Bot Subscription</h4>
					<span>
						The Rivo Discord Bot offers a premium subscription model (&quot;Bot Premium&quot;). Payments for Bot Premium
						are processed by Stripe, Inc. (&quot;Stripe&quot;). By subscribing, you authorise Rivo and Stripe to charge
						the displayed subscription fee to your selected payment method on a recurring basis until you cancel.
					</span>
					<span>
						You may cancel Bot Premium by following Stripe&apos;s cancellation instructions or by contacting Rivo.
						Cancellation takes effect at the end of the current paid period. Fees already paid are non-refundable except
						where required by applicable law.
					</span>
				</div>
				<div className="flex flex-col gap-4">
					<h4>2.2 App Subscription</h4>
					<span>
						The App may offer auto-renewable subscriptions, including weekly and yearly options, that unlock Truth or
						Dare Pro features. Purchases are processed by the app store through which you obtain the App
						(&quot;Store&quot;), not directly by Rivo. By confirming a purchase, you authorise the Store to charge your
						Store account at the price and frequency shown before purchase.
					</span>
					<span>
						An App subscription renews automatically unless you cancel it through your Store account settings before the
						end of the current billing period. Deleting the App does not cancel a subscription. After cancellation, you
						retain access to the subscription benefits until the end of the period already paid for. The Store handles
						billing, renewal, cancellation, and refund requests under its own terms and policies. Nothing in these Terms
						limits any refund or cancellation right you have under applicable law.
					</span>
				</div>
				<div className="flex flex-col gap-4">
					<h4>2.3 Apple App Store Terms</h4>
					<span>
						If you obtain the App through Apple&apos;s App Store, Apple&apos;s{" "}
						<Link
							href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
							target={"_blank"}
							className="text-foreground underline"
						>
							Standard End User License Agreement
						</Link>{" "}
						governs your license to use the App. These Terms supplement that agreement for Rivo&apos;s Services and do
						not replace or limit any rights or obligations that apply under Apple&apos;s terms or applicable law.
					</span>
				</div>
				<div className="flex flex-col gap-4">
					<h4>3. Intellectual property rights</h4>
					<span>
						Rivo and all content and software associated with the bot, including but not limited to text, graphics,
						logos, and images, are the property of the Company and are protected by copyright and other intellectual
						property laws. You may not use any of these materials for any commercial purpose without the express written
						consent of the Company.
					</span>
					<span>
						Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site
						and to download or print a copy of any portion of the Content to which you have properly gained access
						solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to
						the Site, the Content and the Marks.
					</span>
				</div>
				<div className="flex flex-col gap-4">
					<h4>4. User representations</h4>
					<span>
						By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply
						with these Terms of Use; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not
						access the Site through automated or non-human means, whether through a bot, script or otherwise; (4) you
						will not use the Site for any illegal or unauthorized purpose; and (5) your use of the Site will not violate
						any applicable law or regulation.
						<br />
						<br />
						If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to
						suspend or terminate your account and refuse any and all current or future use of the Site (or any portion
						thereof).
					</span>
				</div>
				<div className="flex flex-col gap-4">
					<h4>5. Warranty Disclaimer</h4>
					<span>
						1. The Services may experience downtime, errors, or technical issues beyond our control. To the maximum
						extent permitted by applicable law, we do not accept responsibility for any inconvenience, loss of data, or
						damages resulting from the use of the Services.
					</span>
					<span>
						2. Your use of the Services is at your own risk. To the maximum extent permitted by applicable law, we
						disclaim all warranties, express or implied, including but not limited to warranties of merchantability,
						fitness for a particular purpose, and non-infringement.
					</span>
					<span>
						3. We reserve the right to modify, suspend, or terminate the Services at any time without prior notice.
					</span>
				</div>
				<div className="flex flex-col gap-4">
					<h4>6. Products</h4>
					<span>
						All products are subject to availability. We reserve the right to discontinue any products at any time for
						any reason. Prices for all products are subject to change.
					</span>
				</div>
				<div className="flex flex-col gap-4">
					<h4>7. Contribution licence</h4>
					<span>
						You and Site agree that we may access, store, process, and use any information and personal data that you
						provide following the terms of the Privacy Policy and your choices (including settings).
					</span>
					<span>
						By submitting suggestions or other feedback regarding the Site, you agree that we can use and share such
						feedback for any purpose without compensation to you.
					</span>
					<span>
						We do not assert any ownership over your Contributions. You retain full ownership of all of your
						Contributions and any intellectual property rights or other proprietary rights associated with your
						Contributions. We are not liable for any statements or representations in your Contributions provided by you
						in any area on the Site. You are solely responsible for your Contributions to the Site and you expressly
						agree to exonerate us from any and all responsibility and to refrain from any legal action against us
						regarding your Contributions.
					</span>
				</div>
				<div className="flex flex-col gap-4">
					<h4>8. Term and Termination</h4>
					<span>
						These Terms of Use shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY
						OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR
						LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES AND THE MARKETPLACE OFFERINGS (INCLUDING BLOCKING CERTAIN
						IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY
						REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR
						REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES AND THE MARKETPLACE OFFERINGS OR
						DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
					</span>
					<span>
						If we terminate or suspend your account for any reason, you are prohibited from registering and creating a
						new account under your name, a fake or borrowed name, or the name of any third party, even if you may be
						acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the
						right to take appropriate legal action, including without limitation pursuing civil, criminal, and
						injunctive redress.
					</span>
				</div>
				<div className="flex flex-col gap-4">
					<h4>9. Modifications and interruptions</h4>
					<span>
						The company reserves the right to change, modify, or remove the contents of the Site at any time or for any
						reason at our sole discretion without notice. However, we have no obligation to update any information on
						our Site. We also reserve the right to modify or discontinue all or part of the Marketplace Offerings
						without notice at any time. We will not be liable to you or any third party for any modification, price
						change, suspension, or discontinuance of the Site or the Marketplace Offerings.
					</span>
					<span>
						We cannot guarantee the Site and the Marketplace Offerings will be available at all times. We may experience
						hardware, software, or other problems or need to perform maintenance related to the Site, resulting in
						interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or
						otherwise modify the Site or the Marketplace Offerings at any time or for any reason without notice to you.
						You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your
						inability to access or use the Site or the Marketplace Offerings during any downtime or discontinuance of
						the Site or the Marketplace Offerings. Nothing in these Terms of Use will be construed to obligate us to
						maintain and support the Site or the Marketplace Offerings or to supply any corrections, updates, or
						releases in connection therewith.
					</span>
				</div>
				<div className="flex flex-col gap-4">
					<h4>10. Governing Law</h4>
					<span>
						These Terms and your use of Rivo will be governed by and construed in accordance with the laws of Germany.
						Any dispute arising out of or in connection with these Terms or Rivo will be resolved through binding
						arbitration in accordance with the rules of the International Chamber of Commerce. You agree that we may
						take action against you if you attack or harm our services. You agree that we may use any data collected for
						the purpose of taking action to exclude you from the Service.
					</span>
				</div>
				<div className="flex flex-col gap-4">
					<h4>11. Disclaimer</h4>
					<span>
						The Services are provided &quot;as is&quot; and &quot;as available&quot;, and the Company makes no
						warranties of any kind, express or implied, including but not limited to warranties of merchantability,
						fitness for a particular purpose, and non-infringement. The Company does not guarantee that the Services
						will be available at all times or that they will be error-free. To the maximum extent permitted by
						applicable law, in no event shall we be liable for any damages arising from the use of the Services. Where
						a Service requires permissions to function (for example, Discord permissions for the Bot), it is
						recommended to grant only the permissions required.
					</span>
				</div>
				<div className="flex flex-col gap-4">
					<h4>12. Limitation of Liability</h4>
					<span>
						To the maximum extent permitted by applicable law, the Company will not be liable to you or any third party
						for any damages arising out of or in connection with your use of the Services, including but not limited to
						direct, indirect, incidental, consequential, and punitive damages. Nothing in these Terms excludes or
						limits any liability that cannot be excluded or limited under applicable law, including liability for death
						or personal injury caused by our negligence and liability for intent or gross negligence.
					</span>
				</div>
				<div className="flex flex-col gap-4">
					<h4>13. Truth or Dare App Safety and Assumption of Risk</h4>
					<span>
						This section applies to the &quot;Truth or Dare&quot; mobile application provided by Rivo (the
						&quot;App&quot;), which offers party-game prompts, including &quot;truth&quot; questions and
						&quot;dare&quot; challenges.
					</span>
					<span>
						1. The App provides entertainment prompts only. All dares and other prompts are suggestions, and
						participation is entirely voluntary. You may skip, decline, or end any prompt at any time, and you are
						never required to perform a dare.
					</span>
					<span>
						2. You are solely responsible for deciding whether a given prompt is safe, appropriate, and legal for you
						and for everyone involved before acting on it. This includes taking account of allergies, medical
						conditions, physical limitations, intoxication, your physical surroundings, and any other relevant
						circumstances, as well as obtaining the freely given consent of every person involved.
					</span>
					<span>
						3. You must not perform any prompt that would violate applicable law or endanger the health, safety, or
						property of yourself or others. To the maximum extent permitted by applicable law, the Company accepts no
						liability for any injury, illness, death, property damage, or other loss or harm resulting from
						performing, attempting, or declining any prompt. This does not affect any liability that cannot be
						excluded or limited under applicable law, and it applies in addition to, and is to be read together with,
						the Warranty Disclaimer (Section 5) and the Limitation of Liability (Section 12) set out above.
					</span>
					<span>
						4. The App is intended for users within the age range stated on the applicable app store listing. Content
						categories that contain mature or adult themes are age-gated within the App, and you must not enable or
						access such categories unless you meet the applicable age requirement.
					</span>
				</div>
				<div className="flex flex-col gap-4">
					<h4>14. Miscellaneous</h4>
					<span>
						These Terms of Use and any policies or operating rules posted by us on the Site or in respect to the Site
						constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any
						right or provision of these Terms of Use shall not operate as a waiver of such right or provision. These
						Terms of Use operate to the fullest extent permissible by law. We may assign any or all of our rights and
						obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or
						failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of
						these Terms of Use is determined to be unlawful, void, or unenforceable, that provision or part of the
						provision is deemed severable from these Terms of Use and does not affect the validity and enforceability of
						any remaining provisions. There is no joint venture, partnership, employment or agency relationship created
						between you and us as a result of these Terms of Use or use of the Site. You agree that these Terms of Use
						will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you
						may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto to
						execute these Terms of Use.
					</span>
				</div>
			</section>
		</main>
	);
}
