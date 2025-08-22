import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <>
    <Header/>
    <Sidebar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout