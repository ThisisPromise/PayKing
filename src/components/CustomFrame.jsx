import React from 'react'
import { ChevronDown, Calendar } from "lucide-react";

const CustomFrame = () => {
  return (
    <div className="absolute left-[1312px] top-[103px] flex items-center gap-[15px] rounded-[3px] border cursor-pointer border-black p-[3px_5px] w-[98px] h-[20px]">
    <div className="flex items-center gap-[5px] w-[55px] h-[14px]">
      <Calendar className="w-[14px] h-[14px] " />
 

      {/* Text */}
      <span className="text-[10px] font-medium leading-[12px] text-black">
        All time
      </span>
    </div>

    {/* Downward Arrow */}
    <ChevronDown size={14} className=" text-black" />
  </div>
  )
}

export default CustomFrame