"use client"
import React from 'react'
import { useRouter } from 'next/router';
function page(props) {
  const router = useRouter()
  const { keyword } = router.query;
  return (
    <div>welcome to project : { keyword.query }</div>
  )
}

export default page