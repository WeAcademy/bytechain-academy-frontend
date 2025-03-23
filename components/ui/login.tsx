import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div
        className="flex flex-col items-center bg-white shadow-lg"
        style={{
          width: "754px",
          height: "584px",
          paddingTop: "12px",
          paddingRight: "47px",
          paddingBottom: "12px",
          paddingLeft: "47px",
          gap: "32px",
        }}
      >
        <form className="space-y-4 w-full max-w-[400px]">
          <img src="/logo.png" alt="ByteChain Logo" className="w-28" />

          {/* Email Field */}
          <div>
            <label className="block text-base font-semibold text-black">
              Email
            </label>

            <input
              type="email"
              className="p-3 w-full rounded-md border outline-none focus:ring focus:ring-blue-300 w-[300px] h-[60px]"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-base font-semibold text-black">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="p-2 w-full rounded-md border outline-none focus:ring focus:ring-blue-300 w-[300px] h-[60px]"
              />
              <button
                type="button"
                className="flex absolute inset-y-0 right-3 items-center text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="text-left">
            <a href="#" className="text-sm text-red-500 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <div className="flex justify-center">
            <button className="text-white bg-blue-400 transition hover:bg-blue-500 w-[250px] h-[50px] rounded-[30px]">
              Login
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="font-medium text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
