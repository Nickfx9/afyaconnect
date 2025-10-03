"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/patient/me");
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        } else {
          router.push("/login"); // Redirect if not logged in
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        router.push("/login");
      }
    }
    fetchUser();
  }, [router]);

  if (!user) {
    return <p className="text-center mt-10 text-gray-500">Loading dashboard...</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-600 via-blue-700 to-blue-900 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Welcome Banner */}
        <div className="bg-white rounded-2xl shadow-xl flex items-center gap-5 py-6 px-8 mb-8">
          <img
            src="/avatar_patient.svg"
            alt="Avatar"
            className="w-20 h-20 rounded-full border-4 border-cyan-400 bg-cyan-100 object-cover"
          />
          <div>
            <h1 className="text-3xl font-extrabold text-blue-900 mb-1">
              Welcome, {user.fullName.split(" ")[0]}!
            </h1>
            <p className="text-gray-500 text-lg">Your AfyaConnect Patient Dashboard</p>
          </div>
        </div>

        {/* Dashboard Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Upcoming Appointments</h2>
            <p className="text-gray-500">No upcoming appointments.</p>
            <button className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition">
              Book New Appointment
            </button>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Medical Records</h2>
            <p className="text-gray-500">Your health records will show here.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Messages & Notifications</h2>
            <p className="text-gray-500">No new messages.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Profile & Settings</h2>
            <p className="text-gray-500">Manage your profile and account settings here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
