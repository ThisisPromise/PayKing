

import React from 'react'
import { useState } from 'react';
import SideBar from '../components/SideBar';
import TopNavBar from '../components/TopNavBar';
import { Link } from 'react-router-dom';
import CustomFrame from '../components/CustomFrame';
import SideBarRight from '../components/SideBarRight';
import RecentTransact from '../components/RecentTransact';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import DashStats from '../components/dashstats';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const depositData = [
    { day: 0, value: 0 },
    { day: 1, value: 10 },
    { day: 2, value: 20 },
    { day: 3, value: 30 },
    { day: 4, value: 40 },
    { day: 5, value: 50 },
    { day: 6, value: 60 },
  ];

  return (
    <div className="flex">
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div
        className={`flex-1 p-6 overflow-auto transition-all duration-300 ${
          isSidebarOpen ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <div className="sticky top-0 z-10 bg-gray-50">
          <TopNavBar title="Dashboard" />
        </div>

        <div className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <div className="flex flex-wrap gap-4 mb-10">
                <CustomFrame />
              </div>

              <div className="mb-6">
              <div className="grid grid-cols-2 custom-md:grid-cols-3 custom-xl:grid-cols-4 gap-4 md:gap-6">
  <DashStats title="Total Transactions" value="$0" />
  <DashStats title="Total Users" value="4" />
  <DashStats title="Total Airtime" value="$0" />
  <DashStats title="Total Data" value="$0" />
  <DashStats title="Withdrawal Balance" value="$0" />
  <DashStats title="VTU Balance" value="$0" />

  <div className="hidden custom-xl:block">
    <DashStats title="USDT Balance" value="$0" />
  </div>
  <div className="hidden custom-xl:block">
    <DashStats title="Dollar Card Reserve" value="$0" />
  </div>
</div>


                <div className="mt-2">
                <Link to="/stats">
                  <p className="text-[#FF7E00] font-bold text-xs md:text-sm">
                    View all Stats {'>>'}
                  </p>
                  </Link>
                </div>
              </div>

              <div className="w-full bg-white shadow-lg p-4 rounded-lg mb-6">
                <h3 className="font-medium text-center">Deposit over last 7 days</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={depositData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Line type="monotone" dataKey="value" stroke="#f97316" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="w-full mb-6">
                <RecentTransact />
              </div>
            </div>

            <div className="hidden lg:block lg:w-96">
              <div className="sticky top-[150px]">
                <SideBarRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard