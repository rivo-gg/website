import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Rivo - Refund Policy'
}

export default function Page() {
  return (
    <main className="legals">
      <section className="flex w-full max-w-7xl flex-col gap-6 text-lg text-foreground/80">
        <div className="mb-3">
          <h1 className="mb-2">Refund Policy</h1>
          <span className="text-base">
            Last updated and effective: May 16, 2024
          </span>
        </div>
        <span>
          Thank you for choosing to be part of our community at Would
          You(&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We are
          committed to protecting your personal information and your right to
          privacy. If you have any questions or concerns about this privacy
          notice or our practices with regard to your personal information,
          please contact us at{' '}
          <a href="mailto:dominik@rivo.gg">dominik@rivo.gg</a>.
        </span>
        <div className="flex flex-col gap-4">
          <h4>Right of withdrawal </h4>
          <span>
            You have the right to cancel your subscription or purchase of Rivo
            Premium within 14 days without giving any reason. The withdrawal
            period expires 14 days after the date of conclusion of the contract.
            How to exercise your right of withdrawal
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <h4>How to make use of your right to withdrawal</h4>
          <span>
            In order to make use of your right of withdrawal, you must notify us
            of your decision to withdraw from this contract by sending us a
            clear statement by contacting the Discord user{' '}
            <span>@dominikdev</span> via{' '}
            <Link
              href="https://rivo.gg/support"
              target="_blank"
            >
              https://rivo.gg/support
            </Link>{' '}
            or <a href="mailto:support@rivo.gg">support@rivo.gg</a>. If you wish
            to contact us by email, you must use the same email address that you
            used for registration purposes. Contact us via Discord if you no
            longer have access to that email address.
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <h4>Effects of withdrawal</h4>
          <span>
            If you cancel this contract, we will promptly refund to you all
            payments received from you within the last 14 days, but in no event
            later than 2 weeks from the date we receive notice of your decision
            to cancel this Agreement. After the refund you will lose access to
            the Would You premium.
          </span>
        </div>
      </section>
    </main>
  )
}
