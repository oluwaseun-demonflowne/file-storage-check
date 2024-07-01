"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Logo from "@public/logo-color 1.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { useUser } from "@clerk/nextjs";
import { SignOutButton } from "../signOut";
import Mobilehamburger from "@components/hamburger";

const mobileVariants = {
  open: { opacity: 1, transition: { duration: 0.4 }, y: 0 },
  closed: { opacity: 0, transition: { duration: 0.4 }, y: "-700px" },
};

const MobileNav = () => {
  const user = useUser();
  console.log();
  const [isChecked, setIsChecked] = useState(false);
  const publicRef = useRef<HTMLLIElement | null>(null);
  const myFileRef = useRef<HTMLLIElement | null>(null);
  const pricingRef = useRef<HTMLLIElement | null>(null);
  const notiRef = useRef<HTMLLIElement | null>(null);
  const helpRef = useRef<HTMLLIElement | null>(null);
  const settingRef = useRef<HTMLLIElement | null>(null);
  const signInRef = useRef<HTMLButtonElement | null>(null);
  const createActRef = useRef<HTMLButtonElement | null>(null);
  const imageRef = useRef<HTMLAnchorElement | null>(null);
  const signOutRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (publicRef?.current?.contains(e.target as Node)) {
        console.log("hi");
        setIsChecked(false);
      }
      if (myFileRef?.current?.contains(e.target as Node)) {
        console.log("hi");
        setIsChecked(false);
      }
      if (pricingRef?.current?.contains(e.target as Node)) {
        console.log("hi");
        setIsChecked(false);
      }
      if (notiRef?.current?.contains(e.target as Node)) {
        console.log("hi");
        setIsChecked(false);
      }
      if (helpRef?.current?.contains(e.target as Node)) {
        console.log("hi");
        setIsChecked(false);
      }
      if (settingRef?.current?.contains(e.target as Node)) {
        console.log("hi");
        setIsChecked(false);
      }
      if (signInRef?.current?.contains(e.target as Node)) {
        console.log("hi");
        setIsChecked(false);
      }
      if (createActRef?.current?.contains(e.target as Node)) {
        console.log("hi");
        setIsChecked(false);
      }
      if (imageRef?.current?.contains(e.target as Node)) {
        console.log("hi");
        setIsChecked(false);
      }
      if (signOutRef?.current?.contains(e.target as Node)) {
        console.log("hi");
        setIsChecked(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <nav className="flex relative  gap-7 flex-col md:hidden justify-between">
      <div className="flex px-4 bg-white !z-[2] justify-between py-6">
        <Link ref={imageRef} href="/">
          <Image
            src={Logo}
            unoptimized
            className="w-[120px]"
            alt="homepage"
            width={100}
            height={100}
          />
        </Link>
        <Mobilehamburger checked={isChecked} isChecked={setIsChecked} />
      </div>
      <motion.div
        animate={isChecked ? "open" : "closed"}
        variants={mobileVariants}
        className={`flex flex-col ${isChecked ? "" : "opacity-0"} absolute 
        bg-white top-16 h-[70vh] w-full gap-7 !z-[1]`}
      >
        <ul className="flex flex-col px-4  mt-10  gap-5 text-base text-slate-600 font-semibold">
          <li ref={publicRef}>
            <Link href="/public">Public</Link>
          </li>
          <li ref={myFileRef}>
            <Link href="/my-file">My Files</Link>
          </li>
          <li ref={pricingRef}>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li ref={notiRef}>
            <Link href="/share">NShare</Link>
          </li>
          <li ref={helpRef}>
            <Link href="/help">Help</Link>
          </li>
          <li ref={settingRef}>
            <Link href="/">Settings</Link>
          </li>
        </ul>
        <div className="flex px-4 flex-col gap-5">
          {!user.isSignedIn ? (
            <button
              ref={signInRef}
              className="py-3 border-2 border-black !rounded-[7px] font-semibold  px-5"
            >
              <Link href="/login">Sign In</Link>
            </button>
          ) : (
            <p className="text-base font-semibold">
              {user?.user?.emailAddresses[0].emailAddress}
            </p>
          )}
          {!user.isSignedIn ? (
            <button
              ref={createActRef}
              className="py-3 bg-[#651FFF] !rounded-[7px] text-white px-5"
            >
              <Link href="/register">Create an account</Link>
            </button>
          ) : (
            <SignOutButton ref={signOutRef}  setChecked={setIsChecked} />
          )}
        </div>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
