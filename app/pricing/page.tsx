"use client";
import React, { FC } from "react";
import { MdOutlineCheck } from "react-icons/md";
// import {
//   MonthlyBasicSubscriptionCard,
//   MonthlyProSubscriptionCard,
// } from "./stripe";
import { features, plans, pricing, size } from "@utils/pricing";
// import { useUser } from '@clerk/nextjs'
// import axios from 'axios'
// import { useQuery } from '@tanstack/react-query'
// import Loading from '@app/loading'

const Page: FC<{}> = () => {
  //   const {user} = useUser()
  ``;
  //   const { isLoading , data } = useQuery({ queryKey: ['companyName'],
  //     queryFn: () =>
  //           axios
  //             .get(`/api/CompanyName/${user?.emailAddresses[0]?.emailAddress}`)
  //             .then((res) => res.data),
  //     })

  //     if (isLoading) return <Loading />

  return (
    <div className="flex px-4 md:px-16 lg:px-24 mb-16 flex-col gap-10 ">
      <div className="flex mt-4 flex-col">
        <h1 className="text-[23px] font-bold">Pricing plan</h1>
        <p className="text-base font-semibold text-slate-500">
          Access a complete storage with simple and transparent pricing
        </p>
      </div>
      <div className="flex flex-wrap gap-10">
        {plans.map((i, index) => (
          <div
            key={index}
            className="flex flex-col hover:border-2 hover:border-black gap-5 p-7 w-[310px] shadow-lg rounded-2xl"
          >
            <div className="flex items-center justify-between">
              <p className="text-[15px] font-bold">{i}</p>
              <button className="border-2 px-4 py-1 text-[15px] bg-[#ECECFE] !rounded-[9px] font-bold border-[#651FFF] ">
                {size[i]} MB
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[32px] font-black">
                ${pricing[i]}{" "}
                <span className="text-[14px] font-semibold">/ month</span>
              </p>
              <p className="text-[14px] text-slate-500">Billed monthly</p>
              <button className="!rounded-[9px] hover:bg-[#651FFF] hover:text-[#ECECFE] bg-[#ECECFE] py-3 w-full font-bold text-[#651FFF] ">
                Get started
              </button>
            </div>
            <div className="border-t border-dashed w-full"></div>
            <ul className="flex flex-col gap-2">
              {features[i].map((i, index) => (
                <li key={index} className="flex gap-3 items-center">
                  <span className="bg-[#ECECFE] !rounded-[50%] p-2">
                    <MdOutlineCheck className="text-sm text-[#651FFF]" />
                  </span>
                  <span className="text-slate-500 font-medium">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
