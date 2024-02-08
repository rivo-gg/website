import { motion } from "framer-motion";

import feature1 from "../assets/images/feature1.webp";
import feature2 from "../assets/images/feature2.webp";
import feature3 from "../assets/images/feature3.webp";
import feature4 from "../assets/images/feature4.webp";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section className="xl:m mb-8 mt-20 w-full bg-customDarkBg2 pt-[2rem] sm:mb-16  sm:mt-16 md:pt-[12vw]  lg:pt-0 xl:mt-0">
      <div className="absolute -top-10" id="projects" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="mx-auto flex w-11/12 flex-wrap items-center md:pl-4 xl:w-[1300px] xl:pl-16 xl:pr-16 2xl:w-[1450px]">
          <div className="mb-12 w-full lg:mb-0 lg:w-1/2">
            <div className="lg:w-unset mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:mx-auto">
              <span className="custom-block-subtitle">Embrace Innovation</span>
              <h2 className="custom-block-big-title mb-8 mt-6 text-4xl lg:text-5xl">
                Unlike any tool you used before
              </h2>
              <p className="mb-10 leading-loose text-customGrayText">
                Discover a new level of data analysis with our innovative and
                user-friendly platform. Transform your business needs with
                actionable insights.
              </p>
              <ul className="mb-6 text-white">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Real-time data visualization</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Advanced predictive analytics</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Seamless integration with APIs</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex w-3/4 flex-wrap justify-center sm:pr-8 lg:-mx-4 lg:w-1/2 lg:pl-4 lg:pt-10 xl:px-8">
            <div className="mb-8 w-full px-2 sm:w-1/2 lg:mb-0 lg:px-0">
              <div className="mb-4 rounded py-3 pl-3 pr-2">
                <img
                  src={feature1.src}
                  alt="f1"
                  className="custom-border-gray  sm:mx-unset mx-auto rounded-xl"
                />
              </div>
              <div className="rounded py-3 pl-3 pr-2 ">
                <img
                  src={feature2.src}
                  alt="f2"
                  className="custom-border-gray  sm:mx-unset mx-auto rounded-xl"
                />
              </div>
            </div>
            <div className="hidden w-1/2  px-2 pt-12 sm:inline-block lg:mt-20 lg:pt-0">
              <div className="mb-4 rounded-lg py-3 pl-3 pr-2 ">
                <img
                  src={feature3.src}
                  alt="f3"
                  className="custom-border-gray  rounded-xl"
                />
              </div>
              <div className="rounded-lg py-3 pl-3 pr-2 ">
                <img
                  src={feature4.src}
                  alt="f4"
                  className="custom-border-gray  rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
