import React from "react";
import Header from "../components/Header";
import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
const contact = ({}) => {
  return (
    <>
      <div className="h-screen w-screen lg:flex lg:flex-row flex flex-col bg-black overflow-x-hidden">
        <header className="lg:hidden">
          <Header />
        </header>
        <div className="lg:w-3/4 flex flex-col justify-center">
          <ContactForm />
        </div>
        <Footer />
        <aside className="lg:w-1/4 lg:h-screen sticky top-0 hidden lg:flex">
          <Header />
        </aside>
      </div>
    </>
  );
};

export default contact;
