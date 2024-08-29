"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import Image from 'next/image'
import Header from '@/components/header/Header'
import { Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText } from '@mui/material'
import { useRouter } from 'next/navigation'
import OTP from '@/components/otp/OTP'
import { X } from 'lucide-react'
type Inputs = {
    userName: string
    password: string
  }

  type OtpInput = {
    otp: number
  }
function Login({close, modalChange}:any) {

    const closeDialog = () => {
        close(false);
      };
      const handelChange = () => {
        modalChange('signup');
      };

      const router = useRouter()

      const [open, setOpen] = useState(false);
      const [otp, setOtp] = useState('');
      const [otpError, setOtpError] = useState('')

      const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()

      const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        if(data.userName != '' && data.password != ''){
          setOpen(true);
        }
      }

      const handelOtp = () => {
        console.log('oyyy',otp)
        if(otp == '123456'){
          router.push('/dashboard')
        }
        else if(otp === ''){
          setOtpError('Enter 6 digits otp')
        }else{
          setOtpError('Invalid otp')
        }
      }
    
  return (
    <>
       {/* <Header/>  */}
       <div className='w-full relative'>
        <X className='absolute top-5 right-5 cursor-pointer z-10' onClick={closeDialog}/>
        <div className='flex max-md:justify-center max-md:items-center relative'>
        <div className='w-1/2 relative max-lg:hidden bg-black flex justify-center items-center overflow-hidden'>
        <Image src='/wombwatch_logo.JPG' fill alt='wombwatch' className='!relative h-[unset_!important] object-contain'/>
        </div>
       
        <div className='w-1/2 max-lg:w-full max-lg:px-2 max-lg:py-4 relative flex justify-center items-center'>
        <div className='relative max-xl:h-[calc(100vh_-_70px)] overflow-auto transparentscroll'>
        <div className='mb-10'>
        <p className='text-dark-blue text-2xl font-semibold'>Sign into WombWatch</p>
        <p className='my-2 text-slate-400'>Welcome to WombWatch, Please enter your login details below.</p>
        </div>
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
        <Link href={''} className='capitalize underline underline-offset-4 text-dark-blue'>forgot password?</Link>
        </div>
        <button type="submit" className='px-6 py-3 border rounded-lg text-white border-blue bg-blue hover:bg-transparent hover:text-blue text-[14px] font-medium'>Login</button>
        <div className='w-full text-center'>
            <p className='text-slate-500 font-medium'>No account yet? <button className='font-semibold text-dark-blue underline underline-offset-4' onClick={handelChange}>Register</button></p>
        </div>
        </form>
        </div>
        </div>
        
        </div>
        </div>
    </>
    
  )
}

export default Login