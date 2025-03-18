import React from 'react'
import { NavLink } from 'react-router-dom'
import SideBar from '../components/SideBar'
import TopNavBar from '../components/TopNavBar'
import StatsCard from '../components/StatsCard'
import TransactionPieChart from '../components/TransactionPieChart'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import CustomFrame from '../components/CustomFrame'

const Dashboard = () => {
  const depositData = [
    { day: 0, value: 0 },
    { day: 1, value: 10 },
    { day: 2, value: 20 },
    { day: 3, value: 30 },
    { day: 4, value: 40 },
    { day: 5, value: 50 },
    { day: 6, value: 60 },
  ]
  return (
    <div className="flex">
      
      <div className="fixed left-0 top-0 h-screen w-[220px] bg-[#F6F6F6] shadow-md">
  <SideBar />
</div>
   
<div className="flex-1 ml-[220px] p-6 overflow-auto">
        <TopNavBar title="Dashboard" />
        <div className="flex flex-wrap gap-4">
        <CustomFrame />
        </div>
        <div className="mt-[25px] flex flex-wrap lg:flex-nowrap justify-between items-start gap-6 w-full">
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 flex-grow">
            <StatsCard title="Total Transactions" value="$0" />
            <StatsCard title="Total Users" value="4" />
            <StatsCard title="Total Airtime" value="$0" />
            <StatsCard title="Total Data" value="$0" />
            <StatsCard title="Withdrawal Balance" value="$0" />
            <StatsCard title="VTU Balance" value="$0" />
            <StatsCard title="USDT Balance" value="$0" />
            <StatsCard title="Dollar Card Reserve" value="$0" />
            
          </div>
          
          <NavLink
          to='/stats'
           className="absolute w-[88px] h-[13px] left-[889px] top-[309px] cursor-pointer font-inter font-bold text-[11px] leading-[13px] text-[#FF7E00] underline">
      View all Stats{'>>'}
      </NavLink>
      
<div className="flex flex-col items-center space-y-6 p-6">
  <div className="w-[500px] h-[300px]  flex-shrink-0">
    <TransactionPieChart />
  </div>

  <div className="w-[382px] h-[369px] bg-white shadow-md p-4">
    <h3 className="font-inter font-medium text-[18px] text-black">
      Recent Deposits
    </h3>
    {/* deposit details */}
  </div>
  </div>

        </div>


  <div className="absolute left-[250px] top-[337px] w-[731px] h-[357px] bg-white shadow-lg shadow-black/25">
  <div className="bg-white rounded-lg border shadow-sm p-2 mt-5 lg:col-span-1 w-[1080px] max-w-2xl mx-auto">
   
    <div className="h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={depositData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Line type="monotone" dataKey="value" stroke="#f97316" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <h3 className="font-medium text-center p-3 border-t">Deposit over last 7 days</h3>
  </div>
</div>

<div className="mt-[-120px] ml-[10px] top-[742px] w-[731px] h-[300px] bg-white shadow-lg shadow-black/25">
<h2 className=' text-lg font-medium mt-6 ml-6'>Recent Transactions</h2>
<div className="relative w-full flex flex-col items-center">
      {/* Header */}
      <div className="flex w-[673px] bg-gray-300 p-2 text-black text-[12px] font-medium">
        <div className="w-[120px] text-center">Transaction Type</div>
        <div className="w-[150px] text-center">UserID</div>
        <div className="w-[100px]  text-center">Username</div>
        <div className="w-[100px] text-center">Amount</div>
        <div className="w-[108px] text-center">Reference Number</div>
      </div>
      
      {/* Rows */}
      {["Withdrawal", "Data", "Deposit", "Airtime", "Dollar Card"].map((type, index) => (
        <div key={index} className="flex w-[673px] bg-gray-300 p-2 text-black text-[8px] font-normal mt-2">
          <div className="w-[120px] text-center">{type}</div>
          <div className="w-[150px] text-center">___</div>
          <div className="w-[100px] text-center">payking_user</div>
          <div className="w-[100px] text-center">₦0</div>
          <div className="w-[108px] text-center">___</div>
        </div>
      ))}
    </div>
  
</div>
  
      </div>
    </div>
  );
}

export default Dashboard;

