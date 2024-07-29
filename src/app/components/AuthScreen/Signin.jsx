import { signIn } from '@/auth'
import bgImage from '@/app/assets/auth/auth.webp'
import React from 'react'
import './style.css'
const Signin = () => {
  return (
    <div className='flex w-full min-h-screen'>
      <div className='flex w-[40%] flex-col items-start justify-center p-20 h-screen gap-4'>
        <p className='text-4xl  font-semibold'>Continue to knowledgeminer</p>
        <div className='flex gap-4'>
          <form
            action={async () => {
              'use server'
              await signIn('google', { redirectTo: '/' })
            }}
          >
            <button type='submit' className='login-with-google-btn'>
              Signin with Google
            </button>
          </form>
          <form
            action={async () => {
              'use server'
              await signIn('google', { redirectTo: '/' })
            }}
          >
            <button type='submit' className='login-with-microsoft-btn'>
              Signin with Microsoft
            </button>
          </form>
        </div>
      </div>
      <div className='w-[60%] h-screen overflow-hidden'>
        <span className='w-full'>
          <img src={bgImage.src} className='bgImage' />
        </span>
      </div>
    </div>
  )
}

export default Signin
