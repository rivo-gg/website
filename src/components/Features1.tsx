import { motion } from "framer-motion";

import feature1 from "../assets/images/feature1.webp";
import feature2 from "../assets/images/feature2.webp";
import feature3 from "../assets/images/feature3.webp";
import feature4 from "../assets/images/feature4.webp";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section className="mb-8 mt-1">
      <div className="custom-block-big-title mb-16 px-8 text-center sm:px-24 md:px-48 content-center items-center">

      Stats
      </div>
      <div className="flex content-center justify-center">
      <div className="stats stats-vertical lg:stats-horizontal shadow custom-border-gray-darke rounded-xl bg-customDarkBg3">
        
    <div className="stat">
    <div className="stat-title">Servers</div>
    <div className="stat-value">11.700+</div>
  </div>

  <div className="stat">
    <div className="stat-title">Users</div>
    <div className="stat-value">4.500.000+</div>
  </div>
  </div>
</div>

    </section>
  );
};
