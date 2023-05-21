"use client"
import Navbar from '@/components/Navbar'
import NavbarProject from '@/components/NavbarProjects'
import SectionsBar from '../components/SectionsBar'
import ProjectCard from '@/components/ProjectCard'
import DocumentCart from '@/app/project/components/DocumentCard'

function page({params}) {
  return (
    <div className='flex flex-col min-h-[calc(100vh-60px)]'>
    <NavbarProject></NavbarProject>
    <div className='container flex-1 mx-auto px-20 flex '>
      <SectionsBar/>
      <div className='flex-1'>
        <div className='grid grid-cols-4 gap-4'>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
          <DocumentCart/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page