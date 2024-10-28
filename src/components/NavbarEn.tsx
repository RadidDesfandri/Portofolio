"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGlobeAfrica, FaGlobeAsia, FaLeaf } from "react-icons/fa";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";
import GridPattern from "@/components/ui/animated-grid-pattern";
import { AiOutlineHome } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { RiEditFill } from "react-icons/ri";
import Link from "next/link";
import MenuLanguage from "@/app/_components/MenuLanguage";

const NavbarEn = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenuBar, setActiveMenuBar] = useState(false);
  const [activeMenuLang, setActiveMenuLang] = useState(false);
  const pathname = usePathname();
  const menuItem = [
    { label: "Home", href: "/", icon: AiOutlineHome },
    { label: "About", href: "/about", icon: FaLeaf },
    { label: "Project", href: "/project", icon: RiEditFill },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const ifScroll = window.scrollY;
      setScrolled(ifScroll > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (activeMenuBar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [activeMenuBar]);

  return (
    <div
      className={`fixed z-50 block w-full rounded-b-xl px-5 py-3 text-white transition-all duration-300 md:hidden ${scrolled ? "shadow-sm shadow-gray-400/15 backdrop-blur-sm" : "bg-transparent"}`}
    >
      <div
        className={`flex justify-between text-white transition-all duration-300`}
      >
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center rounded-full border-2 border-gray-400 bg-gray-500 shadow-md">
            <Image
              src={"/profile.jpg"}
              alt="Profile"
              width={100}
              height={100}
              className="h-8 w-8 rounded-full object-cover"
            />
          </div>
          <p
            className={`font-sans font-semibold text-white transition-all duration-300`}
          >
            Radid Desfandri
          </p>
        </div>

        <div className="flex items-center gap-4">
          {activeMenuLang ? (
            <FaGlobeAsia
              size={25}
              onClick={() => setActiveMenuLang(!activeMenuLang)}
            />
          ) : (
            <FaGlobeAfrica
              size={25}
              onClick={() => setActiveMenuLang(!activeMenuLang)}
            />
          )}

          {activeMenuLang && (
            <MenuLanguage
              setActiveMenuLang={setActiveMenuLang}
              activeMenuLang={activeMenuLang}
            />
          )}

          <div
            className={`relative inset-0 transform transition-transform duration-500 ${activeMenuBar ? "rotate-90" : "rotate-0"}`}
          >
            {activeMenuBar ? (
              <MdOutlineClose
                size={30}
                onClick={() => setActiveMenuBar(!activeMenuBar)}
              />
            ) : (
              <MdOutlineMenu
                size={30}
                onClick={() => setActiveMenuBar(!activeMenuBar)}
              />
            )}
          </div>
          <div
            className={`absolute inset-0 -top-[1000px] -z-10 transform rounded-sm transition-transform duration-300 ease-in-out ${
              activeMenuBar
                ? "translate-y-full opacity-100"
                : "-translate-y-0 opacity-0"
            }`}
          >
            {activeMenuBar && (
              <div className={`h-screen w-screen bg-black px-4 text-white`}>
                <GridPattern duration={5000} />
                <div className="flex flex-col gap-5 border-t border-t-gray-400/20 pt-6 text-gray-500">
                  {menuItem.map((menu, idx) => {
                    const activeMenu = pathname === menu.href;
                    return (
                      <Link
                        key={idx}
                        href={menu.href}
                        onClick={() => setActiveMenuBar(!activeMenuBar)}
                        className={`flex items-center gap-3 rounded-md px-2 py-2 ${activeMenu ? "bg-neutral-800 text-white" : ""}`}
                      >
                        <menu.icon size={20} />
                        <p
                          className={`font-sans ${activeMenu && "font-semibold"}`}
                        >
                          {menu.label}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarEn;
