import AutherData from "@/components/AutherData";
import axios from "axios";
import default_avatar from "@/assets/default_avatar.png";
import Image from "next/image";
export default async function Home() {
  const allPost = await axios.get("http://localhost:3000/api/v1/blog/bulk");
  console.log(allPost.data);
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-[800px] space-x-6">
        <div className="flex flex-col">
          <div>
            <h1 className="text-3xl font-medium">
              it happend on Medium: May 2024 roundup
            </h1>
            <p className="text-gray-500 text-sm">
              Last month’s most-read stories, most-highlighted sentences, and
              some of our favorite stories in honor of Mental Health Awareness
              Month
            </p>
          </div>
          <AutherData />
        </div>
        <Image src={default_avatar} height={142} width={142} alt="" />
      </div>
    </div>
  );
}
