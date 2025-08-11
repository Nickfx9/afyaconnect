"use client";
import { useState } from "react";

const navLinks = [
  { name: "Dashboard", id: "dashboard" },
  { name: "My Patients", id: "patients" },
  { name: "Appointments", id: "appointments" },
  { name: "Consultations", id: "consultations" },
  { name: "Payments", id: "payments" },
  { name: "Profile Settings", id: "profile" },
];

export default function DoctorDashboardLayout() {
  const [activeSection, setActiveSection] = useState("dashboard");

  // Static doctor profile data for display
  const doctorProfile = {
    photo: "/images/doctor-profile.jpg", // make sure this image exists in /public/images
    fullName: "Dr. Jane Mwangi",
    specialty: "Cardiologist",
    bio: "Passionate about heart health and patient care with over 10 years of experience.",
    location: "Nairobi, Kenya",
    experience: "10+ years in cardiology practice",
  };

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Doctor Dashboard</h2>
            <p className="text-blue-800">
              Welcome back, {doctorProfile.fullName}! Here’s a quick summary of your day:
            </p>
            <ul className="mt-4 list-disc list-inside text-blue-700">
              <li>3 upcoming appointments today</li>
              <li>2 unread consultation messages</li>
              <li>5 pending payments to review</li>
            </ul>
          </div>
        );
      case "patients":
        return (
          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-900">My Patients</h2>
            <p className="text-blue-800 mb-2">
              List of your patients with recent activity:
            </p>
            <ul className="list-disc list-inside text-blue-700">
              <li>John Doe — Last appointment: Aug 3, 2025</li>
              <li>Mary Kamau — Last appointment: July 25, 2025</li>
              <li>Samuel Otieno — Last appointment: Aug 1, 2025</li>
            </ul>
          </div>
        );
      case "appointments":
        return (
          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Appointments</h2>
            <p className="text-blue-800">
              Manage your upcoming and past appointments here.
            </p>
            <table className="w-full mt-4 text-blue-700 border-collapse border border-blue-300">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-blue-300 p-2 text-left">Date</th>
                  <th className="border border-blue-300 p-2 text-left">Patient</th>
                  <th className="border border-blue-300 p-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-blue-300 p-2">2025-08-15 10:00 AM</td>
                  <td className="border border-blue-300 p-2">John Doe</td>
                  <td className="border border-blue-300 p-2">Confirmed</td>
                </tr>
                <tr>
                  <td className="border border-blue-300 p-2">2025-08-16 02:00 PM</td>
                  <td className="border border-blue-300 p-2">Mary Kamau</td>
                  <td className="border border-blue-300 p-2">Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case "consultations":
        return (
          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Consultations</h2>
            <p className="text-blue-800">
              View and manage your ongoing consultations here.
            </p>
            <ul className="list-disc list-inside text-blue-700 mt-4">
              <li>Consultation with John Doe - In Progress</li>
              <li>Consultation with Mary Kamau - Completed</li>
            </ul>
          </div>
        );
      case "payments":
        return (
          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Payments</h2>
            <p className="text-blue-800">Review your payment history and billing details.</p>
            <ul className="list-disc list-inside text-blue-700 mt-4">
              <li>Payment from John Doe - KES 5,000 - Completed</li>
              <li>Payment from Mary Kamau - KES 4,000 - Pending</li>
            </ul>
          </div>
        );
      case "profile":
        return (
          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Profile Settings</h2>
            <form className="max-w-md space-y-4 text-blue-800">
              <div>
                <label className="block mb-1 font-semibold">Full Name</label>
                <input
                  type="text"
                  defaultValue={doctorProfile.fullName}
                  className="w-full border border-blue-400 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Specialty</label>
                <input
                  type="text"
                  defaultValue={doctorProfile.specialty}
                  className="w-full border border-blue-400 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Bio</label>
                <textarea
                  defaultValue={doctorProfile.bio}
                  className="w-full border border-blue-400 rounded px-3 py-2"
                  rows={3}
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Location</label>
                <input
                  type="text"
                  defaultValue={doctorProfile.location}
                  className="w-full border border-blue-400 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Experience</label>
                <input
                  type="text"
                  defaultValue={doctorProfile.experience}
                  className="w-full border border-blue-400 rounded px-3 py-2"
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Save Changes
              </button>
            </form>
          </div>
        );
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div
      className="flex min-h-screen"
      style={{
        background: `linear-gradient(180deg, #87CEEB 0%, #4682B4 100%)`,
        position: "relative",
      }}
    >
      {/* Clouds SVG background */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fillOpacity="0.7"
          d="M0,224L80,192C160,160,320,96,480,85.3C640,75,800,117,960,144C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
        <path
          fill="#fff"
          fillOpacity="0.5"
          d="M0,288L80,272C160,256,320,224,480,197.3C640,171,800,149,960,154.7C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6 space-y-4 relative z-10">
        <h2 className="text-2xl font-bold mb-6">Doctor Dashboard</h2>
        <nav className="space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveSection(link.id)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                activeSection === link.id
                  ? "bg-white text-blue-900 font-bold"
                  : "hover:bg-blue-700"
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-auto relative z-10 text-blue-900 flex flex-col">
        {/* Profile card at top-left */}
        <div className="flex gap-8 mb-8">
          <div className="w-72 bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
            <img
              src={doctorProfile.photo}
              alt="Doctor profile"
              className="w-24 h-24 rounded-full object-cover mb-3"
            />
            <h3 className="text-xl font-semibold">{doctorProfile.fullName}</h3>
            <p className="text-blue-700 font-medium">{doctorProfile.specialty}</p>
            <p className="mt-2 text-sm text-gray-700">{doctorProfile.bio}</p>
            <p className="mt-2 text-sm text-gray-700">{doctorProfile.location}</p>
            <p className="mt-1 text-xs text-gray-500">{doctorProfile.experience}</p>
          </div>

          {/* Section Content */}
          <div className="flex-1">{renderContent()}</div>
        </div>
      </main>
    </div>
  );
}
