import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.webp";
import testimonial2 from "../assets/images/testimonial2.webp";
import testimonial3 from "../assets/images/testimonial3.webp";

const testimonialsData = [
  {
    customerName: "Shulkercraft",
    customerTitle: "Youtube Creator",
    content:
      "In the last 2 years Rivo helped my channel get one of the longest lasting brand sponsorships, which helped my brand to grow and be financially stable. They are always quick to solve any problems, which is important in the creator space where everything moves fast.",
    image: testimonial1,
    link: "https://youtube.com/@Shulkercraft",
  },
  {
    customerName: "Gabrielle P.",
    customerTitle: "Discord Partner & Streamer",
    content:
      "I can't express how much fun our Discord community is having since we added Rivo's WouldYou bot. It's simplicity meets fun in the best way possible. The easy-to-use interface makes the bot really pleasant to use . Our members love the daily dose of dilemmas, sparking fun discussions and laughs. Rivo nailed it with the diverse and entertaining prompts that keep the vibe fresh for our Discord.",
    image: testimonial2,
    link: "https://discord.gg/staar",
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. Rivo has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",
    image: testimonial3,
  },
];

export const Testimonials = () => (
  <section className="relative mb-16 flex w-full justify-center bg-customDarkBg2 pt-10 lg:mb-32">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex w-full flex-col justify-center lg:w-[1150px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle mb-6 text-center">
          Testimonials
        </div>
        <div className="custom-block-big-title mb-16 px-8 text-center sm:px-24 md:px-48">
          People like you love Rivo
        </div>

        <div className="flex flex-col items-center gap-8 px-6 lg:flex-row lg:gap-5 xl:gap-10 xl:px-0">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="custom-border-gray-darker flex w-11/12 flex-col rounded-xl bg-customDarkBg3 px-6 py-4 sm:w-4/5 md:w-[560px] lg:w-1/3"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="mb-2 flex">
                <QuoteIcon />
              </div>
              <div className="custom-content-text-white">
                "{testimonial.content}"
              </div>
              <div className="mb-2 mt-4 flex xl:mb-4 xl:mt-8">
                <img
                  src={testimonial.image.src}
                  alt="testomonial image"
                  className="max-h-[50px] min-h-[50px] min-w-[50px] max-w-[50px] origin-center"
                  height="50px"
                  width="50px"
                />
                <div className="ml-4 flex flex-col">
                  <div
                    className="custom-content-text-white cursor-pointer font-medium"
                    onClick={() => window.open(testimonial.link)}
                  >
                    {testimonial.customerName}
                  </div>
                  <div className="custom-content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
