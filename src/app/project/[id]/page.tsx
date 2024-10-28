import React from "react";
import { dataProjectEn } from "@/variables/constDataProject";
import { notFound } from "next/navigation";
import { LuClipboardCopy } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import AnimateSlideIn from "@/components/AnimateSlideIn";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return dataProjectEn.map((project) => ({
    id: project.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<{ title: string }> {
  const { id } = await params;
  const project = dataProjectEn.find((p) => p.id === id);
  return {
    title: project ? project.judul : "Project Not Found",
  };
}

const ProjectDetailEn = async ({ params }: PageProps) => {
  const { id } = await params;
  const project = dataProjectEn.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="h-full w-full">
      {/* Konten */}
      <AnimateSlideIn>
        <div className="z-20 mx-auto h-full w-full max-w-4xl px-5 py-20 md:px-10">
          <Link
            href={"/project"}
            className="flex cursor-pointer items-center gap-2 text-lg text-neutral-400"
          >
            <div className="rounded-full border border-gray-400 md:border-2">
              <IoMdArrowBack className="h-3 w-3 md:h-4 md:w-4" />
            </div>
            <p className="font-sans text-xs transition-all duration-300 hover:translate-x-1 md:text-base">
              Back
            </p>
          </Link>

          <div className="mt-3 font-sans text-2xl font-semibold text-white md:text-3xl">
            {project?.judul}
          </div>
          <div className="mt-2 font-sans text-sm text-neutral-400 md:text-base">
            {project?.desc}
          </div>

          <div className="mt-5 border-t border-dashed border-gray-600 py-4">
            <div className="flex flex-col gap-y-2 text-gray-300 md:flex-row md:items-center md:justify-between md:gap-y-0">
              <div className="flex items-center gap-3">
                <p className="text-xs md:text-base">Tech Stack :</p>
                {project.framework.map((tech, idx) => {
                  return (
                    <Image
                      key={idx}
                      alt={`Framework-${tech.img}`}
                      width={150}
                      height={150}
                      src={`/skill/${tech.img}`}
                      className="h-5 w-5 object-cover md:h-6 md:w-6"
                    />
                  );
                })}
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="flex items-center gap-2 transition-all duration-300 hover:scale-[102%]"
                >
                  <FaGithub size={18} />
                  <p className="font-sans text-xs text-teal-600 transition-all duration-300 hover:text-teal-500 md:text-base">
                    Source Code
                  </p>
                </Link>
                {project.demo && (
                  <div>
                    <span className="h-3 w-[1px] bg-gray-600"></span>
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      className="flex items-center gap-2 transition-all duration-300 hover:scale-[102%]"
                    >
                      <BsBoxArrowUpRight size={15} />
                      <p className="font-sans text-xs text-teal-600 transition-all duration-300 hover:text-teal-500 md:text-base">
                        Live Demo
                      </p>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-5 overflow-hidden">
              <Image
                alt={`Thumbnail-${project.judul}`}
                width={1000}
                height={400}
                src={`/project/${project.thumbnail}`}
                className="w-full object-cover transition-all duration-300 hover:scale-[102%]"
              />
            </div>

            <div className="mt-6 text-[#D4D4D4]">
              <p className="font-sans text-xl font-medium md:text-2xl">
                How to Start this project
              </p>

              <div className="mt-8 flex flex-col gap-y-8">
                <div>
                  <p className="font-sans text-lg font-medium md:text-xl">
                    1. Clone using git
                  </p>
                  <div className="relative mt-5 rounded-lg bg-hitam px-5 py-5 font-sans text-sm font-medium md:text-base">
                    <p>git clone {project.githubLink}</p>

                    <div className="absolute right-2 top-2 cursor-pointer rounded-md border-2 border-neutral-400 p-1 text-neutral-400">
                      <LuClipboardCopy />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-sans text-lg font-medium md:text-xl">
                    2. Install dependencies
                  </p>
                  <div className="relative mt-5 rounded-lg bg-hitam px-5 py-5 font-sans text-sm font-medium md:text-base">
                    <p>npm install</p>
                    <p># or</p>
                    <p>yarn</p>

                    <div className="absolute right-2 top-2 cursor-pointer rounded-md border-2 border-neutral-400 p-1 text-neutral-400">
                      <LuClipboardCopy />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-sans text-lg font-medium md:text-xl">
                    3. Run development server
                  </p>
                  <div className="relative mt-5 rounded-lg bg-hitam px-5 py-5 font-sans text-sm font-medium md:text-base">
                    <p>npm install</p>
                    <p># or</p>
                    <p>yarn dev</p>
                    <p># or</p>
                    <p>pnpm run dev</p>
                    <div className="absolute right-2 top-2 cursor-pointer rounded-md border-2 border-neutral-400 p-1 text-neutral-400">
                      <LuClipboardCopy />
                    </div>
                  </div>
                </div>

                <div className="font-sans text-sm md:text-base">
                  Open{" "}
                  <span className="cursor-pointer text-teal-500 hover:underline">
                    http://localhost:3000
                  </span>{" "}
                  with your browser to see the result
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateSlideIn>
    </div>
  );
};

export default ProjectDetailEn;
