import React, { FC } from "react";
import { MdArrowForward, MdHouse, MdMan2 } from "react-icons/md";
import Image from "next/image";
import LaptopImage from "@public/homepage/Coding_workshop_2_.png";

const Ready: FC<{}> = () => {
  return (
    <div className="px-4 mb-16 md:px-16 lg:px-24 mt-32 flex flex-col gap-10">
      <div className="flex md:flex-row flex-col justify-between md:items-center">
        <div className="flex flex-col gap-1">
          <h3 className="text-[22px] font-bold">Ready to get started?</h3>
          <p className="text-[15px] md:text-center text-slate-500">
            File storage and sharing on decentralized storage that suits any
            business size.
          </p>
        </div>
        <button className="btn-rounded w-fit mt-5 md:mt-0 text-[15px] text-white font-semibold bg-[#651FFF] py-2 px-6">
          Create an account
        </button>
      </div>
      <div className="flex md:flex-row flex-col gap-4">
        <div className="md:w-[30%] flex flex-col gap-7 rounded-[20px] border p-6 bg-[#651FFF] text-white">
          <div className="bg-white w-fit h-fit  p-2 !rounded-[50%]">
            <MdMan2 className="text-black text-3xl" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Are you individual?</h2>
            <p className="text-sm">
              Syncing, backing up, and sharing your photos, videos and documents
              in total privacy couldn’t be easier.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[15px] font-semibold">
            <p>Start now</p>
            <MdArrowForward />
          </div>
        </div>
        <div className="md:w-[70%] flex gap-10 justify-between bg-[#ECECFE] rounded-[20px] p-6 ">
          <div className=" text-[#651FFF] flex flex-col gap-7  border ">
            <div className="bg-[#651FFF] w-fit h-fit  p-2 !rounded-[50%]">
              <MdHouse className="text-[#ECECFE] text-3xl" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold">Are you Buisness?</h2>
              <p className="text-sm">
                Work efficiently with teammates and clients, stay in sync on
                projects, and keep company data safe—all in one place on
                decentralized network.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[15px] font-semibold">
              <p>See pricing</p>
              <MdArrowForward />
            </div>
          </div>
          <Image
            src={LaptopImage}
            unoptimized
            className=" hidden md:block w-48"
            alt="homepage"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Ready;
