
import React from "react";
import { LineChart } from "lucide-react";

export default function Compo({ title, value, month, percentage }) {
  return (
    <div className="p-2 sm:p-4">
      <div className="bg-white p-4 rounded-md shadow-sm">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm md:text-base font-medium">{title}</span>
        </div>
        <div className="flex items-center mt-1">
          <span className="text-lg md:text-xl font-semibold">{value}</span>
          <div className="ml-4">
            <LineChart size={24} className="text-orange-500" />
          </div>
        </div>
        <div className="flex items-center mt-1">
          <span className="text-xs text-gray-500">{month}</span>
          <div className="bg-red-300 text-xs px-2 py-1 rounded ml-2">{percentage}</div>
        </div>
      </div>
    </div>
  );
}