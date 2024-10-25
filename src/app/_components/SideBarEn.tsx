"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaGlobeAfrica, FaGlobeAsia, FaLeaf } from "react-icons/fa";
import { RiEditFill } from "react-icons/ri";

const SideBarEn = () => {
  const [hoverLang, setHoverLang] = useState(false);
  const [activeLang, setActiveLang] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const menuItem = [
    { label: "Home", href: "/", icon: AiOutlineHome },
    { label: "About", href: "/about", icon: FaLeaf },
    { label: "Project", href: "/project", icon: RiEditFill },
  ];

  const handleChangeLanguage = () => {
    if (pathname.includes("/id")) {
      router.push("/");
    } else {
      router.push("/");
    }
    setActiveLang(!activeLang);
  };

  return (
    <div className="group fixed z-10 hidden h-full w-14 cursor-pointer place-items-center rounded-r-xl bg-transparent px-2 pt-16 shadow-md shadow-slate-100/30 transition-all duration-300 hover:w-48 hover:px-2 md:block">
      {/* Profile */}
      <div className="flex flex-col items-center">
        <div className="absolute top-3 -z-10 hidden h-[90px] w-full px-2 transition-all duration-500 group-hover:block">
          <div className="flex h-full w-full items-end justify-end rounded-md bg-neutral-800 px-1 pb-1">
            <div
              onClick={handleChangeLanguage}
              onMouseEnter={() => setHoverLang(true)}
              onMouseLeave={() => setHoverLang(false)}
              className="rounded-md bg-neutral-900 p-1 text-white"
            >
              {activeLang ? <FaGlobeAfrica /> : <FaGlobeAsia />}
            </div>
            {hoverLang && (
              <div className="absolute right-2 top-7 w-fit rounded-md bg-white/90 px-2 py-1 text-center text-[9px] text-hitam transition-all duration-300">
                Change Language
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center rounded-full border-2 border-gray-400 bg-gray-500 shadow-md transition-all duration-500 group-hover:border-hitam">
          <Image
            src={"/profile.jpg"}
            alt="Profile"
            width={100}
            height={100}
            className="h-9 w-9 rounded-full object-cover transition-all duration-500 group-hover:h-20 group-hover:w-20"
          />
        </div>
        <div className="hidden scale-0 text-white transition-all duration-300 group-hover:block group-hover:scale-100">
          <p className="font-semibold">Radid desfandri</p>
          <p className="text-center text-xs font-medium text-neutral-300 ">
            @dietyy
          </p>
        </div>
        <div className="mt-5 flex w-fit items-center justify-center rounded-full bg-neutral-800 p-1 text-white transition-all duration-300 group-hover:hidden">
          <FaGlobeAsia />
        </div>
      </div>

      {/* Menu items */}
      <div className="mt-14 flex w-full flex-col items-center gap-3 border-t pt-7 text-gray-500 transition duration-300 group-hover:items-start">
        {menuItem.map((menu, idx) => {
          const activeMenu = pathname === menu.href;
          return (
            <Link
              key={idx}
              href={menu.href}
              className={`flex w-fit items-center justify-center gap-2 rounded-md p-1 py-1 transition duration-300 group-hover:w-full group-hover:justify-start group-hover:px-2 ${activeMenu ? "bg-neutral-800 text-white" : "text-gray-500"}`}
            >
              <menu.icon size={18} />
              <p className="hidden text-xs transition duration-300 group-hover:block">
                {menu.label}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBarEn;
