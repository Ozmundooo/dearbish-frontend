import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import { sanityClient, urlFor } from "../sanity";
export default function home({ title, mainImage, slug }) {
  /* Problme with vercel  - Aug 20 */
  return (
    <>
      <Head>
        <title>Dearbish</title>
      </Head>
      <div className="h-screen w-screen lg:flex lg:flex-row flex flex-col bg-black overflow-x-hidden">
        <header className="lg:hidden ">
          <Header />
        </header>

        <section className="lg:w-3/4 flex  ">
          <div className="flex m-auto justify-center items-center">
            <div className="mx-4">
              <Link href={`photography/${slug.current}`}>
                <img
                  alt={title}
                  className="h-[75vh] lg:h-[85vh] object-cover m-auto "
                  src={urlFor(mainImage)}
                ></img>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
        <aside className="lg:w-1/4 lg:h-screen sticky top-0 hidden lg:flex">
          <Header />
        </aside>
      </div>
    </>
  );
}

{
  /* <div className="lg:w-[950px] grid gap-4 my-2 justify-center align-middle lg:grid-cols-2 lg:place-content-center lg:place-items-center lg:gap-14 animate-in slide-in-from-top delay-10000 z">
            <Link href="/personal">
              <div class="relative w-[300px] h-[300px] xl:w-[400px] xl:h-[400px]  group hover:scale-110 transition ease-in-out mr-0 ">
                <img
                  src="./persThumb.jpg"
                  className="h-full opacity-70 group-hover:opacity-100"
                />
                <h1 class="absolute text-xl font-semibold text-center  font-['Poppins'] text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 group-hover:scale-150 transition ease-in-out">
                  Personal Works
                </h1>
              </div>
            </Link>
            <Link href="/photography">
              <div class="relative w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] group hover:scale-110 transition ease-in-out ml-0">
                <img
                  src="./editThumb.jpg"
                  className="h-full opacity-70 group-hover:opacity-100"
                />
                <h1 class="absolute text-xl font-semibold  font-['Poppins'] text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 group-hover:scale-150 transition ease-in-out">
                  Photography
                </h1>
              </div>
            </Link>
            <Link href="/videos">
              <div class="relative w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] group hover:scale-110 transition ease-in-out ">
                <img
                  src="./vidThumb.jpg"
                  className="h-full opacity-70 group-hover:opacity-100"
                />
                <h1 class="absolute text-xl font-semibold  font-['Poppins'] text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 group-hover:scale-150 transition ease-in-out">
                  Videos
                </h1>
              </div>
            </Link>
            <Link href="/cd">
              <div class="relative w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] group hover:scale-110 transition ease-in-out ">
                <img
                  src="./cdThumb.jpg"
                  className="h-full opacity-70 group-hover:opacity-100"
                />
                <h1 class="absolute text-xl font-semibold  font-['Poppins'] text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 group-hover:scale-150 transition ease-in-out text-center w-full">
                  Creative Direction
                </h1>
              </div>
            </Link>
          </div> */
}
export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[ _type == "editorial" && order == 1][0]{
        title,
        mainImage,
        slug
      }`;

  const editorial = await sanityClient.fetch(query);

  if (!editorial) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        title: editorial.title,
        mainImage: editorial.mainImage,
        slug: editorial.slug,
      },
    };
  }
};
