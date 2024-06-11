"use client";
import { signOut, useSession } from "next-auth/react";
export default function Home() {
  const session = useSession();
  return (
    <div>
      {" "}
      {JSON.stringify(session.data?.user)}
      <button
        className="text-white bg-black px-4 py-2 rounded-md"
        onClick={() => signOut({ callbackUrl: "/login" })}
      >
        Sign out
      </button>
    </div>
  );
}
