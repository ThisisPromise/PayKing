import React from 'react'
import logo from '../assets/logo.png'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const request_id = ''
  
    const handleLogin = (e) => {
      e.preventDefault();
      axios.post(" ", { username, password,request_id })
      .then (result => { 
        if(result.data === "Success"){
          navigate('/dashboard')
        }
      })
    };
  
  return (
    <div >
    <div className="flex justify-center items-center w-full h-400px bg-[#FF7E00]">
      <img
        src={logo}
        alt="Logo"
        className="w-[243px] h-[104px]"
      />
    </div>
    <div className= " absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Login to support panel</h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <p>Username:</p>
          <input
            type="username"
            placeholder="Enter your username"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
            <p>Password:</p>
          <input
            type="password"
            placeholder="Enter your password"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-orange-500 text-white p-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login

