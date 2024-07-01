"use client";
import React from "react";
import Link from "next/link";
import { useCompanyReg } from "@hooks/companyRegister";

export default function Page() {
  const { loading, handleSubmit, companyName, setCompanyName } =
    useCompanyReg();

  return (
    <section className="flex px-4 md:px-0 flex-col h-[80vh] justify-center items-center">
      <div className="flex items-center gap-5 flex-col">
        <h1 className="text-2xl font-bold">Register Company</h1>
        <div className="flex gap-2 flex-col">
          <Link href="/login">
            <button className="w-[350px] h-10 text-white bg-[#651FFF] rounded-md border py-3 text-sm px-1">
              Already have an account? Login
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
          <p className="font-bold text-base">Company Name</p>
          <input
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
            type="text"
            name="companyName"
            className="border border-[#651FFF] rounded-md py-3 outline-none px-1 text-[17px] w-[350px] h-10"
            placeholder="Wapco Inc"
          />
        </div>
        {/* <div className='flex flex-col gap-1'>
                <p className='font-bold text-xs'>Email</p>
                <input type='email' className='border-2 rounded-md py-3 outline-none px-1 text-xs w-[350px] h-10' placeholder='company@email.com' />
            </div> */}
        <button
          className={`w-[350px] h-10 mt-4 text-white bg-[#651FFF] ${
            loading ? "pointer-events-none opacity-40" : ""
          } rounded-md border py-3 text-sm px-1`}
        >
          Register Company
        </button>
      </form>
    </section>
  );
}
