import React from 'react'
import MainPage from '../pages/main/main-page'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layout/main-layout'

const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {routePath.map((route, el) => (
          <Route key={el} path={route.path} element={route.component} />
        ))}
      </Route>
    </Routes>
  )
}

export default Router

const routePath = [
  {
    path: '',
    name: '',
    component: <MainPage />,
  },
]
