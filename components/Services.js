"use client";

import { HeartPulse, Baby, Brain, Stethoscope, Syringe, BookOpen } from "lucide-react";

const services = [
  {
    title: "General Medical Consultations",
    description: "Instant online consultations with licensed doctors for common illnesses and health concerns.",
    icon: <Stethoscope className="w-8 h-8 text-emerald-500" />,
  },
  {
    title: "Maternal & Child Health",
    description: "Antenatal and postnatal care, child health checkups, and vaccination guidance.",
    icon: <Baby className="w-8 h-8 text-emerald-500" />,
  },
  {
    title: "Mental Health Support",
    description: "Confidential therapy and counseling sessions to support mental well-being.",
    icon: <Brain className="w-8 h-8 text-emerald-500" />,
  },
  {
    title: "Chronic Disease Management",
    description: "Manage diabetes, hypertension, HIV, and other chronic conditions effectively from home.",
    icon: <HeartPulse className="w-8 h-8 text-emerald-500" />,
  },
  {
    title: "Specialist Referrals",
    description: "Consult with specialists in various fields and receive expert care recommendations.",
    icon: <Syringe className="w-8 h-8 text-emerald-500" />,
  },
  {
    title: "Health Education",
    description: "Access health tips, nutrition advice, and preventive care resources easily.",
    icon: <BookOpen className="w-8 h-8 text-emerald-500" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          AfyaConnect offers comprehensive, affordable, and accessible healthcare services designed for your convenience and well-being.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center border border-emerald-100 hover:border-emerald-200"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
