"use client";

import React from "react";
import Image from "next/image";
import { BiUpvote, BiDownvote } from "react-icons/Bi";
import { FaRegComment } from "react-icons/fa";

import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

const Post = () => {
  return (
    <div className="bg-gray-100 rounded-md px-6 py-4 min-h-10 min-w-10 max-w-xl">
      {/* Poster Details */}
      <div className="flex gap-2">
        <div className="flex justify-center items-center">
          <Avatar>
            <AvatarImage
              className="rounded-full h-10 w-10"
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-base">parthpuri</div>
          <div className="text-sm text-gray-400">13 July, 2023</div>
        </div>
      </div>

      {/* Caption */}
      <div className="my-2 text-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet veniam
        autem quae cum earum vero.
      </div>

      {/* Media -> Image/Video */}
      <div className="h-72 w-full relative">
        <Image
          className="rounded-md object-cover"
          src="/assets/images/random-post.jpg"
          alt="Picture of the author"
          fill
        />
      </div>

      {/* Actions -> Upvote/Downvote, Comment */}
      <div className="flex gap-2 mt-2">
        <div className="bg-gray-200 flex gap-2 rounded-xl px-2 h-8">
          <div className="flex justify-center items-center cursor-pointer ">
            <BiUpvote />
          </div>
          <div className="flex justify-center items-center text-sm">524</div>
          <div className="flex justify-center items-center cursor-pointer">
            <BiDownvote />
          </div>
        </div>

        <div className="bg-gray-200 flex gap-2 rounded-xl px-2 h-8 cursor-pointer">
          <div className="flex justify-center items-center  gap-2">
            <div className="flex justify-center items-center text-sm">314</div>
            <FaRegComment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
