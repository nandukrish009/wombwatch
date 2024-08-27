import React from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react';

function HomeTwoCol() {
  return (
    <div className='my-40 ml-40 flex gap-24 relative items-center'>
        <div className='w-1/3'>
            <h2 className='text-dark-blue text-[48px] font-semibold'>Guide patients to the right care</h2>
            <div className='my-8'>
                <div className='flex gap-4'><Check className='text-blue' style={{strokeWidth: '3px'}}/> <p className='text-[18px] font-semibold text-dark-blue mb-4'>AI Physicians & Together</p></div>
                <p className='text-[16px] text-gray-600 leading-6 ml-9'>Your Instagram Stories on web or mobile Inspiration comes in many ways and you like.</p>
            </div>
            <div className='my-8'>
                <div className='flex gap-4'><Check className='text-blue' style={{strokeWidth: '3px'}}/> <p className='text-[18px] font-semibold text-dark-blue mb-4'>Apps & Chatbots</p></div>
                <p className='text-[16px] text-gray-600 leading-6 ml-9'>Your Instagram Stories on web or mobile Inspiration comes in many ways and you like.</p>
            </div>
            <div className='my-8'>
                <div className='flex gap-4'><Check className='text-blue' style={{strokeWidth: '3px'}}/> <p className='text-[18px] font-semibold text-dark-blue mb-4'>Multilanguage Support</p></div>
                <p className='text-[16px] text-gray-600 leading-6 ml-9'>Your Instagram Stories on web or mobile Inspiration comes in many ways and you like.</p>
            </div>
            
        </div>
        <div className='-right-16 absolute'>
          <Image src='/patient-check.png' width={900} height={1500} alt='check'/>
        </div>
    </div>
  )
}

export default HomeTwoCol