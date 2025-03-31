"use client";
import { useEffect, useState } from "react";

export default function LoginSkeleton() {
  // const [isLoading, setIsLoading] = useState(true);


  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1500
  //   return () => clearTimeout(timer);
  // }, []);

  // if (!isLoading) return null;

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
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
        <div className="space-y-4 w-full max-w-[400px]">
         
          {/* <div className="w-28 h-28 bg-gray-200 rounded-full animate-pulse mx-auto"></div> */}
         
          <img src="/logo.png" alt="ByteChain Logo" className="w-28" />
          {/* Email Field Skeleton */}
          <div className="space-y-2">
            <div className="h-6 w-1/4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-[60px] bg-gray-200 rounded-md animate-pulse"></div>
          </div>

          {/* Password Field Skeleton */}
          <div className="space-y-2">
            <div className="h-6 w-1/3 bg-gray-200 rounded animate-pulse"></div>
            <div className="relative">
              <div className="h-[60px] bg-gray-200 rounded-md animate-pulse"></div>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          {/* Forgot Password Skeleton */}
          <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse"></div>

          {/* Login Button Skeleton */}
          <div className="flex justify-center pt-4">
            <div className="w-[250px] h-[50px] bg-gray-300 rounded-[30px] animate-pulse"></div>
          </div>

          {/* Sign Up Link Skeleton */}
          <div className="flex justify-center space-x-1 pt-2">
            <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}