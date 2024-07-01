"use client";
import PreviewImage from "@components/mediaDisplay/PreviewImg";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@components/ui/alert-dialog";
import React, { useEffect, useRef, useState } from "react";
import { AiFillFolder } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { useUser } from "@clerk/nextjs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@components/ui/menubar";
import { FileData } from "@typesss";
import { Skeleton } from "@components/ui/skeleton";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@components/ui/pagination";
import { useVisibilityDownload } from "@hooks/visibility@download";

interface Props {
  files: FileData[];
  loading: boolean;
}

const Files = ({ files, loading }: Props) => {
  const { user } = useUser();
  const { fetching, changeVisibility, download } = useVisibilityDownload();
  const [getUrl, setGetUrl] = useState("");
  const [getFileExtension, setGetFileExtension] = useState("");
  const [getFileDetails, setGetFileDetails] = useState<FileData | null>(null);
  const [pages, setPages] = useState<null[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dialogRef = useRef<HTMLButtonElement | null>(null);
  const alertRef = useRef<HTMLButtonElement | null>(null);

  const triggerDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.click();
    }
  };
  const triggerAlert = () => {
    if (alertRef.current) {
      alertRef.current.click();
    }
  };

  useEffect(() => {
    setPages(new Array(Math.ceil((files?.length || 0) / 8)).fill(null));
  }, [files]);

  if (loading) {
    return (
      <div className="flex flex-wrap gap-4">
        <div className="w-40 border rounded-md p-2 animate-pulse flex flex-col gap-4">
          <div className="flex p-2 justify-between">
            <Skeleton className=" w-6  h-6 bg-slate-300  rounded-sm" />
            <Skeleton className=" w-6  h-6 bg-slate-300  rounded-sm" />
          </div>
          <div className="flex p-2 flex-col gap-1">
            <Skeleton className=" w-28  h-2 bg-slate-300  rounded-sm" />
            <Skeleton className=" w-20  h-2 bg-slate-300  rounded-sm" />
          </div>
          <Skeleton className=" w-full  h-8 bg-slate-300  rounded-sm" />
        </div>
        <div className="w-40 border rounded-md p-2 animate-pulse flex flex-col gap-4">
          <div className="flex p-2 justify-between">
            <Skeleton className=" w-6  h-6 bg-slate-300  rounded-sm" />
            <Skeleton className=" w-6  h-6 bg-slate-300  rounded-sm" />
          </div>
          <div className="flex p-2 flex-col gap-1">
            <Skeleton className=" w-28  h-2 bg-slate-300  rounded-sm" />
            <Skeleton className=" w-20  h-2 bg-slate-300  rounded-sm" />
          </div>
          <Skeleton className=" w-full  h-8 bg-slate-300  rounded-sm" />
        </div>
        <div className="w-40 border rounded-md p-2 animate-pulse flex flex-col gap-4">
          <div className="flex p-2 justify-between">
            <Skeleton className=" w-6  h-6 bg-slate-300  rounded-sm" />
            <Skeleton className=" w-6  h-6 bg-slate-300  rounded-sm" />
          </div>
          <div className="flex p-2 flex-col gap-1">
            <Skeleton className=" w-28  h-2 bg-slate-300  rounded-sm" />
            <Skeleton className=" w-20  h-2 bg-slate-300  rounded-sm" />
          </div>
          <Skeleton className=" w-full  h-8 bg-slate-300  rounded-sm" />
        </div>
        <div className="w-40 border rounded-md p-2 animate-pulse flex flex-col gap-4">
          <div className="flex p-2 justify-between">
            <Skeleton className=" w-6  h-6 bg-slate-300  rounded-sm" />
            <Skeleton className=" w-6  h-6 bg-slate-300  rounded-sm" />
          </div>
          <div className="flex p-2 flex-col gap-1">
            <Skeleton className=" w-28  h-2 bg-slate-300  rounded-sm" />
            <Skeleton className=" w-20  h-2 bg-slate-300  rounded-sm" />
          </div>
          <Skeleton className=" w-full  h-8 bg-slate-300  rounded-sm" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex  flex-wrap gap-5">
      {files
        ?.slice((currentPage - 1) * 8, currentPage * 8)
        ?.map((i: FileData) => (
          <div
            key={i.id}
            className="border relative  rounded-md flex flex-col justify-between h-44 w-44  md:h-40 md:w-44"
          >
            <div className="p-3 flex flex-col h-full  justify-between">
              <div className="flex justify-between">
                <AiFillFolder className="text-[#b896f7]" />
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>
                      <BsThreeDotsVertical />
                    </MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem
                        onClick={() => {
                          setGetUrl(i.url);
                          setGetFileExtension(i.fileExtension);
                          triggerAlert();
                        }}
                      >
                        Preview
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>
                        {i.email === user?.emailAddresses[0]?.emailAddress && (
                          <button
                            onClick={() => changeVisibility(i.id, i.visibility)}
                            className="text-sm font-semibold text-slate-700"
                          >
                            Make{" "}
                            {i.visibility === "private" ? "Public" : "Private"}
                          </button>
                        )}
                      </MenubarItem>
                      <MenubarItem>
                        <button className="text-sm font-semibold text-slate-700">
                          Save to important
                        </button>
                      </MenubarItem>
                      <MenubarItem>
                        <button className="text-sm font-semibold text-slate-700">
                          Make a copy
                        </button>
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>
                        <button
                          disabled={fetching}
                          onClick={() => download(i.url, i.fileName)}
                          className="text-sm font-semibold text-slate-700"
                        >
                          download
                        </button>
                      </MenubarItem>
                      <MenubarItem
                        onClick={() => {
                          setGetFileDetails(i);
                          triggerDialog();
                        }}
                      >
                        View details
                        {/* <DialogTrigger
                          onClick={() => setGetFileDetails(i)}
                          className="text-sm font-semibold text-slate-700"
                        >
                          View details
                        </DialogTrigger> */}
                      </MenubarItem>

                      {/* </Dialog> */}
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>
              <div>
                <h1 className="text-sm h-6 w-[150px] overflow-hidden font-bold">
                  {i.fileName}
                </h1>
                <p className="text-sm font-semibold  text-slate-500">
                  {i.date}/{i.month}/{i.year} {i.hour}
                  {":"}
                  {i.minute}
                </p>
              </div>
            </div>
            <div className="p-3 rounded-b-md bg-blue-300">
              <p className="text-sm text-slate-800">{i.size.toFixed(1)} mb</p>
            </div>
          </div>
        ))}
      <Dialog>
        <DialogTrigger
          ref={dialogRef}
          className="text-sm font-semibold text-slate-700"
        ></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>File Details</DialogTitle>
            <DialogDescription className="flex flex-col gap-2">
              <p className="flex ">
                <span className="text-sm w-[120px]">File name: </span>
                <span className="text-base font-semibold">
                  {getFileDetails?.fileName}
                </span>
              </p>
              <p className="flex ">
                <span className="w-[120px]">File size: </span>
                <span className="text-base font-semibold">
                  {getFileDetails?.size && getFileDetails?.size < 1024
                    ? `${getFileDetails?.size} B`
                    : getFileDetails?.size && getFileDetails?.size < 1024 * 1024
                      ? `${(getFileDetails.size / 1024).toFixed(2)} KB`
                      : `${
                          getFileDetails?.size &&
                          (getFileDetails?.size / (1024 * 1024)).toFixed(2)
                        } MB`}
                </span>
              </p>
              <p className="flex ">
                <span className="w-[120px]">Author: </span>
                <span className="text-base font-semibold">
                  {getFileDetails?.email}
                </span>
              </p>
              <p className="flex ">
                <span className="w-[120px]">Visibility: </span>
                <span className="text-base font-semibold">
                  {getFileDetails?.visibility}
                </span>
              </p>
              <p className="flex ">
                <span className="w-[120px]">Time uploaded: </span>
                <span className="text-base font-semibold">
                  {getFileDetails?.date}/{getFileDetails?.month}/
                  {getFileDetails?.year} {getFileDetails?.hour}
                  {":"}
                  {getFileDetails?.minute}
                </span>
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <AlertDialog>
        <AlertDialogTrigger ref={alertRef}></AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-0">
              <FaTimes />
            </AlertDialogCancel>
          </AlertDialogFooter>
          <PreviewImage file={getUrl} extension={getFileExtension} />
        </AlertDialogContent>
      </AlertDialog>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className={`cursor-pointer ${
                currentPage === 1 ? " pointer-events-none opacity-50" : ""
              }`}
              href=""
            />
          </PaginationItem>
          {/* @ts-expect-error */}
          {pages.map((i, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                className="cursor-pointer"
                isActive={currentPage === index + 1 ? true : false}
                onClick={() => setCurrentPage(index + 1)}
                href={undefined}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className={`cursor-pointer ${
                currentPage === pages.length
                  ? " pointer-events-none opacity-50"
                  : ""
              }`}
              href={undefined}
            />
          </PaginationItem>
          {/* <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem> */}

          {/* <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem> */}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Files;
