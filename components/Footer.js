import { useState } from "react";
import { MessageCircle, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (card) => {
    setActiveCard(activeCard === card ? null : card);
  };

  const termsContent = `
    **Terms of Service**  
    Welcome to AfyaConnect, a telemedicine platform connecting Kenyans to licensed healthcare providers. By using our services, you agree to:  
    - **Eligibility**: You must be 18+ or have guardian consent to use AfyaConnect.  
    - **Payments**: Payments via M-Pesa are non-refundable unless specified. Ensure accurate payment details.  
    - **Usage**: Use the platform for lawful healthcare purposes only. Do not share account credentials.  
    - **Liability**: AfyaConnect is not liable for medical outcomes; consult doctors for advice.  
    - **Termination**: We may suspend accounts for misuse or violation of terms.  
    Last updated: July 18, 2025. Contact support@afyaconnect.co.ke for queries.
  `;

  const privacyContent = `
    **Privacy Policy**  
    AfyaConnect respects your privacy under Kenya’s Data Protection Act 2019.  
    - **Data Collection**: We collect personal and health data (e.g., name, phone, medical history) for consultations.  
    - **Usage**: Data is used to provide services, schedule appointments, and improve our platform.  
    - **Protection**: We use secure encryption for data storage and transmission.  
    - **Sharing**: Data is shared only with licensed doctors or as required by law.  
    - **Rights**: You can request access or deletion of your data via support@afyaconnect.co.ke.  
    Last updated: July 18, 2025.
  `;

  const blogsContent = `
    **Health Tips from AfyaConnect**  
    - **Managing Malaria in Rural Kenya**: Learn prevention tips like using mosquito nets and timely consultations via AfyaConnect.  
    - **Benefits of Telemedicine**: Access doctors from anywhere, even on 2G networks, saving time and costs.  
    - **Nutrition for Kids**: Simple diet tips for Kenyan families to boost child health.  
    Visit our blog for more health insights!
  `;

  return (
    <footer className="relative w-full py-10 px-4 bg-[repeating-linear-gradient(45deg,#000000_0,#000000_8px,transparent_8px,transparent_16px)] text-gray-300">
      {/* Navy Blue Overlay */}
      <div className="absolute inset-0 bg-[rgba(10,39,68,0.85)]"></div>

      {/* Green Card for Terms/Privacy/Blogs */}
      {activeCard && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-20 px-4">
          <div className="bg-green-500 text-white rounded-xl p-6 max-w-lg w-full relative max-h-[80vh] overflow-auto">
            <button
              onClick={() => setActiveCard(null)}
              className="absolute top-2 right-2 text-white hover:text-blue-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="prose prose-sm text-white">
              {activeCard === "terms" && <div>{termsContent}</div>}
              {activeCard === "privacy" && <div>{privacyContent}</div>}
              {activeCard === "blogs" && <div>{blogsContent}</div>}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2 flex items-center">
            AfyaConnect
            <span className="flex gap-1 ml-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            </span>
          </h2>
          <p className="text-gray-400 text-sm">Connecting you to quality healthcare, anytime.</p>
        </div>

        {/* Our Company Links */}
        <div>
          <h3 className="text-base font-semibold text-white mb-2 flex items-center">
            Our Company
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 ml-2"></span>
          </h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#about" className="hover:text-blue-400 transition">About Us</a></li>
            <li><a href="#careers" className="hover:text-blue-400 transition">Careers</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact Us</a></li>
            <li><a href="#languages" className="hover:text-blue-400 transition">Swahili/English</a></li>
          </ul>
        </div>
        
        {/* How It Works Links */}
        <div>
          <h3 className="text-base font-semibold text-white mb-2 flex items-center">
            How It Works
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 ml-2"></span>
          </h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#how-it-works" className="hover:text-blue-400 transition">Book a Consultation</a></li>
            <li><a href="#how-it-works" className="hover:text-blue-400 transition">Virtual Consult</a></li>
            <li><a href="#how-it-works" className="hover:text-blue-400 transition">Get Prescriptions</a></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="text-base font-semibold text-white mb-2 flex items-center">
            Resources
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 ml-2"></span>
          </h3>
          <ul className="space-y-1 text-sm">
            <li><button onClick={() => toggleCard("terms")} className="hover:text-blue-400 transition">Terms of Service</button></li>
            <li><button onClick={() => toggleCard("privacy")} className="hover:text-blue-400 transition">Privacy Policy</button></li>
            <li><button onClick={() => toggleCard("blogs")} className="hover:text-blue-400 transition">Blogs</button></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-base font-semibold text-white mb-2 flex items-center">
            Contact Us
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 ml-2"></span>
          </h3>
          <ul className="space-y-1 text-sm">
            <li><a href="tel:+254700123456" className="hover:text-blue-400 transition">+254 746000720</a></li>
            <li><a href="mailto:support@afyaconnect.co.ke" className="hover:text-blue-400 transition">support@afyaconnect.co.ke</a></li>
            <li><a href="#m-pesa" className="hover:text-blue-400 transition">visit us today</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-500/30 mt-8 pt-4 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition"><MessageCircle size={18} /></a>
            <a href="#" className="hover:text-blue-400 transition"><Facebook size={18} /></a>
            <a href="#" className="hover:text-blue-400 transition"><Twitter size={18} /></a>
            <a href="#" className="hover:text-blue-400 transition"><Instagram size={18} /></a>
          </div>
          {/* CTA Button */}
          <a
            href="#signup"
            className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Get Started
          </a>
          {/* Copyright */}
          <p className="text-gray-400">© 2025 AfyaConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}