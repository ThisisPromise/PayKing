

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TBody({ searchQuery = "" }) {
  const navigate = useNavigate();
  
  const allTransactions = [
    {
      username: "Musa453",
      email: "musaadebolaji@gmail.com",
      package: "MTN",
      amount: "₦24,000",
      phone: "07012345678",
      date: "2025-02-10 21:45:22",
      transactionId: "PAY7364294ncb89",
    },
    {
      username: "JohnDoe",
      email: "johndoe@example.com",
      package: "Airtel",
      amount: "₦15,500",
      phone: "08023456789",
      date: "2025-02-11 14:30:10",
      transactionId: "PAY9283746hds82",
    },
    {
      username: "JaneSmith",
      email: "janesmith@email.com",
      package: "Glo",
      amount: "₦10,000",
      phone: "08134567890",
      date: "2025-02-12 18:15:45",
      transactionId: "PAY1273847kdf94",
    },
  
    {
      username: "AliceJohnson",
      email: "alice@example.com",
      package: "MTN",
      amount: "₦8,000",
      phone: "08023456789",
      date: "2025-02-13 10:15:22",
      transactionId: "PAY7364294asd89",
    },
    {
      username: "BobWilliams",
      email: "bob@example.com",
      package: "Airtel",
      amount: "₦12,500",
      phone: "07056789012",
      date: "2025-02-14 16:30:10",
      transactionId: "PAY9283746qwe82",
    },
    {
      username: "CharlieBrown",
      email: "charlie@email.com",
      package: "9Mobile",
      amount: "₦5,000",
      phone: "08134567890",
      date: "2025-02-15 09:45:45",
      transactionId: "PAY1273847zxc94",
    },
  ];

  const [transactions, setTransactions] = useState(allTransactions);

  useEffect(() => {
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      const filtered = allTransactions.filter(
        txn => 
          txn.username.toLowerCase().includes(lowerQuery) ||
          txn.email.toLowerCase().includes(lowerQuery) ||
          txn.package.toLowerCase().includes(lowerQuery) ||
          txn.phone.includes(lowerQuery) ||
          txn.transactionId.toLowerCase().includes(lowerQuery)
      );
      setTransactions(filtered);
    } else {
      setTransactions(allTransactions);
    }
  }, [searchQuery]);

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTransactions = transactions.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));


  return (
    <div className="w-full">

      <div className="overflow-x-auto">
        <div className="min-w-full">
          {currentTransactions.map((txn, index) => (
            <div 
              key={index}  
              className="grid grid-cols-7 gap-1 text-xs bg-white text-black py-3 items-center cursor-pointer hover:bg-gray-100 transition duration-200"
            >
              <span className="text-center truncate px-1">{txn.username}</span>
              <span className="text-center truncate px-1">{txn.email}</span>
              <span className="text-center truncate px-1">{txn.package}</span>
              <span className="text-center truncate px-1">{txn.amount}</span>
              <span className="text-center truncate px-1">{txn.phone}</span>
              <span className="text-center truncate px-1">{txn.date}</span>
              <span className="text-center truncate px-1">{txn.transactionId}</span>
            </div>
          ))}
        </div>
      </div>
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-4 px-2">
          {currentPage === 1 ? (
            <div className="flex justify-end w-full">
              <button
                onClick={nextPage}
                className="text-orange-500 text-sm hover:bg-orange-50 px-3 py-1 rounded-md flex items-center"
              >
                Next <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          ) : (
            <div className="flex justify-between w-full">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`flex items-center px-3 py-1 text-sm rounded-md ${
                  currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-orange-500 hover:bg-orange-50"
                }`}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </button>
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center px-3 py-1 text-sm rounded-md ${
                  currentPage === totalPages
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-orange-500 hover:bg-orange-50"
                }`}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}