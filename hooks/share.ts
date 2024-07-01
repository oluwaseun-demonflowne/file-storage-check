import { addNewFile } from "@server@actions/server";
import { useSocket } from "@providers/socket-provider";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import { useUploadThing } from "@utils/uploadthing";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import { utapi } from "uploadthing/server";
import { Company } from "@prisma/client";

export const useShare = () => {
  const { socket } = useSocket();
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");

  const [privacy, setPrivacy] = useState<"private" | "public">("private");

  const goBack = () => {
    router.back();
  };

  const { data: companyData } = useQuery({
    queryKey: ["companyName"],
    queryFn: () =>
      axios
        .get(`/api/CompanyName/${user?.emailAddresses[0]?.emailAddress}`)
        .then((res:AxiosResponse<Company>) => res.data),
  });
  const { startUpload } = useUploadThing(
    companyData?.plan === "freePlan"
      ? "freePlan"
      : companyData?.plan === "basicPlan"
        ? "basicPlan"
        : companyData?.plan === "proPlan"
          ? "proPlan"
          : "freePlan",
    {
      onClientUploadComplete: async (res) => {
        if (user && res) {
          const { fileSuccess, errorMsg, max } = await addNewFile(
            user?.emailAddresses[0]?.emailAddress,
            res[0].name,
            res[0].name.slice(res[0].name.lastIndexOf(".") + 1),
            res[0].url,
            res[0].size / (1024 * 1024),
            privacy
          );
          if (max) {
            setLoading(false);
            toast.success("File Maximum Reached");
            await utapi.deleteFiles(res[0].name);
          }
          if (fileSuccess) {
            setLoading(false);
            setLinkUrl(res[0].url);
            if (fileSuccess?.visibility === "public") {
              socket.emit("shared_PublicFile", fileSuccess);
            }
            if (fileSuccess?.visibility === "private") {
              socket.emit("shared_PrivateFile", fileSuccess);
            }
            toast.success("File Uploaded successfully");
          }
          if (errorMsg) {
            await utapi.deleteFiles(res[0].name);
            setLoading(false);
            toast.error("Error while Saving file , retry");
          }
        }
      },
      onUploadError: () => {
        toast.error("Error Updating file, ReUpload");
        setLoading(false);
      },
    }
  );

  const handleCopyClick = () => {
    navigator.clipboard.writeText(linkUrl).then(() => {
      toast.success("Copied");
    });
  };

  return {
    loading,
    goBack,
    handleCopyClick,
    linkUrl,
    setLoading,
    startUpload,
    privacy,
    setPrivacy,
  };
};
