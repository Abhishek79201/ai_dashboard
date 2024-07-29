'use client'
import ChatSpace from '@/app/components/ChatSpace/ChatSpace'
import DatabaseSidebar from '@/app/components/DatabaseSidebar/DatabaseSidebar'
import InputBar from '@/app/components/InputBar/InputBar'
import PDFViewer from '@/app/components/PDFViewer/PDFViewer'
import {
  setChatList,
  setCurrentCitationTab,
  setShowCitationTab
} from '@/app/redux/slices/chatSlice'
import { CloseCircleOutlined, DeleteOutlined } from '@ant-design/icons'
import { Tabs } from 'antd'
import { useParams } from 'next/navigation'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ScrollToBottom from 'react-scroll-to-bottom'
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

const DatabasePage = () => {
  const showCitatationTabs = useSelector(state => state.chat.showCitatationTabs)
  const handleClearChat = () => {
    dispatch(setChatList([]))
    dispatch(setCurrentCitationTab(null))
    dispatch(setShowCitationTab(false))
  }
  const currentFolder = useParams()
  console.log(currentFolder)
  return (
    <div>
      {' '}
      <>
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
        <div className='w-full p-6 fixed bottom-[100px] md:bottom-0 right-0'>
          <InputBar directoryName={currentFolder.database} />
        </div>
      </>
    </div>
  )
}

export default DatabasePage
