import Link from "next/link";
import Image from "next/image";
import Search from "./Nav/Search";
import StockData from "./Nav/StockData";
import UserWidget from "./Nav/UserWidget";
const Nav = () => {
  return (
    <nav className="sticky top-0 flex h-[10vh] w-full items-center justify-between bg-black p-5">
      <Search />
      <StockData symbol="IRCTC" />
      <UserWidget />
    </nav>
  );
};

export default Nav;
