import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed w-full h-20 flex items-center justify-between px-8 z-100">
      <Link href="/" className="text-2xl font-bold text-[#fce1cd]">
        <Image
          src="/images/nav-logo.svg"
          alt="SPYLT Logo"
          width={80}
          height={20}
        />
      </Link>
      <button className="bg-white text-xs font-bold px-6 py-3 rounded-full hover:bg-light-brown duration-500 transition uppercase">
        Find in stores
      </button>
    </nav>
  );
};

export default Navbar;
