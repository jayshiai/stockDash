"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const Sidebar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const links = ["Dashboard", "Portfolio", "Orders", "Wallet"];
  return (
    <section
      className={`sticky top-0 hidden h-[100vh] ${
        toggleSidebar ? `w-[10vw]` : `w-[5vw]`
      } flex-col items-start justify-between bg-black  px-5 pb-[15vh] pt-6 text-white transition-all duration-500 sm:flex`}
    >
      <Link
        href="/"
        className="flex items-center justify-between gap-5 pb-[10vh]"
      >
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain text-black"
          onClick={() => setToggleSidebar(!toggleSidebar)}
        />
        <p
          className={`transition-all ${
            toggleSidebar ? ` opacity-100 delay-200` : `opacity-0`
          }`}
        >
          StockDash
        </p>
      </Link>
      {links.map((link) => (
        <Link href="/" className="flex items-center justify-between gap-5">
          <div className="h-[40px] w-[40px] rounded-xl bg-white"></div>
          <p
            className={`transition-all ${
              toggleSidebar ? ` opacity-100 delay-200` : `opacity-0`
            }`}
          >
            {link}
          </p>
        </Link>
      ))}
    </section>
  );
};

export default Sidebar;
