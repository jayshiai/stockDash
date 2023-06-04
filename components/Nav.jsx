import Link from "next/link";
import Image from "next/image";
import Search from "./Nav/Search";
import StockData from "./Nav/StockData";
import UserWidget from "./Nav/UserWidget";
const Nav = () => {
  return (
    <nav className="sticky top-0 flex h-[10vh] w-full items-center justify-between bg-[#d9d9d9] p-5">
      <Link href="/" className="flex items-center justify-between gap-2">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain text-black"
        />
        <p className="text-black">StockDash</p>
      </Link>
      <Search />
      <StockData symbol="IRCTC" />
      <UserWidget />
    </nav>
  );
};

export default Nav;
