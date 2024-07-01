"use client";
import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

type Props = {
  checked: boolean;
  isChecked: Dispatch<SetStateAction<boolean>>;
};

const mobileVariants = {
  //   open: { opacity: 1, transition: { duration: 0.4 }, rotate: 45 },
  //   closed: { opacity: 1, transition: { duration: 0.4 }, rotate: 180 },
};
const firstVariants = {
  open: { opacity: 1, transition: { duration: 0.2 }, rotate: 45 },
  closed: { opacity: 1, transition: { duration: 0.2 }, rotate: 0 },
};
const secondVariants = {
  open: { opacity: 1, transition: { duration: 0.2 }, rotate: -45 },
  closed: { opacity: 1, transition: { duration: 0.2 }, rotate: 0 },
};

const Mobilehamburger = ({ checked, isChecked }: Props) => {
  return (
    <button onClick={() => isChecked(!checked)} className="flex flex-col gap-1">
      <motion.div
        animate={checked ? "open" : "closed"}
        variants={firstVariants}
        className="h-[3px] bg-black w-8"
      ></motion.div>
      <motion.div
        animate={checked ? "open" : "closed"}
        variants={mobileVariants}
        className="h-[3px] bg-black w-8"
      ></motion.div>
      <motion.div
        animate={checked ? "open" : "closed"}
        variants={secondVariants}
        className="h-[3px] bg-black w-8"
      ></motion.div>
    </button>
  );
};

export default Mobilehamburger;
