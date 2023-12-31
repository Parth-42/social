"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import React from "react";

const Profile = () => {
  return (
    <div className="px-10 flex justify-center items-center w-3/4 m-auto my-6">
      <div className="flex flex-col gap-2 justify-center">
        <div className="m-2 flex justify-center">
          <Avatar>
            <AvatarImage
              className="rounded-sm h-32 w-32 outline outline-2 outline-offset-2 outline-gray-300"
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="text-lg flex flex-col items-center">Parth Puri</div>
          <div className="flex gap-4">
            <div className="text-sm">Following: 34</div>
            <div className="text-sm">Followers: 30</div>
          </div>
          <div className="text-base text-gray-600 pt-4 w-2/3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            blanditiis laborum deserunt error perferendis culpa nulla aspernatur
            nesciunt, repellendus eligendi?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
