"use client";

import { motion } from "framer-motion";

const OurMissionSection = () => {
  return (
    <section className="bg-[#0077cc] text-white py-20 px-6 md:px-24 relative overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-extrabold mb-8 tracking-wide">Our Mission</h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-100">
          AfyaConnect exists to close the healthcare gap in underserved communities by empowering
          Community Health Workers (CHWs) with digital tools. We ensure real-time data, quick referrals,
          and improved access to resources — all from the ground up.
        </p>
        <p className="mt-6 text-lg md:text-xl text-gray-200">
          Our mission is to make healthcare faster, smarter, and community-powered — one village at a time.
        </p>
      </motion.div>

      {/* Audi-style ring dots */}
      <div className="flex justify-center mt-16 space-x-6">
        <div className="w-8 h-8 border-4 border-white rounded-full"></div>
        <div className="w-8 h-8 border-4 border-[#013220] rounded-full"></div>
        <div className="w-8 h-8 border-4 border-green-400 rounded-full"></div>
      </div>
    </section>
  );
};

export default OurMissionSection;
