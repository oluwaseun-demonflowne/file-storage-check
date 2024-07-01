import { useSignIn } from "@clerk/nextjs";

export interface FileData {
      ampm: string;
      companyId: string;
      date: number;
      email: string;
      fileExtension: string;
      fileName: string;
      hour: number;
      id: string;
      visibility:string;
      minute: number;
      month: number;
      profileId: string;
      size: number;
      url: string;
      year: number;
    }
  
    export type DatabaseError = {
      type: 'DatabaseError';
      message: string;
    };
    
  export  type ValidationError = {
      type: 'ValidationError';
      message: string;
    };  

  export type Plan = ["Free", "Basic", "Proffessional"];

  export type Pricing = {
    Free: number;
    Basic: number;
    Proffessional: number;
  };

  export type Features = {
    Free: string[];
    Basic: string[];
    Proffessional: string[];
  };

  
type AssignParams = ReturnType<typeof useSignIn>;
export type SignActiveLoaded = Pick<AssignParams, "isLoaded" | "signIn" | "setActive">;