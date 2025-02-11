import React from "react"
import Hero from "./hero/Hero"
import Featured from "./featured/Featured"
import Recent from "./recent/Recent"
import HowItWorks from "./howItWorks/HowItWorks"
import VirtualTours from "./virtualTours/VirtualTours"

//import Awards from "./awards/Awards"
//import Location from "./location/Location"
//import Team from "./team/Team"
//import Price from "./price/Price"

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      <HowItWorks />
      <VirtualTours />
     {/* Awards />
      <Location />
      <Team />
      <Price /> */}
    </>
  )
}

export default Home
