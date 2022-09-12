import React from 'react'
import { Outlet } from 'react-router-dom'
import Polybar from '../components/common/polybar/polybar'

const MainLayout = () => {
  return (
    <div className="w-full h-screen">
      <Polybar />
      <div className="pt-10">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
