import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is AfyaConnect?",
    answer: "AfyaConnect is your pocket doctor—an online platform connecting you with licensed doctors for fast, convenient healthcare from anywhere.",
  },
  {
    question: "How do I book a consultation?",
    answer: "Easy! Create your free account, pick your doctor, and choose a time that works for you. Healthcare made simple.",
  },
  {
    question: "Is my information secure?",
    answer: "Absolutely. We use advanced encryption and secure systems to ensure your health information stays private and safe.",
  },
  {
    question: "Can I get prescriptions online?",
    answer: "Yes! After your consultation, your doctor can send prescriptions directly to your device so you can get care without delays.",
  },
  {
    question: "Can I consult in Swahili or other local languages?",
    answer: "Yes, you can! Choose Swahili, English, or other local languages during booking so you can speak comfortably with your doctor.",
  },
];



export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

  return (
    <section id="faqs" className="w-full py-12 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3 flex justify-center items-center">
          Frequently Asked Questions
          <span className="flex gap-1 ml-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
          </span>
        </h2>
        <p className="text-gray-700 text-base max-w-xl mx-auto">
          Get answers to help you start with AfyaConnect’s accessible healthcare.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-blue-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left text-blue-900 hover:bg-blue-50 transition-colors"
            >
              <span className="font-medium text-sm md:text-base flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-blue-600 transition-transform ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {activeIndex === index && (
              <div className="px-4 pb-4 text-gray-700 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        
      </div>
    </section>
  );
}