import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import {
  SearchIcon,
  MenuIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
function Header() {
  const [place, setPlace] = useState("");
  const [bookingDates, setBookingDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  function handleSelect(ranges) {
    setBookingDate((prev) => {
      return {
        startDate: ranges.selection.startDate,
        endDate: ranges.selection.endDate,
      };
    });
  }
  const selectionRange = useMemo(() => {
    console.log("Memo Running");
    return {
      startDate: bookingDates.startDate,
      endDate: bookingDates.endDate,
      key: "selection",
    };
  }, [bookingDates]);
  useEffect(() => {
    const header = document.querySelector("header");
    const text = document.querySelector(".header-text");
    if (place) {
      header.classList.add("bg-white");
      header.classList.add("shadow-lg");
      text.classList.remove("text-white");
      text.classList.add("text-gray-600");
    } else {
      header.classList.remove("shadow-lg");
      header.classList.remove("bg-white");
      text.classList.add("text-white");
      text.classList.remove("text-gray-600");
    }
  }, [place]);
  return (
    <>
      <header className="fixed w-full p-5 z-50 top-0 grid grid-cols-2 transition duration-300 sm:grid-cols-3 md:px-10">
        <div className="relative flex items-center h-10 cursor-pointer">
          <Image
            src={"https://links.papareact.com/qd3"}
            alt="airbnb_logo"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        <div className="hidden item-center sm:border-2 rounded-full py-2 sm:flex md:shadow-sm">
          <input
            type="text"
            placeholder="Start Your Search"
            className="bg-transparent pl-5 flex-grow outline-none text-gray-600"
            onChange={(e) => {
              setPlace(e.target.value);
            }}
            value={place}
          />
          <SearchIcon className="hidden h-8 mx-2 bg-red-400 text-white rounded-full p-2 cursor-pointer xl:inline-flex" />
        </div>
        <div className="header-text flex items-center justify-end space-x-3 text-white">
          <p className="hidden cursor-pointer md:inline-block">Become a Host</p>
          <GlobeAltIcon className="h-6" />
          <div className="flex border-2 rounded-full p-2">
            <MenuIcon className="h-6 mr-2" />
            <UserCircleIcon className="h-6" />
          </div>
        </div>

        {place ? (
          <div className="pt-5 flex flex-col col-span-3 mx-auto bg-white">
            <DateRangePicker
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              ranges={[selectionRange]}
              onChange={handleSelect}
            />
            <div className="flex items-center border-b mb-4">
              <h2 className="text-2xl flex-grow font-semibold">
                Number of Guests
              </h2>
              <UserIcon className="h-5" />
              <input
                type="number"
                className="w-12 pl-2 text-red-400 outline-none"
                value={numberOfGuests}
                onChange={(e) => {
                  setNumberOfGuests(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-between items-center">
              <button className="w-2/5 text-gray-600 outline-none rounded-full shadow-md p-2" onClick={()=>{setPlace('')}}>Cancel</button>
              <button className="w-2/5 text-red-400 outline-none rounded-full shadow-md p-2">Search</button>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}

export default Header;
