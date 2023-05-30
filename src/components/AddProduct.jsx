import { useState } from "react";


import { useNavigate } from "react-router-dom";
const AddDept = () => {
    let [productName, setname] = useState("")
    let [description, setDec] = useState("")
    let [price, setPrice] = useState("")
    let [file, setFile] = useState("")
    let [url, setUrl] = useState("")
    

    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()
        let userdata = { productName,description,price,file,url}

        fetch('http://localhost:1800/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userdata)
        })
        alert(`${productName} is added successfully`)
        

    }




    return (
        <div className="addDept">
            <div className="addDept_form">
                <h1>Add Products</h1>

               


                <form action="" onSubmit={handleSubmit}>
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
                        <td><input type="text"  value={url} required  onChange={(e)=>setUrl(e.target.value)} /></td>
                        <td><input type="text" /></td>
                    </tr>
                    
                </table>
                <button className="but_dept" type="submit">SUBMIT</button>
                </form>


            </div>
        </div>

    );
}

export default AddDept;