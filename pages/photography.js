import React from "react";
import Header from "../components/Header";
import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";
import Image from "next/image";
import Footer from "../components/Footer";
import Head from "next/head";
const personal = ({ editorials }) => {
  return (
    <>
      <Head>
        <title>Dearbish: Photography</title>
      </Head>
      <div className="h-screen w-screen lg:flex lg:flex-row flex flex-col bg-black overflow-x-hidden">
        <header className="lg:hidden">
          <Header />
        </header>
        <div className="lg:w-3/4 overflow-y-scroll scrollbar-thin scrollbar-thumb-white scrollbar-track-black">
          <div className=" ">
            <div className="my-14 grid xl:grid-cols-3 lg:grid-cols-2 lg:gap-3 text-white font-['Poppins']  mx-5 gap-5 ">
              {editorials.map((editorial) => (
                <>
                  <Link
                    key={editorial.id}
                    href={`photography/${editorial.slug.current}`}
                  >
                    <h2 className="font-bold lg:text-lg text-md lg:mb-5 mb-2 lg:mt-2">
                      {editorial.title}
                    </h2>
                    <div className="flex flex-col lg:flex-row lg:w-3/4">
                      <img
                        className="lg:h-[500px] lg:object-cover"
                        src={urlFor(editorial.mainImage)}
                        layout="responsive"
                        loading="lazy"
                      />
                    </div>
                  </Link>
                </>
              ))}
            </div>
          </div>
          <Footer />
        </div>
        <aside className="lg:w-1/4 lg:h-screen sticky top-0 hidden lg:flex">
          <Header />
        </aside>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = `*[ _type == "editorial"] | order(order){
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
