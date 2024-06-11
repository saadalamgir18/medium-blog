import Image from "next/image";
import React from "react";
import medium_icon from "@/assets/medium-icon-svgrepo-com.svg";
import Link from "next/link";
function NavBar() {
  return (
    <div className="flex justify-center w-[800px] items-center mx-auto h-12 m-2 py-2">
      <Image src={medium_icon} height={30} width={30} alt="" />
      <div className="text-green-500 text-sm ml-auto flex gap-x-4 items-center">
        <Link href={"/"}> Sign in</Link>
        <Link
          className="rounded-2xl border-2 border-green-500 px-4 py-1"
          href={"/"}
        >
          Get started
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
