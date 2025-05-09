"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowLeft, Plus, Send, File, ImageIcon, FileText } from "lucide-react"

export default function ChatPage({ group, messages = [], files = [], onAddMessage, onAddFile, onBack }) {
  const [newMessage, setNewMessage] = useState("")
  const messagesEndRef = useRef(null)
  const fileInputRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return

    const newMsg = {
      id: Date.now().toString(),
      sender: "James Osage",
      role: "Staff",
      avatar: "/placeholder.svg?height=40&width=40",
      text: newMessage,
      timestamp: new Date(),
    }

    onAddMessage(newMsg)
    setNewMessage("")
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }
  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return

    let fileType = "document"
    let icon = "document"

    if (file.type.startsWith("image/")) {
      fileType = "image"
      icon = "image"
    } else if (file.type === "application/pdf") {
      fileType = "pdf"
      icon = "pdf"
    }

    const newFile = {
      id: Date.now().toString(),
      name: file.name,
      type: fileType,
      icon: icon,
      timestamp: new Date()
        .toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
        .replace(",", ""),
    }

    onAddFile(newFile)
    const fileMsg = {
      id: Date.now().toString() + "-msg",
      sender: "James Osage",
      role: "Staff",
      avatar: "/placeholder.svg?height=40&width=40",
      text: `Shared a file: ${file.name}`,
      timestamp: new Date(),
    }

    onAddMessage(fileMsg)
  }

  const getFileIcon = (iconType) => {
    switch (iconType) {
      case "image":
        return <ImageIcon className="h-5 w-5 text-blue-500" />
      case "pdf":
        return <FileText className="h-5 w-5 text-red-500" />
      default:
        return <File className="h-5 w-5 text-blue-500" />
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
          <button onClick={onBack} className="mr-4 p-1 rounded-full hover:bg-gray-200">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h1 className="text-xl font-semibold">{group ? group.name : "Group Chat"}</h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        <div className="flex-1 flex flex-col overflow-hidden border-r">
          <div className="border-b p-3">
            <h3 className="font-medium">Group Chat</h3>
          </div>
  
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => {
              const isCurrentUser = message.sender === "James Osage"
              return (
                <div key={message.id} className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}>
                  {!isCurrentUser && (
                    <img
                      src={message.avatar || "/placeholder.svg"}
                      alt={message.sender}
                      className="h-8 w-8 rounded-full mr-2 mt-1"
                    />
                  )}
                  <div className="max-w-[85%] sm:max-w-[70%]">
                    <div className="text-xs text-gray-500 mb-1">
                      {message.sender} ({message.role})
                    </div>
                    <div className={`p-3 rounded-lg ${isCurrentUser ? "bg-blue-500 text-white" : "bg-gray-100"}`}>
                      {message.text}
                    </div>
                  </div>
                  {isCurrentUser && (
                    <img
                      src={message.avatar || "/placeholder.svg"}
                      alt={message.sender}
                      className="h-8 w-8 rounded-full ml-2 mt-1"
                    />
                  )}
                </div>
              )
            })}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t flex">
            <button
              className="bg-orange-500 text-white rounded-full p-3 mr-2"
              onClick={() => fileInputRef.current.click()}
            >
              <Plus className="h-5 w-5" />
              <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileUpload} />
            </button>
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="bg-orange-500 text-white rounded-full p-3 ml-2" onClick={handleSendMessage}>
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
  
        {/* Files Sidebar */}
        <div className="w-full md:w-80 flex-shrink-0 flex flex-col overflow-hidden border-t md:border-t-0 md:border-l">
          <div className="border-b p-3">
            <h3 className="font-medium">Files</h3>
          </div>
  
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {files.map((file) => (
              <div key={file.id} className="border rounded-lg p-3 flex items-center space-x-3">
                {file.type === "image" ? (
                  <div className="h-10 w-10 bg-gray-200 rounded flex items-center justify-center overflow-hidden">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      alt="Thumbnail"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-10 w-10 bg-gray-100 rounded flex items-center justify-center">
                    {getFileIcon(file.icon)}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{file.name}</p>
                  <p className="text-xs text-gray-500">{file.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
  
}
