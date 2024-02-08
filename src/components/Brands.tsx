import { motion } from "framer-motion";

import { PartnerIcon } from "../assets/icons/PartnerIcon";
import { VerifiedIcon } from "../assets/icons/VerifiedIcon";

import StaarLogo from "../assets/logos/staar.webp";
import NovaLogo from "../assets/logos/nova.webp";
import FishWikiLogo from "../assets/logos/fishwiki.webp";
import SpongeBobLogo from "../assets/logos/spongebob.webp";
import IkariuLogo from "../assets/logos/ikariu.webp";
import AltraxLogo from "../assets/logos/altrax.webp";

export function Brands() {
  return (
    <section className="mb-16 mt-16 w-full bg-customDarkBg1 py-12 sm:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4 md:w-4/5 lg:w-[1000px] xl:w-[1100px] 2xl:w-[1200px]">
          <div className="-mx-4 flex flex-col items-center justify-center text-center lg:flex-row lg:text-left">
            <div className="mb-12 w-full px-4 lg:mb-0 lg:w-1/2">
              <div className="flex flex-col">
                <h2 className="mb-2  text-4xl font-bold tracking-normal text-white sm:text-5xl 2xl:text-6xl">
                  Trusted by servers
                </h2>
                <h2 className="text-4xl  font-bold tracking-normal text-customSecondary sm:text-5xl 2xl:text-6xl">
                  all over discord
                </h2>
              </div>
            </div>
            <div className="mx-auto w-2/3 sm:w-[620px] lg:mx-0 lg:w-1/2 lg:pl-10">
              <div className="-m-4 flex flex-wrap overflow-clip">
                <div className="flex w-1/2 justify-center py-6 sm:w-1/3">
                  <img
                    className="z-0 h-[75px]  w-[75px]"
                    src={NovaLogo.src}
                    alt="nova logo"
                  />
                  <div className="z-1 absolute p-[60px] pr-[130px]">
                    <PartnerIcon />
                  </div>
                </div>
                <div className="flex w-1/2 justify-center py-6  sm:w-1/3">
                  <img
                    className="z-0 h-[75px]  w-[75px]"
                    src={StaarLogo.src}
                    alt="staar logo"
                  />
                  <div className="z-1 absolute p-[60px] pr-[130px]">
                    <PartnerIcon />
                  </div>
                </div>
                <div className="flex w-1/2 justify-center py-6 sm:w-1/3">
                  <img
                    className="z-0 h-[75px]  w-[75px]"
                    src={IkariuLogo.src}
                    alt="ikariu logo"
                  />
                  <div className="z-1 absolute p-[60px] pr-[130px]">
                    <PartnerIcon />
                  </div>
                </div>
                <div className="flex w-1/2 justify-center py-6 sm:w-1/3">
                  <img
                    className="z-0 h-[75px]  w-[75px]"
                    src={AltraxLogo.src}
                    alt="altrax logo"
                  />
                  <div className="z-1 absolute p-[60px] pr-[130px]">
                    <PartnerIcon />
                  </div>
                </div>
                <div className="flex w-1/2 justify-center py-6  sm:w-1/3">
                  <img
                    className="z-0 h-[75px]  w-[75px]"
                    src={SpongeBobLogo.src}
                    alt="spongebob logo"
                  />
                  <div className="z-1 absolute p-[60px] pr-[130px]">
                    <VerifiedIcon />
                  </div>
                </div>
                <div className="flex w-1/2 justify-center py-6 sm:w-1/3">
                  <img
                    className="z-0 h-[75px]  w-[75px]"
                    src={FishWikiLogo.src}
                    alt="fishwiki logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
