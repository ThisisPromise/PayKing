import React from 'react';
import CustomFrame from '../components/CustomFrame';
import SideBar from '../components/SideBar';
import TopNavBar from '../components/TopNavBar';
import SearchBar from '../components/SearchBar';

export default function Airtime() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-screen w-[220px] bg-[#F6F6F6] shadow-md">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-[220px] p-6 overflow-auto">
        <TopNavBar title="Airtime" />
        <SearchBar />

        {/* Table Container */}
        <div className="mt-[100px] w-[831px] h-[300px] bg-white ">
<div className="relative w-full flex flex-col items-center">
      {/* Header */}
      <div className="flex w-[673px] p-2 text-black text-[12px] font-medium">
        <div className="w-[150px] text-center">Thrift Name</div>
        <div className="w-[150px] text-center">Type</div>
        <div className="w-[150px]  text-center">Time Interval</div>
        <div className="w-[108px] text-center">Duration</div>
        <div className="w-[150px]  text-center">Amount</div>
        <div className="w-[150px] text-center">Date Created</div>
        <div className="w-[150px] text-center">Pay Count</div>
        <div className="w-[150px] text-center">Total Amount</div>
      </div>
      
      {/* Rows */}
      {["fixed", "fixed", "fixed", "fixed"].map((type, index) => (
        <div key={index} className="flex w-[673px] p-2 text-black text-[8px] font-normal mt-2">
            <div className="w-[150px] text-center">___</div>
          <div className="w-[150px] text-center">{type}</div>
          <div className="w-[150px] text-center">___</div>
          <div className="w-[150px] text-center">$0</div>
          <div className="w-[150px] text-center">___</div>
          <div className="w-[150px] text-center">$0</div>
          <div className="w-[150px] text-center">___</div>
          <div className="w-[150px] text-center">$0</div>
        </div>
      ))}
    </div>
  
</div>
        <CustomFrame />
      </div>
    </div>
  );
}
