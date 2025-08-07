// components/TestimonialsSection.js
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Jane K.",
    location: "Nairobi, Kenya",
    quote:
      "AfyaConnect helped me get fast, reliable consultations from the comfort of my home. I truly feel supported.",
    image: "/images/user1.jpg", // Use placeholder or replace
  },
  {
    name: "Samuel M.",
    location: "Kisumu, Kenya",
    quote:
      "The platform makes health services accessible for everyone. It’s a game-changer for rural communities.",
    image: "/images/user2.jpg",
  },
  {
    name: "Aisha L.",
    location: "Mombasa, Kenya",
    quote:
      "I love how easy it is to book an appointment and talk to a doctor instantly. Highly recommend AfyaConnect!",
    image: "/images/user3.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#f8f9fb] py-16 px-6 sm:px-10 md:px-20" id="testimonials">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">What Our Users Say</h2>
        <p className="text-lg text-gray-600">Real stories from people we’ve helped</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-100 transition-all"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 mx-auto rounded-full mb-4 object-cover border-2 border-blue-200"
            />
            <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
            <h4 className="font-semibold text-gray-800">{t.name}</h4>
            <p className="text-sm text-gray-500">{t.location}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
