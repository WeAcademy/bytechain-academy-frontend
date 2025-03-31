"use client";
import Login from "@/components/ui/login";
import { useEffect, useState } from "react";
import LoginSkeleton from "@/components/ui/LoginSkeleton";
import { LOADIPHLPAPI } from "dns";
export default function SignIn() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoginSkeleton />;
  }

  return (
    <Login/>
  );
  
}
