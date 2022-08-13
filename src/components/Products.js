import React, { useState } from 'react'
import Product from './Product'
import ProductsList from './ProductsList'
import styles from './Products.module.css'
import { NavLink } from 'react-router-dom'
import sort from '../assets/sort.png'
import filters from '../assets/filter.png'

const Products = () => {
  let activeStyle = {
    color: "red",
  };


  const [myProductList, setmyProductList] = useState(ProductsList)

  function compare(a, b) {
    const bandA = a.price
    const bandB = b.price
  
    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }
  
  // setmyProductList(myProductList.sort(compare))

  function compareReverse(a, b) {
    // Use toUpperCase() to ignore character casing
    const elemntA = a.price
    const elemntB= b.price
  
    let comparison = 0;
    if (elemntA > elemntB) {
      comparison = 1;
    } else if (elemntA < elemntB) {
      comparison = -1;
    }
    return comparison * -1;
  }
  const [filter, setFilter] = useState('') 

const changeFilterHandler =(e)=>{
  setFilter(e.target.value)

}

const sortBy=(nums)=>{
if(nums==1){
  setmyProductList(myProductList.sort(compareReverse))
  console.log("After  Descending Sort: ",myProductList);
}
else if(nums==2){
  setmyProductList(myProductList.sort(compare));
  console.log("After Ascending Sort: ",myProductList);
}
}
  return (<div>
        <ul className={`${styles['sorted-ul']}`}>
          <li><img  src={sort} /> مرتب سازی:</li>
        <li onClick={()=>sortBy(1)}><NavLink to="/"  style={({ isActive }) =>isActive ? activeStyle : undefined}>گرانترین</NavLink> </li>
        <li onClick={()=>sortBy(2)}><NavLink to="/"  style={({ isActive }) =>isActive ? activeStyle : undefined}>ارزانترین</NavLink> </li>
        <li onClick={()=>sortBy(3)}> <NavLink to="/Login" style={({ isActive }) =>isActive ? activeStyle : undefined} >حروف الفبا</NavLink> </li>
       
      </ul>
      <span>  <img style={{width:"20px"}}  src={filters} />فیلتر:  </span><input type="text" value={filter} onChange={changeFilterHandler}></input> 
    <div className={`${styles['products-container']}`}>
  {console.log("beforemap",myProductList)} 
{ myProductList.filter(item => item.name.includes(filter)).map(item =>{
   return <Product data={item}  /> 
})}
  </div>
    </div>
  )
}

export default Products