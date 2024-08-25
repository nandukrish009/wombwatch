"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

function HealthTips() {
  return (
    <div className='container my-28'>
        <div className='text-center py-12'>
            <h2 className='text-[48px] font-medium text-dark-blue'>HealthTips & News</h2>
        </div>
             <Swiper
             spaceBetween={60}
                slidesPerView={2}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                >
                <SwiperSlide className=''>
                    <div className='flex gap-6 items-center'>
                    <div className='w-[243px] h-[177px] flex justify-center overflow-hidden rounded-lg'>
                    <Image src='/tips-02.jpg' width={250} height={180} alt='image' className=''/>
                    </div>
                    <p className='px-10 text-[22px] font-medium leading-8 text-center text-dark-blue opacity-90'>The small own seven saved man age
                    <br/>
                    <span className='text-[14px] text-slate-400'>Consulting</span>
                    </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className='flex gap-6 items-center'>
                    <div className='w-[243px] h-[177px] flex justify-center overflow-hidden rounded-lg'>
                    <Image src='/tips-01.jpg' width={250} height={180} alt='image' className=''/>
                    </div>
                    <p className='px-10 text-[22px] font-medium leading-8 text-center text-dark-blue opacity-90'>The small own seven saved man age
                    <br/>
                    <span className='text-[14px] text-slate-400'>Consulting</span>
                    </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className='flex gap-6 items-center'>
                    <div className='w-[243px] h-[177px] flex justify-center overflow-hidden rounded-lg'>
                    <Image src='/tips-02.jpg' width={250} height={180} alt='image' className=''/>
                    </div>
                    <p className='px-10 text-[22px] font-medium leading-8 text-center text-dark-blue opacity-90'>The small own seven saved man age
                    <br/>
                    <span className='text-[14px] text-slate-400'>Consulting</span>
                    </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className='flex gap-6 items-center'>
                    <div className='w-[243px] h-[177px] flex justify-center overflow-hidden rounded-lg'>
                    <Image src='/tips-01.jpg' width={250} height={180} alt='image' className=''/>
                    </div>
                    <p className='px-10 text-[22px] font-medium leading-8 text-center text-dark-blue opacity-90'>The small own seven saved man age
                    <br/>
                    <span className='text-[14px] text-slate-400'>Consulting</span>
                    </p>
                    </div>
                </SwiperSlide>
               
                </Swiper>
    </div>
  )
}

export default HealthTips