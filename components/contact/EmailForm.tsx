import { contactInput } from "@utils/contact";
import React from "react";

const EmailForm = () => {
  return (
    <div className="flex  md:mt-[-200px] flex-col w-[100%] md:w-[330px] shadow-md p-6 rounded-2xl bg-white gap-4">
      {contactInput.map((i, index) => (
        <div key={index} className="flex flex-col gap-2">
          <label className="text-sm font-bold">{i.label}</label>
          <input
            type={i.type}
            placeholder={i.placeholder}
            className="outline-none rounded-xl bg-[#F4F5F6] px-6 text-[15px] py-2"
          />
        </div>
      ))}
      <button className="btn-rounded text-[15px] text-white font-semibold bg-[#651FFF] py-2 px-6">
        Send
      </button>
    </div>
  );
};

export default EmailForm;
