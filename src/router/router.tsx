import React from 'react'
import MainPage from '../pages/main/main-page'
import { Routes, Route } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
      {routePath.map((route, el) => (
        <Route key={el} path={route.path} element={route.component} />
      ))}
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
