

// import { useState } from "react";

// export default function SearchBar({ onSearch }) {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = () => {
//     if (searchQuery.trim() !== "") {
//       onSearch(searchQuery);
//     }
//   };

//   return (
//     <div className="absolute left-[267px] top-[108px] flex items-center border border-[#979797] rounded-[15px] w-[246px] h-[30px] overflow-hidden">
//       {/* Input Field */}
//       <input
//         type="text"
//         placeholder="Search user by transaction id..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="ml-4 text-black text-[10px] font-semibold w-full outline-none bg-transparent"
//       />

//       {/* Search Button */}
//       <button
//         onClick={handleSearch}
//         className="bg-[#FF7E00] w-[90px] h-full flex items-center justify-center text-white text-[12px] font-semibold rounded-r-[15px]"
//       >
//         Search
//       </button>
//     </div>
//   );
// }


import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setError("Please enter a transaction ID."); // Show error message
      return;
    }
    setError(""); // Clear error if input is valid
    onSearch(searchQuery);
  };

  return (
    <div className="absolute left-[267px] top-[108px] flex flex-col">
      {/* Search Bar Container */}
      <div className="flex items-center border border-[#979797] rounded-[15px] w-[246px] h-[30px] overflow-hidden">
        {/* Input Field */}
        <input
          type="text"
          placeholder="Search user by transaction ID..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="ml-4 text-black text-[10px] font-semibold w-full outline-none bg-transparent"
        />

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-[#FF7E00] w-[90px] h-full flex items-center justify-center text-white text-[12px] font-semibold rounded-r-[15px]"
        >
          Search
        </button>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
