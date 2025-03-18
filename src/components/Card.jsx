import React from 'react'
import { Info, Copy } from "lucide-react"

const Card = () => {
  return (
    <div className="absolute left-[250px] top-[381px] w-[181px] h-[136px] bg-white shadow-lg rounded-[10px] p-2">
    {/* Withdrawal Balance */}
    <div className="flex items-center gap-2 absolute top-[18px] left-1/2 -translate-x-1/2">
      <span className="text-black text-[8px] font-medium">Withdrawal Balance</span>
      <Info className="w-2 h-2 text-black opacity-80" />
    </div>

    {/* Balance Amount */}
    <p className="absolute top-[31px] left-1/2 -translate-x-1/2 text-black text-[14px] font-semibold">
      ₦35,222,889
    </p>

    {/* Vpay */}
    <p className="absolute top-[52px] left-1/2 -translate-x-1/2 text-[#FF3C00] text-[6px] font-semibold">
      Vpay
    </p>

    {/* Top Up Account */}
    <p className="absolute top-[70px] left-1/2 -translate-x-1/2 text-[#979797] text-[6px] font-semibold">
      Top Up Account
    </p>

    {/* Bank Name */}
    <p className="absolute top-[97px] left-1/2 -translate-x-1/2 text-[#979797] text-[8px] font-semibold">
      XXXXXXXXXX Bank
    </p>

    {/* Name on Account */}
    <p className="absolute top-[109px] left-1/2 -translate-x-1/2 text-[#979797] text-[8px] font-semibold">
      NAME ON ACCOUNT
    </p>

    {/* Account Number Section */}
    <div className="absolute top-[81px] left-1/2 -translate-x-1/2 flex items-center gap-3 bg-[#EBEBEB] px-2 py-1 rounded-[2px] w-[60px] h-[12px]">
      <span className="text-black text-[6px] font-semibold">6372973018</span>
      <Copy className="w-2 h-2 text-black" />
    </div>
  </div>
  )
}

export default Card