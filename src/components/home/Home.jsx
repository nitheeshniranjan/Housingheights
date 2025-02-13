import React from "react"
import Hero from "./hero/Hero"
import Featured from "./featured/Featured"
import Recent from "./recent/Recent"
import HowItWorks from "./howItWorks/HowItWorks"
import VirtualTours from "./virtualTours/VirtualTours"
import WhyChooseUs from "./whyChooseUs/WhyChooseUs"
import Testimonials from "./testimonials/Testimonials"
import PropertyInsights from "./propertyInsights/PropertyInsights"
import Contact from "./contact/Contact"


const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      <HowItWorks />
      <VirtualTours />
   <WhyChooseUs />
   <Testimonials />
   <PropertyInsights />
   <Contact />

    </>
  )
};

export default Home;
