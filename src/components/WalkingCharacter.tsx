"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import TypingAnimation from "./ui/typing-animation";

interface CharacterState {
  visible: boolean;
  walking: boolean;
}

const WalkingCharacter: React.FC = () => {
  const [characterState, setCharacterState] = useState<CharacterState>({
    visible: false,
    walking: true,
  });

  useEffect(() => {
    const showCharacter = () => {
      setCharacterState((prevState) => ({
        visible: true,
        walking: !prevState.walking,
      }));

      setTimeout(() => {
        setCharacterState((prevState) => ({
          ...prevState,
          visible: false,
        }));
      }, 10000);
    };

    const interval = setInterval(showCharacter, 60000);

    showCharacter();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {characterState.visible && (
        <div
          className={`absolute bottom-0 left-0 ${
            characterState.walking ? "animate-walk" : "animate-in"
          }`}
        >
          <Image
            src={characterState.walking ? "/walking.gif" : "/waving.gif"}
            alt="Character"
            width={100}
            height={100}
            className={`bg-transparent object-contain ${characterState.walking ? "h-8 w-8" : "h-12 w-12"}`}
          />
          {characterState.walking === false && (
            <div className="animate-wave absolute -right-5 -top-4">
              <div className="h-6 w-12 rounded-t-lg rounded-br-md border"></div>
              <TypingAnimation
                text1="Hello,"
                text2="Welcome"
                duration={100}
                className="absolute left-2 top-1.5 text-center text-[8px] text-white"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WalkingCharacter;
