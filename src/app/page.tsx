"use client"
import Appointment from "@/components/appointment/Appointment";
import Banner from "@/components/banner/Banner";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HealthTips from "@/components/healthTips/HealthTips";
import HomeThreeCol from "@/components/homeThreeCol/HomeThreeCol";
import HomeTwoCol from "@/components/homeTwoCol/HomeTwoCol";
import WhatUserSays from "@/components/whatUserSays/WhatUserSays";


export default function Home() {

  return (
   <div className="relative">
   <Header/>
   <Banner/>
   <HomeThreeCol/>
   <HomeTwoCol/>
   <Appointment/>
   <WhatUserSays/>
   <HealthTips/>
   <Footer/>
   </div>
  );
}
