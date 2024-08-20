import Image from "next/image";
import Banner from "./components/banner/Banner";
import CardsSection from "./components/cardSection/CardsSection";
import HomeThreeCol from "./components/homeThreeCol/HomeThreeCol";
import HomeTwoCol from "./components/homeTwoCol/HomeTwoCol";
import WhatUserSays from "./components/whatUserSays/WhatUserSays";
import HealthTips from "./components/healthTips/HealthTips";
import Footer from "./components/footer/Footer";
import Appointment from "./components/appointment/Appointment";
import Header from "./components/header/Header";

export default function Home() {
  return (
   <>
   <Header/>
   <Banner/>
   <HomeThreeCol/>
   <HomeTwoCol/>
   <Appointment/>
   <WhatUserSays/>
   <HealthTips/>
   <Footer/>
   {/* <CardsSection/> */}
   </>
  );
}
