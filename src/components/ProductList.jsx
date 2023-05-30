import React from 'react'
import { useState,useEffect } from 'react'
import '../styles/productList.css'

function ProductList() {
   let[product,setProduct]=useState([])
   useEffect(()=>{
    let fetchData=async()=>{
      let response=await  fetch('http://localhost:1800/products')
      let data=await response.json()

      setProduct(data)
   }
    fetchData()

 },[product])

  return (
    <div>
        <div className="product_list">
            <div className="product_card">
           
                {
                    product.map((a)=>(
                        <div className="prod_table">
                            <h2>Product Name:{a.productName}</h2>
                            <h4>Description:{a.description}</h4>
                            <h3>Price:{a.price}</h3>
                            <img src={a.url} alt="" />
                            
                          
                   
                            
                       

                        </div>
                        
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default ProductList