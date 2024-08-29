"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import Image from 'next/image'
import Header from '@/components/header/Header'
import { Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText } from '@mui/material'
import { useRouter } from 'next/navigation'
import OTP from '@/components/otp/OTP'

type Inputs = {
    userName: string
    password: string
  }

  type OtpInput = {
    otp: number
  }
function LoginPage() {

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
      <Header/>
      <div className='min-h-screen w-full relative flex flex-col justify-center' style={{backgroundImage: 'radial-gradient(farthest-corner at 40px 40px, #151438  0%, rgb(30, 7, 34) 100%)'}}>
      <div className='flex justify-center items-center gap-44 relative top-11'>
        <div className='relative max-lg:hidden'>
        <Image src='/pattern-02.png' height={1000} width={1000} alt='' className='absolute'/>
        <Image src='/woman.png' alt='' width={450} height={450} className='relative z-10' />
        </div>
    <div className='w-[440px] h-auto p-8'>
    <p className='text-center mb-6 text-2xl font-semibold text-white'>Sign into WombWatch</p>
    <p className='text-center my-6 text-white'>Welcome to WombWatch, Please enter your login details below.</p>
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
      <Link href={''} className='capitalize underline underline-offset-4 text-white'>forgot password?</Link>
      </div>
      <button type="submit" className='px-6 py-3 border rounded-lg text-white border-blue bg-blue hover:bg-transparent hover:text-blue text-[14px] font-medium'>Login</button>
      <div className='w-full text-center'>
        <p className='text-slate-500 font-medium'>No account yet? <Link href='/signup' className='font-semibold text-slate-400 underline underline-offset-4'>Register</Link></p>
      </div>
    </form>
    </div>
    </div>
    <Dialog
        open={open}
        onClose={handleClose}
        className='rounded-lg'
      >
        <DialogTitle className='pt-6 px-8 text-[22px] font-montserrat text-dark-blue font-bold text-center capitalize'>Two factor Authentication</DialogTitle>
        <DialogContent>
          <DialogContentText className='text-[16px] text-gray-600 leading-6 px-8'>
          Enter the 6-digit code sent to your mobile number.
          </DialogContentText>
          <div className='flex justify-center flex-col items-center w-full px-8 py-6'>
          <OTP separator={<span>-</span>} value={otp} onChange={setOtp} length={6} />
          <p className='text-center text-[12px] text-red-500 py-2'>{otpError}</p>
          <div className='pt-9'>
          <button onClick={handelOtp} className='bg-blue text-white rounded-lg py-3 px-9 font-medium'>Verify</button>
          </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
    </>
    
  )
}

export default LoginPage