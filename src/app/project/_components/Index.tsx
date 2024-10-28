import AnimateSlideIn from "@/components/AnimateSlideIn";
import { dataProjectEn } from "@/variables/constDataProject";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectpageEn = () => {
  return (
    <div className="h-full w-full">
      {/* Content here */}
      <AnimateSlideIn>
        <div className="z-20 mx-auto h-full w-full max-w-4xl px-5 py-20 md:px-10">
          <div className="font-sans text-xl font-semibold text-white md:text-2xl">
            Project
          </div>
          <p className="font-sans text-sm font-medium text-neutral-400">
            See the projects I made, see the live demo or github
          </p>

          <div className="mt-5 flex flex-col gap-4 border-t border-dashed border-gray-600 py-4 text-sm text-gray-300">
            <div className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2">
              {/* Card */}

              {dataProjectEn.map((card) => {
                return (
                  <Link
                    key={card.judul}
                    href={`/project/${card.id}`}
                    className="w-full z-20 overflow-hidden rounded-xl border border-neutral-200/20 bg-neutral-900 shadow-sm transition-all duration-300 hover:scale-[102%] hover:border-teal-300 hover:shadow-lg"
                  >
                    <Image
                      width={200}
                      height={200}
                      alt={`Thumbnail-${card.judul}`}
                      src={`/project/${card.thumbnail}`}
                      className="h-[190px] w-full object-cover"
                    />
                    <div className="flex flex-col gap-2 px-4 py-6">
                      <p className="font-sans text-lg font-medium">
                        {card.judul}
                      </p>
                      <p className="line-clamp-2 h-10 font-sans">{card.desc}</p>

                      <div className="flex flex-wrap items-center gap-2">
                        {card.framework.map((framework, idx) => {
                          return (
                            <Image
                              key={idx}
                              width={150}
                              height={150}
                              alt={`Framework-${framework.img}`}
                              src={`/skill/${framework.img}`}
                              className="h-6 w-6 object-cover"
                            />
                          );
                        })}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </AnimateSlideIn>
    </div>
  );
};

export default ProjectpageEn;
