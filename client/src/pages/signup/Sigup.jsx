import React, { useState } from 'react'
import GenderChack from './GanderChack'
const Sigup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    gander: "",
    profilePic: "",
  });
  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
    <div className="h-full w-full p-6 overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter bockdrop-blur-lg bg-opacity-0">
      <h1 className="text-3xl font-semibold flex justify-center items-center ">
        Signup {""}
        <span className="text-[#022833] ">ChatApp</span>
      </h1>

      <form className="">
        <div className="">
          <label className="label p-2">
            <span className="">FullName</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter Full Name"
            className="w-full input input-bordered h-10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 focus:bg-opacity-50 transition-all duration-300"
          />
        </div>
        <div className="">
          <label className="label p-2">
            <span className="">Username</span>
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Username"
            className="w-full input input-bordered h-10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 focus:bg-opacity-50 transition-all duration-300"
          />
        </div>
        <div className="">
          <label className="label p-2">
            <span className="">Password</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            className="w-full input input-bordered h-10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 focus:bg-opacity-50 transition-all duration-300"
          />
        </div>
        <div className="">
          <GenderChack/>
        </div>
        <div className="">
          <label className="label p-2">
            <span className="">ProfilePic</span>
          </label>
          <input
            type="file"
            id="profilePic"
            name="profilePic"
            placeholder="Enter ProfilePic"
            className="w-full input input-bordered h-10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 focus:bg-opacity-50 transition-all duration-300"
          />
        </div>

       
        <a href="#" className="mt-2 text-sm flex justify-center items-center">
          {"Don't"} have an account?
          <span className="hover:underline hover:text-[#3db8da] hover:font-semibold hover:text-lg ml-1">
            Login
          </span>
        </a>
        <div className="">
        <button className="btn border-none text-lg text-white hover:bg-[#022833] bg-[#003d50] w-full mt-4 transition-all">
          Signup
        </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Sigup