


import React from 'react';
import { MdOutlineShowChart, MdInfoOutline } from 'react-icons/md';
import { RiArrowUpLine } from 'react-icons/ri';

const DashStats = ({ title, value }) => {
  return (
    <div className="relative w-[120px] h-[60px] sm:w-[180px] md:w-[120px] border border-orange-500 rounded-md p-1 sm:p-2 shadow-sm flex flex-col justify-between">

      <div className="absolute top-[10px] left-[8px] flex items-center gap-1 text-[6px] sm:text-[10px] font-medium text-black">
        <span className="truncate">{title}</span>
        <MdInfoOutline className="w-2 h-2 sm:w-3 sm:h-3 text-gray-600" />
      </div>

      {/* Value */}
      <div className="absolute top-[22px] left-[8px] text-[10px] sm:text-[16px] font-semibold text-black">
        {value}
      </div>

      {/* Chart Icon */}
      <div className="absolute top-[20px] right-[8px]">
        <MdOutlineShowChart className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
      </div>

      {/* Footer: Comparison & Growth */}
      <div className="absolute bottom-[6px] left-[8px] flex items-center space-x-2">
        <p className="text-[4px] sm:text-[8px] text-gray-500">
          vs last month
        </p>

        <div className="flex items-center px-1 py-0.5 bg-[#BAFFDD] rounded-md">
          <RiArrowUpLine className="text-[#15CF74] text-[4px] sm:text-[7px]" />
          <span className="text-[3px] sm:text-[6px] font-medium text-[#15CF74]">
            12%
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashStats;
