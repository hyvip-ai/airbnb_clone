import Image from "next/image";
import React from "react";

function MediumCard({ img, title }) {
  return (
    <div className="mx-3 cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
      <div className="relative h-80 w-80">
        <Image src={img} alt={title} layout="fill" className="rounded-xl" />
      </div>
      <div><h1 className="font-semibold my-2 text-2xl">{title}</h1></div>
    </div>
  );
}

export default MediumCard;
