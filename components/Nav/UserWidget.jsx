import Image from "next/image";
const UserWidget = () => {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain text-black"
        />
      </div>
      <div className="text-sm">
        <p>Jayvardhan Patil</p>
        <p>$12.50</p>
      </div>
    </div>
  );
};

export default UserWidget;
