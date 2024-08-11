"use client"
import Link from 'next/link'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

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
    <div className='flex justify-center items-center h-[calc(100vh_-_128px)]'>
    <div className='w-[440px] h-auto border bg-platinum p-8 rounded-lg drop-shadow-md'>
    <p className='text-center mb-6 text-2xl font-semibold'>Login</p>
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
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
      <div className='w-full flex justify-end'>
      <Link href={''} className='capitalize underline underline-offset-4'>forgot password?</Link>
      </div>
      <button type="submit" className='px-6 py-3 border rounded-lg text-white border-berry bg-berry hover:bg-transparent hover:text-berry'>Login</button>
      <div className='w-full text-center'>
        <p className='text-slate-500 font-medium'>No account yet? <Link href='/signup' className='font-semibold text-maroon underline underline-offset-4'>Register</Link></p>
      </div>
    </form>
    </div>
    </div>
  )
}

export default LoginPage