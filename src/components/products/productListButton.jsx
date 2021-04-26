import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../reducers/products/operation';
import { getProducts } from '../../reducers/products/selscoters';
import ProductButton from '../UIkid/ProductButton';
 const  ProductListButton =()=>{
  const dispatch =useDispatch(); 
  const selector =useSelector((state) =>state)
  const products =getProducts(selector)
  useEffect(()=>{
    dispatch(fetchProducts());
  },[])
  return (
    <div className="c-container">    
    <div className="p-button-container">
        {products.length >0 && (
          products.map(product =>(
              <ProductButton 
              key={product.id}
               label={product.name} 
               id={product.id}
               />     
          ))
        )}
    </div> 
    </div>
  )
}

export default ProductListButton