import AutherData from "@/components/AutherData";
import axios from "axios";
import default_avatar from "@/assets/default_avatar.png";
import Image from "next/image";
type PostType = {
  id: string;
  title: string;
  content: string;
  published: boolean;
  autherId: string;
};
export default async function Home() {
  const allPost = (await axios.get("http://localhost:3000/api/v1/blog/bulk"))
    ?.data?.post;

  return (
    <div className="flex flex-col items-center justify-between mb-12">
      {allPost.map((post: PostType) => {
        return (
          <div
            key={post.id}
            className="flex flex-col w-[800px] space-x-6 justify-between mt-10 border-b-2 pb-5"
          >
            <div className="flex">
              <div>
                <h1 className="text-xl font-medium">{post.title}</h1>
                <p className="text-gray-500 text-sm">
                  {post.content.slice(0, 120)}...
                </p>
              </div>
              <Image
                className="ml-auto"
                src={default_avatar}
                height={130}
                width={130}
                alt=""
              />
            </div>
            <AutherData />
          </div>
        );
      })}
    </div>
  );
}
