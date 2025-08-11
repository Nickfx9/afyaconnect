"use client";

import { useState } from "react";
import {
  FaCalendarCheck,
  FaUserMd,
  FaNotesMedical,
  FaMoneyBillWave,
  FaHeartbeat,
  FaUser
} from "react-icons/fa";

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const nextAppointment = {
    date: "2025-08-15",
    time: "10:00 AM",
    doctor: "Dr. Jane Mwangi",
    specialty: "Cardiologist",
  };

  const quickActions = [
    { icon: <FaCalendarCheck size={22} />, label: "Book Appointment" },
    { icon: <FaUserMd size={22} />, label: "My Doctors" },
    { icon: <FaNotesMedical size={22} />, label: "Consultations" },
    { icon: <FaMoneyBillWave size={22} />, label: "Payments" },
  ];

  const stats = [
    { title: "Appointments", value: 12, color: "bg-purple-500" },
    { title: "Consultations", value: 8, color: "bg-blue-500" },
    { title: "Payments", value: "KES 15,000", color: "bg-orange-500" },
  ];

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <FaHeartbeat size={20} /> },
    { id: "book", label: "Book Appointment", icon: <FaCalendarCheck size={20} /> },
    { id: "doctors", label: "My Doctors", icon: <FaUserMd size={20} /> },
    { id: "consultations", label: "Consultations", icon: <FaNotesMedical size={20} /> },
    { id: "payments", label: "Payments", icon: <FaMoneyBillWave size={20} /> },
    { id: "profile", label: "Profile", icon: <FaUser size={20} /> },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div>
            <h1 className="text-3xl font-bold text-purple-700 mb-2">Welcome back, Nick</h1>
            <p className="mb-6 text-gray-600">Here’s your health overview for today</p>

            {/* Next Appointment */}
            <div className="mb-8 bg-white shadow-lg rounded-xl p-6 border border-purple-100">
              <h2 className="text-xl font-semibold text-purple-700 mb-4">Your Next Appointment</h2>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <p className="text-lg font-medium text-gray-700">
                    {nextAppointment.date} at {nextAppointment.time}
                  </p>
                  <p className="text-gray-600">
                    {nextAppointment.doctor} — {nextAppointment.specialty}
                  </p>
                </div>
                <button className="mt-4 md:mt-0 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                  View Details
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`${stat.color} text-white p-6 rounded-xl shadow-lg hover:scale-105 transition`}
                >
                  <p className="text-lg">{stat.title}</p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div>
              <h2 className="text-xl font-semibold text-purple-700 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {quickActions.map((action, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md border border-purple-100 hover:shadow-lg hover:border-purple-300 transition cursor-pointer"
                  >
                    <div className="text-purple-600 mb-2">{action.icon}</div>
                    <p className="text-gray-700 text-sm">{action.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "book":
        return (
          <div>
            <h1 className="text-2xl font-bold text-blue-700 mb-4">Book Appointment</h1>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
              <p className="text-gray-700 mb-4">
                Select your preferred doctor, specialty, and appointment time.
              </p>
              <form className="grid gap-4">
                <input type="text" placeholder="Doctor's Name" className="p-3 border rounded-lg" />
                <select className="p-3 border rounded-lg">
                  <option>Select Specialty</option>
                  <option>Cardiology</option>
                  <option>Dermatology</option>
                  <option>Pediatrics</option>
                </select>
                <input type="date" className="p-3 border rounded-lg" />
                <input type="time" className="p-3 border rounded-lg" />
                <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
                  Confirm Appointment
                </button>
              </form>
            </div>
          </div>
        );

      case "doctors":
        return <div className="p-6 bg-white rounded-lg shadow">👩‍⚕️ List of your doctors will appear here.</div>;
      case "consultations":
        return <div className="p-6 bg-white rounded-lg shadow">💬 Your consultations history and chat.</div>;
      case "payments":
        return <div className="p-6 bg-white rounded-lg shadow">💳 Payment history and receipts.</div>;
      case "profile":
        return <div className="p-6 bg-white rounded-lg shadow">🧑 Edit your profile and medical history.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-4 border-r border-purple-100">
        <h2 className="text-2xl font-bold text-purple-700 mb-6">Patient Dashboard</h2>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center gap-3 w-full p-3 rounded-lg text-left transition 
                ${activeSection === item.id
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 hover:bg-purple-100"}`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{renderContent()}</main>
    </div>
  );
}
