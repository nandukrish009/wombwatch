"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { MoveRight } from 'lucide-react'
function Header() {
  const [scrolling, setScrolling] = useState(0);
  
  console.log("scrolling", scrolling);
 
  useEffect(() => {
    const handleScroll = () => {
      console.log("window.scrollY", window.scrollY);
      setScrolling(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className='fixed px-20 top-0 left-0 right-0 z-50 transition ease-in-out duration-150'
      style={{
        backgroundColor: scrolling > 100 ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
        backdropFilter: scrolling > 100 ? 'blur(5px)' : 'none'
      }}
    >
        <div className='flex justify-between items-center py-4 w-full'>
            <div className='w-2/5'>
                <Link href='/' className='block w-max'>
                <Image src='/wombwatch_crop.JPG' width={60} height={60} alt='wombwatch logo'/>
                </Link>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex gap-11 text-white font-medium pr-6 border-r-2 border-blossom'>
                <Link href={''} className='hover:text-blue'>Features</Link>
                <Link href={''} className='hover:text-blue'>Blog</Link>
                <Link href={''} className='hover:text-blue'>Contact</Link>
                <Link href={''} className='hover:text-blue'>About</Link>
                </div>
                <div className='flex gap-11 items-center'>
                <Link href='/login' className='pl-6 font-semibold text-white hover:text-blue'>Login</Link>
                <Link href='/signup' className='flex gap-2 items-center px-4 py-2 border border-blue rounded-md hover:border-blue bg-blue text-white hover:bg-transparent hover:text-blue'>Sign up<span><MoveRight className="" style={{strokeWidth : '1.3px'}}/></span></Link>
            </div>
            </div>
        </div>
    </header>
  )
}

export default Header