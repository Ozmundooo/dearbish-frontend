import React from "react";
import Header from "../components/Header";
import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Head from "next/head";
const contact = ({}) => {
  return (
    <>
      <Head>
        <title>Dearbish: Creative Direction</title>
      </Head>
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
