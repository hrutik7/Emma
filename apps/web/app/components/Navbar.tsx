"use client";

import React,{ Fragment,useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <header className="flex flex-wrap justify-center sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
      <nav
        className="flex   md:items-center justify-evenly items-center sm:flex-row  max-w-[89rem] w-full mx-auto  px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="font-4xl">
          <Image src="/emma.png" alt="logo" width={50} height={50} />
        </div>
        <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
          <div className="flex cursor-pointer align-middle justify-center rounded-xl h-12 p-1 w-[10rem] bg-[#2563eb]">
            <p className="flex text-bold font-bold font-ui-sans-serif tracking-wide items-center text-lg text-white justify-center">
              Join waitlist
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
}
