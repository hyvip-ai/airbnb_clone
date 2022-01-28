import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  MenuIcon,
  GlobeAltIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
function Header() {
  return (
    <header className="sticky p-5 z-50 top-0 grid grid-cols-2 sm:grid-cols-3 bg-white shadow-md md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer">
        <Image
          src={"https://links.papareact.com/qd3"}
          alt="airbnb_logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="hidden item-center md:border-2 rounded-full py-2 sm:flex md:shadow-sm">
        <input
          type="text"
          placeholder="Start Your Search"
          className="bg-transparent pl-5 flex-grow outline-none text-gray-600"
        />
        <SearchIcon className="hidden h-8 mx-2 bg-red-400 text-white rounded-full p-2 cursor-pointer xl:inline-flex" />
      </div>
      <div className="flex items-center justify-end space-x-3 text-gray-500">
        <p className="hidden cursor-pointer md:inline-block">Become a Host</p>
        <GlobeAltIcon className="h-6"/>
        <div className="flex border-2 rounded-full p-2">
            <MenuIcon className="h-6 mr-2"/>
            <UserCircleIcon className="h-6"/>
        </div>
      </div>
    </header>
  );
}

export default Header;
