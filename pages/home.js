import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Link from 'next/link'

export default function home() {
  return (
    <>
    <Header/>
    <div className='h-screen w-screen bg-black px-24'>
      <div className='mx-auto pt-10 w-[800px] h-[800px] grid grid-cols-2 gap-24 '>
        <Link className='bg-[#D9D9D9] p-20 text-black text-5xl flex justify-center place-items-center text-center ' href='/personal'>
          Personal
        </Link>
        <Link className='bg-[#D9D9D9] p-20 text-black text-5xl flex justify-center place-items-center text-center ' href='/personal'>
          Videos
        </Link>
        <Link className='bg-[#D9D9D9] p-20 text-black text-5xl flex justify-center place-items-center text-center ' href='/personal'>
          Editorials
        </Link>
        <Link className='bg-[#D9D9D9] p-20 text-black text-5xl flex justify-center place-items-center text-center ' href='/personal'>
          Creative Directions
        </Link>
      </div>
    </div>
    </>

  )
}
