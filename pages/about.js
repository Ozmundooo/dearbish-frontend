import React from "react";
import Header from "../components/Header";
import Bish from "../assets/bish.jpg";
import Image from "next/image";
import Footer from "../components/Footer";
const about = ({}) => {
  return (
    <>
      <div className="h-screen w-screen lg:flex lg:flex-row flex flex-col bg-black overflow-x-hidden overflow-y-scroll">
        <header className="lg:hidden">
          <Header />
        </header>
        <div className="lg:w-3/4 flex flex-col justify-center text-white font-['Poppins'] place-items-center">
          <div className="flex flex-col place-items-center">
            <Image
              className="lg:w-[475px] lg:h-[475px] w-[300px] h-[300px] my-5"
              src={Bish}
            />

            <div className="flex flex-col justify-evenly place-items-center">
              <h2 className="lg:text-xl my-1 lg:w-[475px] mx-6">
                {`Bish Uprety is a creative director and photographer based in Toronto. Being an immigrant and having a different perspective on the everyday, he has cultivated his own sense of style through his art. Bish has always had a keen sense for authenticity and makes his subjects feel comfortable enough to be themselves in front of the camera. Bish has also delved into deeper and more introspective topics through his personal work. He’s not afraid to share his emotions to the world.`}
              </h2>
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

export default about;
