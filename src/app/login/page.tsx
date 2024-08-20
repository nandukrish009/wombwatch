"use client"
import Link from 'next/link'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import Image from 'next/image'
import Header from '../components/header/Header'

type Inputs = {
    userName: string
    password: string
  }
function LoginPage() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <>
      <Header/>
      <div className='h-[calc(100vh_-_148px)] w-full'>
      <div className='flex justify-center items-center gap-44'>
        <div className='relative'>
        <Image src='/pattern-02.png' height={1000} width={1000} alt='' className='absolute'/>
        <Image src='/woman.png' alt='' width={450} height={450} className='relative z-10' />
        </div>
    <div className='w-[440px] h-auto p-8'>
    <p className='text-center mb-6 text-2xl font-semibold'>Sign into WombWatch</p>
    <p className='text-center my-6'>Welcome to WombWatch, Please enter your login details below.</p>
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
      <div className='w-full flex flex-col gap-2'>
      {/* <p>Email</p> */}
      <input {...register("userName", { required: true })} placeholder='User Name' className='py-3 px-5 border border-slate-500 rounded-lg'/>
      {errors.userName && <span className='text-[12px] text-red-600'>User name is required</span>}
      </div>
      <div className='w-full flex flex-col gap-2'>
      {/* <p>Password</p> */}
      <input {...register("password", { required: true })} placeholder='Password' className='py-3 px-5 border border-slate-500  rounded-lg'/>
      {errors.password && <span className='text-[12px] text-red-600'>Password is required</span>}
      </div>
      <div className='w-full flex justify-end'>
      <Link href={''} className='capitalize underline underline-offset-4'>forgot password?</Link>
      </div>
      <button type="submit" className='px-6 py-3 border rounded-lg text-white border-blue bg-blue hover:bg-transparent hover:text-dark-blue text-[14px] font-medium'>Login</button>
      <div className='w-full text-center'>
        <p className='text-slate-500 font-medium'>No account yet? <Link href='/signup' className='font-semibold text-dark-blue underline underline-offset-4'>Register</Link></p>
      </div>
    </form>
    </div>
    </div>
    </div>
    </>
    
  )
}

export default LoginPage