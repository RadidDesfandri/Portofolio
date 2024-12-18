"use client";

import { FaCode } from "react-icons/fa";
import SkillsCard from "./SkillsCard";
import Marquee from "@/components/ui/marquee";
import WalkingCharacter from "@/components/WalkingCharacter";
import IconCloud from "@/components/ui/icon-cloud";
import { useState } from "react";
import { TbArrowsExchange } from "react-icons/tb";
import { skillItemEn, slugs } from "@/variables/constAbout";
import AnimateSlideIn from "@/components/AnimateSlideIn";

const AboutpageEn = () => {
  const firstRow = skillItemEn.slice(0, skillItemEn.length / 2);
  const secondRow = skillItemEn.slice(skillItemEn.length / 2);
  const [skillActive, setSkillActive] = useState(false);
  const [showHoverSkill, setShowHoverSkill] = useState(false);

  return (
    <div className="h-full w-full">
      {/* Content here */}
      <AnimateSlideIn>
        <div className="z-20 mx-auto h-full w-full max-w-4xl px-5 py-20 md:px-10">
          <div className="font-sans text-xl font-semibold text-white md:text-2xl">
            About
          </div>
          <p className="font-sans text-sm font-medium text-neutral-400">
            A short story
          </p>

          <div className="mt-5 flex flex-col gap-4 border-t border-dashed border-gray-600 py-4 font-sans text-sm text-gray-300">
            <p>
              I’m a recent graduate from a vocational high school with a major
              in Multimedia, and I began learning to code in my third year of
              high school. To further deepen my understanding of web
              development, I attended an intensive bootcamp at Purwadhika, which
              helped me hone my skills.
            </p>
            <p>
              With a solid foundation in both frontend and backend development,
              I work with technologies such as Next.js, React, Tailwind CSS,
              TypeScript, Prisma, and Node.js to build engaging, intuitive, and
              efficient web applications. I’m passionate about problem-solving
              and design, merging creativity with logic to deliver optimal user
              experiences.
            </p>
            <p>
              Throughout my journey, I’ve worked on various projects, from
              building interactive websites to developing complex backend
              systems. These experiences have taught me the importance of
              collaboration, attention to detail, and commitment to achieving
              the best results.
            </p>
            <p>Thank you for visiting my portofolio.</p>
          </div>

          <div className="border-t border-gray-600 py-5 text-white">
            <div className="relative flex items-center gap-2 font-sans text-xl">
              <FaCode />
              <p>Skills</p>
              <TbArrowsExchange
                size={25}
                onClick={() => setSkillActive(!skillActive)}
                onMouseEnter={() => setShowHoverSkill(true)}
                onMouseLeave={() => setShowHoverSkill(false)}
                className="ml-4 cursor-pointer transition-all duration-300 hover:scale-110"
              />
              {showHoverSkill && (
                <div className="absolute -top-8 left-20 w-fit rounded-md bg-white/90 px-2 text-center text-[9px] text-hitam transition-all duration-300">
                  Change View
                </div>
              )}
            </div>
            <p className="font-sans text-sm font-medium text-neutral-400">
              My coding skills
            </p>

            <div className="relative mt-4">
              {skillActive ? (
                <IconCloud iconSlugs={slugs} />
              ) : (
                <div>
                  <Marquee className="[--duration:30s]">
                    {firstRow.map((skill) => {
                      return <SkillsCard key={skill.skill} {...skill} />;
                    })}
                  </Marquee>
                  <Marquee reverse className="[--duration:30s]">
                    {secondRow.map((skill) => {
                      return <SkillsCard key={skill.img} {...skill} />;
                    })}
                  </Marquee>
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/5 dark:from-background"></div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-600/5 dark:from-background"></div>
                </div>
              )}
            </div>
          </div>

          <div className="fixed bottom-0 z-50 w-full">
            <WalkingCharacter />
          </div>
        </div>
      </AnimateSlideIn>
    </div>
  );
};

export default AboutpageEn;
