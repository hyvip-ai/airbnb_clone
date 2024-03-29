import Image from "next/image";
import React from "react";
import Tilt from "react-tilt";
function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="py-6">
      <Tilt
        options={{
          max: 1,
          scale: 1,
          perspective: 100,
          easing: "cubic-bezier(.03,.98,.52,.99)",
        }}
      >
        <section className="relative h-[300px] rounded-3xl mx-3 overflow-hidden  cursor-pointer">
          <div className="absolute z-10 bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2 text-center md:pl-32 md:text-left md:translate-x-0 md:right-0 md:left-0">
            <h3 className=" font-semibold text-xl md:text-4xl mb-3 md:w-64 md:font-bold">
              {title}
            </h3>
            <p className="font-semibold">{description}</p>
            <button className="text-sm bg-gray-900 text-white rounded-lg py-2 px-4 mt-3 active:scale-95">
              {buttonText}
            </button>
          </div>
          <div className="w-full h-full">
            <Image src={img} alt="Large_card" objectFit="cover" layout="fill" />
          </div>
        </section>
      </Tilt>
    </section>
  );
}

export default LargeCard;
