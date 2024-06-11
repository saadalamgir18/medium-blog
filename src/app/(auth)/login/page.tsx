"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import Link from "next/link";

export default function Signin() {
  const session = useSession();
  if (session.data?.user) {
    redirect("/");
  }
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex flex-col justify-center max-w-sm mx-auto gap-y-5">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Sign in to your account</h1>
        <p className="text-gray-600 text-sm  mt-2">
          Don&apos;t have an account?{" "}
          <Link className="text-indigo-600 font-medium" href={"/signup"}>
            Register
          </Link>
        </p>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input
          className="border-2 rounded-md w-full"
          name="email"
          id="email"
          placeholder="name@email.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Password</label>
        <div>
          <input
            className="border-2 rounded-md w-full"
            name="password"
            id="password"
            placeholder="••••••••"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <button
        className="rounded-md w-full bg-black text-white py-2"
        onClick={async () => {
          const res = await signIn("credentials", {
            email: email,
            password: password,
            redirect: true,
          });
          console.log(res);
          router.push("/");
        }}
      >
        Login
      </button>
    </div>
  );
}
