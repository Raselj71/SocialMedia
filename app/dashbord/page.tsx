"use client";

import { useSession, signOut } from "next-auth/react";
import { RiVideoAddFill } from "react-icons/ri";
import { PiImagesBold } from "react-icons/pi";
import { BsEmojiLaughing } from "react-icons/bs";
import Post from "@/components/Post";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQuery } from "react-query";
import PostCard from "@/components/PostCard";

const Page = () => {
  const { data: session } = useSession();
  const [visible, SetVisible] = useState(false);

  const { isLoading, error, data } = useQuery("getpost", () =>
    fetch("http://localhost:5000/post/getall").then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: ";

  console.log(data);

  return (
    <section className="w-full lg:px-10">
      <ToastContainer />
      <Post
        visible={visible}
        close={() => {
          SetVisible(!visible);
        }}
      />

      <div className="bg-white w-full px-2 rounded-lg">
        <div className="flex space-x-4 lg:px-10 py-2">
          <img
            src={session?.user?.image!}
            alt="image"
            className="size-10 rounded-full"
          />
          <button
            onClick={() => {
              SetVisible(!visible);
            }}
            className="flex-grow text-start rounded-full bg-gray-100 text-gray-600 px-10 text-lg hover:bg-gray-200"
          >
            What's on your mind
          </button>
        </div>

        <hr className="mt-3" />

        <div className="flex justify-between py-4">
          <button className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 rounded-md lg:flex-grow lg:justify-center">
            <RiVideoAddFill className="text-red-600" />
            <p className="font-medium text-gray-600">Live Video</p>
          </button>
          <button
            onClick={() => {
              SetVisible(!visible);
            }}
            className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 rounded-md lg:flex-grow lg:justify-center"
          >
            <PiImagesBold className="text-green-600" />
            <p className="font-medium text-gray-600">Photo/Video</p>
          </button>
          <button className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-2 rounded-md lg:flex-grow lg:justify-center">
            <BsEmojiLaughing className="text-yellow-500" />
            <p className="font-medium text-gray-600">Felling/Activity</p>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-5">
        {data.post.map((post: any) => (
          <PostCard
            authorId={post.authorId}
            content={post.content}
            updatedAt={post.updatedAt}
            media={post.media}
            postId={post.id}
            author={post.author}
          />
        ))}
      </div>
    </section>
  );
};

export default Page;
