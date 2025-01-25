import React from "react";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="relative w-full bg-none flex flex-col">
      <div className="relative w-full lg:w-[1440px] h-[300px] sm:h-[400px] lg:h-[500px]">
        <Image
          className="w-full h-full opacity-20 object-cover"
          src="/images/header-bg.webp"
          alt="blog image"
          width={1440}
          height={500}
          priority
        />
        <div className="absolute inset-0 flex flex-col gap-[15px] items-center justify-center px-4 sm:px-6 lg:px-8">
          <p className="text-2xl sm:text-3xl lg:text-[48px] leading-[1.2] sm:leading-[1.3] lg:leading-[1.4] w-[327px] lg:w-[1116px] text-center font-bold text-white">
            Stay Ahead Of The Curve: Stay Informed With Our Blog For The Latest
            Industry Insights
          </p>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-center text-gray-200">
            Insights that inspire success: uncover a wealth of knowledge by
            staying updated
          </p>
        </div>
      </div>
    </div>
  );
};
