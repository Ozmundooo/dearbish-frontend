import React from 'react'
import Header from '../components/Header'
import Link from 'next/link'
import { sanityClient } from "../sanity"
const personal = ({ personals }) => {
    console.log(personals[0].slug)
  return (
    <>
    <Header/>
    <div className='h-screen w-screen bg-black px-24'>
        <div className='mx-auto pt-10 w-[1000px] h-[450px] grid grid-cols-5 '>
            {personals.map((personal) =>(
                <>
                    <Link className='bg-[#D9D9D9] p-20 text-black text-2xl flex justify-center place-items-center text-center ' href={`personal/${personal.slug.current}`}>
                        {personal.title}
                    </Link>
                    <div className='bg-black p-20 text-black text-5xl flex justify-center place-items-center text-center '>
                        
                    </div>
                </>
            ))}
        </div>
    </div>
    </>
  )
}

export const getServerSideProps = async () => {
    const query = `*[ _type == "personal"] | order(title){
        _id,
        title,
        slug
    }`;
    const personals = await sanityClient.fetch(query)
  
    if(!personals.length){
      return {
        props:{
          personals : []
        }
      }
    }else
      return {
        props:{
          personals
        }
      }
    }

export default personal