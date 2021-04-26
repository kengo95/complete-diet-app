import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FoodSum from '../components/products/FoodSum';
import ProductButton from '../components/UIkid/ProductButton'
import ProductListButton from '../components/products/productListButton';
import Time from '../components/products/Time';
import { AddFoodButton } from '../components/UIkid';
import { fetchProducts } from '../reducers/products/operation';
import { getProducts } from '../reducers/products/selscoters';
import { push } from 'connected-react-router';


const  ProductList =()=>{
  const dispatch =useDispatch(); 
  const selector =useSelector((state) =>state)
  return (
    <div>
      <div className="product-list-top">
       <h2 className="title">Foodを追加しよう</h2>
       <div className="product-list-top-child">
         <AddFoodButton label={"foodを登録する"} onClick={()=>dispatch(push('/products/edit'))} />
       </div>
      </div>
       <div className="height20"></div>
      <Time/>
      <div className="height20"></div>
      <ProductListButton />
      <div className="height40"></div>
      <FoodSum />
    </div>
  )
}

export default ProductList
