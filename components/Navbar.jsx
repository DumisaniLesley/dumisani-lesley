'use client'

import Link from "next/link";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

const Links = [
  {
    id: 2,
    name: "About",
    url: "#about",
  },
  {
    id: 3,
    name: "Experience",
    url: "#experience",
  },
  {
    id: 4,
    name: "Services",
    url: "#services",
  },
  {
    id: 5,
    name: "Portfolio",
    url: "#portfolio",
  },
  {
    id: 6,
    name: "Blogs",
    url: "#blogs",
  },
];

const Navbar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
    document.body.style.overflowY = "hidden";
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
    document.body.style.overflowY = "visible";
  };

  return (
<nav className="py-3 px-6 md:px-10 flex justify-between items-center lg:max-w-[1200px] mx-auto text-gray-400 md:sticky md:top-0 bg-black z-20">
      <Link href="/">
        <h1 className="text-xl font-extrabold uppercase">
          Logo
        </h1>
      </Link>
      <div className="hidden md:flex">
        {Links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="px-2 uppercase font-semibold text-md hover:text-yellow-500"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div
        onClick={toggleMobileNav}
        className="text-3xl cursor-pointer md:hidden"
      >
        <HiMenuAlt3 />
      </div>
      {isMobileNavOpen && (
        <div className="md:hidden absolute top-0 right-0 h-full w-[97%] bg-transparent backdrop-blur-lg z-[100] shadow-lg transition-all ease-in duration-600 transform translate-x-0 px-4 ">
          <div className="mt-3 flex justify-between items-center">
            <h1 className="text-xl font-bold  uppercase">
              Logo
            </h1>
            <HiOutlineX
              className="text-3xl cursor-pointer mr-4 text-white"
              onClick={closeMobileNav}
            />
          </div>
          {Links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={closeMobileNav} // Close mobile nav when a link is clicked
              className="block py-2 uppercase font-light text-md my-4 text-white hover:text-yellow-500"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/" className="flex items-center text-white">
            <span className="block uppercase">register now </span>
          </Link>
          <p className="fixed bottom-0 text-yellow-500 uppercase font-bold">To Get Better, You Have To Start!!</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
