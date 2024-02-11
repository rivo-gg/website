import { motion } from "framer-motion";

import dashboard from "../assets/images/dashboard.webp";

export const Hero = () => {
  return (
    <section
      className="hero-bg-gradient mb-[20vw] flex w-screen items-center justify-center bg-customDarkBg1 pb-24 sm:pb-32 md:mb-[18vw] md:pb-44 lg:mb-[10vw] lg:pb-0 xl:mb-[13vw] 2xl:mb-60"
      id="home"
    >
      <div className="flex w-full flex-col items-center justify-center pt-16 text-center md:w-[800px] md:pt-16 lg:pt-20 xl:w-[900px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 mt-16 text-sm  font-bold text-customSecondary sm:mt-32  sm:text-base">
            Discover Rivo
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="px-8 text-5xl font-bold tracking-wide text-white sm:px-8  sm:text-6xl  md:px-20 lg:px-4 lg:text-7xl xl:text-7xl">
            <span className="inline md:hidden">Riding on</span>
            <span className="hidden md:inline">Riding on</span>
          </div>
          <div className="mt-2 px-8 text-4xl font-bold tracking-wide text-white sm:mt-2 sm:px-20  sm:text-6xl  md:px-24 lg:px-24 lg:text-7xl xl:text-7xl">
            Innovation
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="mt-10 px-12 text-sm text-customGrayText sm:px-48 sm:text-base lg:text-base xl:text-lg ">
            Discover how Rivo, the leading online software company, is
            revolutionizing the tech industry with cutting-edge innovations and
            solutions.
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="mb-24 mt-14 flex flex-col justify-center gap-2 sm:mb-40 sm:flex-row">
            <div
              className="custom-button-colored mb-2 mr-0 h-12 w-64 sm:mb-0 sm:mr-4 sm:w-52 lg:mr-6"
              onClick={() => (window.location.href = "#projects")}
            >
              See Projects
            </div>
            <div
              className="flex h-12 w-64 cursor-pointer items-center justify-center rounded-xl border  border-solid border-customPrimary bg-customDarkBg2 font-bold text-white transition hover:bg-customDarkBg3 sm:w-52"
              onClick={() => (window.location.href = "#feedback")}
            >
              Our Testomonials
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        ></motion.div>

        <div className="relative flex w-screen justify-center ">
          <div className="custom-shape-divider-bottom-1665343298 mt-4 hidden sm:mt-16 md:mt-52 lg:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className=" bg-customDarkBg2"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill custom-bg-dark1"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
