// components/HowItWorks.js

import { motion } from "framer-motion";
import { CheckCircle, Video, CalendarCheck, FileText } from "lucide-react";

const steps = [
  { icon: <CheckCircle className="w-10 h-10 text-green-400" />, title: "Sign Up Easily", description: "Create your free AfyaConnect account in seconds and access healthcare anytime." },
  { icon: <CalendarCheck className="w-10 h-10 text-green-400" />, title: "Book Consultation", description: "Choose your doctor and preferred time with a few clicks from anywhere." },
  { icon: <Video className="w-10 h-10 text-green-400" />, title: "Virtual Consultation", description: "Consult securely via video or chat from the comfort of your home." },
  { icon: <FileText className="w-10 h-10 text-green-400" />, title: "Get Prescription", description: "Receive prescriptions and follow-up care seamlessly through the platform." },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full py-16 px-6 overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-950" id="how-it-works">
      {/* Dotted Ring Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold text-white mb-4">
          How It Works
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-gray-200 max-w-xl mx-auto">
          Access quality healthcare in just a few easy steps with AfyaConnect.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} className="bg-white/10 backdrop-blur-sm rounded-2xl border border-green-500/20 p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-green-500/30 transition-transform">
            {step.icon}
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">{step.title}</h3>
            <p className="text-gray-300 text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
