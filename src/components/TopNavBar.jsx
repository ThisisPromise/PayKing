
import { Bell, ChevronDown, Menu } from "lucide-react";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopNavbar = ({ title, toggleSidebar }) => {
  const [user, setUser] = useState({ name: '', email: '', profilePic: '' });
  const [showProfile, setShowProfile] = useState(false); 

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
    <div className="flex-1 sticky top-0 left-0 lg:left-[220px] right-0 h-[60px] bg-white shadow-md flex items-center w-full px-4 lg:px-6 justify-between">
      

      <h1 className="text-[18px] font-semibold mt-3 px-6 text-black">{title}</h1>

      <div className="flex items-center gap-4">
 
        <Bell className="w-6 h-6 text-black cursor-pointer" />
        <div className="relative">
          <button className="flex items-center gap-3 cursor-pointer" onClick={() => setShowProfile(!showProfile)}>
            <img src={user.profilePic} alt="User" className="w-10 h-10 rounded-full object-cover" />
            <ChevronDown className="w-4 h-4 text-black " />
          </button>
          {showProfile && (
            <div className="absolute right-0 mt-2 bg-white shadow-md p-2 rounded-md w-[150px] text-center lg:hidden">
              <p className="text-[12px] font-bold">{user.name}</p>
              <p className="text-[10px] text-gray-600">{user.email}</p>
            </div>
          )}
          <div className="hidden lg:flex flex-col">
            <span className="text-[12px] font-bold text-black">{user.name}</span>
            <span className="text-[8px] font-medium text-black">{user.email}</span>
          
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;

