export function Legal() {
    return (
      <section className="flex flex-col gap-8 px-8 text-neutral-300 xl:px-[17vw] mb-10">
        <h1 className="mt-36 text-4xl font-bold text-brand-red-100 drop-shadow-red-glow">
          Legal Notice
        </h1>
        <p>Informationen gemäß § 5 TMG..</p>
        <div>
          <h3 className="text-lg font-bold text-white">Kontakt</h3>
          <p className="select-none">
            Dominik Koch
            <br />
            Parkstraße 5<br />
            88499 Riedlingen
            <br />
            Deutschland
          </p>
        </div>
        <p>Keine Annahme von Paketen oder Päckchen.</p>
        <p>Email: dominik@rivo.gg</p>
        <div>
          <h3 className="text-lg font-bold text-white">
            Online dispute resolution
          </h3>
          <p>
          Die Europäische Kommission bietet eine Plattform für die Online-Streitbeilegung Streitbeilegung, die hier zu finden ist:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              className="text-white underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . <br />Ich bin weder bereit noch verpflichtet, an einem Streitbeilegungsverfahren an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Privacy Policy</h3>
          <a
            href="https://rivo.gg/privacy/"
            className="text-white underline"
          >
            https://rivo.gg/privacy/
          </a>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">
            Validity of this Legal Notice
          </h3>
          <p>
          Dieser rechtliche Hinweis gilt für die folgenden Websites, Social Media Konten und andere Dienste, sofern sie hier aufgeführt sind.
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
  