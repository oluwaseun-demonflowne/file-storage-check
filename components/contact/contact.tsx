import React from "react";
import { FaAddressBook } from "react-icons/fa";
import EmailForm from "./EmailForm";

const Contact = () => {
  return (
    <div className="mb-40">
      <div className="bg-[#651FFF] text-white h-60 flex flex-col justify-end px-4 md:px-16 lg:px-24 pb-10">
        <h1 className="text-3xl font-bold">Get in touch.</h1>
        <p className="text-[14px]">Our team would love to hear from you!</p>
      </div>
      <div className="px-4 md:px-16 lg:px-24 mt-12 md:flex-row flex-col flex  gap-20">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#651FFF] rounded-full p-3 w-fit h-fit">
              <FaAddressBook className="text-white" />
            </div>
            <div>
              <p className="text-[14px] font-bold">Address</p>
              <p className="text-slate-500 text-[14px]">
                17224 S. Figueroa Street, Gardena, CA 90248, USA
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#651FFF] rounded-full p-3 w-fit h-fit">
              <FaAddressBook className="text-white" />
            </div>
            <div>
              <p className="text-[14px] font-bold">Email</p>
              <p className="text-slate-500 text-[14px]">name@deupload.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#651FFF] rounded-full p-3 w-fit h-fit">
              <FaAddressBook className="text-white" />
            </div>
            <div>
              <p className="text-[14px] font-bold">Phone</p>
              <p className="text-slate-500 text-[14px]">+1 415 800-3128</p>
            </div>
          </div>
        </div>
        <div>
          <EmailForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
