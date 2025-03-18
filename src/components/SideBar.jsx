
import logocol from "../assets/logocolored.png";
import { NavLink } from "react-router-dom";
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
import { useState } from "react";

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
  { icon: ClipboardList, label: "Activity Log", id: "activity" },
  { icon: User, label: "Staffs", id: "staffs" },
];

const Sidebar = () => {
  const [isSidebarOpen, setisSidebarOpen] = useState(true);
  return (
    <div className="fixed left-0 top-0 h-screen w-50 md:w-164 bg-[#F6F6F6] shadow-md ">
     
      <div className="w-[123px] h-[60px] bg-white shadow-lg rounded-md flex items-center justify-center mt-[31px] mx-auto">
        <img src={logocol} alt="Logo" className="h-[40px]" />
      </div>

      {/* Navigation Links */}
      <nav className="px-4 mt-[10px]">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            to={`/${item.id}`} 
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left mb-1 text-sm transition ${
                isActive
                  ? "bg-white text-orange-500 font-medium gap-2 p-2 rounded-md shadow-md"
                  : "text-black-600 hover:bg-gray-50"
              }`
            }
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;


