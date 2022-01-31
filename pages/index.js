import Head from "next/head";
import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
export default function Home({ exploreData, cardData }) {
  useEffect(() => {
    const header = document.querySelector("header");
    const hero = document.querySelector(".banner");
    const text = document.querySelector(".header-text");
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
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
        });
      },
      {
        rootMargin: "-430px 0px 0px 0px",
      }
    );
    observer.observe(hero);
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>AirBnB - Clone | NextJs</title>
      </Head>
      <Header />
      <Banner />
      <div className="2xl:bg-gray-50 2xl:py-12">
        <main className="max-w-7xl bg-white mx-auto px-8 2xl:rounded-lg 2xl:shadow-xl sm:px-16">
          <section className="pt-6">
            <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {exploreData?.map(({ location, img, distance }) => {
                return (
                  <SmallCard
                    location={location}
                    image={img}
                    distace={distance}
                    key={img}
                  />
                );
              })}
            </div>
          </section>
          <section className="pt-6">
            <h2 className="text-4xl font-semibold pb-5">Live Anywhere</h2>
            <div className="flex overflow-x-scroll caraousel px-3 py-6 -ml-3">
              {cardData?.map(({ img, title }) => (
                <MediumCard img={img} title={title} key={img} />
              ))}
            </div>
          </section>
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Graetest Outdoors"
            description="Wishlists curated by Airbnb"
            buttonText="Get Inspired"
          />
        </main>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export async function getStaticProps() {
  let res = await fetch(`https://links.papareact.com/pyp`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  const exploreData = await res.json();
  res = await fetch(`https://links.papareact.com/zp1`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  const cardData = await res.json();
  return {
    props: { exploreData, cardData },
  };
}
