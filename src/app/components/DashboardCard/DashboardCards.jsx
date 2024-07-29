import { Card } from 'antd'
import React from 'react'
import DashboardCard from './DashboardCard'

const DashboardCards = () => {
  return (
    <div className='flex flex-col  m-auto 2xl:max-w-[1000px]  h-full w-full'>
      <DashboardCard />
    </div>
  )
}

export default DashboardCards
