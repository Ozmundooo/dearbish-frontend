import React from "react";
import Logo from "../assets/LogoDB.png";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar/Sidebar";
export default function Header() {
  /*
  TODO:
  - Make pages
  - Link pages
  - Make Header responsive
  */
  return (
    <>
      <div className="lg:hidden">
        <Sidebar />
      </div>

      <div className="lg:px-32 lg:py-12 p-4 py-6 lg:flex-col lg:flex bg-black text-white lg:border-l-4 lg:h-screen font-['Poppins'] lg:sticky lg:right-0">
        <Image className="lg:ml-12 lg:my-8 w-[150px] lg:w-full" src={Logo} />

        <div className="lg:flex lg:flex-col text-xl gap-6 font-semibold text-right lg:my-10 hidden">
          <Link href="/personal">
            <h2>Personal</h2>
          </Link>
          <h2>Editorials</h2>
          <h2>Videos</h2>
          <h2>Creative Direction</h2>
          <h2>CV</h2>
          <h2>About</h2>
          <h2>Contact</h2>
        </div>
      </div>
    </>
  );
}
