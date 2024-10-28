import CustomLink from "@/components/CustomLink";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>Welocome to tes dua</p>
      <CustomLink href="/tes">
        Tes satu here
      </CustomLink>
    </div>
  )
};

export default page;
