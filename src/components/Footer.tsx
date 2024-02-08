import { DiscordIcon } from "../assets/icons/DiscordIcon";
import { GithubIcon } from "../assets/icons/GithubIcon";
import { LinkedInIcon } from "../assets/icons/LinkedInIcon";
import { RivoLogo } from "../assets/logos/RivoLogo";

const footerData = [
  {
    title: "Products",
    items: [
      {
        name: "Would You",
        link: "https://wouldyoubot.gg/",
      },
      {
        name: "Clash Commander",
        link: "https://wumpus.store/bot/1057995097167368222",
      },
      {
        name: "Ghibli.rest",
        link: "https://wumpus.store/bot/1112770259024351252",
      },
      {
        name: "Crypto Helper",
        link: "https://wumpus.store/bot/747050613656911892",
      },
    ],
  },
  {
    title: "Important Links",
    items: [
      { name: "Legal Notice", link: "/legal" },
      { name: "Privacy Policy", link: "/privacy" },
    ],
  },
  {
    title: "Company",
    items: [
      { name: "About Us", link: "/about" },
      { name: "Jobs", link: "/jobs" },
      { name: "Contact Us", link: "/contact" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="radius-for-skewed  bg-customDarkBg1 pt-10 lg:pb-12 lg:pt-20 ">
        <div className="container mx-auto w-4/5 px-4 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="mb-16 w-full lg:mb-0 lg:w-1/3">
              <div className="flex grow basis-0 items-center justify-center lg:justify-start">
                <div className="mr-2 text-6xl text-white">
                  <RivoLogo />
                </div>
                <div className="font-['Inter'] text-xl font-bold text-white">
                  Rivo
                </div>
              </div>
              <p className="mx-auto mb-10 mt-4 text-center leading-loose text-gray-400 sm:w-[22rem] lg:mx-0 lg:w-[20rem] lg:text-left xl:w-[24rem]">
                Rivo is not affiliated with Discord. We're a third-party
                service!
              </p>
              <div className="mx-auto w-36 lg:mx-0">
                <a
                  className="custom-border-gray mr-2 inline-block h-10 w-10 rounded-xl bg-customDarkBg2  p-2 hover:bg-gray-700"
                  href="https://discord.com/invite/vMyXAxEznS"
                  target="_blank"
                  aria-label="discord link"
                >
                  <DiscordIcon />
                </a>
                <a
                  className="custom-border-gray mr-2 inline-block h-10 w-10 rounded-xl bg-customDarkBg2  p-2 hover:bg-gray-700"
                  href="https://www.linkedin.com/company/rivo-gg/"
                  target="_blank"
                  aria-label="lnkedin link"
                >
                  <LinkedInIcon />
                </a>
                <a
                  className="custom-border-gray mr-2 inline-block h-10 w-10 rounded-xl bg-customDarkBg2  p-2 hover:bg-gray-700"
                  href="https://github.com/rivo-gg"
                  target="_blank"
                  aria-label="github link"
                >
                  <GithubIcon />
                </a>
              </div>
            </div>
            <div className="md:align-center w-full  flex-wrap justify-between lg:flex lg:w-2/3 lg:pl-16">
              <div className="mb-16 w-full md:w-1/3 md:pb-5 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-white">Products</h3>
                <ul>
                  {footerData[0].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={item.link}
                        aria-label={item.name}
                        target="_blank"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-16 w-full md:mb-0 md:w-1/3 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  Important Links
                </h3>
                <ul>
                  {footerData[1].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={item.link}
                        aria-label={item.name}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-white">Company</h3>
                <ul>
                  {footerData[2].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={item.link}
                        aria-label={item.name}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-12 border-t border-[rgb(255,255,255,0.2)] pb-5 pt-12 text-center text-sm text-gray-400 lg:block lg:pb-1 lg:text-center">
            &copy; 2024. Rivo & MIT license.
          </p>
        </div>
      </div>
    </footer>
  );
};
