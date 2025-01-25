import React from "react";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="relative w-[1440px] bg-none flex flex-col">
      <div className="relative w-full h-[500px]">
        <Image
          className="w-full h-full opacity-20 object-cover"
          src="/images/header-bg.webp"
          alt="blog image"
          width={1440}
          height={500}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-[48px] w-[1116px] text-center font-bold text-white">
            Stay Ahead Of The Curve: Stay Informed With Our Blog For The Latest
            Industry Insights
          </p>
          <p>
            Insights that inspire success: uncover a wealth of knowledge by
            staying updated
          </p>
        </div>
      </div>
    </div>
  );
};
