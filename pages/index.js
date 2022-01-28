import Head from "next/head";
import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
export default function Home({ exploreData }) {
  return (
    <React.Fragment>
      <Head>
        <title>AirBnB - Clone | NextJs</title>
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
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
      </main>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://links.papareact.com/pyp`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  const exploreData = await res.json();
  return {
    props: { exploreData },
  };
}
