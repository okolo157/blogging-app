import React from "react";

export const Newsletter = () => {
  return (
    <div className="flex w-full lg:w-[1440px] justify-center sm:px-4 bg-white pb-10 sm:pb-[40px] px-4 ">
      <div className="bg-[#5712441A] h-[273px] flex flex-col text-[#151515] rounded-lg p-6 sm:p-[64px] sm:max-h-[273px] gap-4 sm:gap-[20px] w-full max-w-[1312px]">
        <div className="gap-3 sm:gap-[14px] max-w-[836px]">
          <p className="w-full sm:w-[318px] font-bold text-xl sm:text-[24px] py-2 sm:py-4">
            Sign up for our Newsletter
          </p>
          <p className="font-normal text-base sm:text-[20px] py-1 sm:py-2">
            Subscribe to receive our latest company updates
          </p>
        </div>

        <div className="w-full justify-between flex flex-col sm:flex-row gap-4 sm:gap-[20px] max-h-[53px]">
          <input
            className="rounded-lg w-full border h-[48px] sm:h-[53px] p-2 sm:p-[10px] gap-[10px] border-[#C4C4C4]"
            type="text"
            placeholder="Enter your email"
          />
          <button className="h-[48px] max-w-[129px] lg:w-full lg:h-[53px] sm:h-[53px] rounded p-2 sm:p-[12px_24px] gap-[10px] bg-[#571244] text-white ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
