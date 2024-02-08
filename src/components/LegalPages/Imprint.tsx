export function Legal() {
  return (
    <section className="mb-10 flex flex-col gap-8 px-8 text-neutral-300 xl:px-[17vw]">
      <h1 className="text-brand-red-100 drop-shadow-red-glow mt-36 text-4xl font-bold">
        Legal Notice
      </h1>
      <p>
        <span className="mr-1.5 text-lg">🇩🇪</span>
        For the German version please visit{" "}
        <a href="/legal-de" className="text-white underline">
          this page
        </a>
        .
      </p>
      <p>Information according to § 5 TMG.</p>
      <div>
        <h3 className="text-lg font-bold text-white">Contact</h3>
        <p className="select-none">
          Dominik Koch
          <br />
          Parkstrasse 5<br />
          88499 Riedlingen
          <br />
          Germany
        </p>
      </div>
      <p>No acceptance of parcels or packages.</p>
      <p>Email: dominik@rivo.gg</p>
      <div>
        <h3 className="text-lg font-bold text-white">
          Online dispute resolution
        </h3>
        <p>
          The European Comission provides a platform for online dispute
          resolution, available at{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            className="text-white underline"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          . <br />I am neither willing nor obliged to participate in dispute
          resolution proceedings in front of a consumer arbitration board.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-bold text-white">Privacy Policy</h3>
        <a href="https://rivo.gg/privacy/" className="text-white underline">
          https://rivo.gg/privacy/
        </a>
      </div>
      <div>
        <h3 className="text-lg font-bold text-white">
          Validity of this Legal Notice
        </h3>
        <p>
          This legal notice is valid for the following websites, social media
          accounts and other services, as long as they are listed below.
        </p>
      </div>
      <div className="text-white">
        <a href="https://rivo.gg/" className="underline">
          https://rivo.gg/
        </a>
      </div>
    </section>
  );
}
