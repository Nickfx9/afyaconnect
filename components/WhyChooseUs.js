import Image from "next/image";
import { FaCheckCircle, FaStethoscope, FaLock, FaClock } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image */}
        <div className="relative rounded-2xl overflow-hidden backdrop-blur-md bg-white/10 p-6 shadow-xl border border-white/20">
          <Image
            src="/images/why-choose-us.jpg"
            alt="Doctor consulting patient via telemedicine"
            width={600}
            height={400}
            className="rounded-xl object-cover w-full h-auto aspect-[3/2]"
            priority
          />
        </div>

        {/* Right Side - Content */}
        <div className="text-white space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Why AfyaConnect is Your Trusted Healthcare Partner
          </h2>
          <p className="text-lg max-w-lg">
            Join 10,000+ patients who access expert care in minutes, from anywhere, with AfyaConnect’s secure and affordable platform.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start bg-white/10 p-5 rounded-xl backdrop-blur-sm hover:scale-[1.02] transition-transform duration-200">
              <FaStethoscope className="text-blue-300 mr-3 mt-1" aria-hidden="true" />
              <div>
                <strong className="font-semibold">Licensed Doctors</strong>
                <p>Consult board-certified professionals for personalized care.</p>
              </div>
            </li>
            <li className="flex items-start bg-white/10 p-5 rounded-xl backdrop-blur-sm hover:scale-[1.02] transition-transform duration-200">
              <FaCheckCircle className="text-blue-300844 mr-3 mt-1" aria-hidden="true" />
              <div>
                <strong className="font-semibold">Accessible & Affordable</strong>
                <p>Quality care that fits your schedule and budget.</p>
              </div>
            </li>
            <li className="flex items-start bg-white/10 p-5 rounded-xl backdrop-blur-sm hover:scale-[1.02] transition-transform duration-200">
              <FaLock className="text-blue-300 mr-3 mt-1" aria-hidden="true" />
              <div>
                <strong className="font-semibold">Secure & Private</strong>
                <p>HIPAA-compliant encryption keeps your data safe.</p>
              </div>
            </li>
            <li className="flex items-start bg-white/10 p-5 rounded-xl backdrop-blur-sm hover:scale-[1.02] transition-transform duration-200">
              <FaClock className="text-blue-300 mr-3 mt-1" aria-hidden="true" />
              <div>
                <strong className="font-semibold">24/7 Health Support</strong>
                <p>Instant prescriptions and support, anytime you need it.</p>
              </div>
            </li>
          </ul>

          <div className="flex space-x-4">
            <button
              className="inline-block px-8 py-3 bg-white text-blue-900 font-semibold rounded-full hover:bg-blue-100 hover:shadow-lg transition-all duration-200"
              aria-label="Start your telemedicine consultation"
            >
              Start Your Consultation
            </button>
            <button
              className="inline-block px-8 py-3 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-200"
              aria-label="Learn more about AfyaConnect"
            >
              Learn More
            </button>
          </div>
        </div>

      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5 pointer-events-none"></div>
    </section>
  );
}