"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // in case you need it later

const AboutUsSection = () => {
  return (
    <>
      {/* About Us Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20 px-6 md:px-16 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-cyan-400"
          >
            About AfyaConnect
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            AfyaConnect is a transformative digital health platform connecting
            communities across Kenya with global telemedicine partners,
            unlocking quality healthcare access through technology. Whether
            it&apos;s remote consultations, health tracking, or community health
worker support, we&apos;re here to bring healthcare closer to everyone.

          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8 mt-10"
          >
            <div className="bg-white/10 p-6 rounded-xl border border-cyan-500 shadow-lg hover:scale-105 transition transform duration-300">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">Remote Care</h3>
              <p className="text-gray-300 text-sm">
                We partner with leading telemedicine providers to offer virtual
                consultations — anytime, anywhere.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-cyan-500 shadow-lg hover:scale-105 transition transform duration-300">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">Community First</h3>
              <p className="text-gray-300 text-sm">
                Supporting Community Health Workers (CHWs) to track, refer, and
                assist patients using our integrated mobile tools.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-cyan-500 shadow-lg hover:scale-105 transition transform duration-300">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">Connected Villages</h3>
              <p className="text-gray-300 text-sm">
                From rural homes to county clinics, AfyaConnect ensures seamless
                digital health delivery and follow-up care.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Empowering Lives Hero Section */}
      <section className="relative bg-[url('/images/health-bg.jpg')] bg-cover bg-center text-white py-28 px-6 md:px-20">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-extrabold text-cyan-300"
          >
            Empowering all people everywhere to live their healthiest lives
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We believe health is a universal right. Our mission is to ensure
            that no matter where you live — city, village, or remote location —
            you have access to the care and tools you need to thrive.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;
