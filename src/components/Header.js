import React from 'react'
import styles from './Header.module.css'
import {Link} from 'react-router-dom'
import basketLogo from '../assets/basket.png'

const Header = () => {
  const loginlogo=require('../assets/loginlogo.png')
  return (
    <header className={`${styles.header}`}>
<div className={`${styles['header-top-right']}`} >
    <div className={`${styles['logo']}`} >
        <img src="https://digikala.com/statics/img/svg/logo.svg" />
        
    </div>
    <input type="text" className={`${styles['search']}`} placeholder="جستجو"/>
</div>

<div className={`${styles['header-top-left']}`} >
   
<div className={`${styles['register-box']}`}>
      <div>
        <img className={`${styles['login-logo']}`} src={loginlogo} />
        </div>

    <Link to="/login"   >ورود </Link> |  <Link to="/Login"   >ثبت نام  </Link> 
</div>
|
 <div><img src={basketLogo} /></div>
    </div>
  
    </header>


  )
}

export default Header