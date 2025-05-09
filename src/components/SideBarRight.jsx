
import React from 'react';
import TransactionPieChart from './TransactionPieChart'

const SideBarRight = () => {
    return (
        <div className="w-full h-full flex flex-col gap-6">
         
            <div className="w-full h-[250px] bg-white shadow-md p-4 rounded-lg">
                <TransactionPieChart />
            </div>

       
            <div className="w-full h-[369px] bg-white shadow-md p-4 rounded-lg">
                <p className="text-lg font-medium text-black">Recent Deposits</p>
            </div>
        </div>
    );
};

export default SideBarRight;