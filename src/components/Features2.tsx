import { motion } from "framer-motion";

import feature5 from "../assets/images/feature5.webp";
import feature6 from "../assets/images/feature6.webp";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features2 = () => (
  <section className="mb-10 mt-12 w-full bg-customDarkBg2 pt-4 sm:mt-20 lg:my-20">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="mx-auto flex w-11/12 flex-wrap items-center md:pl-4 xl:w-[1300px] xl:pl-16 xl:pr-16 2xl:w-[1450px]">
        <div className="order-last mx-auto flex w-11/12 flex-wrap justify-center sm:w-3/4 sm:pr-8 lg:order-first lg:-mx-4 lg:w-1/2">
          <div className="mb-8 flex w-full flex-col justify-center px-2 md:pl-8 lg:mb-0 lg:pl-16">
            <div className="mb-4 rounded py-3 md:pl-3 md:pr-20 lg:pr-12">
              <img
                src={feature5.src}
                alt="f1"
                className="custom-border-gray  rounded-xl"
              />
            </div>
            <div className="rounded py-3 md:pl-20 md:pr-2 lg:pl-12 ">
              <img
                src={feature6.src}
                alt="f2"
                className="custom-border-gray  rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="mb-12 w-full lg:mb-0 lg:w-1/2 xl:pl-8">
          <div className="lg:w-unset mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:mx-auto">
            <span className="custom-block-subtitle">
              Make Data-Driven Decisions
            </span>
            <h2 className="custom-block-big-title mb-8 mt-6 text-4xl lg:text-5xl">
              Issue tracking you’ll enjoy using
            </h2>
            <p className="mb-12 leading-loose text-customGrayText">
              Monitor and track data issues with ease using our intuitive and
              efficient issue tracking system. Stay ahead of potential problems
              and improve your workflow.
            </p>
            <ul className="mb-6 text-white">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Collaborative environment</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Smart issue categorization</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Customizable notifications</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
