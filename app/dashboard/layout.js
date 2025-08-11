"use client";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { name: "Dashboard", id: "dashboard" },
  { name: "Book Appointment", id: "book" },
  { name: "My Appointments", id: "appointments" },
  { name: "Consultations", id: "consultations" },
  { name: "Payments", id: "payments" },
  { name: "Profile Settings", id: "profile" },
];

export default function DashboardLayout() {
  const [activeSection, setActiveSection] = useState("dashboard");

  // Profile state
  const [profile, setProfile] = useState({
    name: "Nick",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=80&q=80",
  });
  const [newImageFile, setNewImageFile] = useState(null);
  const fileInputRef = useRef(null);

  // Sample Data for dashboard
  const nextAppointment = {
    date: "2025-08-15",
    time: "10:00 AM",
    doctor: "Dr. Jane Mwangi",
    specialty: "Cardiologist",
  };

  const stats = [
    { title: "Appointments", value: 12, color: "bg-purple-500" },
    { title: "Consultations", value: 8, color: "bg-blue-500" },
    { title: "Payments", value: "KES 15,000", color: "bg-orange-500" },
  ];

  const quickActions = [
    { icon: "📅", label: "Book Appointment" },
    { icon: "👩‍⚕️", label: "My Doctors" },
    { icon: "💬", label: "Consultations" },
    { icon: "💳", label: "Payments" },
  ];

  const appointments = [
    {
      id: 1,
      date: "2025-08-15",
      time: "10:00 AM",
      doctor: "Dr. Jane Mwangi",
      specialty: "Cardiology",
      status: "Upcoming",
    },
    {
      id: 2,
      date: "2025-07-20",
      time: "2:00 PM",
      doctor: "Dr. John Okello",
      specialty: "Dermatology",
      status: "Completed",
    },
  ];

  const consultations = [
    {
      id: 1,
      date: "2025-07-20",
      doctor: "Dr. John Okello",
      summary: "Discussed skin rash and treatment plan.",
    },
    {
      id: 2,
      date: "2025-06-10",
      doctor: "Dr. Jane Mwangi",
      summary: "Routine checkup and heart health discussion.",
    },
  ];

  const payments = [
    {
      id: 1,
      date: "2025-07-21",
      amount: "KES 5,000",
      method: "Mobile Money",
      status: "Completed",
    },
    {
      id: 2,
      date: "2025-06-11",
      amount: "KES 10,000",
      method: "Credit Card",
      status: "Completed",
    },
  ];

  // Handle profile image upload preview
  useEffect(() => {
    if (!newImageFile) return;
    const objectUrl = URL.createObjectURL(newImageFile);
    setProfile((prev) => ({ ...prev, image: objectUrl }));

    return () => URL.revokeObjectURL(objectUrl);
  }, [newImageFile]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewImageFile(e.target.files[0]);
    }
  };

  const handleProfileSave = (e) => {
    e.preventDefault();
    alert("Profile saved (not really, this is just a demo)!");
  };

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div>
            <h1 className="text-3xl font-bold text-purple-700 mb-2">
              Welcome back, {profile.name}
            </h1>
            <p className="mb-6 text-gray-600">Here’s your health overview for today</p>

            <div className="mb-8 bg-white shadow-lg rounded-xl p-6 border border-purple-100">
              <h2 className="text-xl font-semibold text-purple-700 mb-4">
                Your Next Appointment
              </h2>
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

            <div>
              <h2 className="text-xl font-semibold text-purple-700 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {quickActions.map((action, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md border border-purple-100 hover:shadow-lg hover:border-purple-300 transition cursor-pointer"
                  >
                    <div className="text-purple-600 mb-2 text-2xl">{action.icon}</div>
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
            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 max-w-md">
              <p className="text-gray-700 mb-4">
                Select your preferred doctor, specialty, and appointment time.
              </p>
              <form className="grid gap-4">
                <input
                  type="text"
                  placeholder="Doctor's Name"
                  className="p-3 border rounded-lg"
                />
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

      case "appointments":
        return (
          <div>
            <h1 className="text-2xl font-bold text-purple-700 mb-6">My Appointments</h1>
            {appointments.map((appt) => (
              <div
                key={appt.id}
                className="bg-white p-4 mb-4 rounded-lg shadow border border-purple-100"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-lg">
                      {appt.date} at {appt.time}
                    </p>
                    <p className="text-gray-600">
                      {appt.doctor} — {appt.specialty}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-white font-semibold text-sm ${
                      appt.status === "Upcoming"
                        ? "bg-green-500"
                        : "bg-gray-400"
                    }`}
                  >
                    {appt.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        );

      case "consultations":
        return (
          <div>
            <h1 className="text-2xl font-bold text-blue-700 mb-6">Consultations</h1>
            {consultations.map((consult) => (
              <div
                key={consult.id}
                className="bg-white p-4 mb-4 rounded-lg shadow border border-blue-100"
              >
                <p className="font-semibold">
                  {consult.date} - {consult.doctor}
                </p>
                <p className="text-gray-700">{consult.summary}</p>
              </div>
            ))}
          </div>
        );

      case "payments":
        return (
          <div>
            <h1 className="text-2xl font-bold text-orange-700 mb-6">Payments</h1>
            {payments.map((payment) => (
              <div
                key={payment.id}
                className="bg-white p-4 mb-4 rounded-lg shadow border border-orange-100"
              >
                <div className="flex justify-between items-center">
                  <p>
                    <span className="font-semibold">{payment.date}</span> -{" "}
                    {payment.method}
                  </p>
                  <p className="font-semibold">{payment.amount}</p>
                </div>
                <p
                  className={`mt-1 text-sm font-semibold ${
                    payment.status === "Completed"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {payment.status}
                </p>
              </div>
            ))}
          </div>
        );

      case "profile":
        return (
          <div className="max-w-md bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h1 className="text-2xl font-bold mb-6 text-purple-700">Profile Settings</h1>
            <form onSubmit={handleProfileSave} className="space-y-6">
              <div className="flex flex-col items-center">
                <img
                  src={profile.image}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-purple-600"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                  className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                >
                  Change Profile Image
                </button>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={profile.name}
                  onChange={(e) =>
                    setProfile((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full p-3 border rounded-lg"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
              >
                Save Profile
              </button>
            </form>
          </div>
        );

      default:
        return <div>🏠 Welcome to your Dashboard</div>;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-[#A05252] text-white p-6 flex flex-col justify-start">
        <h2 className="text-2xl font-bold mb-6">AfyaConnect</h2>
        <nav className="space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveSection(link.id)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                activeSection === link.id
                  ? "bg-white text-[#A05252]"
                  : "hover:bg-[#bf6f6f]"
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-[#f9f9f9] overflow-auto">
        {/* Profile at top right */}
        <div className="flex justify-end items-center mb-6 gap-3">
          <span className="text-gray-700 font-semibold">{profile.name}</span>
          <img
            src={profile.image}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover border-2 border-purple-600"
          />
        </div>

        {/* Dynamic content based on active section */}
        {renderContent()}
      </main>
    </div>
  );
}
