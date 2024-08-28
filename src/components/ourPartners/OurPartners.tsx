import Image from 'next/image'
import React from 'react'

function OurPartners() {
  return (
    <div className='container my-20'>
        <p className='text-[32px] text-center font-semibold'>Our <span className='text-blue'>Partners</span></p>
        <div className='flex flex-wrap justify-center gap-12 mt-12'>
           
            <div className='flex justify-center items-center overflow-hidden'>
            <Image src="/partners/microsoft.png" alt="microsoft" width={150} height={100} className='grayscale hover:grayscale-0'/>
            </div>
            <div className='flex justify-center items-center overflow-hidden'>
            <Image src="/partners/aws.png" alt="aws" width={150} height={100} className='grayscale hover:grayscale-0'/>
            </div>
            <div className='flex justify-center items-center overflow-hidden'>
            <Image src="/partners/google.png" alt="google" width={150} height={100} className='grayscale hover:grayscale-0'/>
            </div>
            <div className='flex justify-center items-center overflow-hidden'>
            <Image src="/partners/4.png" alt="4" width={150} height={100} className='grayscale hover:grayscale-0'/>
            </div>
            <div className='flex justify-center items-center overflow-hidden'>
            <Image src="/partners/cerecync.png" alt="cerecync" width={150} height={100} className='grayscale hover:grayscale-0'/>
            </div>
        </div>
    </div>
  )
}

export default OurPartners