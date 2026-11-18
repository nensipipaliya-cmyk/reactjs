import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './componets/Header/Header.jsx'
import Footer from './componets/footer/footer.jsx'

function layout() {
  return (
    <>
    <Header/>
    <div className='m-0  p-0'></div>
    <Outlet/>
    <div className='mt-6'></div>
    <Footer/>
    </>
  )
}

export default layout
