// app/pharmacy-dashboard/page.js
export default function PharmacyDashboard() {
  return (
    <div className="flex h-screen bg-[#f5f7fa]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#003366] text-white flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-8">AfyaConnect</h2>
        <nav className="space-y-4">
          <a href="#" className="hover:text-[#00bfa5]">Dashboard</a>
          <a href="#" className="hover:text-[#00bfa5]">Medicine Requests</a>
          <a href="#" className="hover:text-[#00bfa5]">Inventory</a>
          <a href="#" className="hover:text-[#00bfa5]">Reports</a>
          <a href="#" className="hover:text-[#00bfa5]">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Topbar */}
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-[#003366]">
            Pharmacy Dashboard
          </h1>
          <input
            type="text"
            placeholder="Search requests..."
            className="border px-3 py-2 rounded-lg"
          />
        </header>

        {/* Content Area */}
        <section className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-bold text-[#003366] mb-4">
            Medicine Requests
          </h2>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border">Patient</th>
                <th className="p-2 border">Request Type</th>
                <th className="p-2 border">Medicine</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">John Doe</td>
                <td className="p-2 border">E-Prescription</td>
                <td className="p-2 border">Amoxicillin</td>
                <td className="p-2 border">22 Sep 2025</td>
                <td className="p-2 border text-yellow-600">Pending</td>
                <td className="p-2 border">
                  <button className="px-3 py-1 bg-green-600 text-white rounded mr-2">
                    Approve
                  </button>
                  <button className="px-3 py-1 bg-red-600 text-white rounded">
                    Out of Stock
                  </button>
                </td>
              </tr>
              {/* More rows later */}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
