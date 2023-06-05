"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
const UserWidget = () => {
  const { data: session } = useSession();
  const [signOutDropdown, setSignOutDropdown] = useState(false);
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  return (
    <div className="hidden min-w-[175px] sm:flex">
      {session?.user ? (
        <div className="flex w-full items-end justify-between">
          <div
            className="text-right text-white"
            onMouseEnter={() => setToggleDropdown(true)}
          >
            <p className="">{session?.user.name}</p>
            <p className="text-xs">$12.50</p>
          </div>
          <Image
            src={session?.user.image}
            width={40}
            height={40}
            className="rounded-full"
            alt="profile"
            onMouseEnter={() => setToggleDropdown(true)}
          />

          {toggleDropdown && (
            <div
              className="dropdown glassmorphism"
              onMouseLeave={() => setToggleDropdown(false)}
            >
              <Link
                href="/profile"
                className="w-full text-center text-white hover:scale-110"
                onClick={() => setToggleDropdown(false)}
              >
                My Profile
              </Link>

              <button
                type="button"
                onClick={() => {
                  setToggleDropdown(false);
                  signOut();
                }}
                className="black_btn mt-5 w-full"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => {
                  signIn(provider.id);
                }}
                className="black_btn"
              >
                Sign in
              </button>
            ))}
        </>
      )}
    </div>
  );
};

export default UserWidget;
