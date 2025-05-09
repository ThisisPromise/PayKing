


// import React from 'react';
// import { ChevronDown, Calendar } from "lucide-react";

// const CustomFrame = () => {
//   return (
//     <div className="absolute top-[103px] xxl:left-[1312px] right-6 flex items-center gap-2 sm:gap-3 rounded-md border border-black p-0.5 sm:p-1 sm:max-w-[140px] ml-auto">
//       <div className="flex items-center gap-1 sm:gap-2">
//         <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
        
//         {/* Text */}
//         <span className="text-[10px] sm:text-xs font-medium text-black">
//           All time
//         </span>
//       </div>
//       {/* Downward Arrow */}
//       <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
//     </div>
//   );
// };

// export default CustomFrame;


import React, { useState } from "react";
import { ChevronDown, Calendar } from "lucide-react";

const CustomFrame = () => {
  const [timeFilter, setTimeFilter] = useState("all-time");

  return (
    <div className="absolute top-[103px] xxl:left-[1312px] right-6 flex cursor-pointer items-center gap-2 sm:gap-3 rounded-md border border-black p-0.5 sm:p-1 sm:max-w-[140px] ml-auto bg-white">
      {/* Calendar Icon */}
      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-black" />

      {/* Select Dropdown */}
      <div className="relative inline-block w-full">
        <select
          className="appearance-none cursor-pointer border border-transparent rounded-md px-2 py-1 bg-white text-[10px] sm:text-xs font-medium text-black focus:outline-none"
          value={timeFilter}
          onChange={(e) => setTimeFilter(e.target.value)}
        >
          <option value="all-time">All time</option>
          <option value="today">Today</option>
          <option value="yesterday">Yesterday</option>
          <option value="this-week">This week</option>
          <option value="this-month">This month</option>
        </select>

        {/* Dropdown Icon */}
        <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center text-black">
          <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
        </div>
      </div>
    </div>
  );
};

export default CustomFrame;
