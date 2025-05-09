

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

const TableCard = ({ users }) => {
  const navigate = useNavigate();

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const totalPages = Math.ceil(users.length / usersPerPage);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleClick = (user) => {
    navigate("/user-details", { state: { user } });
  };

  return (
    <div className="w-full">
      {currentUsers.map((user, index) => (
        <div
          key={index}
          className="grid grid-cols-7 gap-2 text-xs sm:text-sm bg-white text-black py-3 items-center  border-b border-b-black cursor-pointer hover:bg-gray-100 transition duration-200"
          onClick={() => handleClick(user)}
        >
          <div className="flex justify-center">
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 bg-cover bg-center rounded-full"
              style={{
                backgroundImage: user.profileImage
                  ? `url(${user.profileImage})`
                  : "url('default-avatar.png')",
              }}
            ></div>
          </div>
          <span className="text-center truncate">{user.username}</span>
          <span className="text-center truncate">{user.fullName}</span>
          <span className="text-center truncate">{user.email}</span>
          <span className="text-center truncate">{user.phone}</span>
          <span className="text-center truncate">{user.address}</span>
          <span className="text-center truncate">{user.walletBalance}</span>
        </div>
      ))}

{totalPages > 1 && (
  <div className="flex w-full mt-4">
    {currentPage === 1 ? (
      // First page: show only "Next" on the right
      <div className="flex justify-end w-full">
        <button
          onClick={nextPage}
          className="text-orange-500 text-sm hover:bg-orange-50 px-3 py-1 rounded-md"
        >
          Next {'>>'}
        </button>
      </div>
    ) : (

      <div className="flex justify-between items-center w-full">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`flex items-center px-3 py-1 text-sm rounded-md ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-orange-500 hover:bg-orange-50"
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
};

export default TableCard;
