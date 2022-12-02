import React from "react";
import Header from "../components/Header";
import Bish from "../assets/bish.jpg";
import Image from "next/image";
const about = ({}) => {
  return (
    <>
      <div className="h-screen w-screen lg:flex lg:flex-row flex flex-col bg-black overflow-x-hidden">
        <header className="lg:hidden">
          <Header />
        </header>
        <div className="lg:w-3/4 flex flex-col justify-center text-white font-['Poppins'] text-center place-items-center">
          <Image
            className="lg:w-[400px] lg:h-[400px] w-[200px] h-[200px] my-5"
            src={Bish}
          />
          <h2 className="font-bold lg:text-2xl text-lg lg:mb-5 mb-2">
            About Bish
          </h2>
          <div className="flex flex-col justify-evenly">
            <h2 className="lg:text-xl my-1 lg:mx-44">
              {`It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like)`}
            </h2>
          </div>
        </div>
        <aside className="lg:w-1/4 lg:h-screen sticky top-0 hidden lg:flex">
          <Header />
        </aside>
      </div>
    </>
  );
};

export default about;
