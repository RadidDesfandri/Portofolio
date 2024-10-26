"use client";

import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";

const MenuLanguage = ({
  setActiveMenuLang,
  activeMenuLang,
}: {
  setActiveMenuLang: Dispatch<SetStateAction<boolean>>;
  activeMenuLang: boolean;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setActiveMenuLang(false);
      }
    };
    if (activeMenuLang) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [activeMenuLang]);

  return (
    <div
      ref={modalRef}
      className="text-hitam absolute right-14 top-12 flex flex-col items-center gap-2 rounded-sm bg-gray-100 p-2 shadow-md"
    >
      <Link href={"/"} onClick={() => setActiveMenuLang(!activeMenuLang)}>
        <Image
          src={"/english-flag.svg"}
          alt="Flag-eng"
          width={100}
          height={100}
          className="h-6 w-6"
        />
      </Link>
      <Link href={"/"} onClick={() => setActiveMenuLang(!activeMenuLang)}>
        <Image
          src={"/indonesia-flag.svg"}
          alt="Flag-eng"
          width={100}
          height={100}
          className="h-6 w-6"
        />
      </Link>
    </div>
  );
};

export default MenuLanguage;
