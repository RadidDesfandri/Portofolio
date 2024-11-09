"use client";

import { useState } from "react";
import { LuClipboardCheck, LuClipboardCopy } from "react-icons/lu";

interface ClippboardProps {
  textCopy: string;
  multiple?: boolean;
  quadruple?: boolean;
}

const Clippboard: React.FC<ClippboardProps> = ({
  textCopy,
  multiple,
  quadruple,
}) => {
  const [isCopy, setIsCopy] = useState(false);

  const handleCopyText = () => {
    navigator.clipboard.writeText(textCopy);
    setIsCopy(true);
    setTimeout(() => setIsCopy(false), 2000);
  };

  return (
    <div className="relative mt-5 rounded-lg bg-hitam px-5 py-5 font-sans text-sm font-medium md:text-base">
      <p>{textCopy}</p>
      {multiple && (
        <>
          <p># or</p>
          <p>yarn add</p>
        </>
      )}

      {quadruple && (
        <>
          <p># or</p>
          <p>yarn dev</p>
          <p># or</p>
          <p>pnpm run dev</p>
        </>
      )}

      <button
        type="button"
        onClick={handleCopyText}
        className={`absolute right-2 top-2 cursor-pointer rounded-md p-1 ring-2 ring-inset transition-all duration-300 ${isCopy ? "text-green-400 ring-green-400" : "text-neutral-400 ring-neutral-400"}`}
      >
        {isCopy ? <LuClipboardCheck /> : <LuClipboardCopy />}
      </button>
    </div>
  );
};

export default Clippboard;
