"use client";
import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

type Token = {
  token: string;
};
export default function Signin() {
  // const session = useSession();
  // if (session.data?.user) {
  //   redirect("/");
  // }
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState<Token | null>(null);

  const handleLogin = async () => {
    const res = await fetch("api/signin", {
      method: "POSt",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    setResponse(await res.json());
    console.log(response);

    if (res.status === 200) {
      console.log("pushing");
      router.push("/");
    }
    console.log(response);
  };
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
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
