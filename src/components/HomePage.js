import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Products from './Products'

const HomePage = () => {
  return (
    <div className='container'>
           <Header />
    <div> 
 
      <Products />
    
    </div>
    <Footer />
    </div>
 
  )
}

export default HomePage