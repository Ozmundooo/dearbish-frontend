import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeSideBar = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen} right>
        <Link
          onClick={() => closeSideBar()}
          href="/personal"
          className="font-['Poppins'] font-bold text-lg"
        >
          Personal Works
        </Link>
        <Link
          onClick={() => closeSideBar()}
          href="/photography"
          className="font-['Poppins'] font-bold text-lg"
        >
          Photography
        </Link>
        <Link
          onClick={() => closeSideBar()}
          href="/videos"
          className="font-['Poppins'] font-bold text-lg"
        >
          Videos
        </Link>
        <Link
          onClick={() => closeSideBar()}
          href="/cd"
          className="font-['Poppins'] font-bold text-lg"
        >
          Creative Direction
        </Link>
        {/* <Link href="/cv" className="font-['Poppins'] font-bold text-lg">
          CV
        </Link> */}
        <Link
          onClick={() => closeSideBar()}
          href="/about"
          className="font-['Poppins'] font-bold text-lg"
        >
          About
        </Link>
        <Link
          onClick={() => closeSideBar()}
          href="/contact"
          className="font-['Poppins'] font-bold text-lg"
        >
          Contact
        </Link>
      </Menu>
    </>
  );
}

export default Sidebar;
