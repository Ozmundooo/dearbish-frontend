import Header from "../../components/Header";
import { sanityClient, urlFor } from "../../sanity";
import { useState } from "react";

export default function cd({ title, mainImage, images, description }) {
  return (
    <>
      <div className="h-screen w-screen lg:flex lg:flex-row flex flex-col bg-black overflow-x-hidden">
        <header className="lg:hidden">
          <Header />
        </header>
        <div className="lg:w-3/4 overflow-y-scroll scrollbar-thin scrollbar-thumb-white scrollbar-track-black">
          <section className="my-10 flex flex-col gap-8 text-white font-['Poppins'] ">
            <div>
              <div className="flex flex-col ml-10 ">
                <h2 className="font-bold lg:text-2xl text-lg lg:mb-5 mb-2">
                  {title}
                </h2>

                <div className="flex flex-col justify-evenly">
                  <h2 className="lg:text-xl my-1 lg:mr-4 mr-2">
                    {description}
                  </h2>
                </div>
              </div>
            </div>
          </section>

          <div className="mx-10 flex flex-col gap-8">
            {images.map((image, i) => (
              <div key={i}>
                <img src={urlFor(image)}></img>
              </div>
            ))}
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

  const query = `*[ _type == "creativedirection" && slug.current == $pageSlug][0]{
    title,
        mainImage,
        images,
        mainImage,
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
        mainImage: personal.mainImage,
        images: personal.images,
        description: personal.description,
      },
    };
  }
};
