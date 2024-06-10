"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const session = useSession();
  return <div> {JSON.stringify(session.data?.user)}</div>;
}
