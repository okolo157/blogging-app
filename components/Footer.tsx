import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[#11040E] p-8 md:p-16 w-full">
      <div className="w-full max-w-[1312px] mx-auto flex flex-col md:flex-row justify-between gap-8">
        <section className="max-w-[356px] flex flex-col gap-4">
          <Image
            src="/images/bg.png"
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
            <svg
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.578369" width="40" height="40" rx="20" fill="white" />
              <path
                d="M14.47 13.5789C14.4697 14.1093 14.2588 14.6179 13.8835 14.9928C13.5082 15.3677 12.9994 15.5781 12.469 15.5779C11.9386 15.5776 11.43 15.3666 11.0551 14.9914C10.6802 14.6161 10.4697 14.1073 10.47 13.5769C10.4703 13.0464 10.6812 12.5378 11.0565 12.163C11.4318 11.7881 11.9406 11.5776 12.471 11.5779C13.0014 11.5781 13.51 11.7891 13.8849 12.1644C14.2598 12.5396 14.4703 13.0484 14.47 13.5789ZM14.53 17.0589H10.53V29.5789H14.53V17.0589ZM20.85 17.0589H16.87V29.5789H20.81V23.0089C20.81 19.3489 25.58 19.0089 25.58 23.0089V29.5789H29.53V21.6489C29.53 15.4789 22.47 15.7089 20.81 18.7389L20.85 17.0589Z"
                fill="#151515"
              />
            </svg>
            <svg
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.578369" width="40" height="40" rx="20" fill="white" />
              <path
                d="M21.0281 10.5794C21.7578 10.5766 22.4875 10.5839 23.2171 10.6014L23.4111 10.6084C23.6351 10.6164 23.8561 10.6264 24.1231 10.6384C25.1871 10.6884 25.9131 10.8564 26.5501 11.1034C27.2101 11.3574 27.7661 11.7014 28.3221 12.2574C28.8304 12.757 29.2239 13.3613 29.4751 14.0284C29.7221 14.6654 29.8901 15.3924 29.9401 16.4564C29.9521 16.7224 29.9621 16.9444 29.9701 17.1684L29.9761 17.3624C29.9938 18.0915 30.0015 18.821 29.9991 19.5504L30.0001 20.2964V21.6064C30.0025 22.3361 29.9949 23.0658 29.9771 23.7954L29.9711 23.9894C29.9631 24.2134 29.9531 24.4344 29.9411 24.7014C29.8911 25.7654 29.7211 26.4914 29.4751 27.1284C29.2247 27.7961 28.8312 28.401 28.3221 28.9004C27.822 29.4087 27.2174 29.8021 26.5501 30.0534C25.9131 30.3004 25.1871 30.4684 24.1231 30.5184C23.8561 30.5304 23.6351 30.5404 23.4111 30.5484L23.2171 30.5544C22.4875 30.5721 21.7578 30.5798 21.0281 30.5774L20.2821 30.5784H18.9731C18.2433 30.5808 17.5136 30.5732 16.7841 30.5554L16.5901 30.5494C16.3527 30.5408 16.1153 30.5308 15.8781 30.5194C14.8141 30.4694 14.0881 30.2994 13.4501 30.0534C12.7827 29.8027 12.1783 29.4092 11.6791 28.9004C11.1701 28.4006 10.7763 27.7959 10.5251 27.1284C10.2781 26.4914 10.1101 25.7654 10.0601 24.7014C10.0489 24.4641 10.0389 24.2267 10.0301 23.9894L10.0251 23.7954C10.0066 23.0658 9.99829 22.3361 10.0001 21.6064V19.5504C9.99727 18.821 10.0046 18.0916 10.0221 17.3624L10.0291 17.1684C10.0371 16.9444 10.0471 16.7224 10.0591 16.4564C10.1091 15.3914 10.2771 14.6664 10.5241 14.0284C10.7754 13.361 11.17 12.7568 11.6801 12.2584C12.179 11.7491 12.783 11.3549 13.4501 11.1034C14.0881 10.8564 14.8131 10.6884 15.8781 10.6384L16.5901 10.6084L16.7841 10.6034C17.5132 10.5849 18.2426 10.5766 18.9721 10.5784L21.0281 10.5794ZM20.0001 15.5794C19.3376 15.57 18.6798 15.6924 18.065 15.9394C17.4503 16.1865 16.8907 16.5532 16.4189 17.0184C15.9471 17.4836 15.5725 18.0379 15.3167 18.6491C15.061 19.2603 14.9293 19.9163 14.9293 20.5789C14.9293 21.2414 15.061 21.8974 15.3167 22.5086C15.5725 23.1198 15.9471 23.6741 16.4189 24.1393C16.8907 24.6045 17.4503 24.9712 18.065 25.2183C18.6798 25.4653 19.3376 25.5877 20.0001 25.5784C21.3261 25.5784 22.5979 25.0516 23.5356 24.1139C24.4733 23.1762 25.0001 21.9044 25.0001 20.5784C25.0001 19.2523 24.4733 17.9805 23.5356 17.0428C22.5979 16.1051 21.3261 15.5794 20.0001 15.5794ZM20.0001 17.5794C20.3986 17.572 20.7945 17.6442 21.1649 17.7916C21.5352 17.939 21.8724 18.1587 22.1568 18.4379C22.4413 18.7171 22.6672 19.0502 22.8215 19.4177C22.9758 19.7852 23.0553 20.1798 23.0553 20.5783C23.0554 20.9769 22.976 21.3715 22.8219 21.7391C22.6677 22.1066 22.4419 22.4398 22.1576 22.7191C21.8732 22.9984 21.536 23.2182 21.1658 23.3658C20.7955 23.5133 20.3996 23.5856 20.0011 23.5784C19.2054 23.5784 18.4423 23.2623 17.8797 22.6997C17.3171 22.1371 17.0011 21.374 17.0011 20.5784C17.0011 19.7827 17.3171 19.0196 17.8797 18.457C18.4423 17.8944 19.2054 17.5784 20.0011 17.5784L20.0001 17.5794ZM25.2501 14.0794C24.9275 14.0923 24.6224 14.2295 24.3987 14.4623C24.175 14.6951 24.05 15.0055 24.05 15.3284C24.05 15.6512 24.175 15.9616 24.3987 16.1944C24.6224 16.4272 24.9275 16.5644 25.2501 16.5774C25.5816 16.5774 25.8995 16.4457 26.1339 16.2112C26.3684 15.9768 26.5001 15.6589 26.5001 15.3274C26.5001 14.9958 26.3684 14.6779 26.1339 14.4435C25.8995 14.2091 25.5816 14.0774 25.2501 14.0774V14.0794Z"
                fill="#151515"
              />
            </svg>
            <svg
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.578369" width="40" height="40" rx="20" fill="white" />
              <path
                d="M9 10.5784H11.5L26.5 30.5784H24L9 10.5784Z"
                fill="#151515"
              />
              <path
                d="M13.5 10.5784H16L31 30.5784H28.5L13.5 10.5784Z"
                fill="#151515"
              />
              <path d="M11 10.5784H16V12.5784H11V10.5784Z" fill="#151515" />
              <path d="M24 30.5784H29V28.5784H24V30.5784Z" fill="#151515" />
              <path
                d="M26.5 10.5784H30L13 30.5784H9.5L26.5 10.5784Z"
                fill="#151515"
              />
            </svg>
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
