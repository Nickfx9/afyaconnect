"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import tabletImage from "/public/images/tablet-image.jpg"; // Your image here

const CareSection = () => {
  return (
    <section
      className="bg-white py-20 px-6 sm:px-12"
      id="care"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* LEFT: Tablet Card */}
        <motion.div
          className="bg-[#0b1e35] rounded-[2rem] shadow-xl p-6 md:p-8 relative w-full max-w-md h-[500px] flex flex-col justify-between"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Gradient Quote */}
          <div className="text-2xl font-bold leading-snug z-10 bg-gradient-to-r from-[#5c2d91] via-[#00c9a7] to-[#5c2d91] text-transparent bg-clip-text">
            “We lead with integrity, accountability & transparency <br /> We are committed to unsurpassed quality”
          </div>

          {/* Image Placeholder */}
          <div className="w-full h-64 relative mt-4 rounded-xl overflow-hidden border border-white/10">
            <Image
              src={tabletImage}
              alt="Tablet Health Visual"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

      


        {/* RIGHT: Mobile Card */}
<motion.div
  className="bg-gradient-to-br from-teal-300 via-blue-500 to-blue-800 rounded-[2rem] shadow-2xl p-6 md:p-8 w-full max-w-[280px] h-[480px] mx-auto flex flex-col justify-between text-white"
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
>
  <div className="space-y-4">
    {/* Multicolored Gradient Heading */}
    <h3 className="text-xl font-bold bg-gradient-to-r from-green-300 via-fuchsia-500 to-blue-900 text-transparent bg-clip-text">
      Your Health, Anywhere
    </h3>

    <p className="text-sm text-white/90">
      First and only Patient Safety Organization for virtual care.
    </p>

    <p className="text-sm text-white/80">
      Our commitment to unmatched quality and compassionate care ensures that your well-being is never compromised.
      Fully accessible on all mobile devices — because your health should go wherever life takes you.
    </p>

    <p className="text-sm text-white/80">
      Whether it’s a late-night consultation or routine checkup, our platform ensures you receive the care you need — when and where you need it most.
    </p>
  </div>

  <p className="text-xs text-cyan-100 italic text-center mt-4">
    *Accessible on all mobile devices
  </p>

        </motion.div>
      </div>
    </section>
  );
};

export default CareSection;
