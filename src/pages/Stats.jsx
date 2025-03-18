import React from 'react'
import SideBar from '../components/SideBar'
import TopNavBar from '../components/TopNavBar'
import StatsCard from '../components/StatsCard'
import CustomFrame from '../components/CustomFrame'
import Balances from '../components/Balances'

const Stats = () => {
  return (

    <div className="flex">
      
      <div className="fixed left-0 top-0 h-screen w-[220px] bg-[#F6F6F6] shadow-md">
        <SideBar />
      </div>

      
      <div className="flex-1 ml-[220px] p-6 overflow-auto">
        <TopNavBar title="Stats" />
        
        <div className="mt-[25px] flex flex-wrap lg:flex-nowrap justify-between items-start gap-6 w-full">
          
          <div className="grid grid-cols-2 mt-[30px] md:grid-cols-3 lg:grid-cols-4 gap-6 flex-grow">
            <StatsCard title="Total Transactions" value="$0" />
            <StatsCard title="Total Users" value="4" />
            <StatsCard title="Total Airtime" value="$0" />
            <StatsCard title="Total Data" value="$0" />
            <StatsCard title="Withdrawal Balance" value="$0" />
            <StatsCard title="VTU Balance" value="$0" />
            <StatsCard title="USDT Balance" value="$0" />
            <StatsCard title="Dollar Card Reserve" value="$0" />
          </div>
          </div>
          <CustomFrame />
          </div>
          <Balances />
</div>

  )
}

export default Stats