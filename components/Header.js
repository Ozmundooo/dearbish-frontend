import React from 'react'
import Logo from '../assets/LogoDB.png'
import Image from 'next/image'
export default function Header() {
  return (
    <div className='px-24 py-12 flex justify-between bg-black text-white'>
        <Image src={Logo}/>
        <div className='flex flex-row gap-14 text-xl'>
            <h3>Link 1</h3>
            <h3>Link 2</h3>
            <h3>Link 3</h3>
        </div>
    </div>
  )
}
