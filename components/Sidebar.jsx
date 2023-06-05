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
        toggleSidebar ? `w-[7vw]` : `w-[3vw]`
      } min-w-[75px] flex-col items-center  bg-black px-3 pb-[15vh] pt-6 text-white transition-all duration-500 sm:flex`}
    >
      <Link href="/" className="mb-2 flex flex-col items-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain text-black"
          onClick={() => setToggleSidebar(!toggleSidebar)}
        />
        <p
          className={`transition-all duration-500 ${
            toggleSidebar ? ` opacity-100` : `opacity-0`
          }`}
        >
          StockDash
        </p>
      </Link>
      <div
        className={`transition-all duration-500 ${
          toggleSidebar ? `translate-y-[200px]` : `translate-y-0`
        }`}
      >
        {links.map((link) => (
          <Link
            href="/"
            className={`group flex flex-col items-center transition-all hover:scale-110  ${
              toggleSidebar ? `mb-10` : `mb-0`
            }`}
          >
            <div className="h-[40px] w-[40px] rounded-xl bg-white"></div>
            <p
              className={`transition-all duration-500 ${
                toggleSidebar
                  ? `opacity-50  group-hover:opacity-100`
                  : `opacity-0`
              }`}
            >
              {link}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;
