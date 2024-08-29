import React from 'react'
import Image from 'next/image'
import { CircleChevronRight } from 'lucide-react';


function HomeThreeCol() {
  return (
    <div className='my-20 max-md:px-4 xl:container'>
       <p className='text-[32px] text-center mx-auto w-2/3 max-md:text-left max-md:m-0 max-md:w-full font-semibold'>3 Risks of the <span className='text-blue'>Watch-and-Wait</span> Approach for <span className='text-blue'>Pregnancy Complications</span></p>

       <div className='my-12'>
        <div className='flex gap-6 justify-center my-6 max-md:flex-col'>
        <div className='w-1/3 max-md:w-full rounded-xl overflow-hidden flex justify-center object-cover'>
          <Image src='/ultra_sound.jpg' alt='Delayed Diagnosis' width={700} height={700} />
        </div>
        <div className='w-1/2 max-md:w-full bg-[#dcf3f9] rounded-xl py-8 px-6 md:py-16 md:px-12'>
          <h4 className='text-[22px] leading-8'>Delayed Diagnosis</h4>
          <hr className='border-b-2 w-16 border-blue my-1' />
          <p className='my-4 font-normal relative'><span className={`font-semibold relative`}>Risk<span className="chevron right"></span></span> Waiting too long to diagnose complications like preeclampsia, gestational diabetes, or fetal growth issues can have serious consequences, including preterm birth, stillbirth, or severe maternal health problems.</p>
          <p className='my-4 font-normal'><span className={`font-semibold relative`}>Countermeasure</span> Regular use of advanced diagnostic tools (blood tests, ultrasounds, urine tests) ensures early detection and timely intervention, improving outcomes for mother and baby. </p>
        </div>
        </div>

        <div className='flex gap-6 justify-center my-6 max-md:flex-col-reverse'>
        <div className='w-1/2 max-md:w-full bg-[#feefec] rounded-xl py-8 px-6 md:py-16 md:px-12'>
          <h4 className='text-[22px] leading-8'>Overlooked Health Conditions</h4>
          <hr className='border-b-2 w-16 border-[#ff9517] my-1' />
          <p className='my-4 font-normal relative'><span className={`font-semibold relative`}>Risk<span className="chevron right"></span></span> Conditions like anemia, thyroid disorders, or infections may be underestimated and, if untreated, can worsen, posing risks to both mother and child.</p>
          <p className='my-4 font-normal'><span className={`font-semibold relative`}>Countermeasure</span> Routine health monitoring (blood work, thyroid tests, infection screenings) allows for early management. Integrative care with nutrition and lifestyle adjustments enhances maternal well-being.</p>
        </div>
        <div className='w-1/3 max-md:w-full rounded-xl overflow-hidden flex justify-center object-cover'>
          <Image src='/overlooked.jpg' alt='Delayed Diagnosis' width={700} height={700} />
        </div>
        </div>

        <div className='flex gap-6 justify-center my-6 max-md:flex-col'>
        <div className='w-1/3 max-md:w-full rounded-xl overflow-hidden flex justify-center object-cover'>
          <Image src='/limited_treatment.jpg' alt='Delayed Diagnosis' width={700} height={700} />
        </div>
        <div className='w-1/2 max-md:w-full bg-[#cbffde] rounded-xl py-8 px-6 md:py-16 md:px-12'>
          <h4 className='text-[22px] leading-8'>Limited Treatment Options</h4>
          <hr className='border-b-2 w-16 border-[#2cff79] my-1' />
          <p className='my-4 font-normal relative'><span className={`font-semibold relative`}>Risk<span className="chevron right"></span></span> Late detection of complications can restrict treatment options, often necessitating risky emergency interventions like preterm delivery.</p>
          <p className='my-4 font-normal'><span className={`font-semibold relative`}>Countermeasure</span> A proactive, personalized care plan with frequent monitoring and early intervention strategies helps prevent complications and reduce the need for emergency measures. Adopting an active surveillance approach can significantly improve pregnancy outcomes, ensuring a safer journey for both mother and baby.</p>
        </div>
        </div>

       </div>
  
    </div>
  )
}

export default HomeThreeCol