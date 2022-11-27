import React from "react";
import Header from "../components/Header";
import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";
import Image from "next/image";
const personal = ({ personals }) => {
  return (
    <>
      <div className="h-screen w-screen lg:flex lg:flex-row flex flex-col bg-black overflow-x-hidden">
        <header className="lg:hidden">
          <Header />
        </header>
        <div className="lg:w-3/4 ">
          <div className=" w-screen bg-black lg:px-24 md:px-10 px-6 h-full">
            <div className="my-10 flex flex-col gap-8 text-white font-['Poppins'] lg:overflow-x-hidden ">
              {personals.map((personal) => (
                <>
                  <Link
                    key={personal.id}
                    className="font-bold text-2xl"
                    href={`personalprojects#${personal.slug.current}`}
                  >
                    {personal.title}

                    <div className="flex lg:gap-12 md:gap-8 gap-6  overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-black scroll-my-8">
                      {personal.images.map((image, index) => (
                        <img
                          key={index}
                          className="w-[170px] lg:w-[400px]"
                          src={urlFor(image)}
                        />
                      ))}
                    </div>
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div>
        <aside className="lg:w-1/4 lg:h-screen sticky top-0 hidden lg:flex">
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
