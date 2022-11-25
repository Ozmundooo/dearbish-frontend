import React from "react";
import Logo from "../assets/LogoDB.png";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  /*
  TODO:
  - Make pages
  - Link pages
  - Make Header responsive
  */
  return (
    <div className="px-32 py-12 flex-col flex bg-black text-white   border-l-4 h-screen font-['Poppins'] sticky right-0">
      <Image className="ml-12 my-8" src={Logo} />
      <div className="flex flex-col text-xl gap-6 font-semibold text-right my-10">
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
  );
}
