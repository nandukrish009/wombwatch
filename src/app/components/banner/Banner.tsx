import React from 'react'
import banner from '../../../../public/banner.png'
import Image from 'next/image'

function Banner() {
  return (
    <div className='h-screen w-full relative'>
      <Image src='/pattern-03.png' alt='pattern-02' height={200} width={200} className='absolute top-20 -right-12 -rotate-90'/>
      <Image src='/pattern-01.png' alt='pattern-02' height={200} width={200} className='absolute top-72 -left-12 rotate-90'/>

      <div className='text-center z-10 relative'>
      <p className='text-[48px] pt-10 pb-5 opacity-90 leading-none font-semibold text-dark-blue w-1/2 mx-auto text-center'>Modern, Smart, Hassle online medical care</p>
      <p className='text-center text-[16px] text-dark-blue'>A friendlier healthcare experience for everyone</p>
      <button className='text-[14px] font-semibold capitalize bg-blue text-white py-3 px-10 rounded-full my-12 hover:text-dark-blue hover:bg-transparent hover:border hover:border-blue'>get health app now</button>
      </div>
       <div className='flex justify-center'>
            <div className='absolute bottom-0'>
            <Image src='/banner.png' width={1000} height={1000} style={{objectFit: 'cover'}} alt='banner image'/>
            </div>
        </div>
    </div>
  )
}

export default Banner