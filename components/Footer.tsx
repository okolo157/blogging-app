import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[#11040E] p-8 md:p-16 w-full lg:w-[1440px]">
      <div className="w-full max-w-[1312px] mx-auto flex flex-col md:flex-row justify-between gap-8">
        <section className="max-w-[356px] flex flex-col gap-4">
          <Image
            src="/images/logo.webp"
            alt="footer tobams logo"
            width={188}
            height={72}
          />
          <p className="font-normal text-[16px] text-white">
            <span>
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </span>
          </p>
          <div className="flex gap-4">
            <Image
              src="/images/linkedin.svg"
              alt="linkedin logo"
              width={40}
              height={41}
            />
            <Image
              src="/images/instagram.svg"
              alt="instagram logo"
              width={40}
              height={41}
            />
            <Image
              src="/images/twitter.svg"
              alt="twitter logo"
              width={40}
              height={41}
            />
          </div>
        </section>

        <section className="cursor-pointer max-w-[295px] flex flex-col gap-4">
          <h2 className="font-bold text-[20px] text-white">What We Do</h2>
          <div className="flex flex-col gap-2">
            {[
              "Sustainability Services",
              "Strategy Planning and Implementation",
              "Tech Talent Solutions",
              "Training and Development",
              "IT Consulting Services",
              "Social Impact",
              "Talent Recruitment",
            ].map((item, index) => (
              <p key={index} className="font-normal text-[16px] text-white">
                <span>{item}</span>
              </p>
            ))}
          </div>
        </section>

        <section className="max-w-[295px] flex flex-col gap-4">
          <h2 className="font-bold text-[20px] text-white">Company</h2>
          <div className="flex flex-col gap-2">
            {[
              "About",
              "Jobs",
              "Projects",
              "Our founder",
              "Business Model",
              "The Team",
              "Contact Us",
              "Blog",
              "FAQs",
              "Testimonials",
            ].map((item, index) => (
              <p key={index} className="font-normal text-[16px] text-white">
                <span>{item}</span>
              </p>
            ))}
          </div>
        </section>

        <section className="max-w-[295px] flex flex-col gap-4">
          <h2 className="font-bold text-[20px] text-white">Solution</h2>
          <div className="flex flex-col gap-2">
            {[
              "Tobams Group Academy",
              "Help a Tech Talent",
              "Campus Ambassadors Program",
              "Join Our Platform",
              "Pricing",
              "Book a Consultation",
              "Join Our Slack Community",
            ].map((item, index) => (
              <p key={index} className="font-normal text-[16px] text-white">
                <span>{item}</span>
              </p>
            ))}
          </div>
        </section>
      </div>

      <section className="max-w-[1312px] mt-10 w-full mx-auto">
        <div className="bg-[#FFFFFF0F] flex flex-col md:flex-row-reverse md:justify-center rounded-lg p-6 md:p-[24px] gap-6 md:gap-[24px]">
          <div className="flex flex-col gap-4 md:gap-[10px] flex-[20%]">
            <p className="font-bold text-[20px]">Contact Information</p>
            <p className="flex items-center gap-4">
              <svg
                width="20"
                height="17"
                viewBox="0 0 20 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 16.9714C1.45 16.9714 0.979002 16.7754 0.587002 16.3834C0.195002 15.9914 -0.000664969 15.5208 1.69779e-06 14.9714V2.97144C1.69779e-06 2.42144 0.196002 1.95044 0.588002 1.55844C0.980002 1.16644 1.45067 0.970771 2 0.971437H18C18.55 0.971437 19.021 1.16744 19.413 1.55944C19.805 1.95144 20.0007 2.4221 20 2.97144V14.9714C20 15.5214 19.804 15.9924 19.412 16.3844C19.02 16.7764 18.5493 16.9721 18 16.9714H2ZM10 9.97144L18 4.97144V2.97144L10 7.97144L2 2.97144V4.97144L10 9.97144Z"
                  fill="#EF4353"
                />
              </svg>
              theteam@tobamsgroup.com
            </p>
            <p className="flex items-center gap-4">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.23 13.2314L13.69 12.9414C13.3914 12.9064 13.0886 12.9394 12.8046 13.0382C12.5206 13.1369 12.2626 13.2987 12.05 13.5114L10.21 15.3514C7.37123 13.9077 5.06382 11.6003 3.62004 8.76145L5.47004 6.91145C5.90004 6.48145 6.11004 5.88145 6.04004 5.27145L5.75004 2.75145C5.69335 2.26362 5.45923 1.81368 5.09228 1.48729C4.72532 1.16091 4.25115 0.980863 3.76004 0.981447H2.03004C0.900041 0.981447 -0.0399593 1.92145 0.0300407 3.05145C0.560041 11.5914 7.39004 18.4114 15.92 18.9414C17.05 19.0114 17.99 18.0714 17.99 16.9414V15.2114C18 14.2014 17.24 13.3514 16.23 13.2314Z"
                  fill="#EF4353"
                />
              </svg>
              +447886600748
            </p>
          </div>

          <div className="hidden md:block h-[133px] w-[1px] bg-purple-300 opacity-20"></div>

          <div className="flex flex-col gap-4 md:gap-[10px] flex-[80%] ">
            <p className="font-bold text-xl">Registered offices</p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <p className="flex flex-col text-base">
                <span className="text-[#bb3745]">United Kingdom</span>
                07451196 (Registered by Company House) Vine Cottages, 215 North
                Street, Romford, Essex, United Kingdom, RM1 4QA
              </p>
              <div className="hidden md:block h-[90px] w-[1px] bg-purple-300 opacity-20"></div>
              <p className="flex flex-col text-base">
                <span className="text-[#bb3745]">Nigeria</span>
                RC 1048722 (Registered by the Corporate Affairs Commission) 4,
                Muaz Close, Angwar-Rimi
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
