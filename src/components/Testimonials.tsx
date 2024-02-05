import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.webp";
import testimonial2 from "../assets/images/testimonial2.webp";
import testimonial3 from "../assets/images/testimonial3.webp";

const testimonialsData = [
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. Rivo has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",
    image: testimonial1,
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
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          Testimonials
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
          People like you love Rivo
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="custom-content-text-white">
                "{testimonial.content}"
              </div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <img src={testimonial.image.src} alt="testomonial image" className="max-h-[50px] max-w-[50px] min-w-[50px] min-h-[50px] origin-center" height="50px" width="50px" />
                <div className="flex flex-col ml-4">
                  <div className="custom-content-text-white font-medium cursor-pointer" onClick={() => window.open(testimonial.link)}>
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
