import Header from "../../components/Header";
import { sanityClient, urlFor } from "../../sanity";
import { useState } from "react";

export default function personal({
  title,
  mainImage,
  subtext,
  images,
  description,
}) {
  return (
    <>
      <div className="h-screen w-screen lg:flex lg:flex-row flex flex-col bg-black overflow-x-hidden">
        <header className="lg:hidden">
          <Header />
        </header>
        <div className="lg:w-3/4 overflow-y-scroll">
          <section className="my-10 flex flex-col gap-8 text-white font-['Poppins'] ">
            <div>
              <div className="flex flex-col ml-10 ">
                <h2 className="font-bold lg:text-2xl text-lg lg:mb-5 mb-2">
                  {title}
                </h2>
                <div className="flex lg:gap-12 md:gap-10 gap-6 ">
                  <img
                    className="lg:h-[400px] h-[300px] w-full md:w-auto"
                    src={urlFor(mainImage)}
                  />
                </div>
                <p className="font-light lg:my-4 mt-3">{subtext}</p>
                <div className="flex flex-col justify-evenly">
                  <h2 className="lg:text-xl my-1 lg:mr-4 mr-2">
                    {description}
                  </h2>
                </div>
              </div>
            </div>
          </section>

          <div className="mx-10 lg:hidden">
            {images.map((image) => (
              <div>
                <img src={urlFor(image)}></img>
              </div>
            ))}
          </div>
          <div className="flex justify-center mx-auto">
            <div className="grid grid-cols-5 w-[900px]">
              {images.map((image) => (
                <>
                  <img
                    className="h-[220px] w-[220px]"
                    src={urlFor(image)}
                  ></img>

                  <div className="h-[220px] w-[220px] bg-black"></div>
                </>
              ))}{" "}
            </div>
          </div>
        </div>

        <aside className="lg:w-1/4 lg:h-screen sticky top-0 hidden lg:flex">
          <Header />
        </aside>
      </div>
    </>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[ _type == "personal" && slug.current == $pageSlug][0]{
    title,
        mainImage,
        images,
        mainImage,
        subtext,
        description,
      }`;

  const personal = await sanityClient.fetch(query, { pageSlug });

  if (!personal) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        title: personal.title,
        subtext: personal.subtext,
        mainImage: personal.mainImage,
        images: personal.images,
        description: personal.description,
      },
    };
  }
};
