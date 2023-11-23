import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <header className="flex flex-wrap justify-center sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
  <nav className="flex flex-col justify-center items-center sm:flex-row  max-w-[85rem] w-full mx-auto  px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
    {/* <Image src='e.svg' alt='logo' width={200} height={200}/>
     */}
     <div className='font-4xl'>
     <p className='text-6xl font-poppins text-gray-600 font-semibold text-shadow-lg shadow-red-400'>Emma</p>
     </div>
    <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
    <div className='flex cursor-pointer align-middle justify-center rounded-xl h-12 p-1 w-[12rem] bg-[#2563eb]'>
      <p className='flex text-bold font-bold font-poppins tracking-wide items-center text-lg text-white justify-center'>subscribe letter</p>
    </div>
    </div>
  </nav>
</header>
  )
}
