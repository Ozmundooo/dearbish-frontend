import Link from "next/link";
import Bish from "../assets/enterBG.jpg";
import Image from "next/image";
const Home = ({ personals }) => {
  return (
    <>
      <div className=" bg-black h-screen grid place-items-center relative overflow-hidden">
        <Image
          className="h-screen w-screen scale-125 hover:scale-100 duration-300"
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
