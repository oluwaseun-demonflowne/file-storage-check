"use client";

import { FileData } from "@typesss";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Socket, io } from "socket.io-client";

type SocketContextType = {
  socket: any | null;
  isConnected: boolean;
};

const SocketContext = createContext<SocketContextType>({
  socket: null,
  isConnected: false,
});

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  useEffect(() => {
    const socket: Socket = io("https://newback-2fg0.onrender.com");

    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket?.on("receive_Publicfile", (data: FileData) => {
      toast.success(
        `${data?.email.replace(
          /@gmail\.com$/,
          ""
        )} sent a .${data?.fileExtension} file `
      );
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    setSocket(socket);
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket, isConnected }}>
      {children}
    </SocketContext.Provider>
  );
};
