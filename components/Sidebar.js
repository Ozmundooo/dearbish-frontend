import Link from "next/link";
import { slide as Menu } from "react-burger-menu";

function Sidebar() {
  return (
    <>
      <Menu right>
        <Link href="/personal" className="font-['Poppins'] font-bold text-lg">
          Personal
        </Link>
        <Link href="/editorials" className="font-['Poppins'] font-bold text-lg">
          Editorials
        </Link>
        <Link href="/videos" className="font-['Poppins'] font-bold text-lg">
          Videos
        </Link>
        <Link href="/cd" className="font-['Poppins'] font-bold text-lg">
          Creative Direction
        </Link>
        {/* <Link href="/cv" className="font-['Poppins'] font-bold text-lg">
          CV
        </Link> */}
        <Link href="/about" className="font-['Poppins'] font-bold text-lg">
          About
        </Link>
        <Link href="/contact" className="font-['Poppins'] font-bold text-lg">
          Contact
        </Link>
      </Menu>
    </>
  );
}

export default Sidebar;
