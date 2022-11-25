import Header from "../components/Header";
import { sanityClient, urlFor } from "../sanity";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useState } from "react";

export const PersonalProjects = ({ personals }) => {
  return (
    <>
      <div className="h-screen w-screen flex bg-black overflow-x-hidden">
        <div className="w-3/4">
          {personals.map((personal) => (
            <section
              id={personal.slug.current}
              className="my-10 flex flex-col gap-8 text-white font-['Poppins'] overflow-x-hidden "
            >
              {personals.map((personal) => (
                <>5
                  <div className="flex flex-col h-screen justify-center ml-10 ">
                    <h2 className="font-bold text-2xl">{personal.title}</h2>
                    <div className="flex gap-12 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-black scroll-my-8 ">
                      {personal.images.map((image) => (
                        <img className="h-[400px]" src={urlFor(image)} />
                      ))}
                    </div>
                    <p className="font-light my-4">{personal.subtext}</p>
                    <h2 className="text-2xl my-2">{personal.description}</h2>
                  </div>
                </>
              ))}
            </section>
          ))}
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
        description,
        subtext,
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

export default PersonalProjects;
