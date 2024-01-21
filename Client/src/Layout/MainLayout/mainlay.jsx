import React from 'react'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'
import { Outlet } from 'react-router-dom'

function MainLay() {
  return (
    <div>
      <Navbar/>
     <Outlet/>
     <Footer/>
    </div>
  )
}

export default MainLay
