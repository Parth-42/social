"use client";

import React from "react";
import Image from "next/image";
import { BiUpvote, BiDownvote } from "react-icons/Bi";
import { FaRegComment } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

const Post: React.FC<{ inProfile?: boolean }> = ({ inProfile }) => {
  return (
    <div className="bg-white drop-shadow-md rounded-md px-6 py-4 min-h-10 min-w-[20rem] max-w-[40rem] md: w-full">
      {/* Poster Details */}
      {!inProfile && (
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
      )}

      {/* Caption */}
      <div className="my-2 text-sm flex justify-between">
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          veniam autem quae cum earum vero.
          {inProfile && (
            <div className="text-sm text-gray-400">13 July, 2023</div>
          )}
        </div>
      </div>

      {/* Media -> Image/Video */}
      <div className="min-h-[8rem] h-64 w-full relative">
        <Image
          className="rounded-md"
          src="/assets/images/random-post.jpg"
          alt="Picture of the author"
          objectFit="cover"
          fill
        />
      </div>

      {/* Actions -> Upvote/Downvote, Comment */}
      <div className="flex gap-2 mt-2 justify-between">
        <div className="flex gap-2">
          <div className="bg-gray-50 hover:bg-gray-100 flex gap-2 rounded-xl px-2 h-8">
            <div className="flex justify-center items-center cursor-pointer ">
              <BiUpvote />
            </div>
            <div className="flex justify-center items-center text-sm">524</div>
            <div className="flex justify-center items-center cursor-pointer">
              <BiDownvote />
            </div>
          </div>

          <div className="bg-gray-50 hover:bg-gray-100 flex gap-2 rounded-xl px-2 h-8 cursor-pointer">
            <div className="flex justify-center items-center  gap-2">
              <div className="flex justify-center items-center text-sm">
                314
              </div>
              <FaRegComment />
            </div>
          </div>
        </div>

        {inProfile && (
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex justify-center items-center bg-gray-50 hover:bg-gray-100 gap-2 rounded-full px-2 h-8 cursor-pointer">
                <SlOptions />
              </div>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col gap-2 max-w-fit max-h-fit">
              <div className="flex gap-2 hover:bg-gray-100 pl-2 py-1 w-24 rounded-md cursor-pointer">
                <div className="flex justify-center items-center">
                  <AiFillEdit className="text-orange-300" />
                </div>
                <div className="flex justify-center items-center text-sm ">
                  Edit
                </div>
              </div>

              <div className="flex gap-2 hover:bg-gray-100 pl-2 py-1 w-24 rounded-md cursor-pointer">
                <div className="flex justify-center items-center">
                  <RiDeleteBin6Line className="text-red-400" />
                </div>
                <div className="flex justify-center items-center text-sm ">
                  Delete
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
};

export default Post;
