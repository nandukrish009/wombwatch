"use client"
import Link from 'next/link'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import Image from 'next/image'
import Header from '@/components/header/Header'
import { X } from 'lucide-react'
type Inputs = {
    firstName: string
    lastName: string
    userName: string
    password: string
    phone: string
    country: string
  }
function Signup({close, modalChange}:any) {
    const closeDialog = () => {
        close(false);
      };
      const handelChange = () => {
        modalChange('login');
      };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  return (
    <>
       {/* <Header/>  */}
       <div className='w-full relative'>
        <X className='absolute top-5 right-5 cursor-pointer z-10' onClick={closeDialog}/>
        <div className='flex gap-10 max-md:justify-center relative'>
        <div className='w-1/2 relative max-lg:hidden bg-black flex justify-center items-center overflow-hidden'>
        <Image src='/wombwatch_logo.JPG' fill alt='wombwatch' className='!relative h-[unset_!important] object-contain'/>
        </div>
       
        <div className='w-1/2 max-lg:w-full max-lg:px-2 max-lg:py-4 relative flex justify-center items-center'>
        <div className='relative max-xl:h-[calc(100vh_-_70px)] overflow-auto transparentscroll'>
        <div className='mb-10'>
        <p className='text-dark-blue text-2xl font-semibold'>Create Account</p>
        <p className='text-slate-400'>Welcome to Womb Watch AI - Let's create your account</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
        
        <div className='flex gap-6 max-md:flex-col'>
        <div className='w-full flex flex-col gap-2'>
        <p className='text-dark-blue'>First Name</p>
        <input {...register("firstName")} className='py-3 px-5 border border-slate-500 rounded-lg'/>
        {errors.firstName && <span>This field is required</span>}
        </div>
        <div className='w-full flex flex-col gap-2'>
        <p className='text-dark-blue'>Last Name</p>
        <input {...register("lastName")} className='py-3 px-5 border border-slate-500 rounded-lg'/>
        {errors.lastName && <span>This field is required</span>}
        </div>
        </div>
        <div className='flex gap-6 max-md:flex-col'>
        <div className='w-full flex flex-col gap-2'>
        <p className='text-dark-blue'>Phone No</p>
        <input {...register("phone")} className='py-3 px-5 border border-slate-500 rounded-lg'/>
        {errors.phone && <span>This field is required</span>}
        </div>
        <div className='w-full flex flex-col gap-2'>
        <p className='text-dark-blue'>Country</p>
        <select {...register("country")} className='w-full py-3 px-5 border border-slate-500 rounded-lg'>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="others">other</option>
        </select>
        {errors.lastName && <span>This field is required</span>}
        </div>
        </div>
        <div className='w-full flex flex-col gap-2'>
        <p className='text-dark-blue'>Email</p>
        <input {...register("userName", { required: true })} className='py-3 px-5 border border-slate-500 rounded-lg'/>
        {errors.userName && <span className='text-[12px] text-red-600'>Email is required</span>}
        </div>
        <div className='w-full flex flex-col gap-2'>
        <p className='text-dark-blue'>Password</p>
        <input {...register("password", { required: true })} className='py-3 px-5 border border-slate-500 rounded-lg'/>
        {errors.password && <span className='text-[12px] text-red-600'>Password is required</span>}
        </div>
        <button type="submit" className='px-6 py-3 border rounded-lg text-white border-blue bg-blue hover:bg-transparent hover:text-blue text-[14px] font-medium'>Creat Account</button>
        <div className='w-full text-center'>
            <p className='text-slate-500 font-medium'>Have an account? <button className='font-semibold text-slate-400 underline underline-offset-4' onClick={handelChange}>Login</button></p>
        </div>
        </form>
        </div>
        </div>
        
        </div>
        </div>
    </>
    
  )
}

export default Signup