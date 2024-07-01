import { useQuery } from "@tanstack/react-query";
import { FileData } from "@typesss";
import { returnFetch } from "@typesss/AppTypes";
import axios from "axios";
import { useEffect, useState } from "react";



export const useFetchFiles = (email: string | undefined):returnFetch => {
  if (email === undefined) {
    throw new Error("No Email Address");
  }

  const [publicFiles, setPublicFiles] = useState<FileData[]>([]);
  const { isLoading, data } = useQuery({
    queryKey: ["companyFiles"],
    queryFn: () =>
      axios.get(`/api/CompanyFiles/${email}`).then((res) => res.data),
  });

  useEffect(() => {
    setPublicFiles(data);
  }, [data]);

  const { isLoading: personalLoading, data: personal } = useQuery({
    queryKey: ["myOwnFiles"],
    queryFn: () => axios.get(`/api/MyOwnFile/${email}`).then((res) => res.data),
  });

  return { publicFiles, setPublicFiles, isLoading, personalLoading, personal };
};
