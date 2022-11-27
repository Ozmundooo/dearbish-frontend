import { sanityClient } from "../sanity";
import Link from "next/link";
const Home = ({ personals }) => {
  return (
    <>
      <div className=" bg-black h-screen grid place-items-center ">
        <Link
          href="/home"
          className="text-white border border-white px-8 py-4 font-['Poppins'] font-semibold hover:bg-white hover:text-black duration-150"
        >
          ENTER
        </Link>
      </div>
    </>
  );
};

export default Home;
