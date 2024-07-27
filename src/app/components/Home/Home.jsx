'use client'
import { Tabs } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { CloseCircleOutlined, DeleteOutlined } from '@ant-design/icons'
import ScrollToBottom from 'react-scroll-to-bottom'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import PDFViewer from '../PDFViewer/PDFViewer'
import ChatSpace from '../ChatSpace/ChatSpace'
import InputBar from '../InputBar/InputBar'
import Layout from '../DashboardLayout/DashboardLayout'
import DashboardLayout from '../DashboardLayout/DashboardLayout'
import {
  setCurrentCitationTab,
  setShowCitationTab
} from '../../redux/slices/chatSlice'

const items = [
  {
    key: '1',
    label: 'Citations',
    children: <PDFViewer />
  }
]

const Operations = () => {
  const dispatch = useDispatch()
  const handleCloseCitation = () => {
    dispatch(setCurrentCitationTab(null))
    dispatch(setShowCitationTab(false))
  }
  return (
    <button onClick={handleCloseCitation} className='text-[16px]'>
      <CloseCircleOutlined /> Close
    </button>
  )
}

const CitationTabs = () => (
  <Tabs
    tabBarExtraContent={<Operations />}
    defaultActiveKey='1'
    items={items}
  />
)

const Home = () => {
  const dispatch = useDispatch()
  const searchParams = useSearchParams()
  const folder = searchParams.get('folder')

  const [directoryName, setDirectoryName] = useState(null)
  const showCitatationTabs = useSelector(state => state.chat.showCitatationTabs)
  const handleClearChat = () => {
    dispatch(setChatList([]))
    dispatch(setCurrentCitationTab(null))
    dispatch(setShowCitationTab(false))
  }
  useEffect(() => {
    setDirectoryName(folder)
  }, [searchParams])

  return (
    <DashboardLayout>
      <main className='h-screen relative w-full flex'>
        <button
          onClick={handleClearChat}
          className='fixed right-28 top-[86px] z-[100]'
        >
          <DeleteOutlined /> Clear Chat
        </button>
        <div className='flex w-full h-full space-between'>
          <ScrollToBottom
            className={`max-h-[calc(100vh-100px)] pt-[76px] w-full`}
          >
            <ChatSpace />
          </ScrollToBottom>
          <div
            className={`h-screen p-8 pt-[76px] ${
              showCitatationTabs ? 'w-full' : 'hidden'
            }`}
          >
            {showCitatationTabs ? <CitationTabs /> : <></>}
          </div>
        </div>

        <div className='w-full p-6 fixed bottom-0 right-0'>
          {directoryName === null ? null : (
            <InputBar directoryName={directoryName} />
          )}
        </div>
      </main>
    </DashboardLayout>
  )
}

export default Home
