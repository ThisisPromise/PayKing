

import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CustomFrame from "../components/CustomFrame";
import SideBar from "../components/SideBar";
import TopNavBar from "../components/TopNavBar";
import SearchBar from "../components/SearchBar";
import Compo from "../components/Compo";
import DataTable from "../components/DataTable";



export default function Cable() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

const [searchParams, setSearchParams] = useSearchParams();
const query = searchParams.get("search") || "";


const handleSearch = (searchQuery) => {
  setSearchParams(searchQuery ? { search: searchQuery } : {});
};

useEffect(() => {
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };
  

  checkScreenSize();
  

  window.addEventListener('resize', checkScreenSize);

  return () => window.removeEventListener('resize', checkScreenSize);
}, []);

  return (
    <div className="flex">

      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

 
      <div
        className={`flex-1 p-6 overflow-auto transition-all duration-300 ${
          isSidebarOpen ? "opacity-50 pointer-events-none" : ""
        }`}
      >
 
        <div className="relative z-10">
          <TopNavBar title="Data" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <SearchBar onSearch={handleSearch} />
          <CustomFrame />
        </div>

        <div className="mt-[30px] flex">
          <Compo title={'Data'} 
          value={'2,200,000.53'} 
          month={'vs last month'} 
          percentage={'-5%'} />
        </div>
      

        <div className="mt-16 w-full">

          
            <div className=" p-4 w-full">
              <div className="grid grid-cols-8 gap-1 text-xs sm:text-sm font-semibold text-black py-2">
                <span className="text-center min-w-0 truncate">Username</span>
                <span className="text-center min-w-0 truncate">Email</span>
                <span className="text-center min-w-0 truncate">Provider</span>
                <span className="text-center min-w-0 truncate">Plan</span>
                <span className="text-center min-w-0 truncate">Amount</span>
                <span className="text-center min-w-0 truncate">Phone Number</span>
                <span className="text-center min-w-0 truncate">Date Created</span>
                <span className="text-center min-w-0 truncate">Transaction ID</span>
              </div>
            </div>
        
          <DataTable searchQuery={query} />
        </div>
    
      </div>
      
    </div>
  );
}
