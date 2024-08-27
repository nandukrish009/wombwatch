"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Quote } from 'lucide-react';
// import userImage from "../../../../public/user-say.png"
import userImage from '../../../public/user-say.png'
import Image from 'next/image';

const userSayImage = {
    backgroundImage: `url('${userImage.src}')`,
    width:"100%",
    height:"100%",
    
  }
function WhatUserSays() {
  return (
    <div className='bg-purpel h-screen relative'>
        <div className='text-center py-12'>
            <h2 className='text-[48px] font-medium text-white'>What our users says</h2>
        </div>
        <div className='flex gap-24 items-center absolute bottom-0 w-full justify-evenly'>
            <div className='w-[540px] relative'>
            <Quote className='text-white absolute -top-9 z-10 rotate-180 left-6 h-16 w-16' style={{fill: '#ffffff', stroke: 'none'}}/>

            <Swiper
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                >
                <SwiperSlide className='bg-blue py-12 px-12'>
                    <p className='text-[24px] text-white leading-10'>Inspiration comes in many ways and you like to save everything from. sed do exercitations.</p>
                    <p className='text-[18px] font-medium mt-7 text-white'>Lora impsum</p>
                </SwiperSlide>
                <SwiperSlide className='bg-blue py-12 px-12'>
                    <p className='text-[24px] text-white leading-10'>Inspiration comes in many ways and you like to save everything from. sed do exercitation.</p>
                    <p className='text-[18px] font-medium mt-7 text-white'>Lora impsum</p>
                </SwiperSlide>
                <SwiperSlide className='bg-blue py-12 px-12'>
                    <p className='text-[24px] text-white leading-10'>Inspiration comes in many ways and you like to save everything from. sed do exercitation.</p>
                    <p className='text-[18px] font-medium mt-7 text-white'>Lora impsum</p>
                </SwiperSlide>
                </Swiper>
            </div>
            <div className='w-2/5 relative'>
                <Image src='/pattern-02.png' height={1000} width={1000} alt='' className='absolute'/>
                <div className='z-10 relative'>
                <Image src='/user-say.png' width={400} height={400} alt='banner image' />
                </div>

            </div>
        </div>
    </div>
  )
}

export default WhatUserSays