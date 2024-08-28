import React from 'react'
import banner from '../../../../public/banner.png'
import Image from 'next/image'

function Banner() {
  return (
    <div className='min-h-screen w-full relative flex flex-col justify-center' style={{backgroundImage: 'radial-gradient(farthest-corner at 40px 40px, #151438  0%, rgb(30, 7, 34) 100%)'}}>
      
     <div className='container relative top-11 h-full w-full flex justify-between items-center'>
      <div className='w-1/2 max-lg:w-full'>
      <h2 className='text-[42px] text-white font-semibold'><span className='text-blue'>Empowering</span> care through <span className='text-blue'>connectivity</span></h2>
      <p className='text-[14px] text-slate-500 leading-6 mt-4 mb-8'>Our mission is to empower women through every stage of life with cutting-edge technology that optimizes health and well-being. We are committed to revolutionizing prenatal care by providing early detection and prevention of pregnancy complications, ensuring a safer, healthier journey for mothers and their children. By integrating biomarker data, advanced AI, and quantum technology, we strive to deliver proactive, personalized care that supports women before, during, and after pregnancy.</p>
      <button className='px-6 py-3 border border-blue rounded-lg hover:border-blue bg-transparent text-white hover:bg-transparent hover:text-blue capitalize'>Get started</button>
      </div>
      <div className='w-1/2 max-lg:hidden'>
        <p className='text-[10vw] uppercase leading-none font-bold opacity-5'>womb watch ai</p>
        {/* <p className='text-[180px] uppercase leading-none font-bold opacity-10'>watch ai</p> */}
        {/* <p className='text-[180px] uppercase leading-none'>ai</p> */}
      {/* <Image src='/banner_pregancy.png' width={1000} height={1000} alt='wombwatch logo'  /> */}
      </div>
     </div>
    </div>
  )
}

export default Banner