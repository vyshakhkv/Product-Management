import React from 'react'
import { useState,useEffect } from 'react'
import Table from 'react-bootstrap/Table';


function UserList() {
 
    let[user,setUser]=useState([])
   
   

    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch('http://localhost:2000/user')
            let data=await response.json()
          
            setUser(data)

            
        }
        fetchData()
    },[user])


    


   

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
                        
                        
                         
                       </tr>
                       ))}
                     </tbody>

        </Table>

    </div>
  )
}

export default UserList