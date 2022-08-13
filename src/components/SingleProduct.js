import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from './Footer';
import Header from './Header';
import ProductsList from './ProductsList'
import styles from './SingleProduct.module.css'
const SingleProduct = () => {
    const params=new useParams();
    // SingleProduct{params.productId}
  const singleProduct= ProductsList.filter(item=> item.id === parseInt(params.productId))
  return (
    <div>
    <Header />
    <div className={`${styles["wrapper"]}`}> 
      
<div className={`${styles["image"]}`}>
 
 <img src={singleProduct[0].image} />
</div>
<div className={`${styles["properties"]}`}>
<h4>{singleProduct[0].name}</h4>
</div>
<div className={`${styles["order"]}`}>
<h5>{singleProduct[0].name}</h5>
<h6>{singleProduct[0].price} تومان</h6>
<button className={`${styles["btn-add-to-cart"]}`}>افزودن به سبد خرید</button>
</div>
      </div>
    <Footer /></div>
  )
}

export default SingleProduct