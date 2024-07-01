"use client";
import React from "react";
import { AiOutlineCopy, AiOutlineUpload } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import toast from "react-hot-toast";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { MdPublic } from "react-icons/md";
import { ThreeDots } from "react-loader-spinner";
import { useShare } from "@hooks/share";

const Page = () => {
  const {
    loading,
    goBack,
    handleCopyClick,
    linkUrl,
    setLoading,
    startUpload,
    privacy,
    setPrivacy,
  } = useShare();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#186ade"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          visible={true}
        />
      </div>
    );
  }

  return (
    <section className="p-4 flex flex-col gap-4 h-[90v]">
      <div className="flex justify-between">
        <p
          onClick={goBack}
          className="flex text-sm md:text-base font-bold items-center gap-3 "
        >
          <BiChevronLeft className="" />
          Select files to share
        </p>
        <div className="md:flex hidden  gap-4">
          <button className="text-xs font-semibold rounded-md w-32 justify-center px-3 py-2 border border-[#73adff] text-[#73adff] flex items-center gap-1">
            <AiOutlineUpload /> Add Files
          </button>
          <button
            onClick={handleCopyClick}
            className={`text-xs ${
              linkUrl.length > 5
                ? " animate-pulse"
                : "pointer-events-none opacity-40"
            } font-semibold bg-slate-300 text-slate-600 rounded-md w-32 justify-center px-3 py-2 border flex items-center gap-1`}
          >
            <AiOutlineCopy />
            Copy Link
          </button>
        </div>
      </div>
      <div className=" h-72 md:h-[80vh] flex flex-col gap-3 md:p-16">
        <div className="flex h-full flex-col border border-[#73addf] gap-2 justify-center items-center">
          <p className="hidden md:block text-base">Drag files here or</p>
          {/* <UploadButton
                  endpoint="sharefiles"
                  onClientUploadComplete={(res) => {
                    console.log(`onClientUploadComplete`, res);
                    alert("Upload Completed");
                  }}
                  onUploadBegin={() => {
                    console.log("upload begin");
                  }}
                /> */}
          <div>
            <input
              id="upload"
              type="file"
              className="hidden border-input placeholder:text-muted-foreground focus-visible:ring-ring  h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
              onChange={async (e) => {
                setLoading(true);
                const file = e.target.files?.[0];
                if (!file) {
                  toast.error("Retry...");
                  setLoading(false);
                  return;
                }
                await startUpload([file]);
              }}
            />
            {!loading && (
              <label
                className="text-base cursor-pointer font-semibold rounded-md  justify-center px-3 py-2 border border-[#73adff] text-[#73adff] flex items-center gap-1"
                htmlFor="upload"
              >
                <AiOutlineUpload className="text-xl" /> Upload from device
              </label>
            )}
            {loading && (
              <label
                className="text-xs pointer-events-none opacity-10 cursor-pointer font-semibold rounded-md  justify-center px-3 py-2 border border-[#73adff] text-[#73adff] flex items-center gap-1"
                htmlFor="upload"
              >
                <AiOutlineUpload /> Upload from device
              </label>
            )}
            {/* <label htmlFor='upload'><button className='text-xs font-semibold rounded-md  justify-center px-3 py-2 border border-[#73adff] text-[#73adff] flex items-center gap-1'><AiOutlineUpload /> Upload from device</button></label> */}
          </div>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={privacy} />
            </SelectTrigger>
            <SelectContent className="flex flex-col gap-2">
              <button
                onClick={() => setPrivacy("public")}
                className="text-base w-[100%] px-4 py-2 border flex gap-2"
              >
                <MdPublic className="text-xl" />
                Public
              </button>
              <button
                onClick={() => setPrivacy("private")}
                className="text-base w-[100%] border px-4 py-2 flex gap-2"
              >
                <RiGitRepositoryPrivateFill className="text-xl" />
                Private
              </button>
            </SelectContent>
          </Select>
        </div>
        <div className="flex md:hidden flex-col gap-4">
          <button className="text-xs font-semibold rounded-md justify-center px-3 py-2 border border-[#73adff] text-[#73adff] flex items-center gap-1">
            <AiOutlineUpload /> Add Files
          </button>
          <button
            onClick={handleCopyClick}
            className={`text-xs ${
              linkUrl.length > 5
                ? " animate-pulse"
                : "pointer-events-none opacity-40"
            } font-semibold bg-slate-300 text-slate-600 rounded-md justify-center px-3 py-2 border flex items-center gap-1`}
          >
            <AiOutlineCopy />
            Copy Link
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page;
