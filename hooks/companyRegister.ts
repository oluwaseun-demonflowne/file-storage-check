import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import toast from "react-hot-toast";

export const useCompanyReg = () => {
  const [loading, setLoading] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    setCompanyName("");
    setLoading(true);
    e.preventDefault();
    try {
      const response = await fetch("/api/RegisterCompany", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ companyName }),
      });
      console.log(response.status);
      if (response.status === 201) {
        toast.success("Company created success");
        router.push("/register");
      }
      if (response.status === 409) {
        toast.success("Company already Exists");
        setLoading(false);
      }
      if (response.status === 500) {
        toast.success("Try again :(");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error Registering User");
    }
  };
  return { loading, handleSubmit, companyName, setCompanyName };
};
