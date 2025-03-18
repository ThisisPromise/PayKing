import React from 'react'
import SideBar from '../components/SideBar'
import TopNavBar from '../components/TopNavBar'
import CustomFrame from '../components/CustomFrame'
import SearchBar from '../components/SearchBar'

export default function Electricity() {
    return (
        <div className="flex">
      
        <div className="fixed left-0 top-0 h-screen w-[220px] bg-[#F6F6F6] shadow-md">
          <SideBar />
        </div>
  
        
        <div className="flex-1 ml-[220px] p-6 overflow-auto">
          <TopNavBar title="Electricity" />
          <SearchBar />
          <CustomFrame />
          </div>
          </div>
    )
  }
  