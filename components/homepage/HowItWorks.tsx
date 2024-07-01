import React, { FC } from "react";
import Image from "next/image";
import PenImage from "@public/homepage/user-pen 1.png";
import KeyImage from "@public/homepage/link 3.png";
import UploadImage from "@public/homepage/upload 1.png";

const HowItWorks: FC<{}> = () => {
  return (
    <div className="mt-16 flex flex-col gap-16">
      <div className="px-4 md:px-24  lg:px-72 text-center">
        <h4 className="text-[23px] font-bold">How it works</h4>
        <p className="text-[14px] text-slate-500">
          Deupload removes complexity and offers a simple interface that allows
          users to take advantage of the vast array of decentralized storage
          with better security, performance, and pricing.
        </p>
      </div>
      <div className="flex gap-16 md:px-16 flex-wrap text-center justify-center">
        <div className="flex flex-col items-center gap-5 w-[250px]">
          <div className="bg-[#651FFF] w-fit h-fit p-4 !rounded-[50%]">
            <Image
              src={PenImage}
              unoptimized
              className="w-[20px]"
              alt="homepage"
              width={100}
              height={100}
            />
          </div>
          <h5 className="text-base font-semibold">Create an account</h5>
          <p className="text-sm text-slate-500">
            Create an Deupload account and start uploading your files to
            Decentralized Storage.
          </p>
        </div>
        <div className="flex items-center flex-col gap-5 w-[250px]">
          <div className="bg-[#651FFF] w-fit h-fit p-4 !rounded-[50%]">
            <Image
              src={UploadImage}
              unoptimized
              className="w-[20px]"
              alt="homepage"
              width={100}
              height={100}
            />
          </div>
          <h5 className="text-base font-semibold">Create an account</h5>
          <p className="text-sm text-slate-500">
            Create an Deupload account and start uploading your files to
            Decentralized Storage.
          </p>
        </div>
        <div className="flex items-center flex-col gap-5 w-[250px]">
          <div className="bg-[#651FFF] w-fit h-fit p-4 !rounded-[50%]">
            <Image
              src={KeyImage}
              unoptimized
              className="w-[20px]"
              alt="homepage"
              width={100}
              height={100}
            />
          </div>
          <h5 className="text-base font-semibold">Share file instantly</h5>
          <p className="text-sm text-slate-500">
            Send your file via email or shareable link with password protect and
            expiration time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
