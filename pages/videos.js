import React from "react";
import Header from "../components/Header";
import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";
import Image from "next/image";
import Footer from "../components/Footer";
const video = ({ videos }) => {
  return (
    <>
      <div className="h-screen w-screen lg:flex lg:flex-row flex flex-col bg-black overflow-x-hidden">
        <header className="lg:hidden">
          <Header />
        </header>
        <div className="lg:w-3/4 overflow-y-scroll scrollbar-thin scrollbar-thumb-white scrollbar-track-black">
          <div className=" ">
            <div className="lg:my-14 md:my-7 grid lg:grid-cols-1 lg:gap-3 text-white font-['Poppins']  mx-5 gap-5 ">
              {videos.map((video) => (
                <>
                  <div className="flex flex-col lg:flex-row lg:mt-8">
                    <iframe
                      src={video.video}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      className="h-[220px] w-[345px] lg:w-[540px] lg:h-[300px]"
                    ></iframe>

                    <div className="w-full md:w-2/3 md:pl-4 flex flex-col flex-grow  md:mt-0">
                      <h2 className="font-bold text-2xl mt-auto">
                        {video.title}
                      </h2>
                      <div>{video.description}</div>
                    </div>
                  </div>
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
  const query = `*[ _type == "video"] | order(order){
        _id,
        title,
        description,
        video,
        slug
    }`;
  const videos = await sanityClient.fetch(query);

  if (!videos.length) {
    return {
      props: {
        videos: [],
      },
    };
  } else
    return {
      props: {
        videos,
      },
    };
};

export default video;
