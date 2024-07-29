import { Card } from 'antd'
import React from 'react'

const Counts = ({ title, count }) => {
  return (
    <div className='flex flex-col font-semibold text-lg'>
      <span>{count}</span>
      <span>{title}</span>
    </div>
  )
}

const DashboardCard = () => {
  return (
    <div className='w-full p-4 md:p-8 xl:p-16 '>
      {' '}
      <Card
        title={<span className='font-bold text-xl'>My First Bot</span>}
        extra={<></>}
      >
        <div className='flex w-full items-center justify-between'>
          <Counts title={'Conversations'} count={'0'} />
          <Counts title={'Databases'} count={'0'} />
          <Counts title={'Users'} count={'0'} />
        </div>
      </Card>
    </div>
  )
}

export default DashboardCard
