import React from 'react'
import { ArrowUpRight  } from 'lucide-react';
import Image from 'next/image';

function OurServices() {
  return (
    <div className='py-20 max-md:pb-0' style={{background: 'linear-gradient(90deg, rgba(240,240,240,1) 0%, rgba(255,255,255,1) 50%, rgba(240,240,240,1) 100%)'
    }}>

    <div className='max-xl:px-4 xl:container'>
    <p className='text-[32px] text-center mx-auto w-2/3 font-semibold max-md:text-left max-md:m-0 max-md:w-full'>Our Services <span className='text-blue'>empowers</span> our clients</p>

        <div className='flex justify-center items-center gap-36 mt-12 max-lg:flex-col-reverse max-lg:gap-9'>
            <div className='w-2/5 max-lg:w-full max-md:block max-lg:flex max-lg:gap-6'>
                <div className='bg-white rounded-xl py-6 px-6 my-16 shadow-md relative'>
                <p className='text-[120px] text-slate-300 absolute font-semibold -top-16 left-0 leading-none opacity-30'>01</p>
                <span className='flex justify-between items-center relative z-10'>
                <p className='text-[22px] leading-8 font-semibold'>Comprehensive Monitoring</p>
                <ArrowUpRight  className='text-[#b5b4b4]'/>
                </span>
                <p className='my-4 font-normal relative'>Womb WatchAI offers advanced monitoring solutions to ensure early detection of potential complications. Our technology provides timely insights into vital signs, allowing for prompt intervention and addressing any concerns effectively.</p>
                </div>
                <div className='bg-white rounded-xl py-6 px-6 my-16 shadow-md relative'>
                <p className='text-[120px] text-slate-300 absolute font-semibold -top-16 left-0 leading-none opacity-30'>02</p>
                <span className='flex justify-between items-center relative z-10'>
                <p className='text-[22px] leading-8 font-semibold'>Innovation Monitoring</p>
                <ArrowUpRight  className='text-[#b5b4b4]'/>
                </span>
                <p className='my-4 font-normal relative'>We lead the way in health monitoring with our cutting-edge, non-invasive technology that scans multiple cardiovascular and related health parameters. This system tracks critical indicators such as blood pressure and heart rate to identify potential complications during pregnancy, setting new standards for maternal care.</p>
                </div>
                <div className='bg-white rounded-xl py-6 px-6 my-16 max-md:mb-0 shadow-md relative'>
                <p className='text-[120px] text-slate-300 absolute font-semibold -top-16 left-0 leading-none opacity-30'>03</p>
                <span className='flex justify-between items-center relative z-10'>
                <p className='text-[22px] leading-8 font-semibold'>Personalized Health Insights</p>
                <ArrowUpRight  className='text-[#b5b4b4]'/>
                </span>
                <p className='my-4 font-normal relative'>Our platform delivers tailored health assessments based on your unique biological profile. By analyzing your health data, Womb WatchAI offers customized recommendations to ensure the most effective care and support throughout your pregnancy journey.</p>
                </div>
            </div>
            <div className='w-1/3 max-md:hidden max-lg:w-full max-lg:justify-center max-lg:flex'>
              <div className='flex gap-4 '>
              <div className='rounded-md overflow-hidden flex justify-center items-center'>
                <Image src="/monitor_01.jpg" alt="monitoe_01" width={250} height={200} />
              </div>
              <div className='rounded-md overflow-hidden flex justify-center items-center'>
                <Image src="/monitor_02.jpg" alt="monitoe_01" width={250} height={200} />
              </div>
              <div className='rounded-md overflow-hidden flex justify-center items-center lg:hidden'>
                <Image src="/laboratory.jpg" alt="monitoe_01" width={250} height={200} />
              </div>
              </div>
              <div className='rounded-md overflow-hidden flex justify-center items-center my-4 max-lg:hidden'>
                <Image src="/lab_testing.png" alt="monitoe_01" width={500} height={500} />
              </div>
            </div>
        </div>
        <div className='flex justify-center items-center gap-36 mt-12 max-md:mt-0 max-lg:flex-col max-lg:gap-9'>
          <div className='w-1/3 max-md:hidden max-lg:w-full max-lg:justify-center max-lg:flex'>
         
              <div className='rounded-md overflow-hidden flex justify-center items-center my-4 max-lg:hidden'>
                <Image src="/medical_ai_process.jpg" alt="monitoe_01" width={600} height={600} />
              </div>
              <div className='rounded-md overflow-hidden flex justify-center items-center my-4 max-lg:hidden'>
                <Image src="/innovative_monitaring.png" alt="monitoe_01" width={600} height={600} />
              </div>
              <div className='flex gap-4'>
              <div className='rounded-md overflow-hidden flex justify-center items-center'>
                <Image src="/laboratory.jpg" alt="monitoe_01" width={250} height={200} />
              </div>
              <div className='rounded-md overflow-hidden flex justify-center items-center'>
                <Image src="/supplements.jpg" alt="monitoe_01" width={250} height={200} />
              </div>
              <div className='rounded-md overflow-hidden flex justify-center items-center lg:hidden'>
                <Image src="/medical_ai_process.jpg" alt="monitoe_01" width={280} height={200}/>
              </div>
              </div>
             
              
          </div>
            <div className='w-2/5 max-lg:w-full max-md:block max-lg:gap-6'>
                <div className='bg-white rounded-xl py-6 px-6 my-16 shadow-md relative'>
                <p className='text-[120px] text-slate-300 absolute font-semibold -top-16 left-0 leading-none opacity-30'>04</p>
                <span className='flex justify-between items-center relative z-10'>
                <p className='text-[22px] leading-8 font-semibold'>AI Doula Support</p>
                <ArrowUpRight  className='text-[#b5b4b4]'/>
                </span>
                <p className='my-4 font-normal relative'>The AI Doula service provides 24/7 virtual companionship, offering guidance, emotional support, and answers to pregnancy-related questions. Seamlessly integrated with our monitoring tools, it helps manage appointments, track health data, and offers a holistic support experience.</p>
                </div>
                <div className='bg-white rounded-xl py-6 px-6 my-16 shadow-md relative'>
                <p className='text-[120px] text-slate-300 absolute font-semibold -top-16 left-0 leading-none opacity-30'>05</p>
                <span className='flex justify-between items-center relative z-10'>
                <p className='text-[22px] leading-8 font-semibold'>Advanced Prenatal Lab Testing</p>
                <ArrowUpRight  className='text-[#b5b4b4]'/>
                </span>
                <p className='my-4 font-normal relative'>Benefit from our state-of-the-art lab testing services designed to monitor vital pregnancy markers and detect potential risks. Our tests provide crucial information for maintaining your health during pregnancy and identifying possible complications early. (Join the Waitlist).</p>
                </div>
                <div className='bg-white rounded-xl py-6 px-6 my-16 shadow-md relative'>
                <p className='text-[120px] text-slate-300 absolute font-semibold -top-16 left-0 leading-none opacity-30'>06</p>
                <span className='flex justify-between items-center relative z-10'>
                <p className='text-[22px] leading-8 font-semibold'>Aging Health Solutions</p>
                <ArrowUpRight  className='text-[#b5b4b4]'/>
                </span>
                <p className='my-4 font-normal relative'>Womb WatchAI supports aging women with specialized health solutions, offering comprehensive monitoring and testing to address age-related health concerns. Our services ensure proactive and effective care for long-term well-being. (Join the Waitlist).</p>
                </div>
                <div className='bg-white rounded-xl py-6 px-6 my-16 shadow-md relative'>
                <p className='text-[120px] text-slate-300 absolute font-semibold -top-16 left-0 leading-none opacity-30'>07</p>
                <span className='flex justify-between items-center relative z-10'>
                <p className='text-[22px] leading-8 font-semibold'>Customized Supplements</p>
                <ArrowUpRight  className='text-[#b5b4b4]'/>
                </span>
                <p className='my-4 font-normal relative'>We provide personalized supplements based on your unique biological needs, using lab testing data to enhance memory, support anti-aging efforts, and improve overall health. Each supplement is crafted to address specific health concerns and promote optimal wellness. (Join the Waitlist).</p>
                </div>
            </div>
           
        </div>
    </div>
    </div>
  )
}

export default OurServices