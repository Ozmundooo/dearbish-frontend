import React from "react";
import Header from "../components/Header";
import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";
import Image from "next/image";
const personal = ({ cds }) => {
  return (
    <>
      <div className="h-screen w-screen lg:flex lg:flex-row flex flex-col bg-black overflow-x-hidden">
        <header className="lg:hidden">
          <Header />
        </header>
        <div className="lg:w-3/4 overflow-y-scroll scrollbar-thin scrollbar-thumb-white scrollbar-track-black">
          <div className=" ">
            <div className="my-14 grid lg:grid-cols-2 lg:gap-3 text-white font-['Poppins']  mx-5 gap-5 ">
              {cds.map((cd) => (
                <>
                  <Link key={cd.id} href={`cd/${cd.slug.current}`}>
                    <div className="flex flex-col lg:flex-row">
                      <img
                        className="lg:h-[300px] h-[305px]"
                        src={urlFor(cd.mainImage)}
                      />
                      <div className="w-full md:w-2/3 md:pl-4 h-auto flex flex-col flex-grow mt-1 md:mt-0">
                        <h2 className="font-bold text-2xl mt-auto">
                          {cd.title}
                        </h2>
                        <div
                          className=" lg:line-clamp-1 lg:w-64 line-clamp-1 "
                          dangerouslySetInnerHTML={{
                            __html: cd.description,
                          }}
                        ></div>
                      </div>
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
  const query = `*[ _type == "creativedirection"] | order(title){
        _id,
        title,
        description,
        mainImage,
        images,
        slug
    }`;
  const cds = await sanityClient.fetch(query);

  if (!cds.length) {
    return {
      props: {
        cds: [],
      },
    };
  } else
    return {
      props: {
        cds,
      },
    };
};

export default personal;
