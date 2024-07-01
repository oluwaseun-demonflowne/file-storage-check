"use client"
import React from "react";
import Image from "next/image";
import Logo from "@public/logo-color 1.png";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { SignOutButton } from "../signOut";

const DesktopNav =  () => {
  const user = useUser();
  return (
    <nav className="md:flex hidden justify-between items-center px-12 pt-6 pb-16">
      <div className="gap-7 flex ">
        <div>
          <Link href="/">
            <Image
              src={Logo}
              unoptimized
              className="w-[120px]"
              alt="homepage"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <ul className="flex gap-5 text-base text-slate-600 font-semibold">
          <li>
            <Link href="/public">Public</Link>
          </li>
          <li>
            <Link href="/my-file">My Files</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/share">Share</Link>
          </li>
          <li>
            <Link href="/help">Help</Link>
          </li>
          <li>
            <Link href="/">Settings</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-5">
        {!user.isSignedIn ? (
          <button className="py-1 border-2 border-black !rounded-[7px] font-semibold  px-5">
            <Link href="/login">Sign In</Link>
          </button>
        ) : (
          <p className="text-base font-semibold">
            {user?.user?.emailAddresses[0].emailAddress}
          </p>
        )}
        {!user.isSignedIn ? (
          <button className="py-1 bg-[#651FFF] !rounded-[7px] text-white px-5">
            <Link href="/register">Create an account</Link>
          </button>
        ) : (
          <SignOutButton />
        )}
      </div>
    </nav>
  );
};

export default DesktopNav;
