import React from 'react'
import { useState } from 'react'
import SideBar from '../components/SideBar'
import TopNavBar from '../components/TopNavBar'
import CustomFrame from '../components/CustomFrame'
import SearchBar from '../components/SearchBar'

export default function TransactionPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    return (
      <div className="flex">
  
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className={`flex-1 p-6 overflow-auto transition-all duration-300 ${isSidebarOpen ? "opacity-50 pointer-events-none" : ""}`}>
        
        <div className="relative z-10">
          <TopNavBar title="Transactions" />
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          <SearchBar />
          <CustomFrame />
        </div>
        </div>
        </div>
    )
  }
  