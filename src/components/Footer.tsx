import { DiscordIcon } from "../assets/icons/DiscordIcon";
import { GithubIcon } from "../assets/icons/GithubIcon";
import { LinkedInIcon } from "../assets/icons/LinkedInIcon";
import { RivoLogo } from "../assets/logos/RivoLogo"


const footerData = [
  {
    title: "Products",
    items: [
      { name: "Would You", link: "https://discord.com/oauth2/authorize?client_id=981649513427111957&permissions=275415247936&scope=bot%20applications.commands" },
      { name: "Clash Commander", link: "https://discord.com/oauth2/authorize?client_id=1057995097167368222&scope=bot&permissions=277025770560" },
      { name: "Ghibli.rest", link: "https://discord.com/oauth2/authorize?client_id=1112770259024351252&scope=bot&permissions=2147862592" },
      { name: "Crypto Helper", link: "https://discord.com/oauth2/authorize?client_id=747050613656911892&permissions=274878294080&scope=bot%20applications.commands" },
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
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <RivoLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  Rivo
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                Rivo is not affiliated with Discord. We're a third-party service!
              </p>
              <div className="w-36 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10 h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://discord.com/invite/vMyXAxEznS"
                  target="_blank"
                >
                  <DiscordIcon />
                </a>
                <a
                  className="inline-block w-10 h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://www.linkedin.com/company/rivo-gg/"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
                <a
                  className="inline-block w-10 h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://github.com/rivo-gg"
                  target="_blank"
                >
                  <GithubIcon />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-2/3  lg:pl-16 lg:flex flex-wrap justify-between md:align-center">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:pb-5">
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
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
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
          <p className="text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-12 md:pb-5 lg:text-center lg:block">
            &copy; 2024. Rivo & MIT license.
          </p>
        </div>
      </div>
    </footer>
  );
};
