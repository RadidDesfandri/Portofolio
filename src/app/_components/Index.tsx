import GridPattern from "@/components/ui/animated-grid-pattern";
import Particles from "@/components/ui/particles";
import React from "react";

const HomepageEn = () => {
  return (
    <div className="h-screen w-screen bg-black">
      <div className="relative flex h-full flex-col items-center">
        <GridPattern />
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          refresh
        />

        {/* Content here */}
        <div className="z-20 mx-auto w-full max-w-5xl px-10 py-20">
          <div className="text-hijau text-4xl">Portofolio radid</div>
          <div className="text-white">white</div>
          <div className="text-hitam">hitam</div>
        </div>
      </div>
    </div>
  );
};

export default HomepageEn;
