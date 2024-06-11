"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

function AddPost() {
  const session = useSession();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const autherId = session.data?.user.id;
  console.log(title, content);
  const PostPublishhandler = async (e) => {
    const response = await axios.post("http://localhost:3000/api/v1/blog/", {
      data: {
        title: title,
        content: content,
        autherId: autherId,
        published: true,
      },
    });
    console.log(response);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Create a New Blog Post
          </h1>
          <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
            Fill out the form below to publish a new blog post.
          </p>
        </div>
        <div className="space-y-8 divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-6 sm:space-y-5">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Title
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  id="title"
                  name="title"
                  type="text"
                  autoComplete="off"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Content
              </label>
              <div className="mt-1">
                <textarea
                  onChange={(e) => setContent(e.target.value)}
                  id="content"
                  name="content"
                  rows={10}
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                />
              </div>
            </div>
          </div>
          <div className="pt-5">
            <div className="flex justify-end">
              <button
                onClick={PostPublishhandler}
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600"
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
