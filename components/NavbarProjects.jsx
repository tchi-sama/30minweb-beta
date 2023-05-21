import { Avatar, IconButton } from "@mui/material";
import Image from "next/image";
import React from "react";
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import Link from "next/link";
function NavbarProject() {
  return (
    <div className="mb-20 py-2 backdrop-blur-sm z-50 ">
      <div className="container items-center mx-auto px-20 flex justify-between">
        <div className="flex-1">
          <Link href="/">
            <Image
              src="/../public/images/30mw.png"
              width={70}
              height={70}
              alt="Picture of the author"
              className=" drop-shadow-lg object-contain"
            ></Image>
          </Link>
        </div>
        <div className="w-[200px]  flex  rounded-xl bg-[var(--white)] overflow-hidden px-3 text-gray-400 gap-2 items-center border-white border-2 shadow-md ">
            <input type="text" placeholder="project name" className="flex-1 text-center py-2 h-full w-[140px] bg-[var(--white)] outline-none text-gray-700 " />
            <BorderColorRoundedIcon className="text-sm"/>
        </div>
        <div className="flex gap-4 flex-1 justify-end items-center">
          <IconButton>
            <Avatar></Avatar>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default NavbarProject;
