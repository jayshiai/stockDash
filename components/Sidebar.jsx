"use client";

import { useState } from "react";

import SidebarLink from "./Sidebar/SidebarLink";
import SidebarLogo from "./Sidebar/SidebarLogo";

import { RxDashboard } from "react-icons/rx";
import { MdOutlineAnalytics } from "react-icons/md";
import { AiOutlinePieChart } from "react-icons/ai";
import { RiFileList3Line } from "react-icons/ri";
import { TfiWallet } from "react-icons/tfi";

const Sidebar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const links = [
    ["Dashboard", RxDashboard],
    ["Analytics", MdOutlineAnalytics],
    ["Portfolio", AiOutlinePieChart],
    ["Orders", RiFileList3Line],
    ["Wallet", TfiWallet],
  ];
  return (
    <section
      className={`sticky top-0 hidden h-[100vh] ${
        toggleSidebar ? `w-[7vw]` : `w-[3vw]`
      } min-w-[75px] flex-col items-center  bg-black px-3 pb-[15vh] pt-6 text-white transition-all duration-500 sm:flex`}
      onClick={() => setToggleSidebar(!toggleSidebar)}
      onMouseLeave={() => setToggleSidebar(false)}
    >
      <SidebarLogo toggleSidebar={toggleSidebar} />
      <div
        className={`transition-all duration-500 ${
          toggleSidebar ? `translate-y-[15vh]` : `translate-y-0`
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        {links.map(([link, Icon]) => (
          <SidebarLink link={link} Icon={Icon} toggleSidebar={toggleSidebar} />
        ))}
      </div>
    </section>
  );
};

export default Sidebar;
