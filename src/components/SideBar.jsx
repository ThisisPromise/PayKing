
import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logocol from "../assets/logocolored.png";
import { FaGift, FaHandsHelping, FaTicketAlt } from "react-icons/fa"; 

import {
  LayoutDashboard,
  BarChart2,
  Users,
  Receipt,
  Phone,
  Zap,
  Tv,
  Database,
  Bitcoin,
  ClipboardList,
  User,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: BarChart2, label: "Stats", id: "stats" },
  { icon: Users, label: "Users", id: "users" },
  { icon: Receipt, label: "Transactions", id: "transactions" },
  { icon: Phone, label: "Airtime", id: "airtime" },
  { icon: Zap, label: "Electricity", id: "electricity" },
  { icon: Tv, label: "Cable TV", id: "cable-tv" },
  { icon: Database, label: "Data", id: "data" },
  { icon: Bitcoin, label: "Crypto", id: "crypto" },
  { icon: FaGift, label: "Gift Card", id: "gift-card" },
  { icon: FaHandsHelping, label: "Crowd Funding", id: "crowd-funding" },
  { icon: FaTicketAlt, label: "Booking & Ticketing", id: "booking-ticketing" },
  { icon: ClipboardList, label: "Activity Log", id: "activity" },
  { icon: User, label: "Staffs", id: "staffs" },
];

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <>

      <button
        className={`px-2 py-2 z-50 lg:hidden transition-all duration-300 ${
          isSidebarOpen ? "fixed top-4 right-4" : "absolute top-10 left-6"
        }`}
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`fixed top-0 right-0 h-screen bg-[#F6F6F6] shadow-md transition-all duration-300 overflow-y-auto
          ${isSidebarOpen ? "w-full z-10 h-full bg-[#F6F6F6]" : "w-0 overflow-hidden"} 
          lg:w-[220px] lg:relative lg:min-h-screen lg:sticky lg:top-0 lg:left-0`}
      >
        <div className="flex flex-col min-h-screen">
         
          <div
            className={`w-[123px] h-[60px] rounded-md flex items-center justify-center mt-[31px] mx-auto 
              ${isSidebarOpen ? "bg-transparent shadow-none" : "bg-white shadow-lg"} lg:bg-white lg:shadow-lg`}
          >
            {!isSidebarOpen && <img src={logocol} alt="Logo" className="h-[40px]" />}
          </div>


          <nav className="px-4 mt-[10px] flex-grow pb-10">
            {menuItems.map((item) => (
              <NavLink
                key={item.id}
                to={`/${item.id}`}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left mb-1 text-sm transition ${
                    isActive ? "bg-white text-orange-500 font-medium gap-2 p-2 rounded-md shadow-md" : "text-black-600 hover:bg-gray-50"
                  }`
                }
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    toggleSidebar(); 
                  }
                }}
              >
                <item.icon className="w-4 h-4 text-gray-700" />
                {item.label}
              </NavLink>
            ))}
          </nav>
          

        </div>
      </div>


      {isSidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-40 lg:hidden" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;