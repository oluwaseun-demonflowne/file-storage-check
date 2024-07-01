"use client";
import React from "react";
import Link from "next/link";
import { useClerkLogin } from "@hooks/clerkLogin";

const Redirect = () => {
  const { loading, handleSubmit, setEmailAddress, setPassword, startLoad } =
    useClerkLogin();

  return (
    <section className="flex px-4 md:px-0  h-[80vh] flex-col justify-center  items-center">
      <div className="flex  gap-5 flex-col">
        <div>
          <h1 className="text-2xl font-bold">Back to sharing files</h1>
          <h1 className="text-[15px] font-light">
            Cloud storage on the go from anywhere
          </h1>
        </div>
        <div className="flex gap-2 flex-col">
          <Link href="/register">
            <button className="w-[350px] h-10 text-white bg-[#651FFF] rounded-[4px] border py-3 text-sm px-1">
              Register
            </button>
          </Link>
        </div>
      </div>
      <p>or</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-2"
      >
        <div className="flex flex-col gap-1">
          <p className="font-bold text-base">Email</p>
          <input
            type="email"
            onChange={(e) => setEmailAddress(e.target.value)}
            className="border border-[#651FFF] rounded-[4px] py-3 outline-none px-1 text-[17px] w-[350px] h-10"
            placeholder="company@email.com"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold text-base">Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="border border-[#651FFF] rounded-[4px] py-3 px-1 outline-none text-[17px] w-[350px] h-10"
            placeholder="*************"
          />
        </div>
        <button
          onClick={startLoad}
          className={`w-[350px] ${
            loading ? "pointer-events-none opacity-50" : ""
          } h-10 mt-4 text-white bg-[#651FFF]  rounded-[4px] border py-3 text-sm px-1`}
        >
          Login
        </button>
        <p className="text-[#651fff] mt-3 underline text-sm">
          Forgot your password?
        </p>
      </form>
    </section>
  );
};

export default Redirect;
