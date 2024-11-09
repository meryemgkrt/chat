import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../../components/hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden">
      <div className="w-full max-w-[450px] p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0">
        <h1 className="text-3xl font-semibold flex justify-center items-center mb-4">
          LOGIN <span className="text-[#022833] ml-2">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="label p-2 text-white">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter Username"
              className="w-full text-white input input-bordered h-10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 focus:bg-opacity-50 focus:border-[#3db8da] focus:ring-2 focus:ring-[#3db8da] transition-all duration-300"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="label p-2 text-white">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              className="w-full text-white input input-bordered h-10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 focus:bg-opacity-50 focus:border-[#3db8da] focus:ring-2 focus:ring-[#3db8da] transition-all duration-300"
              value={password}
							onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link
            to="/signup" // `/Signup` yerine `/signup` olarak düzeltildi
            className="mt-2 text-sm flex justify-center items-center"
          >
            {"Don't"} have an account?
            <span className="hover:underline hover:text-[#3db8da] hover:font-semibold hover:text-lg ml-1">
              Signup
            </span>
          </Link>
          <div className="mt-4">
            <button
              disabled={loading}
              type="submit"
              className="btn border-none text-lg text-white hover:bg-[#022833] bg-[#003d50] w-full transition-all"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
