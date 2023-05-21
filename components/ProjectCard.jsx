import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import Link from 'next/link';

function ProjectCard() {
  return (
                <div className='p-3 cursor-pointer hover:scale-[1.01] duration-150 ease-in-out rounded-xl flex flex-col gap-2 border-2 border-white bg-[var(--white)] shadow-md '>
                    <div className='flex gap-4'>
                        <Avatar>Pn</Avatar>
                        <div className='flex-1'>
                            <h4 className='text-gray-600'>Project name</h4>
                            <h4 className='text-gray-600 text-xs'>project info here</h4>
                        </div>
                        <IconButton>
                            <MoreVertRoundedIcon/>
                        </IconButton>
                    </div>
                    <div className='flex justify-end'>
                        <Link href="/project/randomid">
                        <button className='px-4 py-2 hover:bg-[var(--primer)] hover:text-white duration-300 bg-[var(--primer-shadow2)] text-[var(--primer)]  rounded-lg'>open</button>
                        </Link>
                    </div>
                </div>
  )
}

export default ProjectCard