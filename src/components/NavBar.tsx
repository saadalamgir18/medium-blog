"use client";
import Image from "next/image";
import React from "react";
import medium_icon from "@/assets/medium-icon-svgrepo-com.svg";
import Link from "next/link";
import { FiBell } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

function NavBar() {
  const session = {};
  return (
    <div className="flex justify-center w-[800px] items-center mx-auto h-12 m-2 py-2">
      <Image src={medium_icon} height={30} width={30} alt="" />
      <div className=" text-sm ml-auto flex gap-x-4 items-center">
        {!session?.data?.user && <Link href={"/login"}> Sign in</Link>}
        {!session?.data?.user && (
          <Link
            className="text-green-500 rounded-2xl border-2 border-green-500 px-4 py-1"
            href={"/"}
          >
            Get started
          </Link>
        )}
        <CiSearch />

        <FiBell className="text-gray-500" />

        <Image
          className="rounded-full"
          src={medium_icon}
          height={30}
          width={30}
          alt=""
        />
      </div>
    </div>
  );
}

export default NavBar;
