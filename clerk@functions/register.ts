import { Register } from "@typesss/AppTypes";
import { Dispatch, SetStateAction } from "react";

export const handleClerkRegister = async (
    isLoaded: boolean,
    emailAddress: string,
    password: string,
    signUp: any,
    setPendingVerification: Dispatch<SetStateAction<boolean>>
  ): Promise<Register> => {
    if (!isLoaded) {
      return { stop: true };
    }
  
    try {
      await signUp.create({
        emailAddress,
        password,
      });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
      return { pending: true };
    } catch (err: any) {
      // console.error(JSON.stringify(err, null, 2));
      return { error: err.errors[0].meta.paramName };
    }
  };