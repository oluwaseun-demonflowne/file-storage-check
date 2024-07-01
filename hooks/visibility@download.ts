import { useState } from "react";
import toast from "react-hot-toast";

export const useVisibilityDownload = () => {
    const [fetching, setFetching] = useState(false);
    const changeVisibility = async (id: string, fileVisibility: string) => {
        try {
          const response = await fetch(`/api/ChangeVisibility/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fileVisibility,
            }),
          });
          console.log(response);
          if (response.status === 200) {
            toast.success("Successfully changed");
          }
          if (response.status === 500) {
            toast.error("Error Changing Visibility");
          }
        } catch (error) {
          toast.error("Error Changing Visibility");
        }
      };
    
      const download = (url: string, name: string) => {
        if (!url) {
          throw new Error("Resource URL not provided! You need to provide one");
        }
        setFetching(true);
        fetch(url)
          .then((response) => response.blob())
          .then((blob) => {
            setFetching(false);
            const blobURL = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = blobURL;
            a.style.display = "none";
    
            if (name && name.length) a.download = name;
            document.body.appendChild(a);
            a.click();
          });
        // .catch(() => setError(true));
      };
      return {fetching, changeVisibility,download}
}