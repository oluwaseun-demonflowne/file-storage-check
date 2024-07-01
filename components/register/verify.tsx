"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { clerkClient, useUser } from "@clerk/nextjs";
import { VerifyProps } from "@typesss/AppTypes";
import { onPressVerify } from "@clerk@functions/verify";

const Verify = ({
  isLoaded,
  signUp,
  setActive,
  email,
  company,
}: VerifyProps) => {
  const { user } = useUser();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();

  const load = () => {
    setLoading(true);
  };

  const onPressVerifyEmail = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    const { success, error } = await onPressVerify(
      isLoaded,
      code,
      signUp,
      setActive
    );
    if (success) {
      try {
        const response = await fetch("/api/Register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ company, email }),
        });
        if (response.status === 200) {
          toast.success("Registration Successful");
          push("/public");
        }
        if (response.status === 500) {
          setLoading(false);
          toast.error("Please retry");
          if (user) await clerkClient.users.deleteUser(user.id);
        }
      } catch (error) {
        setLoading(false);
        toast.error("Error checking company");
        setLoading(false);
        if (user) await clerkClient.users.deleteUser(user.id);
      }
    }
    if (error) {
      if (user) await clerkClient.users.deleteUser(user.id);
      setLoading(false);
      toast.error("Please Retry");
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-2" onSubmit={onPressVerifyEmail}>
        <input
          className="border w-[350px] border-[#651FFF] rounded-[4px] text-sm px-4 py-2"
          value={code}
          placeholder="Code..."
          onChange={(e) => setCode(e.target.value)}
        />
        <button
          onClick={load}
          className={`w-64 h-10 mt-4  ${
            loading ? "pointer-events-none opacity-30" : ""
          } text-white w-[350px] border bg-[#651FFF] rounded-[4px]  py-2 text-xs px-1`}
        >
          Verify Email
        </button>
      </form>
    </div>
  );
};

export default Verify;
