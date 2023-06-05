import Image from "next/image";
const SidebarLogo = ({ toggleSidebar }) => {
  return (
    <div className="mb-2 flex flex-col items-center">
      <Image
        src="/assets/images/logo.svg"
        alt="logo"
        width={30}
        height={30}
        className="object-contain text-black"
      />
      <p
        className={`transition-all duration-500 ${
          toggleSidebar ? ` opacity-100` : `opacity-0`
        }`}
      >
        StockDash
      </p>
    </div>
  );
};

export default SidebarLogo;
