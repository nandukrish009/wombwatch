import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Appointment() {
  return (
    <div className='h-screen'>
        <div className='flex items-center justify-center'>
            <div className='w-1/2'>
                <Image src='/appointment.png' width={600} height={600} alt='appointment' />
            </div>
            <div className='w-1/3 '>
            <h2 className='text-dark-blue text-[48px] font-semibold'>Easy to appointment with doctors</h2>
            <p className='text-[16px] text-gray-600 leading-8 mt-4'>Inspiration comes in many ways and you like to save everything from. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <div className='mt-12'>
            <div className='flex gap-6 items-center my-3'>
                <Check className='text-blue' style={{strokeWidth: '3px'}}/>
                <p className='text-[16px] text-gray-600'><span className='font-semibold text-dark-blue'>Inspiration comes</span> in many ways and you like to save</p>
            </div>
            <div className='flex gap-6 items-center my-3'>
                <Check className='text-blue' style={{strokeWidth: '3px'}}/>
                <p className='text-[16px] text-gray-600'><span className='font-semibold text-dark-blue'>Plan and schedule </span> in many ways and you like to save</p>
            </div>
            <div className='flex gap-6 items-center my-3'>
                <Check className='text-blue' style={{strokeWidth: '3px'}}/>
                <p className='text-[16px] text-gray-600'><span className='font-semibold text-dark-blue'>Include a first comment </span> in many ways and you like to save</p>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Appointment