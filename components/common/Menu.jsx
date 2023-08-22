"use client";

import { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarLinks } from "@lib/data/navLinks";
import { GlobalContext } from "@providers/ContextProvider";
import { MdClose } from "react-icons/md";
import Button from "./Button";
import { socialLinks } from "@lib/data/socialLinks";

const Menu = () => {
  const { toggleSidebar, setToggleSidebar } = useContext(GlobalContext);
  const currentPath = usePathname();

  return (
    <>
      <div
        className={`w-screen h-screen overflow-y-auto fixed top-0 right-0 left-0 z-[10000] bg-white-cus-1 dark:bg-black-cus-1 ${
          toggleSidebar ? "block" : "hidden"
        }`}
      >
        <div className="pl-[30px] py-[65px] h-full w-full items-center justify-center relative">
          <div
            onClick={() => setToggleSidebar(!toggleSidebar)}
            className="absolute top-[20px] right-[10px] flex gap-x-[10px] items-center"
          >
            <span>Close</span>
            <span className="text-[25px]">
              <MdClose />
            </span>
          </div>
          <ul className="list-none m-0 text-[22px]">
            {navbarLinks.map((item, index) => (
              <li
                key={item.label}
                className="flex gap-[10px] items-center py-[10px]"
                onClick={() => setToggleSidebar(!toggleSidebar)}
              >
                <span className="text-gray-cus-2 text-[17px] inline-block w-[30px]">
                  0{index + 1}
                </span>
                <Link
                  href={item.href}
                  className={`${
                    currentPath === item.href
                      ? "dark:text-white-cus-1 font-[900]"
                      : "dark:text-white-cus-1"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-[30px] mb-[10px]">
              <Link href="/contact"  onClick={() => setToggleSidebar(!toggleSidebar)}>
                <Button>GET IN TOUCH</Button>
              </Link>
            </li>
            <li className="mt-[50px] flex gap-[22px] items-center text-[19px] sm:text-[22px]">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={"_blank"}
                  rel="noreferrer"
                  onClick={() => setToggleSidebar(!toggleSidebar)}
                >
                  <item.icon />
                </a>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
