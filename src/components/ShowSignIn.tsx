"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

function ShowSignIn() {
  // const session = useSession();
  const session = {};

  return (
    <div>{!session?.data?.user && <Link href={"/login"}> Sign in</Link>}</div>
  );
}

export default ShowSignIn;
