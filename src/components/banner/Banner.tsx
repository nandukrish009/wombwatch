import React from 'react'
import banner from '../../../../public/banner.png'
import Image from 'next/image'

function Banner() {
  return (
    <div className='min-h-screen w-full relative flex flex-col justify-center' style={{backgroundImage: 'radial-gradient(farthest-corner at 40px 40px, #000 0%, rgb(30, 7, 34) 100%)'}}>
      
     <div className='container relative top-11 h-full w-full flex justify-between items-center'>
      <div className='w-1/2'>
      <h2 className='text-[42px] text-white font-semibold'><span className='text-blue'>Empowering</span> care through <span className='text-blue'>connectivity</span></h2>
      <p className='text-[14px] text-slate-500 leading-6 mt-4 mb-8'>Step into a new era of pregnancy care with Womb WatchAI, the ultimate digital solution for expectant mothers. Harnessing the power of quantum computing and AI, our platform will offer unparalleled insights and monitoring to ensure the health and well-being of both mother and baby. Experience peace of mind with Womb WatchAI, where technology meets maternal care for a safer, healthier pregnancy journey.</p>
      <button className='px-6 py-3 border border-blue rounded-lg hover:border-blue bg-transparent text-white hover:bg-transparent hover:text-blue capitalize'>Get started</button>
      </div>
      <div className='w-2/5'>
      <Image src='/pregancy-02.png' width={500} height={500} alt='wombwatch logo'  />
      </div>
     </div>
    </div>
  )
}

export default Banner