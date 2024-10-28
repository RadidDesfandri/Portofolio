import CustomLink from "@/components/CustomLink";
import SpinnerLoading from "@/components/SpinnerLoading";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p>Welocome to tes satu</p>
      <CustomLink href="/tes2">Tes dua here</CustomLink>
    </div>
  );
};

export default page;
