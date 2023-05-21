"use client"
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import Link from 'next/link';



function EntryUi(){
    return(
        <div onClick={()=>{}} className='p-1 pl-3 bg-[var(--primer-shadow2)] rounded-md flex justify-between items-center'>
            <input defaultValue={"user-id"} className="text-gray-700 w-2 outline-none bg-transparent flex-1"></input>
            <select className='p-1 bg-[var(--white)] outline-none rounded-md px-2'>
                <option className='p-2 rounded-xl'>String</option>
                <option>Number</option>
                <option>Boolean</option>
                <option>Date</option>
            </select>
        </div>
    )
}


function DocumentCart() {
  return (
    <div className='rounded-md overflow-hidden p-2'>
                <div className='p-3 cursor-pointer h-fit hover:-translate-y-1  duration-150 ease-in-out rounded-xl flex flex-col gap-2 border-2 border-white bg-[var(--white)] shadow-md '>
                    <div className='flex gap-4'>
                        <Avatar className='bg-[#4F46E5]'>Pn</Avatar>
                        <div className='flex-1'>
                            <h4 className='text-gray-600'>Users</h4>
                            <h4 className='text-gray-600 text-xs'>project info here</h4>
                        </div>
                        <IconButton>
                            <MoreVertRoundedIcon/>
                        </IconButton>
                    </div>
                        <div className='p-1 flex justify-between'>
                        <button className='text-[var(--primer)] rounded-lg font-semibold'>new</button>
                        <button className='text-red-400 rounded-lg font-semibold'>delete</button>
                        </div>
                    <div className='flex flex-col gap-2 '>
                        {
                            new Array(Math.ceil(Math.random()*20)).fill("a").map(m=>{
                                return <EntryUi/>
                            })
                        }
                    </div>
                </div>
    </div>
  )
}




export default DocumentCart