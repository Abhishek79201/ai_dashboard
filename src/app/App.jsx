'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import DashboardLayout from './components/DashboardLayout/DashboardLayout'

const App = ({ children }) => {
  return (
    <Provider store={store}>
      <DashboardLayout>{children}</DashboardLayout>
    </Provider>
  )
}

export default App
