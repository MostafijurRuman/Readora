import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Root() {
  return (
    <div>
      <div className='max-w-screen-4xl mx-auto px-6 md:px-16 lg:px-28'>
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}
