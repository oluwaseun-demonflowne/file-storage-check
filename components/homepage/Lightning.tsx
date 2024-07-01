import React, { FC } from "react";
import {
  MdArrowForward,
  MdBolt,
  MdShield,
  MdSubscriptions,
} from "react-icons/md";

const Lightning: FC<{}> = () => {
  return (
    <div className="flex mt-16 flex-col gap-16">
      <div className="flex px-4 md:px-20 lg:px-56 flex-col gap-2">
        <h1 className="font-bold text-[28px] text-center">
          Lightning fast. Better privacy. Fairer cost.
        </h1>
        <p className="text-[15px] text-center text-slate-500">
          You can choose continue to use centralized cloud storage but we have
          some better reasons for you to start moving to decentralized storage
          because it is simply the future of the internet.
        </p>
      </div>
      <div className="flex gap-5 flex-wrap justify-center px-4 md:px-16 lg:px-24">
        <div className="w-[320px] flex flex-col gap-7 rounded-[20px] border p-10 bg-[#651FFF] text-white">
          <div className="bg-white w-fit h-fit  p-5 !rounded-[50%]">
            <MdShield className="text-black text-3xl" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Lightweight</h2>
            <p className="text-sm">
              Designed to be lightweight to help you enhance team collaboration
              by organizing and sharing files in your projects without stress.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[15px] font-semibold">
            <p>Products features</p>
            <MdArrowForward />
          </div>
        </div>
        <div className="w-[320px] flex flex-col gap-7 rounded-[20px] border p-10 bg-[#651FFF] text-white">
          <div className="bg-white w-fit h-fit p-5 !rounded-[50%]">
            <MdSubscriptions className="text-black text-3xl" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">No subscription</h2>
            <p className="text-sm">
              With Pay-as-you-go pricing, now you only pay for the resource you
              use without being charged a flat monthly fee even if you don’t use
              it up.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[15px] font-semibold">
            <p>Metered billing</p>
            <MdArrowForward />
          </div>
        </div>
        <div className="w-[320px] flex flex-col gap-7 rounded-[20px] border p-10 bg-[#651FFF] text-white">
          <div className="bg-white w-fit h-fit p-5 !rounded-[50%]">
            <MdBolt className="text-black text-3xl" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">Unbelievely fast</h2>
            <p className="text-sm">
              Pinatas built-in CDN (content delivery network) lets you serve
              content in less time than it takes to load a YouTube video.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[15px] font-semibold">
            <p>Learn more</p>
            <MdArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightning;
