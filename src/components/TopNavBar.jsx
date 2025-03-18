import { Bell, ChevronDown} from "lucide-react";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const TopNavbar = ({title}) => {
    const [user, setUser] = useState({ name: '', email: '', profilePic: '' });
    useEffect(() => {
        axios.get('')
          .then(response => {
            setUser({
              name: response.data.name,
              email: response.data.email,
              profilePic: response.data.profilePic
            });
          })
          .catch(error => console.error('Error fetching user data:', error));
      }, []);
    
  return (
    <div className="sticky top-0 left-[220px] right-0 h-[60px]  bg-white shadow-md flex items-center px-6 justify-between">
      {/* Dashboard Title */}
      <h1 className="text-[18px] font-semibold text-black">{title}</h1>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Notification Icon */}
        <Bell className="w-6 h-6 fill-black cursor-pointer" />

        {/* User Profile Section */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={user.profilePic}
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-[12px] font-bold text-black">{user.name}</span>
            <span className="text-[8px] font-medium text-black">{user.email}</span>
          </div>
          <ChevronDown className="w-4 h-4 text-black" />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
