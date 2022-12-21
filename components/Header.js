import React from "react";
import Logo from "../assets/LogoDB.png";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
import IG from "../assets/ig.png";
import Email from "../assets/email.png";

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

      <div className="lg:px-32 lg:py-12 p-4 py-6 lg:flex-col lg:flex bg-black text-white  lg:h-screen font-['Poppins'] lg:sticky lg:right-0">
        <Link href="/home">
          <Image className=" lg:my-8 w-[125px] lg:w-full" src={Logo} />
        </Link>

        <div className="lg:flex lg:flex-col text-xl gap-6 font-semibold text-right lg:my-10 hidden">
          <Link href="/personal">
            <h2>Personal</h2>
          </Link>
          <Link href="/editorial">
            <h2>Editorial</h2>
          </Link>
          <Link href="/videos">
            <h2>Videos</h2>
          </Link>
          <Link href="/cd">
            <h2>Creative Direction</h2>
          </Link>
          {/* <Link href="/cv">
            <h2>CV</h2>
          </Link> */}
          <Link href="/about">
            <h2>About</h2>
          </Link>
          <Link href="/contact">
            <h2>Contact</h2>
          </Link>
          <div className="lg:flex place-content-end gap-5">
            <Link href="https://www.instagram.com/dearbish">
              <Image className="lg:w-[30px] lg:h-[30px]" src={IG} />
            </Link>
            <a href="mailto:dearbishhh@gmail.com">
              <Image className="lg:w-[30px] lg:h-[30px]" src={Email} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
