import Image from "next/image";
import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
function StayCard({
  item: { img, location, title, description, star, price, total, long, lat },
  liked,
}) {
  return (
    <div className="block my-6 p-5 w-full shadow-lg rounded-xl md:flex  bg-white cursor-pointer hover:shadow-2xl transition duration-300 ease-in-out">
      <div className="relative h-72 w-full md:w-80 md:h-auto">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="overflow-hidden rounded-2xl w-full"
        />
      </div>
      <div className="flex-grow px-5">
        <p className="text-xs text-gray-500 sm:text-sm my-3 ">{location}</p>
        <div className="flex justify-between">
          <p className=" text-xs sm:text-lg font-semibold text-black mr-2">
            {title}
          </p>
          {liked ? (
            <HeartIcon className="h-8 text-white p-2 bg-red-400 rounded-full" />
          ) : (
            <HeartIcon className="h-5 sm:h-8 bg-transparent text-red-400 rounded-full" />
          )}
        </div>
        <p className="text-sm sm:text-lg my-2 text-gray-600 font-semibold">
          {description}
        </p>
        <p className="text-sm mt-4 sm:text-xl font-bold flex justify-end sm:mt-10">
          {price}
        </p>
        <div className="flex justify-between mt-6 mb-3">
          <p className="flex items-center">
            <StarIcon className="h-5 sm:h-6 mr-2 text-red-400" />
            {star}
          </p>
          <p>{total}</p>
        </div>
      </div>
    </div>
  );
}

export default StayCard;
