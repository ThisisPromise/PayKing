

import React from "react";
import { useState } from "react";
import SideBar from "../components/SideBar";
import TopNavBar from "../components/TopNavBar";
import StatsCard from "../components/StatsCard";
import CustomFrame from "../components/CustomFrame";
import Balances from "../components/Balances";

const Stats = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex">
  
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div
        className={`flex-1 p-6 overflow-auto transition-all duration-300 ${
          isSidebarOpen ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <TopNavBar title="Stats" />

        <div className="flex flex-wrap gap-4">
          <CustomFrame />
        </div>
        <div className="mt-[70px] flex flex-col w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <StatsCard title="Total Transactions" value="$0" />
            <StatsCard title="Total Users" value="4" />
            <StatsCard title="Total Airtime" value="$0" />
            <StatsCard title="Total Data" value="$0" />
            <StatsCard title="Withdrawal Balance" value="$0" />
            <StatsCard title="VTU Balance" value="$0" />
            <StatsCard title="USDT Balance" value="$0" />
            <StatsCard title="Dollar Card Reserve" value="$0" />
          </div>
          <div className="hidden md:flex justify-center mt-6">
            <Balances />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
