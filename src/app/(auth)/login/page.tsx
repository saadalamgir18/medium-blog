"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";

export default function Signin() {
  const session = useSession();
  if (session.data?.user) {
    redirect("/");
  }
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        name="email"
        id="email"
        placeholder="name@email.com"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label>Password</label>
      <div className="flex border rounded-lg">
        <input
          className="border-0"
          name="password"
          // type={isPasswordVisible ? 'text' : 'password'}
          id="password"
          placeholder="••••••••"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button
        className="my-3 w-full"
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
      {/* <button
        onClick={async () => {
          await signIn("google");
        }}
      >
        Login with google
      </button> */}

      {/* <br /> */}
      {/* <button
        onClick={async () => {
          await signIn("github");
        }}
      >
        Login with Github
      </button>
      <br /> */}
      {/* <button
        onClick={async () => {
          const res = await signIn("credentials", {
            username: "",
            password: "",
            redirect: false,
          });
          console.log(res);
          router.push("/login");
        }}
      >
        Login with email
      </button> */}
      <div>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    </div>
  );
}
