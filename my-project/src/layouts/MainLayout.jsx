import React from 'react'
import Header from '../../../src/components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../../src/components/footer'

function MainLayout() {
  return (
    <div>
      
    <Header/>
      
        <Outlet/>

    <Footer/>

    </div>
  )
}

export default MainLayout
