import { useSignUp } from "@clerk/nextjs";
import { handleClerkRegister } from "@clerk@functions/register";
import { useState } from "react";
import toast from "react-hot-toast";

export const useRegister = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [company, setCompany] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [comErr, setComErr] = useState(false);
  const [loading, setLoading] = useState(false);

  // const load = () => {
  //   setLoading(true);
  // };

  const submitForm = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    setComErr(false);
    try {
      const response = await fetch("/api/checkCompanyExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ company }),
      });
      if (response.status === 409) {
        const { pending, error } = await handleClerkRegister(
          isLoaded,
          emailAddress,
          password,
          signUp,
          setPendingVerification
        );
        if (error === "email_address") {
          toast.error("Email already in use");
          setLoading(false);
        }
        if (error === "password") {
          toast.error("Password too short");
          setLoading(false);
        }
        pending && setPendingVerification(pending);
      }
      if (response.status === 404) {
        toast.error("Company not found");
        setLoading(false);
        setComErr(true);
      }
    } catch (error) {
      toast.error("Error checking company");
      setLoading(false);
    }
  };

  return {
    submitForm,
    emailAddress,
    setCompany,
    setEmailAddress,
    setPassword,
    pendingVerification,
    comErr,
    loading,
    setActive,
    company,
    password,
    isLoaded,
    signUp,
  };
};
