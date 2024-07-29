import React, { useState } from 'react'
import toggle from '@/app/assets/DatabaseSidebar/toggle.svg'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import {
  setChatList,
  setCurrentCitationTab,
  setShowCitationTab
} from '@/app/redux/slices/chatSlice'
import { setNavTab } from '@/app/redux/slices/navSlice'
import { useParams, usePathname, useRouter } from 'next/navigation'

const DahboardSidebarTab = ({ folderTab, isActive, onClick, iconSrc }) => {
  return (
    <span
      onClick={onClick}
      className={`cursor-pointer w-full flex items-center gap-4 ${
        isActive ? 'active_folder_tab' : 'folder_tab'
      }`}
    >
      {iconSrc && (
        <img src={iconSrc.src} alt={`${folderTab} icon`} className='w-[24px]' />
      )}
      {folderTab}
    </span>
  )
}
const DatabaseSidebar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const router = useRouter()

  const folders = useSelector(state => state.chat.folders)

  function handleDatabaseSidebar () {
    setIsOpen(prev => !prev)
  }
  const [activeTab, setActiveTab] = useState()
  const dispatch = useDispatch()
  const handleTabClick = Tab => {
    const lowerCaseTab = Tab.toLowerCase()
    setActiveTab(Tab)
    dispatch(setChatList([]))
    dispatch(setCurrentCitationTab(null))
    dispatch(setShowCitationTab(false))
    router.push(`/databases/${lowerCaseTab}`)
    return
  }
  return (
    <div className='flex flex-col gap-2 pr-10 m-2'>
      {' '}
      <button
        onClick={handleDatabaseSidebar}
        className='w-[54px] h-[54px] bg-black flex items-center justify-center  p-2 rounded-full'
      >
        <img src={toggle.src} alt='close toggle' />
      </button>
      {isOpen ? (
        <div>
          <div
            className={`bg-black rounded-xl z-[10]  pb-[70px] overflow-hidden  text-grayLight p-4 transition-width duration-300 ${'w-[260px]'}`}
          >
            <div className='flex flex-col justify-between overflow-y-auto '>
              <div className='flex flex-col gap-2 folder_tabs'>
                Create New Database
                {folders.map(folderTab => (
                  <DahboardSidebarTab
                    folderTab={folderTab}
                    key={uuidv4()}
                    isActive={folderTab === activeTab}
                    onClick={() => handleTabClick(folderTab)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default DatabaseSidebar
