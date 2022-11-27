import Header from "../components/Header";
import { sanityClient, urlFor } from "../sanity";
import { useState } from "react";

export const PersonalProjects = ({ personals }) => {
  return (
    <>
      <div className="h-screen w-screen lg:flex lg:flex-row flex flex-col bg-black overflow-x-hidden">
        <header className="lg:hidden">
          <Header />
        </header>
        <div className="lg:w-3/4 overflow-y-scroll snap snap-y snap-mandatory">
          {personals.map((personal, index) => (
            <section
              key={personal.id}
              id={personal.slug.current}
              className="my-10 flex flex-col gap-8 text-white font-['Poppins'] overflow-x-hidden snap-center "
            >
              <div className="flex flex-col h-screen justify-center ml-10 ">
                <h2 className="font-bold lg:text-2xl text-lg lg:mb-5 mb-2">
                  {personal.title}
                </h2>
                <div className="flex lg:gap-12 md:gap-10 gap-6 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-black scroll-my-8 snap snap-mandatory snap-x">
                  {personal.images.map((image, index) => (
                    <img
                      className="lg:h-[400px] snap-center"
                      src={urlFor(image)}
                      key={index}
                    />
                  ))}
                </div>
                <p className="font-light lg:my-4 mt-3">{personal.subtext}</p>
                <div className="flex flex-col justify-evenly">
                  <h2 className="lg:text-xl my-1 lg:mr-4 mr-2">
                    {personal.description}
                  </h2>
                  {personals.length - 1 !== index ? (
                    <div className=" grid place-items-center animate-pulse lg:mt-10 mt-5">
                      <p>Scroll for more ↓</p>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </section>
          ))}
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
