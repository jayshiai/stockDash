import Link from "next/link";
import { usePathname } from "next/navigation";

import { IconContext } from "react-icons";
const SidebarLink = ({ link, Icon, toggleSidebar }) => {
  const currentRoute = usePathname();
  return (
    <Link
      href={`/${link != "Dashboard" ? link.toLowerCase() : ""}`}
      className={`group flex flex-col items-center transition-all hover:scale-110  ${
        toggleSidebar ? `mb-10` : `mb-0`
      }`}
    >
      <IconContext.Provider
        value={{
          color:
            currentRoute === `/${link != "Dashboard" ? link.toLowerCase() : ""}`
              ? "orange"
              : "white",
          size: `${toggleSidebar ? `30px` : `20px`}`,
        }}
      >
        <div>
          <Icon className="opacity-60 transition-all  duration-500 group-hover:opacity-100 " />
        </div>
      </IconContext.Provider>

      <p
        className={`text-sm transition-all duration-500 ${
          toggleSidebar ? `opacity-50  group-hover:opacity-100` : `opacity-0`
        } ${
          currentRoute === `/${link != "Dashboard" ? link.toLowerCase() : ""}`
            ? `text-orange-400`
            : `text-white`
        }`}
      >
        {link}
      </p>
    </Link>
  );
};

export default SidebarLink;
