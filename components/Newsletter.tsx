import React from "react";

export const Newsletter = () => {
  return (
    <div className="flex w-[1440px] justify-center bg-white pb-[40px]">
      <div className="bg-[#5712441A] flex flex-col text-[#151515] rounded-lg p-[64px] gap-[20px] w-[1312px]">
        <div className="gap-[14px] max-w-[836px]">
          <p className="w-[318px] font-bold text-[24px] py-4">
            Sign up for our Newsletter
          </p>
          <p className="font-normal text-[20px] py-2">
            Subscribe to receive our latest company updates
          </p>
        </div>
        <div className="w-full justify-between flex gap-[20px] max-h-[53px]">
          <input
            className="rounded-lg w-full border h-full p-[10px] gap-[10px] border-[#C4C4C4]"
            type="text"
            placeholder="Enter your email"
          />
          <button className="h-[53px] rounded p-[12px_24px] gap-[10px] bg-[#571244] text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
