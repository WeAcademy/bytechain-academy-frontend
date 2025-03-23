"use client";

import type React from "react";
import { useState, type FormEvent } from "react";
import { EyeOff, EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Error state
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords don't match";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Sign up successful!");
    }
  };

  // Form fields array for mapping
  const formFields = [
    { id: "fullName", label: "Full Name", type: "text" },
    { id: "email", label: "Email", type: "email" },
    {
      id: "password",
      label: "Password",
      type: showPassword ? "text" : "password",
      toggle: () => setShowPassword(!showPassword),
      showIcon: showPassword,
    },
    {
      id: "confirmPassword",
      label: "Confirm Password",
      type: showConfirmPassword ? "text" : "password",
      toggle: () => setShowConfirmPassword(!showConfirmPassword),
      showIcon: showConfirmPassword,
    },
  ];

  return (
    <div className="w-full min-h-screen max-w-md mx-auto py-11 space-y-5 px-4">
      <div className="flex justify-center md:justify-start relative md:-left-14">
        <Image
          src="/icons/bytechain.svg"
          width={0}
          height={0}
          className="w-[270px] md:w-[220px] h-[90px] md:h-[70px]"
          alt="bytechain logo"
        />
      </div>

      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        {formFields.map(({ id, label, type, toggle, showIcon }) => (
          <div key={id} className="space-y-1">
            <label htmlFor={id} className="block text-lg font-bold">
              {label}
            </label>
            <div className="relative">
              <input
                id={id}
                name={id}
                type={type}
                value={formData[id as keyof typeof formData]}
                onChange={handleChange}
                className={`w-full px-3 py-4 border ${
                  errors[id] ? "border-red-500" : "border-[#00D4FF]"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/50`}
                required
              />
              {toggle && (
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  onClick={toggle}
                >
                  {showIcon ? <EyeOff size={20} /> : <EyeIcon size={20} />}
                </button>
              )}
            </div>
            {errors[id] && (
              <p className="text-red-500 text-sm mt-1">{errors[id]}</p>
            )}
          </div>
        ))}

        <div className="px-10">
          <button
            type="submit"
            className="bg-[#00D4FF] text-2xl w-full font-normal text-[#004755] py-5 px-4 rounded-[30px] hover:bg-[#00D4FF]/90 transition-colors"
          >
            Sign up
          </button>
        </div>
      </form>

      <div className="text-center mt-8">
        <p className="text-gray-700">
          Already Have An Account?{" "}
          <Link href="/login" className="text-emerald-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
