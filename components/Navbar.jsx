import { Avatar } from "@mui/material";
import Image from "next/image";
import React from "react";
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function Navbar() {
  return (
    <div className="py-20 pt-20">
      <div className="container mx-auto px-20 flex justify-between">
        <div className="flex-1">
        <Image
          src="/../public/images/30mw.png"
          width={70}
          height={70}
          alt="Picture of the author"
          className=" drop-shadow-lg object-contain"
        ></Image>
        </div>
        <div className="w-[300px] flex  rounded-xl bg-[var(--white)] overflow-hidden px-3 text-gray-400 gap-2 items-center border-white border-2 shadow-md ">
            <input type="text" placeholder="search.." className="flex-1 h-full bg-[var(--white)] outline-none text-gray-700 " />
            <SearchRoundedIcon/>
        </div>
        <div className="flex gap-4 flex-1 justify-end">
          <button className="px-4 py-2 text-sm bg-[var(--primer)] shadow-lg shadow-[var(--primer-shadow)] rounded-xl text-white font-semibold">New Project <AutoAwesomeRoundedIcon/></button>
          <Avatar></Avatar>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
