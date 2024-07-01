import React, { FC } from "react";
import Image from "next/image";
import CollectImage from "@public/homepage/deupload-file-request 1.png";
import FileShareImage from "@public/homepage/deupload-file-sharing 2.png";
import GroupImage from "@public/homepage/Group 232.png";

const LightWeight: FC<{}> = () => {
  return (
    <div className="px-4 md:px-16 lg:px-24 flex flex-col gap-10 mt-24">
      <div>
        <h1 className="font-bold text-[28px]">Lightweight design, ready to</h1>
        <h1 className="font-bold text-[28px]">
          use for <span className="text-[#651FFF]">team productivity.</span>
        </h1>
      </div>
      <div className="">
        <div className="flex gap-10 flex-wrap justify-center">
          <div className="w-[280px] !rounded-[7px] flex flex-col items-center gap-8 text-center p-7 bg-[#FFF7ED]">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl text-[#651FFF] font-bold">File Sharing</h3>
              <p className="text-sm text-center text-slate-500">
                Securely share files within or outside your organization, and
                control access, track edits, and analyze the shared content
                stats.
              </p>
            </div>
            <Image
              src={FileShareImage}
              unoptimized
              className=" w-44"
              alt="homepage"
              width={100}
              height={100}
            />
          </div>
          <div className="w-[280px] !rounded-[7px] flex flex-col items-center gap-8 text-center p-7 bg-[#E0F7FA]">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl text-[#651FFF] font-bold">
                Collect Files
              </h3>
              <p className="text-sm text-center text-slate-500">
                You can collect and receive files in a secure environment, even
                if the other person doesn’t have a Deupload account.
              </p>
            </div>
            <Image
              src={CollectImage}
              unoptimized
              className=" w-44"
              alt="homepage"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="flex bg-[#ECECFE] p-8 flex-wrap !rounded-[20px] mt-10  justify-between">
          <div className="flex flex-col md:w-[50%] mt-10 items-start gap-3">
            <h3 className="text-[23px] font-bold">
              <span className="text-[#651FFF]">Team collaboration</span> in one
              simple place with privacy come first
            </h3>
            <p className="text-sm text-slate-500">
              Securely share and work together with Deupload’s simple file
              storage and sharing, easy user management, unlimited file size,
              password protected links and more.
            </p>
            <div className="flex justify-center gap-10">
              <button className="btn-rounded text-[15px] text-white font-semibold bg-[#651FFF] py-2 px-6">
                Start now
              </button>
              <button className="btn-rounded font-semibold text-[15px] py-2 px-6 border border-black">
                More features
              </button>
            </div>
          </div>
          <div className=" md:w-[50%] hidden md:flex items-center justify-center">
            <Image
              src={GroupImage}
              unoptimized
              className=" w-[70%]"
              alt="homepage"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightWeight;
