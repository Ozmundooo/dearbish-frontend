import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
export default function home() {
  return (
    <>
      <div className="h-screen w-screen lg:flex lg:flex-row flex flex-col bg-black overflow-x-hidden">
        <header className="lg:hidden sticky">
          <Header />
        </header>
        <div className="lg:w-3/4 grid gap-8 my-2 justify-center align-middle lg:grid-cols-2 lg:place-content-center lg:place-items-center lg:gap-16 animate-in fade-in delay-10000">
          <Link href="/personal">
            <div class="relative w-[150px] h-[150px] lg:w-[300px] lg:h-[300px]  group hover:scale-110 transition ease-in-out  ">
              <img
                src="./persThumb.jpg"
                className="h-full opacity-70 group-hover:opacity-100"
              />
              <h1 class="absolute text-xl font-semibold  font-['Poppins'] text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 group-hover:scale-150 transition ease-in-out">
                Personal
              </h1>
            </div>
          </Link>
          <Link href="/editorials">
            <div class="relative w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] group hover:scale-110 transition ease-in-out ">
              <img
                src="./editThumb.jpg"
                className="h-full opacity-70 group-hover:opacity-100"
              />
              <h1 class="absolute text-xl font-semibold  font-['Poppins'] text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 group-hover:scale-150 transition ease-in-out">
                Editorials
              </h1>
            </div>
          </Link>
          <Link href="/videos">
            <div class="relative w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] group hover:scale-110 transition ease-in-out ">
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
            <div class="relative w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] group hover:scale-110 transition ease-in-out ">
              <img
                src="./cdThumb.jpg"
                className="h-full opacity-70 group-hover:opacity-100"
              />
              <h1 class="absolute text-xl font-semibold  font-['Poppins'] text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 group-hover:scale-150 transition ease-in-out text-center w-full">
                Creative Direction
              </h1>
            </div>
          </Link>
        </div>
        <aside className="lg:w-1/4 lg:h-screen sticky top-0 hidden lg:flex">
          <Header />
        </aside>
      </div>
    </>
  );
}
// <Link href="/personal">
//   <div className="bg-[url('../assets/persThumb.jpg')] bg-contain bg-opacity-40 grid place-items-center w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] text-center">
//     <h2 className="text-xl font-semibold  font-['Poppins'] text-white">
//       Personal
//     </h2>
//   </div>
// </Link>
