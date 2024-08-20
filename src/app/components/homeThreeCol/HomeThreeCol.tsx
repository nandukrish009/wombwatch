import React from 'react'
import Image from 'next/image'

function HomeThreeCol() {
  return (
    <div className='flex justify-center gap-16 my-40'>
        <div className='w-[20%] flex flex-col items-center text-center'>
        <Image src='/heart.png' alt='pattern-02' height={150} width={150} className=''/>
        <h4 className='text-[20px] font-semibold text-dark-blue my-4'>Symptom Checker</h4>
        <p className='text-[16px] leading-7 text-gray-600'>inspiration comes in many ways and you like to save everything from.</p>
        </div>
        <div className='w-[20%] flex flex-col items-center text-center'>
        <Image src='/chat.png' alt='pattern-02' height={150} width={150} className=''/>
        <h4 className='text-[20px] font-semibold text-dark-blue my-4'>Chat With Doctor</h4>
        <p className='text-[16px] leading-7 text-gray-600'>inspiration comes in many ways and you like to save everything from.</p>
        </div>
        <div className='w-[20%] flex flex-col items-center text-center'>
        <Image src='/medican.png' alt='pattern-02' height={150} width={150} className=''/>
        <h4 className='text-[20px] font-semibold text-dark-blue my-4'>Medicine Reminders</h4>
        <p className='text-[16px] leading-7 text-gray-600'>inspiration comes in many ways and you like to save everything from.</p>
        </div>
  
    </div>
  )
}

export default HomeThreeCol