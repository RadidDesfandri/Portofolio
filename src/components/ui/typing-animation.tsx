"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text1: string;
  text2: string;
  duration?: number;
  className?: string;
  activeAim?: boolean;
}

export default function TypingAnimation({
  text1,
  text2,
  duration = 200,
  className,
  activeAim,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);
  const [isText1, setIsText1] = useState<boolean>(true);

  useEffect(() => {
    const currentText = isText1 ? text1 : text2;

    const typingEffect = setInterval(() => {
      if (i < currentText.length) {
        setDisplayedText(currentText.substring(0, i + 1));
        setI(i + 1);
      } else {
        setTimeout(() => {
          setI(0);
          setIsText1(!isText1);
        }, 3000);
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, isText1, text1, text2]);

  return (
    <h1
      className={cn(
        "font-display text-center leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {`${activeAim ? "Hi, I'm" : ""} ${displayedText}`}
    </h1>
  );
}
