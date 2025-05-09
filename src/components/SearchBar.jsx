

import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setError("Please enter a username.");
      return;
    }
    setError("");
    onSearch(searchQuery);
  };

  return (
    <div className="absolute top-[108px] flex flex-col mr-auto sm:mr-4">

      <div className="flex items-center border border-[#979797] rounded-[15px] w-full max-w-[306px] sm:max-w-[180px] xs:max-w-[100px] h-[30px] overflow-hidden">

        <input
          type="text"
          placeholder="Search user by username..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="ml-4 text-black text-[10px] sm:text-[9px] font-semibold w-full outline-none bg-transparent"
        />


        <button
          onClick={handleSearch}
          className="bg-[#FF7E00] w-[90px] sm:w-[70px] h-full flex items-center justify-center text-white text-[12px] sm:text-[11px] font-semibold rounded-r-[15px]"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
