import Image from "next/image";
import React from "react";
import default_avatar from "@/assets/default_avatar.png";
function AutherData() {
  return (
    <div className="flex gap-x-4 mt-6">
      <Image
        className="rounded-full"
        src={default_avatar}
        height={50}
        width={50}
        alt=""
      />
      <div className="flex flex-col item">
        <p className="text-green-600">Saad V.</p>
        <p className="text-gray-500 text-sm">
          {new Date().toLocaleString("default", { month: "long" })}{" "}
          {new Date().getDay()} - {Math.floor(Math.random() * 10) + 2} min read
        </p>
      </div>
    </div>
  );
}

export default AutherData;
