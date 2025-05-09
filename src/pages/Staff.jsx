"use client"
import SideBar from "../components/SideBar"
import TopNavBar from "../components/TopNavBar"
import SearchBar from "../components/SearchBar"
import CustomFrame from "../components/CustomFrame"
import ChatPage from "./chat-page"
import { useState, useEffect } from "react"
import { ChevronDown, MessageCircle, Pencil, Trash2 } from "lucide-react"

const Staff = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

 
  const [users, setUsers] = useState([])
  const [groups, setGroups] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [editingUser, setEditingUser] = useState(null)
  const [showChatPage, setShowChatPage] = useState(false)
  const [selectedGroup, setSelectedGroup] = useState(null)


  const [chatHistory, setChatHistory] = useState({})


  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
    role: "",
    password: "",
  })

  const currentUser = {
    name: "James Osage",
    email: "jamesosage@gmail.com",
    avatar: "/placeholder.svg?height=40&width=40",
  }


  useEffect(() => {
    setUsers([
      {
        id: "1",
        name: "Matilda Victor",
        email: "matilda@example.com",
        role: "Customer Rep",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "2",
        name: "Matilda Victor",
        email: "matilda2@example.com",
        role: "Customer Rep",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "3",
        name: "Matilda Victor",
        email: "matilda3@example.com",
        role: "Customer Rep",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "4",
        name: "Matilda Victor",
        email: "matilda4@example.com",
        role: "Customer Rep",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "5",
        name: "Matilda Victor",
        email: "matilda5@example.com",
        role: "Customer Rep",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ])

  
    setGroups([
      {
        id: "1",
        name: "Group Chat",
        icon: "G",
        color: "#FF6B00",
      },
    ])


    setChatHistory({
      1: {
        messages: [
          {
            id: "1",
            sender: "Alex Tim",
            role: "Staff",
            avatar: "/placeholder.svg?height=40&width=40",
            text: "Hello everyone here is what I did today on the task that was given to me",
            timestamp: new Date(2024, 2, 12, 11, 45),
          },
          {
            id: "2",
            sender: "Alex Tim",
            role: "Manager",
            avatar: "/placeholder.svg?height=40&width=40",
            text: "Hello everyone here is what I did today on the task that was given to me",
            timestamp: new Date(2024, 2, 12, 11, 48),
          },
        ],
        files: [
          {
            id: "1",
            name: "Image52722.png",
            type: "image",
            icon: "image",
            timestamp: "12-03-2024 11:59",
          },
          {
            id: "2",
            name: "Contract.pdf",
            type: "pdf",
            icon: "pdf",
            timestamp: "12-03-2024 11:59",
          },
        ],
      },
    })
  }, [])


  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }


  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
    let password = ""
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setFormData({
      ...formData,
      password,
    })
  }

 
  const handleCreateUser = () => {
    if (!formData.email || !formData.fullname || !formData.role || !formData.password) {
      alert("Please fill all fields")
      return
    }

    const newUser = {
      id: Date.now().toString(),
      name: formData.fullname,
      email: formData.email,
      role: formData.role,
      avatar: "/placeholder.svg?height=40&width=40",
    }

    if (editingUser) {
    
      setUsers(users.map((user) => (user.id === editingUser.id ? { ...newUser, id: user.id } : user)))
      setEditingUser(null)
    } else {
     
      setUsers([...users, newUser])
    }

  
    setFormData({
      email: "",
      fullname: "",
      role: "",
      password: "",
    })
    setShowCreateModal(false)
  }


  const handleDeleteUser = (id) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id))
    }
  }


  const handleEditUser = (user) => {
    setEditingUser(user)
    setFormData({
      email: user.email,
      fullname: user.name,
      role: user.role,
      password: "********"
    })
    setShowCreateModal(true)
  }


  const handleDeleteGroup = (id) => {
    if (confirm("Are you sure you want to delete this group?")) {
      setGroups(groups.filter((group) => group.id !== id))

 
      const updatedChatHistory = { ...chatHistory }
      delete updatedChatHistory[id]
      setChatHistory(updatedChatHistory)
    }
  }


  const handleOpenChat = (group) => {
    setSelectedGroup(group)
    setShowChatPage(true)


    if (!chatHistory[group.id]) {
      setChatHistory({
        ...chatHistory,
        [group.id]: {
          messages: [],
          files: [],
        },
      })
    }
  }


  const handleAddMessage = (groupId, message) => {
    const updatedChatHistory = { ...chatHistory }

    if (!updatedChatHistory[groupId]) {
      updatedChatHistory[groupId] = {
        messages: [],
        files: [],
      }
    }

    updatedChatHistory[groupId].messages = [...(updatedChatHistory[groupId].messages || []), message]

    setChatHistory(updatedChatHistory)
  }

  const handleAddFile = (groupId, file) => {
    const updatedChatHistory = { ...chatHistory }

    if (!updatedChatHistory[groupId]) {
      updatedChatHistory[groupId] = {
        messages: [],
        files: [],
      }
    }

    updatedChatHistory[groupId].files = [...(updatedChatHistory[groupId].files || []), file]

    setChatHistory(updatedChatHistory)
  }

  if (showChatPage && selectedGroup) {
    const currentChat = chatHistory[selectedGroup.id] || { messages: [], files: [] }

    return (
      <ChatPage
        group={selectedGroup}
        messages={currentChat.messages}
        files={currentChat.files}
        onAddMessage={(message) => handleAddMessage(selectedGroup.id, message)}
        onAddFile={(file) => handleAddFile(selectedGroup.id, file)}
        onBack={() => setShowChatPage(false)}
      />
    )
  }

  return (
    <div className="flex">
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div
        className={`flex-1 p-6 overflow-auto transition-all duration-300 ${isSidebarOpen ? "opacity-50 pointer-events-none" : ""}`}
      >
  
        <div className="relative z-10">
          <TopNavBar title="Staffs" />
        </div>

  
        <div className="flex flex-wrap gap-4 mt-4">
          <SearchBar />
          <CustomFrame />
        </div>


        <div className="mb-6 mt-10 w-[270px] h-[90px]">
          <h2 className="text-lg font-medium mb-4">Group</h2>
          <div className="space-y-3">
            {groups.map((group) => (
              <div
                key={group.id}
                className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-4 shadow-sm"
              >
                <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleOpenChat(group)}>
                  <div
                    className="flex items-center justify-center h-10 w-10 rounded-full text-white font-bold"
                    style={{ backgroundColor: group.color }}
                  >
                    {group.icon}
                  </div>
                  <span className="font-medium">{group.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-1 text-gray-500 hover:text-gray-700" onClick={() => handleOpenChat(group)}>
                    <MessageCircle className="h-5 w-5" />
                  </button>
                  <button className="p-1 text-gray-500 hover:text-gray-700">
                    <Trash2
                      className="h-5 w-5"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleDeleteGroup(group.id)
                      }}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[270px] ">
          <h2 className="text-lg font-medium mb-4">Staffs</h2>
          <div className="space-y-3">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-4 shadow-sm"
              >
                <div className="flex items-center space-x-3">
                  <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="h-10 w-10 rounded-full" />
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className="p-1 text-gray-500 hover:text-gray-700"
                    onClick={() => {
                      const userGroup = {
                        id: `user-${user.id}`,
                        name: `Chat with ${user.name}`,
                        icon: user.name.charAt(0),
                        color: "#FF6B00",
                      }
                      handleOpenChat(userGroup)
                    }}
                  >
                    <MessageCircle className="h-5 w-5" />
                  </button>
                  <button className="p-1 text-gray-500 hover:text-gray-700" onClick={() => handleEditUser(user)}>
                    <Pencil className="h-5 w-5" />
                  </button>
                  <button className="p-1 text-gray-500 hover:text-gray-700" onClick={() => handleDeleteUser(user.id)}>
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

       
        <div className="bg-white rounded-lg border border-gray-200 p-6 w-[370px] shadow-sm h-fit mt-6">
          <h2 className="text-xl font-medium text-center mb-6">{editingUser ? "Edit role" : "Create new role"}</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Fullname</label>
              <input
                type="text"
                name="fullname"
                placeholder="Enter fullname"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
                value={formData.fullname}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Role</label>
              <div className="relative">
                <select
                  name="role"
                  className="w-full appearance-none rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 pr-8"
                  value={formData.role}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Select role
                  </option>
                  <option value="Customer Rep">Customer Rep</option>
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="Support">Support</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="flex">
                <input
                  type="text"
                  name="password"
                  placeholder="Enter password"
                  className="w-full rounded-l border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="bg-orange-500 text-white px-3 py-2 rounded-r text-sm"
                  onClick={generatePassword}
                >
                  Generate
                </button>
              </div>
            </div>
            <button
              type="button"
              className="w-full bg-orange-500 text-white py-3 rounded-md font-medium mt-6 hover:bg-orange-600 transition-colors"
              onClick={handleCreateUser}
            >
              {editingUser ? "Update Role" : "Create Role"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Staff
