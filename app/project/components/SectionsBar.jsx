"use client"
import React, { useState } from 'react'

const styleSectionActive = 'text-left duration-150 border-l-4 cursor-pointer border-l-[var(--primer)] pl-2 font-semibold text-[var(--primer)] '
const styleSectionNotActive = "text-left duration-150 cursor-pointer font-semibold text-[var(--primer2)]" 
const sections = [{name:"DB structure"},{name:"Dashboard"},{name:"settings"}]

function SectionsBar() {
  const [section,setSection]=useState(0)
  return (
    <div className=' sticky top-28 h-[70vh] max-h-[800px] min-w-[200px] flex flex-col justify-between pb-6'>
      <div className='flex flex-col gap-6'>
        {
          sections.map((sec,key)=>{
            return(
              <button onClick={()=>setSection(key)} className={key==section?styleSectionActive:styleSectionNotActive}>{sec.name}</button>
            )
          })
        }
      </div>
        <button className='text-left duration-150 cursor-pointer font-semibold text-[var(--primer)]' >logout</button>
    </div>
  )
}

export default SectionsBar