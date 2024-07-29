import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

// eslint-disable-next-line react/prop-types
const DashboardLayout = ({ children }) => {
  return (
    <div className='flex'>
      <Header />
      <div className='z-[1000]'>
        <Sidebar />
      </div>
      <div className='h-screen w-full overflow-y-auto overflow-x-hidden'>
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
