import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Login.module.css'

const Login = () => {
  const Navigate=useNavigate();
const [userName, setuserName] = useState()
const [password, setPassword] = useState()

  const login=(e)=>{
e.preventDefault();
if(userName=="ali" && password=="123")
Navigate("/")
  }
const usernameChange=(e)=>{
  setuserName(e.target.value)
}
const passwordChange=(e)=>{
  setPassword(e.target.value)
}
  return (
    <div className={`${styles['login-box']}`}>
      <form onSubmit={login}>
 <div style={{textAlign:"center"}}>
    <img src="https://www.digikala.com/statics/img/svg/logo.svg" />
 </div>
 <h3 >ورود | ثبت نام</h3>
<p>
  سلام!
  <br />
  لطفا شماره موبایل یا ایمیل خود را وارد کنید
</p>
<div className={`${styles['input-wrapper']}`}>
  <input   type="text" value={userName} onChange={usernameChange}/>
   {/* <p style={{color:"red",textAlign:"right"}}>لطفا این قسمت را خالی نگذارید</p> */}
</div>
<p>
 
  <br />
  لطفا   کلمه عبور  خود را وارد کنید
</p>
<div className={`${styles['input-wrapper']}`}>
  <input   type="password" value={password} onChange={passwordChange} />
   {/* <p style={{color:"red",textAlign:"right"}}>لطفا این قسمت را خالی نگذارید</p> */}
</div>
<div className={`${styles['input-wrapper']}`}>
<button className={`${styles['login-btn']}`}>ورود</button></div>
   <p className={`${styles['rules']}`} >ورود شما به معنای پذیرش <a href="#"   >شرایط دیجی‌کالا </a>وقوانین <a href="#">حریم‌خصوصی</a> است</p>
   </form>
    </div>
 
  )
}

export default Login