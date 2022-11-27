import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Link from "next/link";

export default function home() {
  return (
    <>
      <div className="h-screen w-screen lg:flex lg:flex-row flex flex-col bg-black overflow-x-hidden">
        <header className="lg:hidden sticky">
          <Header />
        </header>
        <div className="lg:w-3/4 grid gap-8 my-2 justify-center align-middle lg:grid-cols-2 lg:place-content-center lg:place-items-center lg:gap-16">
          <Link href="/personal">
            <div className="bg-white grid place-items-center w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] text-center">
              <h2 className="text-xl font-semibold  font-['Poppins']">
                Personal
              </h2>
            </div>
          </Link>
          <Link href="/personal">
            <div className="bg-white grid place-items-center w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] text-center">
              <h2 className="text-xl font-semibold font-['Poppins']">
                Editorials
              </h2>
            </div>
          </Link>
          <Link href="/personal">
            <div className="bg-white grid place-items-center w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] text-center">
              <h2 className="text-xl font-semibold  font-['Poppins']">
                Videos
              </h2>
            </div>
          </Link>
          <Link href="/personal">
            <div className="bg-white grid place-items-center w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] text-center">
              <h2 className="text-xl font-semibold font-['Poppins']">
                Creative Direction
              </h2>
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
