import React from 'react'
import { useState,useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function EditUser() {


    let[user,setUser]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch('http://localhost:2000/user')
            let data=await response.json()
            setUser(data)
        }
        fetchData()
    },[user])


    let  handleDelete=(id,Name)=>{
        fetch(`http://localhost:2000/user/${id}`,{
            method:'DELETE'
        })
        alert(`${Name} has been deleted`)
    }

    let navigate=useNavigate();
   
    let handleEdit=(id)=>{
      
     
           navigate(`/admin/Edit/${id}`)
    
   
   }


    
  return (
    <div className='userList'>
    <Table striped bordered hover variant="dark">
    <thead>
        <tr>
        <th>USER ID</th>
        <th>NAME</th>
        <th>DOB</th>
        <th>EMAIL</th>
        <th>SALARY</th>
        <th>GENDER</th>
        <th>EDIT</th>
        <th>DELETE</th>
        </tr>
        </thead>
        <tbody>
                 {user.map(data=>(
                   <tr>
                     <td>{data.ID}</td>
                     <td>{data.Name}</td>
                     <td>{data.DOB}</td>
                     <td>{data.Email}</td>
                     <td>{data.Salary}</td>
                     <td>{data.Gender}</td>
                     <td><Button variant="secondary" onClick={()=> handleEdit(data.id,data.Name)}>EDIT</Button>{' '}</td>
                     <td><Button variant="secondary" onClick={()=>handleDelete(data.id,data.Name)}>Delete</Button>{' '}</td>
                    
                    
                     
                   </tr>
                   ))}
                 </tbody>

    </Table>

</div>
  )
}

export default EditUser