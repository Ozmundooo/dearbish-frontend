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
        <div className="lg:w-3/4 overflow-y-scroll scrollbar-thin scrollbar-thumb-white scrollbar-track-black">
          <div className=" ">
            <div className="my-14 grid lg:grid-cols-1 lg:gap-8 text-white font-['Poppins']  mx-5 gap-5 ">
              {personals.map((personal) => (
                <>
                  <Link
                    key={personal.id}
                    href={`personal/${personal.slug.current}`}
                  >
                    <div className="flex flex-col lg:flex-row">
                      <img
                        className="lg:h-[405px]"
                        src={urlFor(personal.mainImage)}
                      />
                      <div className="w-full md:w-2/3 md:pl-4 h-auto flex flex-col flex-grow mt-1 md:mt-0">
                        <h2 className="font-bold text-2xl mt-auto">
                          {personal.title}
                        </h2>
                        <div
                          className=" lg:line-clamp-1 lg:w-64 line-clamp-1 "
                          dangerouslySetInnerHTML={{
                            __html: personal.description,
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
  const query = `*[ _type == "personal"] | order(order){
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
