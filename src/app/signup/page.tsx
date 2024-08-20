"use client"
import Link from 'next/link'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import Image from 'next/image'
import Header from '../components/header/Header'
type Inputs = {
    firstName: string
    lastName: string
    userName: string
    password: string
    phone: string
    country: string
  }
function SignupPage() {
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
       <div className='h-[calc(100vh_-_148px)] flex justify-center items-center gap-44'>
        
        <div className='relative'>
        <Image src='/pattern-02.png' height={1000} width={1000} alt='' className='absolute'/>
        <Image src='/woman.png' alt='' width={450} height={450} className='relative z-10' />
        </div>

    <div className='w-[550px] h-auto p-8'>
    
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
     <div className='flex gap-6'>
      <div className='w-full flex flex-col gap-2'>
      <p>First Name</p>
      <input {...register("firstName")} className='py-3 px-5 border border-slate-500 rounded-lg'/>
      {errors.firstName && <span>This field is required</span>}
      </div>
      <div className='w-full flex flex-col gap-2'>
      <p>Last Name</p>
      <input {...register("lastName")} className='py-3 px-5 border border-slate-500 rounded-lg'/>
      {errors.lastName && <span>This field is required</span>}
      </div>
      </div>
      <div className='flex gap-6'>
      <div className='w-full flex flex-col gap-2'>
      <p>Phone No</p>
      <input {...register("phone")} className='py-3 px-5 border border-slate-500 rounded-lg'/>
      {errors.phone && <span>This field is required</span>}
      </div>
      <div className='w-full flex flex-col gap-2'>
      <p>Country</p>
      <select {...register("country")} className='w-full py-3 px-5 border border-slate-500 rounded-lg'>
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="others">other</option>
      </select>
      {errors.lastName && <span>This field is required</span>}
      </div>
      </div>
      <div className='w-full flex flex-col gap-2'>
      <p>Email</p>
      <input {...register("userName", { required: true })} className='py-3 px-5 border border-slate-500 rounded-lg'/>
      {errors.userName && <span className='text-[12px] text-red-600'>Email is required</span>}
      </div>
      <div className='w-full flex flex-col gap-2'>
      <p>Password</p>
      <input {...register("password", { required: true })} className='py-3 px-5 border border-slate-500 rounded-lg'/>
      {errors.password && <span className='text-[12px] text-red-600'>Password is required</span>}
      </div>
      <button type="submit" className='px-6 py-3 border rounded-lg text-white border-blue bg-blue hover:bg-transparent hover:text-dark-blue text-[14px] font-medium'>Sign up</button>
      <div className='w-full text-center'>
        <p className='text-slate-500 font-medium'>Have an account? <Link href='/login' className='font-semibold text-dark-blue underline underline-offset-4'>Login</Link></p>
      </div>
    </form>
    </div>
    </div>
    </>
    
  )
}

export default SignupPage