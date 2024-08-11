"use client"
import Link from 'next/link'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
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
    <div className='flex w-full h-[calc(100vh_-_128px)] items-center justify-around container'>
        <div className='w-2/4 flex'>
        <div className='mb-6'>
    <p className='font-montserrat text-maroon text-[42px] font-bold uppercase'>Create Account</p>
    <p>Lorem Ipsum is simply dummy text.</p>
    </div>
        </div>

    <div className='w-2/5 h-auto border bg-platinum p-8'>
    
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
     <div className='flex gap-6'>
      <div className='w-full flex flex-col gap-2'>
      <p>First Name</p>
      <input {...register("firstName")} className='py-3 px-5 border border-none bg-[#cccccc] rounded-lg'/>
      {errors.firstName && <span>This field is required</span>}
      </div>
      <div className='w-full flex flex-col gap-2'>
      <p>Last Name</p>
      <input {...register("lastName")} className='py-3 px-5 border border-none bg-[#cccccc] rounded-lg'/>
      {errors.lastName && <span>This field is required</span>}
      </div>
      </div>
      <div className='flex gap-6'>
      <div className='w-full flex flex-col gap-2'>
      <p>Phone No</p>
      <input {...register("phone")} className='py-3 px-5 border border-none bg-[#cccccc] rounded-lg'/>
      {errors.phone && <span>This field is required</span>}
      </div>
      <div className='w-full flex flex-col gap-2'>
      <p>Country</p>
      <select {...register("country")} className='py-3 px-5 border border-none bg-[#cccccc] rounded-lg'>
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="others">other</option>
      </select>
      {errors.lastName && <span>This field is required</span>}
      </div>
      </div>
      <div className='w-full flex flex-col gap-2'>
      <p>Email</p>
      <input {...register("userName")} className='py-3 px-5 border border-none bg-[#cccccc] rounded-lg'/>
      {errors.userName && <span>This field is required</span>}
      </div>
      <div className='w-full flex flex-col gap-2'>
      <p>Password</p>
      <input {...register("password", { required: true })} className='py-3 px-5 border border-none bg-[#cccccc] rounded-lg'/>
      {errors.password && <span>This field is required</span>}
      </div>
      <button type="submit" className='px-6 py-3 border rounded-lg text-white border-berry bg-berry hover:bg-transparent hover:text-berry'>Login</button>
      <div className='w-full text-center'>
        <p className='text-slate-500 font-medium'>Have an account? <Link href='/login' className='font-semibold text-maroon underline underline-offset-4'>Login</Link></p>
      </div>
    </form>
    </div>
    </div>
  )
}

export default SignupPage