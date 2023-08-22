"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { MdOutlineMonitor } from "react-icons/md";
import useClickOutside from "@hooks/useClickOutside";

const themes = [
  {
    icon: BsSun,
    mode: "light",
  },
  {
    icon: BsMoonStars,
    mode: "dark",
  },
];

const ThemesMenu = ({ showThemesMenu, onThemesMenuPress }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const themeMenuRef = useRef(null);

  useClickOutside(themeMenuRef, () => onThemesMenuPress());

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {showThemesMenu && (
        <div
          ref={themeMenuRef}
          className="z-[8000] absolute top-[40px] right-[5px] rounded-md shadow-md bg-gray-700 text-white-cus-1 w-[115px] px-[10px] py-[5px]"
        >
          <ul className="list-none m-0 text-[14px]">
            {themes.map((item) => (
              <li
                key={item.mode}
                className="flex gap-[10px] py-2 font-[600] cursor-pointer"
                onClick={() => {
                  setTheme(item.mode);
                  onThemesMenuPress();
                }}
              >
                <item.icon size={20} />{" "}
                <span className="capitalize">{item.mode}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ThemesMenu;
