
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/SideBar';
import TopNavbar from '../components/TopNavBar';
import CustomFrame from '../components/CustomFrame';
import SearchBar from '../components/SearchBar';
import TableCard from '../components/TableCard';
import { useSearchParams } from 'react-router-dom';


export default function User() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search") || "";

  const initialUsers = [
    {
      username: "Musa453",
      fullName: "Adebolaji Musa",
      email: "musaadebolaji@gmail.com",
      phone: "09012345678",
      address: "21, Victor Victor Street, New Benin, Edo State",
      walletBalance: "₦23,553,008",
      profileImage: "", 
    },
    {
      username: "JohnDoe",
      fullName: "John Doe",
      email: "johndoe@example.com",
      phone: "08023456789",
      address: "45, Example Street, Lagos",
      walletBalance: "₦5,320,000",
      profileImage: "",
    },
    {
        username: "JohnDoe",
        fullName: "John Doe",
        email: "johndoe@example.com",
        phone: "08023456789",
        address: "45, Example Street, Lagos",
        walletBalance: "₦5,320,000",
        profileImage: "",
      },
      {
        username: "JohnDoe",
        fullName: "John Doe",
        email: "johndoe@example.com",
        phone: "08023456789",
        address: "45, Example Street, Lagos",
        walletBalance: "₦5,320,000",
        profileImage: "",
      },
      {
        username: "JohnDoe",
        fullName: "John Doe",
        email: "johndoe@example.com",
        phone: "08023456789",
        address: "45, Example Street, Lagos",
        walletBalance: "₦5,320,000",
        profileImage: "",
      },
      {
        username: "JohnDoe",
        fullName: "John Doe",
        email: "johndoe@example.com",
        phone: "08023456789",
        address: "45, Example Street, Lagos",
        walletBalance: "₦5,320,000",
        profileImage: "",
      },
      {
        username: "JohnDoe",
        fullName: "John Doe",
        email: "johndoe@example.com",
        phone: "08023456789",
        address: "45, Example Street, Lagos",
        walletBalance: "₦5,320,000",
        profileImage: "",
      },
  ];

  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (query) {
      const lowerQuery = query.toLowerCase();
      const filtered = initialUsers.filter(user =>
        user.username.toLowerCase().includes(lowerQuery)
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(initialUsers); 
    }
  }, [query]);

  const handleSearch = (searchQuery) => {
    setSearchParams(searchQuery ? { search: searchQuery } : {});
  };

  return (
    <div className="flex ">
      
    <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

    <div className={`flex-1 p-6 overflow-auto transition-all duration-300 ${isSidebarOpen ? "opacity-50 pointer-events-none" : ""}`}>
      <TopNavbar title="Users" />
      <div className="flex flex-wrap gap-4">
      <SearchBar onSearch={handleSearch} />
        <CustomFrame />
      </div>
        <div className="bg-gray-300 rounded-md p-4 w-full mt-[70px]">

      <div className="grid grid-cols-7 gap-2 text-xs sm:text-sm font-semibold text-black py-2">
        <span className="text-center min-w-0 truncate">Photo</span>
        <span className="text-center min-w- 0 truncate">Username</span>
        <span className="text-center min-w-0 truncate">Fullname</span>
        <span className="text-center min-w-0 truncate">Email</span>
        <span className="text-center min-w-0 truncate">Phone</span>
        <span className="text-center min-w-0 truncate">Address</span>
        <span className="text-center min-w-0 truncate">Balance</span>
      </div>
</div>

          <TableCard users={filteredUsers} />
</div>
    </div>
  );
}
