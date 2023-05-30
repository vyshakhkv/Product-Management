import React from 'react'
import axios from 'axios'
import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";


function EditProduct() {

    let [productName, setname] = useState("")
    let [description, setDec] = useState("")
    let [price, setPrice] = useState("")
    let [file, setFile] = useState("")
    let [url, setUrl] = useState("")
    
    const {id}=useParams();

    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:1800/products/${id}`)
        .then((res) => {
            setname(res.data.productName);
            setDec(res.data.description);
            setPrice(res.data.price);
            setFile(res.data.file);
            setUrl(res.data.url);
             
          
        });
      }, []);
      let data={productName,description,price,file,url}

      function Update(e) {
        e.preventDefault();
        axios.put(`http://localhost:1800/products/${id}`, data).then(navigate("/admin/view-prod"));
      }
       
  return (
    <div className='edit_prod'>
        <div className="edit_form">
                <h1>EDIT PRODUCT</h1>

               


                <form action="" >
                <table>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                        <th>Description</th>
                    </tr>
                    
                    <tr>
                        <td>PRODUCT NAME</td>
                        <td><input type="text"   value={productName} required onChange={(e)=>setname(e.target.value)} /></td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>description</td>
                        <td><input type="text"  value={description} required onChange={(e)=>setDec(e.target.value)}/></td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                    <td>price</td>
                        <td><input type="text"  value={price} required onChange={(e)=>setPrice(e.target.value)}/></td>
                        <td><input type="text" /></td>
                    </tr>

                    <tr>
                    <td>file</td>
                        <td><input type="file"  value={file}  onChange={(e)=>setFile(e.target.value)}/></td>
                        <td><input type="text" /></td>
                    </tr>

                    <tr>
                    <td>Image URL</td>
                        <td><input type="text"  value={url}  onChange={(e)=>setUrl(e.target.value)} /></td>
                        <td><input type="text" /></td>
                    </tr>
                    
                </table>
                <button className="but_dept" type="submit" onClick={Update}>SUBMIT</button>
                </form>


            </div>
        
    </div>
  )
}

export default EditProduct