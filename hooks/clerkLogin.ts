import { useSignIn } from "@clerk/nextjs";
import { handleClerkLogin } from "@clerk@functions/login";
import { useState } from "react";
import toast from "react-hot-toast";

export type AssignParams = ReturnType<typeof useSignIn>;

export const useClerkLogin = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const signInObj = {isLoaded,signIn,setActive}
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const startLoad = () => {
    setLoading(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { complete, pending, error } = await handleClerkLogin(
      emailAddress,
      password,
      signInObj
    );
    if (pending) {
      console.log(pending);
      setLoading(false);
    }
    if (error) {
      if (error === "Couldn't find your account.") {
        toast.error("Email address not found");
      }
      if (
        error === "Password is incorrect. Try again, or use another method."
      ) {
        toast.error("Wrong password");
      }
      console.log(error);
      setLoading(false);
    }
    if (complete) {
    }
  };
  return {loading,emailAddress,handleSubmit,setEmailAddress,setPassword,startLoad}
};
