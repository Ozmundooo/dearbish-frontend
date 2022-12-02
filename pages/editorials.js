import React from "react";
import Header from "../components/Header";
import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";
import Image from "next/image";
const personal = ({ editorials }) => {
  return (
    <>
      <div className="h-screen w-screen lg:flex lg:flex-row flex flex-col bg-black overflow-x-hidden">
        <header className="lg:hidden">
          <Header />
        </header>
        <div className="lg:w-3/4 ">
          <div className=" ">
            <div className="my-14 grid lg:grid-cols-3 lg:gap-3 text-white font-['Poppins']  mx-5 gap-5 ">
              {editorials.map((editorial) => (
                <>
                  <Link
                    key={editorial.id}
                    href={`editorial/${editorial.slug.current}`}
                  >
                    <div className="flex flex-col lg:flex-row lg:w-3/4">
                      <img className="" src={urlFor(editorial.mainImage)} />
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
  const query = `*[ _type == "editorial"] | order(title){
        _id,
        title,
        mainImage,
        images,
        slug
    }`;
  const editorials = await sanityClient.fetch(query);

  if (!editorials.length) {
    return {
      props: {
        editorials: [],
      },
    };
  } else
    return {
      props: {
        editorials,
      },
    };
};

export default personal;
