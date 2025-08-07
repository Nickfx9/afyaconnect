"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AboutUsSection from "@/components/AboutUsSection";
import CareSection from "@/components/CareSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Layout from "@/components/Layout";
import { FaArrowLeft } from "react-icons/fa";
import therapy1 from "/public/images/therapy1.jpg";
import therapy2 from "/public/images/therapy2.jpg";

// Reusable Section Component
const Section = ({
  imageSrc,
  imageAlt,
  title,
  description,
  sectionClasses,
  textColorClasses,
  imagePriority = false,
  imageLoading,
}) => {
  return (
    <section className={`py-16 px-4 flex justify-center ${sectionClasses}`}>
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={400}
            className="object-cover w-full max-h-80 md:max-h-96"
            placeholder="blur"
            priority={imagePriority}
            loading={imageLoading}
            onError={(e) => {
              e.target.src = "/images/placeholder.jpg";
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className={`space-y-4 ${textColorClasses}`}
        >
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
          {description.map((para, index) => (
            <p key={index} className="text-lg">
              {para}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TherapyPage = () => {
  return (
    <main className="flex flex-col min-h-screen relative">
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-10">
        <Link href="/" aria-label="Go back to home page">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center space-x-2 bg-white/20 text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-200"
          >
            <FaArrowLeft />
            <span>Back</span>
          </motion.button>
        </Link>
      </div>

      {/* Section 1: Personalized Therapy */}
      <Section
        imageSrc={therapy1}
        imageAlt="A group of people in a therapy session"
        title="Personalized Therapy for You"
        description={[
          "We believe everyone deserves a space to heal. Our online and in-person therapy sessions provide support for stress, anxiety, and family wellness in a safe, confidential environment.",
          "AfyaConnect connects you to licensed professionals who understand your community and your journey, empowering you towards a healthier future.",
        ]}
        sectionClasses="bg-gradient-to-b from-purple-800 to-purple-900"
        textColorClasses="text-purple-100"
        imagePriority={true}
      />

      {/* Section 2: Community Support */}
      <Section
        imageSrc={therapy2}
        imageAlt="A community support group session outdoors"
        title="Group Circles & Community Support"
        description={[
          "Healing happens in community. Our group therapy circles foster shared experiences, connection, and understanding, creating a space for collective growth and encouragement.",
          "From youth-focused groups to family wellness circles, AfyaConnect ensures you are supported every step of the way.",
        ]}
        sectionClasses="bg-white"
        textColorClasses="text-gray-700"
        imageLoading="lazy"
      />

{/* Our Mission Section */}
      <section className="bg-[repeating-linear-gradient(45deg,#000000_0,#000000_10px,transparent_10px,transparent_20px)] text-white py-20 px-6 relative">
        {/* Navy Blue Overlay */}
        <div className="absolute inset-0 bg-[rgba(10,39,68,0.7)]"></div>
        {/* Symbol Patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_#2ECC71_1px,_transparent_1px),_radial-gradient(circle_at_80%_80%,_#1E88E5_1px,_transparent_1px),_radial-gradient(circle_at_50%_50%,_#FFFFFF_1px,_transparent_1px)] [background-size:50px_50px] opacity-30 pointer-events-none"></div>

        <div className="max-w-1xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 flex justify-center items-center"
          >
            Our Mission
            <span className="flex gap-1 ml-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl leading-relaxed text-gray-100"
          >
            To empower communities across Africa with accessible mental health support,
            culturally-aware therapy, and tools for emotional well-being—bridging the
            gap between tradition and modern healing.
          </motion.p>
{/* Interlocking, health-colored dots */}
<div className="flex justify-center items-center mt-12 space-x-[-20px]">
  {/* Full White Dot */}
  <div className="w-10 h-10 bg-white rounded-full border-4 border-white z-30"></div>
  
  {/* Fading Green Dot */}
  <div className="w-10 h-10 bg-gradient-to-br from-green-100 via-green-300 to-green-400 rounded-full border-4 border-green-200 z-20"></div>
  
  {/* Solid Green Dot */}
  <div className="w-10 h-10 bg-green-500 rounded-full border-4 border-green-500 z-10"></div>
</div>

          {/* Quote below the dots */}
          <p className="mt-6 italic text-md text-gray-300">
            “Healing begins the moment we are heard.”
          </p>
        </div>
      </section>
       <AboutUsSection />
       <CareSection />
       <TestimonialsSection />
      <Layout />
    </main>
  );
};

export default TherapyPage;
