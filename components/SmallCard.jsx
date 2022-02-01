import Image from "next/image";
import React from "react";

function SmallCard({ location, image, distace }) {
  return (
    <div className="relative cursor-pointer m-3 h-[100px] flex items-center justify-between hover:bg-gray-100 transition duration-200 ease-in-out hover:scale-105 rounded-xl">
      <div className="relative h-full w-2/5">
        <Image
          src={image}
          alt={location}
          layout="fill"
          objectFit="cover"
          objectPosition="left"
          className="rounded-xl"
        />
      </div>
      <div className="w-2/5 text-sm">
        <p>{location}</p>
        <p className="text-gray-500">{distace}</p>
      </div>
    </div>
  );
}

export default SmallCard;
