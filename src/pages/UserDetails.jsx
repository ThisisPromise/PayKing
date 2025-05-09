
import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import TopNavbar from "../components/TopNavBar";
import CustomFrame from "../components/CustomFrame";
import SearchBar from "../components/SearchBar";

export default function UserDetails() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showFullTransactions, setShowFullTransactions] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const transactions = [
    "Withdrawal", "Data", "Deposit", "Airtime", "Debit Card", 
    "Deposit", "Airtime", "Data", "Withdrawal", "Airtime",
    "Deposit", "Airtime", "Withdrawal", "Debit Card", "Airtime",
    "Deposit", "Airtime", "Withdrawal", "Data", "Deposit",
    "Airtime", "Withdrawal", "Debit Card"
  ];

  const toggleTransactions = () => {
    setShowFullTransactions(!showFullTransactions);
  };

  return (
    <div className="flex">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className={`flex-1 p-6 overflow-auto transition-all duration-300 ${isSidebarOpen ? "opacity-50 pointer-events-none" : ""}`}>
        <div className="relative z-10">
          <TopNavbar title="Users" />
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          <SearchBar />
          <CustomFrame />
        </div>

        <div className="p-4 mt-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <img
              src={userData?.profileImage || ""}
              alt="User profile"
              className="w-16 h-16 rounded-full object-cover bg-black"
            />

            <div className="flex flex-wrap justify-between gap-8 w-full">
              {[ 
                { label: "Username", value: "Musa453" },
                { label: "Fullname", value: "Adebolaji Musa" },
                { label: "Email", value: "musaadebolaji@gmail.com" },
                { label: "Phone", value: "09012345678" },
                { label: "Address", value: "21, Victor Victor Street, New Benin Edo State" },
                { label: "Total Deposit", value: "₦23,553,008" },
                { label: "Total Withdraw", value: "₦23,553,008" },
                { label: "Balance", value: "₦23,553,008" },
              ].map((item, index) => (
                <div key={index}>
                  <div className="text-sm text-gray-500">{item.label}:</div>
                  <div className="font-normal">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition">
              Freeze account
            </button>
          </div>
        </div>

        {!showFullTransactions && (
          <div className="hidden md:block">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-medium mb-4">In Thrift: (4)</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="text-left text-sm">
                      <th className="pb-2">Thrift Name</th>
                      <th className="pb-2">Type</th>
                      <th className="pb-2">Time Interval</th>
                      <th className="pb-2">Duration</th>
                      <th className="pb-2">Amount</th>
                      <th className="pb-2">Date Created</th>
                      <th className="pb-2">Pay Count</th>
                      <th className="pb-2">Total Amount</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[1, 2, 3, 4].map((item) => (
                      <tr key={item} className="border-t">
                        <td className="py-2">New Car</td>
                        <td className="py-2">Fixed</td>
                        <td className="py-2">Daily</td>
                        <td className="py-2">30</td>
                        <td className="py-2">₦24,000</td>
                        <td className="py-2">2023-02-10</td>
                        <td className="py-2">4</td>
                        <td className="py-2">₦24,000</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Osusu Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-medium mb-4">In Osusu: (2)</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="text-left text-sm">
                      <th className="pb-2">Osusu Name</th>
                      <th className="pb-2">Time Interval</th>
                      <th className="pb-2">Duration</th>
                      <th className="pb-2">Amount</th>
                      <th className="pb-2">Date Created</th>
                      <th className="pb-2">Pay Count</th>
                      <th className="pb-2">Total Users</th>
                      <th className="pb-2">Total Amount</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[1, 2].map((item) => (
                      <tr key={item} className="border-t">
                        <td className="py-2">New Car</td>
                        <td className="py-2">Daily</td>
                        <td className="py-2">30</td>
                        <td className="py-2">₦24,000</td>
                        <td className="py-2">2023-02-10</td>
                        <td className="py-2">4</td>
                        <td className="py-2">4</td>
                        <td className="py-2">₦24,000</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        <div className={`bg-white rounded-lg shadow-sm p-6 ${showFullTransactions ? "hidden md:block" : "hidden md:block"}`}>
          <h2 className="text-lg font-medium mb-4">Recent Transactions</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-sm">
                  <th className="pb-2">Transaction Type</th>
                  <th className="pb-2">UserID</th>
                  <th className="pb-2">Username</th>
                  <th className="pb-2">Amount</th>
                  <th className="pb-2">Reference Number</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {(showFullTransactions ? transactions : transactions.slice(0, 7)).map((type, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-2">{type}</td>
                    <td className="py-2">82618739fhgd</td>
                    <td className="py-2">payking_user</td>
                    <td className="py-2">₦24,000</td>
                    <td className="py-2">fluf7q8f6f8fdy</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end mt-4">
            <button 
              onClick={toggleTransactions} 
              className="text-sm text-orange-600 underline"
            >
              {showFullTransactions ? "Hide All Transactions" : "View All Transactions"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
