"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SpinnerLoading from "./SpinnerLoading";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  children,
  className,
}) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleClick = async () => {
    setLoading(true);
    router.push(href);
    // setLoading(false);
  };

  return (
    <div>
      {loading && <SpinnerLoading />}
      <div className={className} onClick={handleClick}>
        {children}
      </div>
    </div>
  );
};

export default CustomLink;
