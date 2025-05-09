
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const transactions = [
  {
    type: "Withdrawal",
    userId: "5f7d36751c2d3e4f",
    username: "payking_user",
    amount: "₦42,000",
    reference: "txn1234abcd5678efgh9012",
  },
  {
    type: "Data",
    userId: "5f7dbbbbsyywui",
    username: "payking_sw",
    amount: "₦4,000",
    reference: "txn1234abcd5678efgh9013",
  },
  {
    type: "Deposit",
    userId: "5f7d8a9b1c2d3e4f",
    username: "payking_user",
    amount: "₦4200",
    reference: "txn1234abcd5678efgh9014",
  },
  {
    type: "Airtime",
    userId: "5f7d8a9b1c2d3e4f",
    username: "user",
    amount: "₦1000",
    reference: "txn1234abcd5678efgh9015",
  },
  {
    type: "Dollar Card",
    userId: "5f7d8a9b1c2d3e4f",
    username: "payking_user",
    amount: "₦42,000",
    reference: "txn1234abcd5678efgh9016",
  },
  {
    type: "Withdrawal",
    userId: "5f7d8a9b1c2d3e4f",
    username: "payking_user",
    amount: "₦42,000",
    reference: "txn1234abcd5678efgh9017",
  },
  {
    type: "Data",
    userId: "5f7d8a9b1c2d3e4f",
    username: "payking_user",
    amount: "₦42,000",
    reference: "txn1234abcd5678efgh9020",
  },
  {
    type: "Deposit",
    userId: "5f7d8a9b1c2d3e4f",
    username: "payking_user",
    amount: "₦42,000",
    reference: "txn1234abcd5678efgh9018",
  },
  {
    type: "Airtime",
    userId: "5f7d8a9b1c2d3e4f",
    username: "payking_user",
    amount: "₦42,000",
    reference: "txn1234abcd5678efgh9019",
  },
  {
    type: "Dollar Card",
    userId: "5f7d8a9b1c2d3e4f",
    username: "payking_user",
    amount: "₦42,000",
    reference: "txn1234abcd5678efgh9021",
  },
];

const RecentTransact = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTransactions = transactions.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="w-full bg-white shadow-lg p-4 rounded-lg">
      <h2 className="text-lg font-medium mb-4">Recent Transactions</h2>
      

      <div className="grid grid-cols-5 gap-2 px-2 py-2 bg-gray-100 rounded-t-md mb-1 text-xs font-medium text-gray-500 uppercase">
        <span className="truncate">Type</span>
        <span className="truncate">UserID</span>
        <span className="truncate">Username</span>
        <span className="truncate">Amount</span>
        <span className="truncate">Reference</span>
      </div>

      <div className="space-y-1">
        {currentTransactions.map((transaction, index) => (
          <div key={index} className="grid grid-cols-5 gap-2 bg-white hover:bg-gray-50 px-2 py-2 border-b border-gray-100 text-xs">
            <span className="font-medium text-gray-900 truncate">{transaction.type}</span>
            <span className="text-gray-500 truncate">{transaction.userId}</span>
            <span className="text-gray-500 truncate">{transaction.username}</span>
            <span className="text-gray-900 truncate">{transaction.amount}</span>
            <span className="text-gray-500 truncate">{transaction.reference}</span>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2">
          {currentPage === 1 ? (
            <button
              onClick={nextPage}
              className="text-orange-500 text-sm hover:bg-orange-50 px-3 py-1 rounded-md"
            >
              View All Transactions {'>>'}
            </button>
          ) : (
            <>
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
              <span className="text-sm text-gray-500">
                Page {currentPage} of {totalPages}
              </span>
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
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default RecentTransact;