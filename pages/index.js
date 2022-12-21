import Link from "next/link";
import Bish from "../assets/enterBG.jpg";
import Image from "next/image";
import Head from "next/head";
const Home = ({}) => {
  return (
    <>
      <Head>
        <title>Dearbish</title>
        <meta
          name="description"
          content="Bish Uprety is a creative director and photographer based in Toronto. Being an immigrant and having a different perspective on the everyday, he has cultivated his own sense of style through his art. Bish has always had a keen sense for authenticity and makes his subjects feel comfortable enough to be themselves in front of the camera. Bish has also delved into deeper and more introspective topics through his personal work. He’s not afraid to share his emotions to the world."
        />
      </Head>
      <div className=" bg-black h-screen grid place-items-center relative overflow-hidden">
        <Image
          className="h-screen w-screen animate-pulse   duration-[10000ms]"
          src={Bish}
        />
        <Link
          href="/home"
          className="absolute text-white group hover:scale-150 border border-white px-8 py-4 font-['Poppins'] font-semibold hover:bg-white hover:text-black duration-150"
        >
          ENTER
        </Link>
      </div>
    </>
  );
};

export default Home;
