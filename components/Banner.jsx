import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className=" flex justify-center items-center relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        alt="hero_img"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
      />
      <div className="absolute text-center">
        <p className="text-sm font-bold mt-4 sm:text-lg sm:mt-0">Not Sure Where To Go ? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md mt-3 font-bold hover:shadow-xl active:scale-90 transition duration-100">I&apos;m Felxible</button>
      </div>
    </div>
  );
}

export default Banner;
