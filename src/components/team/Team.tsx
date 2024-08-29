import Image from 'next/image'
import React from 'react'

function Team() {
  return (
    <div className='my-20 container'>
        <p className='text-[32px] text-center mx-auto w-2/3 max-md:text-left max-md:m-0 max-md:w-full font-semibold'>Meet The <span className='text-blue'>Leadership</span> Team</p>
        <div className='flex justify-center item-center gap-12 my-12 max-sm:flex-col flex-wrap'>
        
        <div className="">
        <div className='group relative aspect-video h-[420px] w-[310px] max-sm:w-full cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl'
        >
      <Image
          className='absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-300 ease-out '
          src='/team/quanda.jpg' alt='quanda' width={500} height={500}
      />
      
      <div
          className='absolute px-3 bg-white h-28 w-full bottom-0 group-hover:h-3/4 transition-all delay-300 duration-300 ease-out group-hover:delay-0 group-hover:duration-300 group-hover:bg-blue group-hover:bg-opacity-80'
      >
        <div className='absolute text-white my-2 font-semibold uppercase transition-all delay-300 duration-100 ease-out  group-hover:delay-0 group-hover:duration-300 '>
          <h2
              className='text-dark-blue text-[16px] group-hover:text-white'
          >
              Quanda Francis, MBA
          </h2>
          <hr className='w-20 h-1 bg-blue mb-3'/>
          <p className='text-black text-[14px] font-normal group-hover:text-white'>Board Chair - Founder and Chief Technology Officer</p>
          </div>
          <p
              className='absolute text-white top-[30%] pt-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:delay-500 group-hover:duration-300'
          >
              AI & Quantum Computing Leader | Champion for Generative AI in Healthcare & Education | Global AI Thought Leader www.QuandaFrancis.com
          </p>
        </div>
        </div>
        </div>

        <div className="">
        <div className='group relative aspect-video h-[420px] w-[310px] max-sm:w-full cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl'
        >
      <Image
          className='absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-300 ease-out '
          src='/team/jonathan.jpg' alt='quanda' width={500} height={500}
      />
      
      <div
          className='absolute px-3 bg-white h-28 w-full bottom-0 group-hover:h-3/4 transition-all delay-300 duration-300 ease-out group-hover:delay-0 group-hover:duration-300 group-hover:bg-blue group-hover:bg-opacity-80'
      >
        <div className='absolute text-white my-2 font-semibold uppercase transition-all delay-300 duration-100 ease-out  group-hover:delay-0 group-hover:duration-300 '>
          <h2
              className='text-dark-blue text-[16px] group-hover:text-white'
          >
              Dr. Jonathan Musila, PhD
          </h2>
          <hr className='w-20 h-1 bg-blue mb-3'/>
          <p className='text-black text-[14px] font-normal group-hover:text-white'>Chief Scientific Officer and Co-Founder</p>
          </div>
          <p
              className='absolute text-white top-[30%] pt-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:delay-500 group-hover:duration-300'
          >
              University of Pennsylvania - Post Doctoral Researcher - Biochemistry and Pre-Clinical Screening
          </p>
        </div>
        </div>
        </div>

        <div className="">
        <div className='group relative aspect-video h-[420px] w-[310px] max-sm:w-full cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl'
        >
      <Image
          className='absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-300 ease-out '
          src='/team/karthik.jpg' alt='quanda' width={500} height={500}
      />
      
      <div
          className='absolute px-3 bg-white h-28 w-full bottom-0 group-hover:h-3/4 transition-all delay-300 duration-300 ease-out group-hover:delay-0 group-hover:duration-300 group-hover:bg-blue group-hover:bg-opacity-80'
      >
        <div className='absolute text-white my-2 font-semibold uppercase transition-all delay-300 duration-100 ease-out  group-hover:delay-0 group-hover:duration-300 '>
          <h2
              className='text-dark-blue text-[16px] group-hover:text-white'
          >
              Karthik Athimoolam
          </h2>
          <hr className='w-20 h-1 bg-blue mb-3'/>
          <p className='text-black text-[14px] font-normal group-hover:text-white'>Chief Data Architect and Co-Founder</p>
          </div>
          <p
              className='absolute text-white top-[30%] pt-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:delay-500 group-hover:duration-300'
          >
             
             MIT - Certified Data Architect
          </p>
        </div>
        </div>
        </div>


        </div>
    </div>
  )
}

export default Team