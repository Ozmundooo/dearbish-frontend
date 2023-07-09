import Header from "../../components/Header";
import { sanityClient, urlFor } from "../../sanity";
import { useState, useEffect } from "react";
import Image from "next/image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Footer from "../../components/Footer";
import Head from "next/head";
export default function Editorial({ title, images }) {
  const arrImages = [];
  for (var i = 0; i < images.length; i++) {
    arrImages.push(urlFor(images[i]));
  }

  const [isOpen, setIsOpen] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [key, setKey] = useState(false);
  useEffect(() => {
    setTimeout(() => setKey(key + 1));
  }, [isOpen]);
  function imageSelect(index) {
    console.log(arrImages[index]);
    setPhotoIndex(index);
    setIsOpen(1);
  }
  return (
    <>
      <Head>
        <title>Dearbish: {title}</title>
      </Head>
      <div className="h-screen w-screen lg:flex lg:flex-row flex flex-col bg-black overflow-x-hidden">
        <header className="lg:hidden">
          <Header />
        </header>
        <div className="lg:w-3/4  overflow-y-scroll scrollbar-thin scrollbar-thumb-white scrollbar-track-black">
          <section className="my-10 flex flex-col gap-8 text-white font-['Poppins'] ">
            <div>
              <div className="flex flex-col ml-10 ">
                <h2 className="font-bold lg:text-2xl text-lg lg:mb-5 mb-2">
                  {title}
                </h2>
              </div>
            </div>
          </section>

          <div className="mx-10 flex flex-col gap-8 xl:hidden">
            {arrImages.map((image, i) => (
              <div key={i}>
                <img src={image}></img>
              </div>
            ))}
          </div>
          <div className="xl:flex xl:justify-center xl:mx-auto hidden">
            <div className="grid grid-cols-2 gap-8 ">
              {arrImages.map((image, i) => (
                <>
                  <div className="h-[400px] w-[600px] m-1 ">
                    <img
                      className="h-[400px] mx-auto cursor"
                      src={image}
                      onClick={() => imageSelect(i)}
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
          <Footer />
        </div>
        {isOpen && (
          <Lightbox
            key={key}
            mainSrc={urlFor(images[photoIndex])}
            onCloseRequest={() => setIsOpen(0)}
          />
        )}
        <aside className="lg:w-1/4 lg:h-screen sticky top-0 hidden lg:flex">
          <Header />
        </aside>
      </div>
    </>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[ _type == "editorial" && slug.current == $pageSlug][0]{
    title,
        mainImage,
        images,
        mainImage,
      }`;

  const editorial = await sanityClient.fetch(query, { pageSlug });

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
        images: editorial.images,
      },
    };
  }
};
