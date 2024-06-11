"use client";

import axios from "axios";
import Link from "next/link";
import React from "react";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const SignupHandler = async () => {
    await axios.post("http://localhost:3000/api/signup", {
      data: {
        name,
        email,
        password,
      },
      method: "POST",
    });
  };
  return (
    <div className="min-h-screen grid grid-cols-2 gap-8 w-full mx-auto">
      <div className="flex flex-col items-center justify-center mx-auto max-w-sm space-y-4">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">Create an Account</h1>
          <p className="text-gray-500 text-sm mt-2">
            Already have account?{" "}
            <Link className="text-indigo-600 font-medium" href={"/login"}>
              Login
            </Link>
          </p>
        </div>
        <div className="">
          <label className="font-bold"> Username</label>
          <br />
          <input
            className="rounded-md py-1 my-2 px-2 border-2"
            type="text"
            name=""
            placeholder="Saad Alamgir"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="font-bold"> Email</label>
          <br />
          <input
            className="rounded-md py-1 my-2 px-2 border-2"
            placeholder="example@email.com"
            type="text"
            name=""
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="font-bold"> Password</label>
          <br />
          <input
            className="rounded-md py-1 my-2 px-2 border-2"
            type="text"
            name=""
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-black text-white rounded-md px-4 py-2 w-full"
          onClick={SignupHandler}
        >
          Sign Up
        </button>
      </div>
      <div className="bg-gray-100 flex flex-col justify-center px-12">
        <blockquote className="text-2xl font-medium ">
          &quot;Ther customer service I recieved was exceptional. The support
          team went above and beyond to address my concerns.&quot;
        </blockquote>
        <h3 className="text-lg font-medium  mt-2">Jules Winnfield</h3>
        <p className=" text-gray-500 text-sm">CEO, Acme lnc</p>
      </div>
    </div>
  );
}

export default Signup;
