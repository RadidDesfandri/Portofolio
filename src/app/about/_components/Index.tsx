"use client";

import GridPattern from "@/components/ui/animated-grid-pattern";
import Particles from "@/components/ui/particles";

const AboutpageEn = () => {
  return  <div className="h-screen w-screen bg-black">
  <div className="relative flex h-full flex-col items-center">
    <GridPattern />
    <Particles
      className="absolute inset-0"
      quantity={100}
      ease={80}
      refresh
    />

    {/* Content here */}
    <div className="z-20 mx-auto w-full max-w-4xl px-10 py-20">
      <div className="text-hijau text-4xl">About radid</div>
      <div className="text-white">white</div>
      <div className="text-hitam">hitam</div>
    </div>
  </div>
</div>
};

export default AboutpageEn;
