import React from 'react'
import { MdOutlineShowChart, MdInfoOutline } from 'react-icons/md'
import { RiArrowUpLine } from "react-icons/ri"

const StatsCard = ({title, value}) => {
  return (
    <div>
         <div className="relative w-[167px] h-[80px] border border-orange-500 rounded-md p-3 cursor-pointer shadow-sm">
      <div className="flex items-center gap-1 text-xs font-medium text-black">
        <span>{title}</span>
        <MdInfoOutline className="w-2 h-2 rounded-full " />
      </div>

      <div className="text-lg font-semibold text-black mt-1">{value}</div>

      <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
        <MdOutlineShowChart  className="w-6 h-6 rounded-md flex items-center justify-center text-orange-500" />
    
      </div>
      <div className="flex items-center ml-1 space-x-2">
        <p className="text-[6px] text-gray-500">vs last month</p>

     
        <div className="flex items-center px-1 py-0.5 ml-5 bg-[#BAFFDD] rounded-md">
          <RiArrowUpLine className="text-[#15CF74] text-[5px]" />
          <span className="text-[4px] font-medium text-[#15CF74]">543%</span>
        </div>
      </div>
    </div>

    </div>
  )
}

export default StatsCard