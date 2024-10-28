import AnimateSlideIn from "@/components/AnimateSlideIn";
import TypingAnimation from "@/components/ui/typing-animation";
import WalkingCharacter from "@/components/WalkingCharacter";
import Link from "next/link";
import React from "react";
import { AiOutlineNodeIndex } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdDesignServices, MdOutlineWeb, MdPayments } from "react-icons/md";

const HomepageEn = () => {
  const cardItems = [
    {
      label: "Website Development",
      desc: "Development of responsive and interactive websites using modern technologies like Next.js, Tailwind CSS, and Node.js. Focused on performance, and optimized user experience. Each website is built with a mobile-first.",
      icon: MdOutlineWeb,
    },
    {
      label: "Backend API Development",
      desc: "Designing and developing efficient, scalable APIs using Node.js and Express, with high security and reliable data management. API development is focused on optimal performance to consistently support both web and mobile applications.",
      icon: AiOutlineNodeIndex,
    },
    {
      label: "UI/UX Design",
      desc: "Creating modern, functional user interfaces and experiences using Figma. Each project begins with user needs analysis and wireframing to ensure that the design is not only visually appealing but also intuitive and easy to navigate.",
      icon: MdDesignServices,
    },
    {
      label: "E-commerce Integration",
      desc: "Developing and integrating e-commerce features on websites, from shopping carts and checkout to payment gateways. Using  Midtrans to ensure secure, smooth transactions, with optimized conversions, a seamless shopping experience.",
      icon: MdPayments,
    },
  ];
  const connectItems = [
    { href: "https://www.instagram.com/_dietyy/", icon: FaInstagram },
    {
      href: "https://www.linkedin.com/in/radid-desfandri-182541322/",
      icon: FaLinkedin,
    },
    { href: "https://github.com/RadidDesfandri", icon: FaGithub },
  ];
  return (
    <div className="h-full w-full">
      {/* Content here */}
      <AnimateSlideIn>
        <div className="z-20 mx-auto h-full w-full max-w-4xl px-5 py-20 md:px-10">
          <TypingAnimation
            text1="Radid Desfandri"
            text2="Web Developers"
            duration={150}
            activeAim
            className="text-start text-xl font-bold text-white md:text-2xl"
          />
          <ul className="flex list-disc items-center gap-4 px-3 text-xs font-medium text-neutral-400">
            <li>Based in Bandung</li>
          </ul>

          <div className="mt-5 text-xs leading-loose text-neutral-200">
            A Web Developer specializing in building modern and efficient web
            applications. I have experience developing and maintaining a variety
            of projects, ranging from simple landing pages to complex SaaS
            platforms. My core expertise lies in Frontend Development using
            React.js and Next.js and Backend Development with Node.js and
            TypeScript. I am also well-versed in working with REST/GraphQL APIs,
            database integrations.
          </div>

          {/* What i do? */}
          <div className="mt-8 border-b border-t border-gray-600 py-6 text-white">
            <p className="text-xl font-semibold">What i do</p>
            <p className="text-xs leading-loose text-neutral-200">
              Build and maintain websites, frontend and backend. My motto is
              Beauty and function in equal measure as priority.
            </p>

            <div className="mt-7 grid grid-cols-1 place-items-center gap-x-4 gap-y-7 md:grid-cols-2">
              {cardItems.map((card, idx) => {
                return (
                  <div
                    key={idx}
                    className="relative flex h-32 w-full flex-col items-center justify-center rounded-md border border-gray-500/40 px-2 py-4 shadow-sm shadow-gray-400/15 backdrop-blur-sm"
                  >
                    <div className="absolute -top-5 rounded-full border border-gray-500/40 p-3 shadow-sm shadow-gray-400/15 backdrop-blur-sm">
                      <card.icon size={25} />
                    </div>

                    <div className="mt-8 flex flex-col items-center justify-center">
                      <p className="text-sm font-medium text-white">
                        {card.label}
                      </p>
                      <p className="h-11 text-center text-[10px] text-neutral-400">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-8 flex justify-end text-white">
            <div>
              <p className="mb-2 font-semibold text-white">Lets connect</p>
              <div className="flex items-center justify-end gap-3">
                {connectItems.map((connect, idx) => {
                  return (
                    <Link
                      key={idx}
                      href={connect.href}
                      target="_blank"
                      className="text-gray-400 transition-all duration-300 hover:text-gray-100"
                    >
                      <connect.icon size={20} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Walking character */}
          <div className="fixed bottom-0 z-50 w-full">
            <WalkingCharacter />
          </div>
        </div>
      </AnimateSlideIn>
    </div>
  );
};

export default HomepageEn;
