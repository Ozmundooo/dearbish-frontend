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
          <div className=" ">
            <div className="my-14 grid lg:grid-cols-1 lg:gap-3 text-white font-['Poppins']  mx-5 gap-5 ">
              {personals.map((personal) => (
                <>
                  <div className="flex flex-col lg:flex-row mt-8">
                    <iframe
                      width="540"
                      height="0300"
                      src="https://www.youtube.com/embed/V_v2NveDgFw"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>

                    <div className="w-full md:w-2/3 md:pl-4 flex flex-col flex-grow  md:mt-0">
                      <h2 className="font-bold text-2xl mt-auto">
                        {personal.title}
                      </h2>
                      <div>{personal.description}</div>
                    </div>
                  </div>
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
        description,
        mainImage,
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
