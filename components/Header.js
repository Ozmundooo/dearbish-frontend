import React from 'react'
import Logo from '../assets/LogoDB.png'
import Image from 'next/image'
export default function Header() {
  /*
  TODO:
  - Make pages
  - Link pages
  - Make Header responsive
  */
  return (
    <div className='px-24 py-12 flex justify-between bg-black text-white'>
        <Image src={Logo}/>
        <div className='flex flex-row gap-14 text-xl'>
          
            <h3>About</h3>
            <h3>Contact</h3>
            <h3>CV</h3>
        </div>
    </div>
  )
}
