

import React from "react";
import { Info, Copy } from "lucide-react";

const Card = () => {
  return (
    <div className="w-[181px] h-[136px] bg-white shadow-lg rounded-[10px] p-2 flex flex-col items-center">
      <div className="flex items-center gap-2 mt-2">
        <span className="text-black text-[8px] font-medium">
          Withdrawal Balance
        </span>
        <Info className="w-2 h-2 text-black opacity-80" />
      </div>

      <p className="text-black text-[14px] font-semibold">₦35,222,889</p>

      <p className="text-[#FF3C00] text-[6px] font-semibold">Vpay</p>
      <p className="text-[#979797] text-[6px] font-semibold">Top Up Account</p>
      <p className="text-[#979797] text-[8px] font-semibold">XXXXXXXXXX Bank</p>
      <p className="text-[#979797] text-[8px] font-semibold">NAME ON ACCOUNT</p>
      <div className="flex items-center gap-2 bg-[#EBEBEB] px-2 py-1 rounded-[2px] mt-1">
        <span className="text-black text-[6px] font-semibold">6372973018</span>
        <Copy className="w-2 h-2 text-black" />
      </div>
    </div>
  );
};

export default Card;
