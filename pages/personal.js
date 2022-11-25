import React from "react";
import Header from "../components/Header";
import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";
import Image from "next/image";
const personal = ({ personals }) => {
  return (
    <>
      <div className="h-screen w-screen flex bg-black overflow-x-hidden">
        <div className="w-3/4">
          <div className=" w-screen bg-black px-24 h-full">
            <div className="my-10 flex flex-col gap-8 text-white font-['Poppins'] overflow-x-hidden ">
              {personals.map((personal) => (
                <>
                  <Link
                    className="font-bold text-2xl"
                    href={`personalprojects#project-2`}
                  >
                    {personal.title}
                  </Link>
                  <div className="flex gap-12 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-black scroll-my-8">
                    {personal.images.map((image) => (
                      <img src={urlFor(image)} />
                    ))}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <aside className="w-1/4 h-screen sticky top-0">
          <Header />
        </aside>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = `*[ _type == "personal"] | order(title){
        _id,
        title,
        images,
        slug
    }`;
  const personals = await sanityClient.fetch(query);

  if (!personals.length) {
    return {
      props: {
        personals: [],
      },
    };
  } else
    return {
      props: {
        personals,
      },
    };
};

export default personal;
