import React from 'react'
import { useState,useEffect } from 'react'
import '../styles/productList.css'
import { useNavigate,useLocation } from "react-router-dom";

function Edit() {
   let[product,setProduct]=useState([])
   useEffect(()=>{
    let fetchData=async()=>{
      let response=await  fetch('http://localhost:1800/products')
      let data=await response.json()

      setProduct(data)
   }
    fetchData()

 },[product])


 let handleDelete=(id,productName)=>{
    fetch(`http://localhost:1800/products/${id}`,{
    method:'DELETE'
 } )
 alert(`${productName} will be deleted permenantly`)
}


let navigate=useNavigate();
   
    let handleEdit=(id)=>{
      
     
           navigate(`/admin/Edit/${id}`)
    
   
   }



 


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
                            <h3>Price:{a.price}</h3>
                            <img src={a.url} alt="" />
                            <button onClick={()=>handleEdit(a.id)}>Edit</button>
                            <button onClick={()=>handleDelete(a.id,a.DepartmentName)}>Delete</button>
                           
                            
                       

                        </div>
                        
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Edit