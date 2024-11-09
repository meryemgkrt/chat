import React, { useState } from "react";
import GenderCheckbox from "./GenderChack"; // GenderChack yerine GenderCheckbox
import { Link } from "react-router-dom";
import useSignup from "../../components/hooks/useSignup";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleChangeCheckbox = (gender) => {
    setFormData({ ...formData, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData);
  };

  return (
    <div className="flex items-center justify-center h-screen overflow-x-hidden">
      <div className="w-full max-w-[450px] p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0">
        <h1 className="text-3xl font-semibold flex justify-center items-center mb-4">
          Signup <span className="text-[#022833] ml-2">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="label p-2 text-white">Full Name</label>
            <input
              value={formData.fullName}
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter Full Name"
              className="w-full text-white input input-bordered h-10 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10 focus:bg-opacity-50 focus:border-[#3db8da] focus:ring-2 focus:ring-[#3db8da] transition-all duration-300"
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="label p-2 text-white">Username</label>
            <input
              value={formData.username}
              type="text"
              id="username"
              name="username"
              placeholder="Enter Username"
              className="w-full input input-bordered text-white h-10 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10 focus:bg-opacity-50 focus:border-[#3db8da] focus:ring-2 focus:ring-[#3db8da] transition-all duration-300"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="label p-2 text-white">Password</label>
            <input
              value={formData.password}
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              className="w-full input input-bordered text-white h-10 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10 focus:bg-opacity-50 focus:border-[#3db8da] focus:ring-2 focus:ring-[#3db8da] transition-all duration-300"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="label p-2 text-white">Confirm Password</label>
            <input
              value={formData.confirmPassword}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Enter Confirm Password"
              className="w-full input input-bordered h-10 text-white bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10 focus:bg-opacity-50 focus:border-[#3db8da] focus:ring-2 focus:ring-[#3db8da] transition-all duration-300"
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <GenderCheckbox onCheckboxChange={handleChangeCheckbox} selectedGender={formData.gender} />
          </div>

          <Link
            to={"/login"}
            className="mt-2 text-sm flex justify-center items-center"
          >
            {"Already have an account?"}
            <span className="hover:underline hover:text-[#3db8da] hover:font-semibold hover:text-lg ml-1">
              Login
            </span>
          </Link>
          <div className="mt-4">
            <button
              type="submit"
              disabled={loading}
              className={`btn border-none text-lg text-white w-full transition-all ${loading ? "bg-gray-400" : "bg-[#003d50] hover:bg-[#022833]"}`}
            >
              {loading ? <span className="loading loading-spinner"></span> : "Signup"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
