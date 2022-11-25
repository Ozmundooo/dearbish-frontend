import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Link from "next/link";

export default function home() {
  return (
    <>
      <div className="h-screen w-screen flex bg-black">
        <div className="w-3/4"></div>
        <div className="w-1/4">
          <Header />
        </div>
      </div>
    </>
  );
}
