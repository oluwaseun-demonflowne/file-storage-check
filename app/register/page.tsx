"use client";
import React from "react";
import Link from "next/link";
import Verify from "../../components/register/verify";
import { useRegister } from "@hooks/register";

const Page = () => {
  const {
    submitForm,
    setCompany,
    setEmailAddress,
    setPassword,
    pendingVerification,
    comErr,
    loading,
    setActive,
    company,
    emailAddress,
    password,
    isLoaded,
    signUp,
  } = useRegister();

  return (
    <section className="flex  px-4 md:px-0 h-[80vh] flex-col justify-center  items-center">
      <div className="flex items-center gap-5 flex-col">
        <h1 className="text-2xl font-bold">Registration</h1>
        <div className="flex gap-2 flex-col">
          <Link href="/login">
            <button className="w-[350px] h-10 text-white bg-[#651FFF]  rounded-[4px] border py-3 text-sm px-1">
              Already have an account? Login
            </button>
          </Link>
        </div>
      </div>
      {!pendingVerification && <p>or</p>}
      {pendingVerification && (
        <p className="text-sm my-4">Verify your email!</p>
      )}
      {pendingVerification && (
        <p className="text-sm font-medium my-4">
          We sent a code to your email!
        </p>
      )}
      {!pendingVerification && (
        <form
          onSubmit={submitForm}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex flex-col gap-1">
            <p className="font-bold text-base">Company Name</p>
            <input
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              type="text"
              className="border border-[#651FFF] rounded-[4px] py-3 outline-none px-1 text-[17px] w-[350px] h-10"
              placeholder="John Doe"
            />
            {comErr && (
              <p className="font-bold text-red-700 text-xs">
                Company does not exist!
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold text-base">Email</p>
            <input
              required
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              type="email"
              className="border border-[#651FFF] rounded-[4px] py-3 outline-none px-1 text-[17px] w-[350px] h-10"
              placeholder="company@email.com"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold text-base">Password</p>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="border border-[#651FFF] rounded-[4px] py-3 px-1 outline-none text-[17px] w-[350px] h-10"
              placeholder="*************"
            />
          </div>
          <button
            // onClick={load}
            className={`w-[350px] h-10 mt-4 text-white bg-[#651FFF] ${
              loading ? "pointer-events-none opacity-30" : ""
            }  rounded-[4px] border py-3 text-sm px-1`}
          >
            Register
          </button>
          <Link href="/register-company">
            <button className="text-xs underline">or Register Company</button>
          </Link>
        </form>
      )}
      {pendingVerification && (
        <Verify
          email={emailAddress}
          company={company}
          isLoaded={isLoaded}
          signUp={signUp}
          setActive={setActive}
        />
      )}
    </section>
  );
};

export default Page;
