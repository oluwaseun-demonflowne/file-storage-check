"use client";
import { useClerk } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import { Dispatch, MutableRefObject, SetStateAction } from "react";

type Props = {
  setChecked?: Dispatch<SetStateAction<boolean>>;
  ref?: MutableRefObject<HTMLButtonElement | null>;
};

export const SignOutButton = ({ setChecked, ref }: Props) => {
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <button
      ref={ref}
      onClick={() =>
        signOut(() => {
          setChecked && setChecked(false);
          router.push("/");
        })
      }
      className="py-1 bg-[#651FFF] !rounded-[7px] text-white px-5"
    >
      Sign Out
    </button>
  );
};
