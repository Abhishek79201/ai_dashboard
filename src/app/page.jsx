import React from 'react'
import Home from './components/Home/Home'
import { auth } from '@/auth'

const page = async () => {
  const session = await auth()
  const user = session?.user
  console.log('user', user)
  return <Home />
}

export default page
