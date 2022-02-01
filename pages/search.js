import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import data from "../data/tab";
import Tabs from "../components/Tabs";
import { useRouter } from "next/router";
import { format } from "date-fns";
import StayCard from "../components/StayCard";
function Search({searchResult}) {
  console.log(searchResult)
  const router = useRouter();
  const { location, numberOfGuests, startDate, endDate } = router.query;
  const formatedStartDate = format(new Date(startDate),'dd MMMM yy')
  const formatedendDate = format(new Date(endDate),'dd MMMM yy')
  const range = `${formatedStartDate} - ${formatedendDate}`
  const placeholder = `${location} | ${range} | ${numberOfGuests} Guests`
  return (
    <React.Fragment>
      <Header placeholder={placeholder} showIt={true}/>
      <main className="flex pt-[105px] px-8 bg-gray-50">
        <section className="w-full">
          <p>300+ Stays - {range} - for {numberOfGuests} number of guests</p>
          <h1 className="text-3xl font-semibold my-4">Stays in {location}</h1>
          <div className="hidden sm:block">
            {data.map((item) => {
              return <Tabs key={item} buttonText={item} />;
            })}
          </div>

          <div>
            {
              searchResult.map((item,index)=>{
                return <StayCard key={item.img} img={item.img} item={item} liked={index%2===0}/>
              })
            }
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export async function getServerSideProps() {
  const searchResult = await fetch(`https://links.papareact.com/isz`).then(res=>res.json())
  return {
    props:{
      searchResult
    }
  }
}
export default Search;