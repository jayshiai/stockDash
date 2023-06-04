import Link from "next/link";
const Sidebar = () => {
  return (
    <section className="sticky top-[10vh] hidden h-[90vh] w-[5vw] flex-col items-center justify-between pb-[15vh] pt-[30vh] sm:flex">
      <Link href="/" className="h-[40px] w-[40px] rounded-xl bg-white"></Link>
      <Link href="/" className="h-[40px] w-[40px] rounded-xl bg-white"></Link>
      <Link href="/" className="h-[40px] w-[40px] rounded-xl bg-white"></Link>
      <Link href="/" className="h-[40px] w-[40px] rounded-xl bg-white"></Link>
    </section>
  );
};

export default Sidebar;
