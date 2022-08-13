import React from 'react'
import Footer from './Footer'
import Header from './Header'

const NotFound = () => {
  return (
    <div>
        <Header />

        <div>
            <p>صفحه ای که دنبال آن بودید یافت نشد!</p>
            <p><a href="/"> صفحه اصلی &gt;</a></p> <br />
            <img src="https://www.digikala.com/statics/img/png/page-not-found.png" />
            </div> 
        <Footer />
    </div>
   
  )
}

export default NotFound