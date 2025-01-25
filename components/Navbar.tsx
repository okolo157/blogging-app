"use client";

import Image from "next/image";
import React, { useState } from "react";


export const Navbar = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number): void => {
    setSelectedIndex(index);
  };

  return (
    <div className="bg-white w-[1440px] h-[173px] gap-0">
      <div className="flex justify-between p-10 w-full max-w-[1440px] h-[104px] py-6 px-16 gap-0 border-b border-gray-300 mx-auto">
        <Image
          src="/images/bg.png"
          alt="background image"
          width={165.71}
          height={64}
          className=""
        />
        <div className="w-[374px] h-[48px] gap-[24px] flex">
          <svg
            width="167"
            height="48"
            viewBox="0 0 167 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 3.99998C0.5 2.06699 2.067 0.499985 4 0.499985H163C164.933 0.499985 166.5 2.06699 166.5 3.99998V44C166.5 45.933 164.933 47.5 163 47.5H4C2.067 47.5 0.5 45.933 0.5 44V3.99998Z"
              fill="#571244"
            />
            <path
              d="M0.5 3.99998C0.5 2.06699 2.067 0.499985 4 0.499985H163C164.933 0.499985 166.5 2.06699 166.5 3.99998V44C166.5 45.933 164.933 47.5 163 47.5H4C2.067 47.5 0.5 45.933 0.5 44V3.99998Z"
              stroke="#571244"
            />
            <path
              d="M16 24C16 15.1634 23.1634 7.99998 32 7.99998C40.8366 7.99998 48 15.1634 48 24C48 32.8365 40.8366 40 32 40C23.1634 40 16 32.8365 16 24Z"
              fill="#DDD0DA"
            />
            <path
              d="M26 33V31C26 29.9391 26.4214 28.9217 27.1716 28.1716C27.9217 27.4214 28.9391 27 30 27H34C35.0609 27 36.0783 27.4214 36.8284 28.1716C37.5786 28.9217 38 29.9391 38 31V33M28 19C28 20.0609 28.4214 21.0783 29.1716 21.8284C29.9217 22.5786 30.9391 23 32 23C33.0609 23 34.0783 22.5786 34.8284 21.8284C35.5786 21.0783 36 20.0609 36 19C36 17.9391 35.5786 16.9217 34.8284 16.1716C34.0783 15.4214 33.0609 15 32 15C30.9391 15 29.9217 15.4214 29.1716 16.1716C28.4214 16.9217 28 17.9391 28 19Z"
              stroke="#571244"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M60.2029 29.5L65.8549 16.81H67.4029L73.0729 29.5H71.1649L69.6169 25.9L70.4629 26.404H62.7949L63.6229 25.9L62.0929 29.5H60.2029ZM66.6109 18.88L63.8929 25.324L63.4429 24.892H69.7969L69.3829 25.324L66.6469 18.88H66.6109ZM78.3189 29.662C77.4189 29.662 76.6389 29.476 75.9789 29.104C75.3309 28.72 74.8269 28.186 74.4669 27.502C74.1069 26.806 73.9269 25.99 73.9269 25.054C73.9269 24.13 74.1069 23.332 74.4669 22.66C74.8269 21.988 75.3309 21.472 75.9789 21.112C76.6389 20.74 77.4189 20.554 78.3189 20.554C78.8709 20.554 79.4169 20.65 79.9569 20.842C80.4969 21.022 80.9409 21.286 81.2889 21.634L80.7129 22.912C80.3889 22.6 80.0229 22.372 79.6149 22.228C79.2069 22.072 78.8229 21.994 78.4629 21.994C77.6109 21.994 76.9509 22.264 76.4829 22.804C76.0269 23.332 75.7989 24.088 75.7989 25.072C75.7989 26.056 76.0269 26.83 76.4829 27.394C76.9509 27.946 77.6109 28.222 78.4629 28.222C78.8229 28.222 79.2069 28.15 79.6149 28.006C80.0229 27.85 80.3889 27.616 80.7129 27.304L81.2889 28.6C80.9409 28.924 80.4909 29.182 79.9389 29.374C79.3989 29.566 78.8589 29.662 78.3189 29.662ZM86.5455 29.662C85.6455 29.662 84.8655 29.476 84.2055 29.104C83.5575 28.72 83.0535 28.186 82.6935 27.502C82.3335 26.806 82.1535 25.99 82.1535 25.054C82.1535 24.13 82.3335 23.332 82.6935 22.66C83.0535 21.988 83.5575 21.472 84.2055 21.112C84.8655 20.74 85.6455 20.554 86.5455 20.554C87.0975 20.554 87.6435 20.65 88.1835 20.842C88.7235 21.022 89.1675 21.286 89.5155 21.634L88.9395 22.912C88.6155 22.6 88.2495 22.372 87.8415 22.228C87.4335 22.072 87.0495 21.994 86.6895 21.994C85.8375 21.994 85.1775 22.264 84.7095 22.804C84.2535 23.332 84.0255 24.088 84.0255 25.072C84.0255 26.056 84.2535 26.83 84.7095 27.394C85.1775 27.946 85.8375 28.222 86.6895 28.222C87.0495 28.222 87.4335 28.15 87.8415 28.006C88.2495 27.85 88.6155 27.616 88.9395 27.304L89.5155 28.6C89.1675 28.924 88.7175 29.182 88.1655 29.374C87.6255 29.566 87.0855 29.662 86.5455 29.662ZM94.718 29.662C93.83 29.662 93.062 29.476 92.414 29.104C91.778 28.732 91.28 28.204 90.92 27.52C90.56 26.836 90.38 26.032 90.38 25.108C90.38 24.172 90.56 23.368 90.92 22.696C91.28 22.012 91.778 21.484 92.414 21.112C93.062 20.74 93.83 20.554 94.718 20.554C95.594 20.554 96.35 20.74 96.986 21.112C97.634 21.484 98.138 22.012 98.498 22.696C98.858 23.38 99.038 24.184 99.038 25.108C99.038 26.032 98.858 26.836 98.498 27.52C98.138 28.204 97.634 28.732 96.986 29.104C96.35 29.476 95.594 29.662 94.718 29.662ZM94.7 28.258C95.456 28.258 96.062 27.988 96.518 27.448C96.974 26.908 97.202 26.128 97.202 25.108C97.202 24.076 96.974 23.296 96.518 22.768C96.062 22.24 95.456 21.976 94.7 21.976C93.956 21.976 93.356 22.24 92.9 22.768C92.444 23.296 92.216 24.076 92.216 25.108C92.216 26.128 92.444 26.908 92.9 27.448C93.356 27.988 93.956 28.258 94.7 28.258ZM104.212 29.662C103.504 29.662 102.91 29.53 102.43 29.266C101.962 29.002 101.608 28.612 101.368 28.096C101.14 27.568 101.026 26.908 101.026 26.116V20.716H102.844V26.134C102.844 26.602 102.904 26.992 103.024 27.304C103.156 27.616 103.354 27.844 103.618 27.988C103.894 28.132 104.236 28.204 104.644 28.204C105.1 28.204 105.502 28.102 105.85 27.898C106.198 27.694 106.468 27.4 106.66 27.016C106.852 26.632 106.948 26.188 106.948 25.684V20.716H108.766V29.5H107.002V27.574H107.236C106.996 28.246 106.612 28.762 106.084 29.122C105.556 29.482 104.932 29.662 104.212 29.662ZM111.328 29.5V20.716H113.092V22.588H112.894C113.158 21.916 113.572 21.412 114.136 21.076C114.7 20.728 115.348 20.554 116.08 20.554C116.776 20.554 117.352 20.686 117.808 20.95C118.276 21.202 118.624 21.592 118.852 22.12C119.08 22.636 119.194 23.29 119.194 24.082V29.5H117.376V24.19C117.376 23.686 117.31 23.278 117.178 22.966C117.046 22.642 116.848 22.402 116.584 22.246C116.32 22.09 115.978 22.012 115.558 22.012C115.078 22.012 114.652 22.114 114.28 22.318C113.92 22.522 113.638 22.816 113.434 23.2C113.242 23.584 113.146 24.028 113.146 24.532V29.5H111.328ZM125.443 29.662C124.351 29.662 123.529 29.38 122.977 28.816C122.437 28.252 122.167 27.436 122.167 26.368V22.12H120.457V20.716H122.167V18.07H123.985V20.716H126.703V22.12H123.985V26.224C123.985 26.86 124.117 27.34 124.381 27.664C124.657 27.988 125.101 28.15 125.713 28.15C125.893 28.15 126.073 28.126 126.253 28.078C126.445 28.03 126.631 27.982 126.811 27.934L127.099 29.302C126.919 29.41 126.667 29.494 126.343 29.554C126.031 29.626 125.731 29.662 125.443 29.662Z"
              fill="white"
            />
            <path
              d="M136.833 22.3333L141 26.5L145.167 22.3333"
              stroke="#DDD0DA"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            width="183"
            height="48"
            viewBox="0 0 183 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 3.99998C0 1.79084 1.79086 -1.52588e-05 4 -1.52588e-05H179C181.209 -1.52588e-05 183 1.79085 183 3.99998V44C183 46.2091 181.209 48 179 48H4C1.79086 48 0 46.2091 0 44V3.99998Z"
              fill="#EF4353"
            />
            <path
              d="M24.7488 29.5V18.376H20.2488V16.81H31.1028V18.376H26.6028V29.5H24.7488ZM33.878 29.662C33.266 29.662 32.714 29.542 32.222 29.302C31.742 29.062 31.364 28.738 31.088 28.33C30.812 27.922 30.674 27.46 30.674 26.944C30.674 26.296 30.836 25.786 31.16 25.414C31.496 25.03 32.042 24.76 32.798 24.604C33.566 24.436 34.598 24.352 35.894 24.352H36.74V25.468H35.912C35.264 25.468 34.718 25.492 34.274 25.54C33.83 25.588 33.476 25.666 33.212 25.774C32.948 25.87 32.756 26.008 32.636 26.188C32.528 26.368 32.474 26.584 32.474 26.836C32.474 27.292 32.63 27.664 32.942 27.952C33.254 28.228 33.686 28.366 34.238 28.366C34.682 28.366 35.072 28.264 35.408 28.06C35.744 27.844 36.008 27.556 36.2 27.196C36.404 26.836 36.506 26.422 36.506 25.954V23.884C36.506 23.2 36.362 22.708 36.074 22.408C35.786 22.108 35.312 21.958 34.652 21.958C34.148 21.958 33.644 22.036 33.14 22.192C32.636 22.336 32.12 22.57 31.592 22.894L31.034 21.616C31.346 21.4 31.706 21.214 32.114 21.058C32.522 20.902 32.948 20.782 33.392 20.698C33.848 20.602 34.286 20.554 34.706 20.554C35.51 20.554 36.17 20.68 36.686 20.932C37.214 21.184 37.604 21.568 37.856 22.084C38.108 22.6 38.234 23.266 38.234 24.082V29.5H36.524V27.538H36.686C36.59 27.982 36.41 28.366 36.146 28.69C35.894 29.002 35.576 29.242 35.192 29.41C34.808 29.578 34.37 29.662 33.878 29.662ZM40.738 29.5V16.81H42.556V24.55H42.592L46.408 20.716H48.658L44.032 25.36V24.514L48.982 29.5H46.714L42.592 25.486H42.556V29.5H40.738ZM53.9479 29.662C52.9879 29.662 52.1599 29.482 51.4639 29.122C50.7799 28.75 50.2459 28.228 49.8619 27.556C49.4899 26.872 49.3039 26.062 49.3039 25.126C49.3039 24.214 49.4899 23.416 49.8619 22.732C50.2339 22.048 50.7439 21.514 51.3919 21.13C52.0399 20.746 52.7779 20.554 53.6059 20.554C54.4219 20.554 55.1179 20.734 55.6939 21.094C56.2819 21.442 56.7319 21.94 57.0439 22.588C57.3559 23.236 57.5119 24.01 57.5119 24.91V25.522H50.7439V24.406H56.2879L55.9819 24.658C55.9819 23.758 55.7839 23.062 55.3879 22.57C54.9919 22.078 54.4219 21.832 53.6779 21.832C53.1139 21.832 52.6339 21.964 52.2379 22.228C51.8539 22.492 51.5599 22.858 51.3559 23.326C51.1519 23.794 51.0499 24.34 51.0499 24.964V25.072C51.0499 25.768 51.1579 26.356 51.3739 26.836C51.6019 27.304 51.9319 27.658 52.3639 27.898C52.7959 28.138 53.3299 28.258 53.9659 28.258C54.4699 28.258 54.9619 28.18 55.4419 28.024C55.9339 27.856 56.3959 27.598 56.8279 27.25L57.3679 28.51C56.9719 28.87 56.4619 29.152 55.8379 29.356C55.2139 29.56 54.5839 29.662 53.9479 29.662ZM63.1423 29.5L68.7943 16.81H70.3423L76.0123 29.5H74.1043L72.5563 25.9L73.4023 26.404H65.7343L66.5623 25.9L65.0323 29.5H63.1423ZM69.5503 18.88L66.8323 25.324L66.3823 24.892H72.7363L72.3223 25.324L69.5863 18.88H69.5503ZM80.4312 29.662C79.9632 29.662 79.5072 29.62 79.0632 29.536C78.6192 29.452 78.2112 29.332 77.8392 29.176C77.4672 29.02 77.1372 28.828 76.8492 28.6L77.3712 27.376C77.6712 27.58 77.9892 27.76 78.3252 27.916C78.6612 28.06 79.0092 28.168 79.3692 28.24C79.7412 28.312 80.1012 28.348 80.4492 28.348C81.0852 28.348 81.5652 28.234 81.8892 28.006C82.2132 27.778 82.3752 27.472 82.3752 27.088C82.3752 26.776 82.2672 26.536 82.0512 26.368C81.8352 26.188 81.5112 26.05 81.0792 25.954L79.3692 25.612C78.6252 25.456 78.0612 25.18 77.6772 24.784C77.2932 24.388 77.1012 23.884 77.1012 23.272C77.1012 22.72 77.2512 22.24 77.5512 21.832C77.8512 21.424 78.2712 21.112 78.8112 20.896C79.3512 20.668 79.9752 20.554 80.6832 20.554C81.0912 20.554 81.4872 20.596 81.8712 20.68C82.2552 20.764 82.6152 20.884 82.9512 21.04C83.2992 21.196 83.5932 21.394 83.8332 21.634L83.3112 22.858C83.0832 22.654 82.8192 22.48 82.5192 22.336C82.2312 22.192 81.9312 22.084 81.6192 22.012C81.3072 21.928 80.9952 21.886 80.6832 21.886C80.0472 21.886 79.5672 22.006 79.2432 22.246C78.9312 22.474 78.7752 22.786 78.7752 23.182C78.7752 23.482 78.8712 23.728 79.0632 23.92C79.2552 24.112 79.5552 24.25 79.9632 24.334L81.6732 24.676C82.4532 24.832 83.0412 25.096 83.4372 25.468C83.8452 25.84 84.0492 26.344 84.0492 26.98C84.0492 27.532 83.8992 28.012 83.5992 28.42C83.2992 28.828 82.8732 29.14 82.3212 29.356C81.7812 29.56 81.1512 29.662 80.4312 29.662ZM89.1499 29.662C88.6819 29.662 88.2259 29.62 87.7819 29.536C87.3379 29.452 86.9299 29.332 86.5579 29.176C86.1859 29.02 85.8559 28.828 85.5679 28.6L86.0899 27.376C86.3899 27.58 86.7079 27.76 87.0439 27.916C87.3799 28.06 87.7279 28.168 88.0879 28.24C88.4599 28.312 88.8199 28.348 89.1679 28.348C89.8039 28.348 90.2839 28.234 90.6079 28.006C90.9319 27.778 91.0939 27.472 91.0939 27.088C91.0939 26.776 90.9859 26.536 90.7699 26.368C90.5539 26.188 90.2299 26.05 89.7979 25.954L88.0879 25.612C87.3439 25.456 86.7799 25.18 86.3959 24.784C86.0119 24.388 85.8199 23.884 85.8199 23.272C85.8199 22.72 85.9699 22.24 86.2699 21.832C86.5699 21.424 86.9899 21.112 87.5299 20.896C88.0699 20.668 88.6939 20.554 89.4019 20.554C89.8099 20.554 90.2059 20.596 90.5899 20.68C90.9739 20.764 91.3339 20.884 91.6699 21.04C92.0179 21.196 92.3119 21.394 92.5519 21.634L92.0299 22.858C91.8019 22.654 91.5379 22.48 91.2379 22.336C90.9499 22.192 90.6499 22.084 90.3379 22.012C90.0259 21.928 89.7139 21.886 89.4019 21.886C88.7659 21.886 88.2859 22.006 87.9619 22.246C87.6499 22.474 87.4939 22.786 87.4939 23.182C87.4939 23.482 87.5899 23.728 87.7819 23.92C87.9739 24.112 88.2739 24.25 88.6819 24.334L90.3919 24.676C91.1719 24.832 91.7599 25.096 92.1559 25.468C92.5639 25.84 92.7679 26.344 92.7679 26.98C92.7679 27.532 92.6179 28.012 92.3179 28.42C92.0179 28.828 91.5919 29.14 91.0399 29.356C90.4999 29.56 89.8699 29.662 89.1499 29.662ZM98.9127 29.662C97.9527 29.662 97.1247 29.482 96.4287 29.122C95.7447 28.75 95.2107 28.228 94.8267 27.556C94.4547 26.872 94.2687 26.062 94.2687 25.126C94.2687 24.214 94.4547 23.416 94.8267 22.732C95.1987 22.048 95.7087 21.514 96.3567 21.13C97.0047 20.746 97.7427 20.554 98.5707 20.554C99.3867 20.554 100.083 20.734 100.659 21.094C101.247 21.442 101.697 21.94 102.009 22.588C102.321 23.236 102.477 24.01 102.477 24.91V25.522H95.7087V24.406H101.253L100.947 24.658C100.947 23.758 100.749 23.062 100.353 22.57C99.9567 22.078 99.3867 21.832 98.6427 21.832C98.0787 21.832 97.5987 21.964 97.2027 22.228C96.8187 22.492 96.5247 22.858 96.3207 23.326C96.1167 23.794 96.0147 24.34 96.0147 24.964V25.072C96.0147 25.768 96.1227 26.356 96.3387 26.836C96.5667 27.304 96.8967 27.658 97.3287 27.898C97.7607 28.138 98.2947 28.258 98.9307 28.258C99.4347 28.258 99.9267 28.18 100.407 28.024C100.899 27.856 101.361 27.598 101.793 27.25L102.333 28.51C101.937 28.87 101.427 29.152 100.803 29.356C100.179 29.56 99.5487 29.662 98.9127 29.662ZM107.537 29.662C107.069 29.662 106.613 29.62 106.169 29.536C105.725 29.452 105.317 29.332 104.945 29.176C104.573 29.02 104.243 28.828 103.955 28.6L104.477 27.376C104.777 27.58 105.095 27.76 105.431 27.916C105.767 28.06 106.115 28.168 106.475 28.24C106.847 28.312 107.207 28.348 107.555 28.348C108.191 28.348 108.671 28.234 108.995 28.006C109.319 27.778 109.481 27.472 109.481 27.088C109.481 26.776 109.373 26.536 109.157 26.368C108.941 26.188 108.617 26.05 108.185 25.954L106.475 25.612C105.731 25.456 105.167 25.18 104.783 24.784C104.399 24.388 104.207 23.884 104.207 23.272C104.207 22.72 104.357 22.24 104.657 21.832C104.957 21.424 105.377 21.112 105.917 20.896C106.457 20.668 107.081 20.554 107.789 20.554C108.197 20.554 108.593 20.596 108.977 20.68C109.361 20.764 109.721 20.884 110.057 21.04C110.405 21.196 110.699 21.394 110.939 21.634L110.417 22.858C110.189 22.654 109.925 22.48 109.625 22.336C109.337 22.192 109.037 22.084 108.725 22.012C108.413 21.928 108.101 21.886 107.789 21.886C107.153 21.886 106.673 22.006 106.349 22.246C106.037 22.474 105.881 22.786 105.881 23.182C105.881 23.482 105.977 23.728 106.169 23.92C106.361 24.112 106.661 24.25 107.069 24.334L108.779 24.676C109.559 24.832 110.147 25.096 110.543 25.468C110.951 25.84 111.155 26.344 111.155 26.98C111.155 27.532 111.005 28.012 110.705 28.42C110.405 28.828 109.979 29.14 109.427 29.356C108.887 29.56 108.257 29.662 107.537 29.662ZM116.255 29.662C115.787 29.662 115.331 29.62 114.887 29.536C114.443 29.452 114.035 29.332 113.663 29.176C113.291 29.02 112.961 28.828 112.673 28.6L113.195 27.376C113.495 27.58 113.813 27.76 114.149 27.916C114.485 28.06 114.833 28.168 115.193 28.24C115.565 28.312 115.925 28.348 116.273 28.348C116.909 28.348 117.389 28.234 117.713 28.006C118.037 27.778 118.199 27.472 118.199 27.088C118.199 26.776 118.091 26.536 117.875 26.368C117.659 26.188 117.335 26.05 116.903 25.954L115.193 25.612C114.449 25.456 113.885 25.18 113.501 24.784C113.117 24.388 112.925 23.884 112.925 23.272C112.925 22.72 113.075 22.24 113.375 21.832C113.675 21.424 114.095 21.112 114.635 20.896C115.175 20.668 115.799 20.554 116.507 20.554C116.915 20.554 117.311 20.596 117.695 20.68C118.079 20.764 118.439 20.884 118.775 21.04C119.123 21.196 119.417 21.394 119.657 21.634L119.135 22.858C118.907 22.654 118.643 22.48 118.343 22.336C118.055 22.192 117.755 22.084 117.443 22.012C117.131 21.928 116.819 21.886 116.507 21.886C115.871 21.886 115.391 22.006 115.067 22.246C114.755 22.474 114.599 22.786 114.599 23.182C114.599 23.482 114.695 23.728 114.887 23.92C115.079 24.112 115.379 24.25 115.787 24.334L117.497 24.676C118.277 24.832 118.865 25.096 119.261 25.468C119.669 25.84 119.873 26.344 119.873 26.98C119.873 27.532 119.723 28.012 119.423 28.42C119.123 28.828 118.697 29.14 118.145 29.356C117.605 29.56 116.975 29.662 116.255 29.662ZM121.932 29.5V20.716H123.696V22.588H123.498C123.654 22.156 123.87 21.79 124.146 21.49C124.422 21.19 124.752 20.962 125.136 20.806C125.532 20.638 125.964 20.554 126.432 20.554C127.164 20.554 127.758 20.728 128.214 21.076C128.67 21.424 128.982 21.958 129.15 22.678H128.898C129.126 22.018 129.516 21.502 130.068 21.13C130.62 20.746 131.262 20.554 131.994 20.554C132.666 20.554 133.218 20.686 133.65 20.95C134.082 21.202 134.406 21.592 134.622 22.12C134.838 22.636 134.946 23.29 134.946 24.082V29.5H133.128V24.172C133.128 23.428 132.996 22.882 132.732 22.534C132.48 22.186 132.06 22.012 131.472 22.012C131.04 22.012 130.662 22.114 130.338 22.318C130.014 22.522 129.762 22.822 129.582 23.218C129.414 23.602 129.33 24.058 129.33 24.586V29.5H127.512V24.172C127.512 23.428 127.386 22.882 127.134 22.534C126.882 22.186 126.462 22.012 125.874 22.012C125.43 22.012 125.046 22.114 124.722 22.318C124.41 22.522 124.17 22.822 124.002 23.218C123.834 23.602 123.75 24.058 123.75 24.586V29.5H121.932ZM141.61 29.662C140.65 29.662 139.822 29.482 139.126 29.122C138.442 28.75 137.908 28.228 137.524 27.556C137.152 26.872 136.966 26.062 136.966 25.126C136.966 24.214 137.152 23.416 137.524 22.732C137.896 22.048 138.406 21.514 139.054 21.13C139.702 20.746 140.44 20.554 141.268 20.554C142.084 20.554 142.78 20.734 143.356 21.094C143.944 21.442 144.394 21.94 144.706 22.588C145.018 23.236 145.174 24.01 145.174 24.91V25.522H138.406V24.406H143.95L143.644 24.658C143.644 23.758 143.446 23.062 143.05 22.57C142.654 22.078 142.084 21.832 141.34 21.832C140.776 21.832 140.296 21.964 139.9 22.228C139.516 22.492 139.222 22.858 139.018 23.326C138.814 23.794 138.712 24.34 138.712 24.964V25.072C138.712 25.768 138.82 26.356 139.036 26.836C139.264 27.304 139.594 27.658 140.026 27.898C140.458 28.138 140.992 28.258 141.628 28.258C142.132 28.258 142.624 28.18 143.104 28.024C143.596 27.856 144.058 27.598 144.49 27.25L145.03 28.51C144.634 28.87 144.124 29.152 143.5 29.356C142.876 29.56 142.246 29.662 141.61 29.662ZM147.156 29.5V20.716H148.92V22.588H148.722C148.986 21.916 149.4 21.412 149.964 21.076C150.528 20.728 151.176 20.554 151.908 20.554C152.604 20.554 153.18 20.686 153.636 20.95C154.104 21.202 154.452 21.592 154.68 22.12C154.908 22.636 155.022 23.29 155.022 24.082V29.5H153.204V24.19C153.204 23.686 153.138 23.278 153.006 22.966C152.874 22.642 152.676 22.402 152.412 22.246C152.148 22.09 151.806 22.012 151.386 22.012C150.906 22.012 150.48 22.114 150.108 22.318C149.748 22.522 149.466 22.816 149.262 23.2C149.07 23.584 148.974 24.028 148.974 24.532V29.5H147.156ZM161.271 29.662C160.179 29.662 159.357 29.38 158.805 28.816C158.265 28.252 157.995 27.436 157.995 26.368V22.12H156.285V20.716H157.995V18.07H159.813V20.716H162.531V22.12H159.813V26.224C159.813 26.86 159.945 27.34 160.209 27.664C160.485 27.988 160.929 28.15 161.541 28.15C161.721 28.15 161.901 28.126 162.081 28.078C162.273 28.03 162.459 27.982 162.639 27.934L162.927 29.302C162.747 29.41 162.495 29.494 162.171 29.554C161.859 29.626 161.559 29.662 161.271 29.662Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="w-full max-w-[1440px] h-[69px] px-[64px] py-[20px] gap-0 flex justify-center mx-auto">
        <nav className="flex gap-[32px] items-center ]">
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
