import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'
import React from 'react'

function Home() {
  return (
    <div>
        <Navbar/>
        <div className='container mx-auto px-20'>
            <h1 className='text-3xl  text-gray-600 font-semibold'>Projects</h1>
            <div className='grid grid-cols-4 mt-8 gap-4'>
                <ProjectCard/>
            </div>
        </div>
    </div>
  )
}

export default Home