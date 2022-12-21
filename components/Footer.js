import React from "react";
import Image from "next/image";
import IG from "../assets/ig.png";
import Email from "../assets/email.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="lg:hidden h-20 w-screen bg-black">
      <div className="flex gap-5 justify-center p-5">
        <Link href="https://www.instagram.com/dearbish">
          <Image className="w-[30px] h-[30px]" src={IG} />
        </Link>
        <a href="mailto:info@dearbish.com">
          <Image className="w-[30px] h-[30px]" src={Email} />
        </a>
      </div>
    </div>
  );
}
