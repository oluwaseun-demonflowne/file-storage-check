import { FileData } from "@typesss";

// type Result<T> = T extends string | boolean | FileData[]
//   ? T
//   : any;

type General = {
  complete?: string;
  pending?: boolean;
  error?: string;
  stop?: boolean;
  inComplete?: boolean;
  success?: string;
};

type Types = string | boolean | string | any

export type Response = Omit<General, "inComplete" | "success">;

export type Register = Pick<General, "pending" | "error" | "stop">;

export type Verify = Omit<General, "complete" | "pending">;

export type VerifyProps = {
  isLoaded: boolean;
  email: string;
  company: string;
  signUp: any;
  setActive: any;
};

export type returnFetch = {
  publicFiles: FileData[];
  setPublicFiles: Dispatch<SetStateAction<FileData[]>>;
  isLoading: boolean;
  personalLoading: boolean;
  personal: FileData[];
};
