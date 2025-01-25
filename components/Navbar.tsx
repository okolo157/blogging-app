"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number): void => {
    setSelectedIndex(index);
  };

  return (
    <div className="bg-white w-full lg:w-[1440px] h-auto">
      <div className="flex justify-between p-4 lg:p-10 w-full h-16 lg:h-[104px] border-b border-gray-300 mx-auto">
        <Link href="/" passHref>
          <Image
            src="/images/bg.png"
            alt="logo image"
            width={165.71}
            height={64}
            className="w-24 lg:w-[165px] lg:h-[64px] cursor-pointer self-center"
          />
        </Link>

        <button className="lg:hidden">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.61863 25.3813C4.57329 27.3333 7.71463 27.3333 14 27.3333C20.2853 27.3333 23.428 27.3333 25.38 25.38C27.3333 23.4293 27.3333 20.2853 27.3333 14C27.3333 7.71467 27.3333 4.572 25.38 2.61867C23.4293 0.666666 20.2853 0.666666 14 0.666666C7.71463 0.666666 4.57196 0.666666 2.61863 2.61867C0.666626 4.57333 0.666626 7.71467 0.666626 14C0.666626 20.2853 0.666626 23.4293 2.61863 25.3813ZM23 19.3333C23 19.5985 22.8946 19.8529 22.7071 20.0404C22.5195 20.228 22.2652 20.3333 22 20.3333H5.99996C5.73474 20.3333 5.48039 20.228 5.29285 20.0404C5.10532 19.8529 4.99996 19.5985 4.99996 19.3333C4.99996 19.0681 5.10532 18.8138 5.29285 18.6262C5.48039 18.4387 5.73474 18.3333 5.99996 18.3333H22C22.2652 18.3333 22.5195 18.4387 22.7071 18.6262C22.8946 18.8138 23 19.0681 23 19.3333ZM22 15C22.2652 15 22.5195 14.8946 22.7071 14.7071C22.8946 14.5196 23 14.2652 23 14C23 13.7348 22.8946 13.4804 22.7071 13.2929C22.5195 13.1054 22.2652 13 22 13H5.99996C5.73474 13 5.48039 13.1054 5.29285 13.2929C5.10532 13.4804 4.99996 13.7348 4.99996 14C4.99996 14.2652 5.10532 14.5196 5.29285 14.7071C5.48039 14.8946 5.73474 15 5.99996 15H22ZM23 8.66667C23 8.93188 22.8946 9.18624 22.7071 9.37377C22.5195 9.56131 22.2652 9.66667 22 9.66667H5.99996C5.73474 9.66667 5.48039 9.56131 5.29285 9.37377C5.10532 9.18624 4.99996 8.93188 4.99996 8.66667C4.99996 8.40145 5.10532 8.1471 5.29285 7.95956C5.48039 7.77202 5.73474 7.66667 5.99996 7.66667H22C22.2652 7.66667 22.5195 7.77202 22.7071 7.95956C22.8946 8.1471 23 8.40145 23 8.66667Z"
              fill="#151515"
            />
          </svg>
        </button>

        <div className="hidden lg:flex w-[374px] h-[48px] gap-[24px]">
          <button className="rounded p-[8px_16px] gap-[12px] flex items-center bg-[#571244]">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 16C0 7.16343 7.16344 -1.52588e-05 16 -1.52588e-05C24.8366 -1.52588e-05 32 7.16343 32 16C32 24.8365 24.8366 32 16 32C7.16344 32 0 24.8365 0 16Z"
                fill="#DDD0DA"
              />
              <path
                d="M10 25V23C10 21.9391 10.4214 20.9217 11.1716 20.1716C11.9217 19.4214 12.9391 19 14 19H18C19.0609 19 20.0783 19.4214 20.8284 20.1716C21.5786 20.9217 22 21.9391 22 23V25M12 11C12 12.0609 12.4214 13.0783 13.1716 13.8284C13.9217 14.5786 14.9391 15 16 15C17.0609 15 18.0783 14.5786 18.8284 13.8284C19.5786 13.0783 20 12.0609 20 11C20 9.93912 19.5786 8.9217 18.8284 8.17156C18.0783 7.42141 17.0609 6.99998 16 6.99998C14.9391 6.99998 13.9217 7.42141 13.1716 8.17156C12.4214 8.9217 12 9.93912 12 11Z"
                stroke="#571244"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="max-w-[67px] max-h-[27px] text-base text-white">
              Account
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83337 8.33332L10 12.5L14.1667 8.33332"
                stroke="#DDD0DA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="p-[10px_20px] rounded gap-[10px] bg-[#EF4353] text-white">
            Take Assessment
          </button>
        </div>
      </div>

      <div className="hidden lg:flex w-full h-[69px] px-[64px] py-[20px] gap-0 justify-center mx-auto">
        <nav className="flex gap-[32px] items-center">
          {[
            { name: "About", hasCaret: true },
            { name: "What We Do", hasCaret: true },
            { name: "Jobs", hasCaret: true },
            { name: "Projects", hasCaret: false },
            { name: "TG Academy", hasCaret: false },
            { name: "Strategic Partnerships", hasCaret: false },
            { name: "Pricing", hasCaret: false },
            { name: "Book a Consultation", hasCaret: false },
          ].map((item, index) => (
            <div
              style={{
                color: selectedIndex === index ? "#571244" : "#151515",
                textDecoration: selectedIndex === index ? "underline" : "",
                textDecorationThickness: "1px",
                textUnderlineOffset: "8px",
              }}
              onClick={() => {
                handleSelect(index);
              }}
              key={index}
              className="group relative inline-flex items-center gap-[10px] w-auto h-auto cursor-pointer"
            >
              <span className="text-base">{item.name}</span>
              {item.hasCaret && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#151515"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};
