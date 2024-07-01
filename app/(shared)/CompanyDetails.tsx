"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useSocket } from "@providers/socket-provider";
import { Skeleton } from "@components/ui/skeleton";

type Props = {
  email: String;
};

const CompanyDetails = ({ email }: Props) => {
  const { isConnected, socket } = useSocket();

  const { isLoading, data } = useQuery({
    queryKey: ["companyName"],
    queryFn: () =>
      axios.get(`/api/CompanyName/${email}`).then((res) => res.data),
  });

  if (isLoading) {
    return (
      <div className="flex   gap-2 ">
        <Skeleton className="w-[80px] h-2 bg-slate-300  rounded-sm" />
        <Skeleton className="w-[120px] hidden h-2 bg-slate-300  rounded-sm" />
      </div>
    );
  }
  if (data) socket.emit("join_room", data.id);

  return (
    <div className="">
      <h1 className="flex text-base  gap-2 items-center font-bold">
        <span className="md:w-full w-16 overflow-hidden">
          {data?.companyName}
        </span>
        {isConnected && data ? (
          <span className="bg-green-600 animate-pulse w-2 rounded-full h-2"></span>
        ) : (
          <span className="bg-red-600 w-2 rounded-full h-2"></span>
        )}
      </h1>
      {/* <h1> */}
      {/* {isConnected && data ? 
                <span className='bg-green-600 mt-4 ml-2  text-green-600 md:hidden animate-pulse w-2 rounded-full h-2'>.</span>
                : <span className='bg-red-600  mt-4 ml-2 text-red-600 md:hidden w-3 rounded-full h-3'>.</span>}</h1> */}
      {/* <p className='text-sm hidden md:block text-slate-500'>{email}</p> */}
    </div>
  );
};

export default CompanyDetails;
