import React, { useState } from 'react';
import GenderChack from './GenderChack';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    gender: "",
    profilePic: "",
  });

  return (
    <div className="flex items-center justify-center h-screen overflow-x-hidden">
      <div className="w-full max-w-[450px] p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold flex justify-center items-center mb-4">
          Signup <span className="text-[#022833] ml-2">ChatApp</span>
        </h1>

        <form>
          <div className="mb-4">
            <label className="label p-2 text-white">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 focus:bg-opacity-50 focus:border-[#3db8da] focus:ring-2 focus:ring-[#3db8da] transition-all duration-300"
            />
          </div>
          <div className="mb-4">
            <label className="label p-2 text-white">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 focus:bg-opacity-50 focus:border-[#3db8da] focus:ring-2 focus:ring-[#3db8da] transition-all duration-300"
            />
          </div>
          <div className="mb-4">
            <label className="label p-2 text-white">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 focus:bg-opacity-50 focus:border-[#3db8da] focus:ring-2 focus:ring-[#3db8da] transition-all duration-300"
            />
          </div>
          <div className="mb-4">
            <GenderChack />
          </div>
          <div className="mb-4">
            <label className="label p-2 text-white">Profile Picture</label>
            <input
              type="file"
              id="profilePic"
              name="profilePic"
              className="w-full input input-bordered h-12 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 focus:bg-opacity-50 focus:border-[#3db8da] focus:ring-2 focus:ring-[#3db8da] transition-all duration-300"
            />
          </div>

          <Link to="/signup" className="mt-2 text-sm flex justify-center items-center">
            {"Don't"} have an account?
            <span className="hover:underline hover:text-[#3db8da] hover:font-semibold hover:text-lg ml-1">
              Login
            </span>
          </Link>
          <div className="mt-4">
            <button className="btn border-none text-lg text-white hover:bg-[#022833] bg-[#003d50] w-full transition-all">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
