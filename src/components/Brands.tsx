import { motion } from "framer-motion";

import { PartnerIcon } from "../assets/icons/PartnerIcon";
import { VerifiedIcon } from "../assets/icons/VerifiedIcon";

import StaarLogo from "../assets/logos/staar.png";
import NovaLogo from "../assets/logos/nova.png";

export function Brands() {
  return (
    <section className="py-12 sm:py-24 bg-customDarkBg1 w-full mt-16 mb-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
          <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="flex flex-col">
                <h2 className="mb-2  text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-white">
                  Trusted by servers
                </h2>
                <h2 className="text-4xl  sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-customSecondary">
                  all over discord
                </h2>
              </div>
            </div>
            <div className="w-2/3 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10">
              <div className="flex flex-wrap -m-4 overflow-clip">
                <div className="w-1/2 sm:w-1/3 py-6 flex justify-center">
                  <img
                    className="w-[75px] h-[75px]  z-0"
                    src={NovaLogo.src}
                    alt="nova logo"
                  />
                  <div className="p-[60px] pr-[130px] z-1 absolute">
                    <PartnerIcon />
                  </div>
                </div>
                <div className="w-1/2 sm:w-1/3 py-6 flex  justify-center">
                  <img
                    className="w-[75px] h-[75px]  z-0"
                    src={StaarLogo.src}
                    alt="staar logo"
                  />
                  <div className="p-[60px] pr-[130px] z-1 absolute">
                    <VerifiedIcon />
                  </div>
                </div>
                <div className="w-1/2 sm:w-1/3 py-6 flex justify-center">
                  <img
                        className="w-[75px] h-[75px]  z-0"
                    src={NovaLogo.src}
                    alt="nova logo"
                  />
                  <div className="p-[60px] pr-[130px] z-1 absolute">
                    <PartnerIcon />
                  </div>
                  
                </div>
                <div className="w-1/2 sm:w-1/3 py-6 flex justify-center">
                  <img
                    className="w-[75px] h-[75px]  z-0"
                    src={NovaLogo.src}
                    alt="nova logo"
                  />
                  <div className="p-[60px] pr-[130px] z-1 absolute">
                    <PartnerIcon />
                  </div>
                </div>
                <div className="w-1/2 sm:w-1/3 py-6 flex  justify-center">
                  <img
                    className="w-[75px] h-[75px]  z-0"
                    src={StaarLogo.src}
                    alt="staar logo"
                  />
                  <div className="p-[60px] pr-[130px] z-1 absolute">
                    <VerifiedIcon />
                  </div>
                </div>
                <div className="w-1/2 sm:w-1/3 py-6 flex justify-center">
                  <img
                        className="w-[75px] h-[75px]  z-0"
                    src={NovaLogo.src}
                    alt="nova logo"
                  />
                  <div className="p-[60px] pr-[130px] z-1 absolute">
                    <PartnerIcon />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
