"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FileData } from "@typesss";
import { useSocket } from "@providers/socket-provider";
import { useFetchFiles } from "@hooks/fetchFiles";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { AiOutlineInsertRowAbove, AiOutlineUnorderedList } from "react-icons/ai";
import Files from "./files/Files";

interface Props {
  email: string | undefined;
}

const Title = ({ email }: Props) => {
  const { socket } = useSocket();
  const pathname = usePathname();
  const [display, setDisplay] = useState("all");
  const {publicFiles,setPublicFiles,isLoading,personalLoading,personal} = useFetchFiles(email)  

  useEffect(() => {
    socket?.on("receive_Publicfile", (data: FileData) => {
      setPublicFiles((prev:FileData[]) => [...prev, data]);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  return (
    <div className="">
      <div className="flex gap-4 md:gap-0 md:flex-row flex-col mb-7 justify-between">
        <div className="text-sm flex-wrap font-bold text-slate-400 flex gap-8">
          <button onClick={() => setDisplay("all")}>All</button>
          <button onClick={() => setDisplay("img")}>Images</button>
          <button onClick={() => setDisplay("vid")}>Videos</button>
          <button onClick={() => setDisplay("doc")}>Documents</button>
        </div>
        <div className="text-base flex items-center gap-10">
          <div className="flex items-center gap-3">
            <p>Sort by</p>
            <button className="text-[#186ade] flex gap-2 items-center font-semibold">
              Newest
              <BiChevronDown className="text-2xl" />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <AiOutlineInsertRowAbove />
            <AiOutlineUnorderedList />
          </div>
        </div>
      </div>
      <div>
        <button className="text-sm flex items-center gap-1 font-bold my-4">
          <BiChevronUp className="text-2xl" />
          Files
        </button>
        <div>
          <Files
            loading={pathname === "/public" ? isLoading : personalLoading}
            files={
              pathname === "/public"
                ? display === "all"
                  ? publicFiles
                  : display === "img"
                    ? publicFiles.filter(
                        (i: FileData) =>
                          i.fileExtension === "jpg" ||
                          i.fileExtension === "png" ||
                          i.fileExtension === "jpeg" ||
                          i.fileExtension === "gif"
                      )
                    : display === "doc"
                      ? publicFiles.filter(
                          (i: FileData) =>
                            i.fileExtension === "pdf" ||
                            i.fileExtension === "docx" ||
                            i.fileExtension === "txt" ||
                            i.fileExtension === "md"
                        )
                      : display === "vid"
                        ? publicFiles.filter(
                            (i: FileData) =>
                              i.fileExtension === "mp4" ||
                              i.fileExtension === "webm" ||
                              i.fileExtension === "mkv"
                          )
                        : publicFiles
                : display === "all"
                  ? personal
                  : display === "img"
                    ? personal.filter(
                        (i: FileData) =>
                          i.fileExtension === "jpg" ||
                          i.fileExtension === "png" ||
                          i.fileExtension === "jpeg" ||
                          i.fileExtension === "gif"
                      )
                    : display === "doc"
                      ? personal.filter(
                          (i: FileData) =>
                            i.fileExtension === "pdf" ||
                            i.fileExtension === "docx" ||
                            i.fileExtension === "txt" ||
                            i.fileExtension === "md"
                        )
                      : display === "vid"
                        ? personal.filter(
                            (i: FileData) =>
                              i.fileExtension === "mp4" ||
                              i.fileExtension === "webm" ||
                              i.fileExtension === "mkv"
                          )
                        : personal
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Title;
