import React from 'react'
import styles from './Product.module.css'
import { Link } from 'react-router-dom'
const Product = (props) => {
  return (<div className={`${styles['product-box']}`}>

<div>
    <img style={{width:"150px"}} src={props.data.image} />
</div>
<div className={`${styles['plus-basket']}`}>+</div>
<div className={`${styles['product-name']}`}><Link to={`/Product/${props.data.id}`} >{props.data.name} </Link> </div>
<div className={`${styles['price']}`}>
    <div className={`${styles['discountedPrice-percent']}`}>
   {Math.floor((props.data.price - props.data.discountedPrice)/props.data.price*100)}% </div>
   <div>
   {props.data.discountedPrice} تومان
   <br />
   <span className={`${styles['discountedPrice']}`}>{props.data.price}</span>
    </div>
</div>
  </div>
    
  )
}

export default Product