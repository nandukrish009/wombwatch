"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MoveRight } from 'lucide-react'
function Header() {
  return (
    <header className='bg-transparent relative container'>
        <div className='flex justify-between items-center py-6 w-full'>
            <div className='w-2/5'>
                <Link href='/'>
                <Image src='/wombwatch.jpg' width={100} height={100} alt='wombwatch logo'/>
                </Link>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex gap-11 font-medium pr-6 border-r-2 border-blossom'>
                <Link href={''}>Features</Link>
                <Link href={''}>Blog</Link>
                <Link href={''}>Contact</Link>
                <Link href={''}>About</Link>
                </div>
                <div className='flex gap-11 items-center'>
                <Link href='/login' className='pl-6 font-semibold text-dark-blue hover:text-blue'>Login</Link>
                <Link href='/signup' className='flex gap-2 items-center px-6 py-3 border rounded-full hover:border-blue bg-blue text-white hover:bg-transparent hover:text-blue'>Sign up  <span><MoveRight className="" style={{strokeWidth : '1.3px'}}/></span></Link>
            </div>
            </div>
            
        </div>
    </header>
  )
}

export default Header