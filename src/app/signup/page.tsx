"use client";

import axios from "axios";
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
    <div className="flex flex-col w-100 content-center justify-center items-center bg-gray-400">
      <input
        className="rounded-xl my-2"
        type="text"
        name=""
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="rounded-xl my-2"
        type="text"
        name=""
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="rounded-xl my-2"
        type="text"
        name=""
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="bg-blue-300 rounded-xl px-4 py-2"
        onClick={SignupHandler}
      >
        Login
      </button>
    </div>
  );
}

export default Signup;
