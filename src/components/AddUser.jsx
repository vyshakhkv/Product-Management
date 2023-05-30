import React from 'react'
import { useState,useEffect } from 'react'
import '../styles/AddUser.css'
import {useForm} from 'react-hook-form'


function AddUser() {

    let [Name, setName] = useState("")
    let [DOB, setDOB] = useState("")
    let [Email, setEmail] = useState("")
    let [Salary, setSalary] = useState("")
    let [ID, setID] = useState("")
    let [Gender, setGender] = useState("")

    const{register,formState:{errors}}=useForm();
 



    


    let handleSubmit = (e) => {
        e.preventDefault()
        let userdata = {Name,DOB,Email,Salary,ID,Gender}

    


        fetch('http://localhost:2000/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userdata)
        }, [])
        alert(`${Name} is added successfully`)


    }

   

   





                   





  return (
    <div className='user_form'>
               <form action=""  onSubmit={handleSubmit} >
                   <div className="id">
                    <label htmlFor="">ID</label>
                    <input type="text" placeholder="ID" value={ID}  onChange={(e)=>setID(e.target.value)}  />
                    
                    
                    </div>

                    <div className="name">
                    <label htmlFor="">NAME</label>
                    <input type="text" placeholder="Name" value={Name}  onChange={(e)=>setName(e.target.value)}/>
                    
                    </div>
                         

                    <div className="DOB">
                    <label htmlFor="">DATE OF BIRTH</label>
                    <input type="date" placeholder="Name" value={DOB} required onChange={(e)=>setDOB(e.target.value)}/>
                  
                    </div>

                   <div className="email">
                   <label  htmlFor="">EMAIL</label>
                    <input type="email" placeholder="Email" value={Email} required onChange={(e)=>setEmail(e.target.value)}/>
                  
                    </div>

                  <div className="salary">
                  <label htmlFor="">SALARY</label>
                    <input type="text" placeholder="Salary" value={Salary} required onChange={(e)=>setSalary(e.target.value)}/>
                    
                    </div>

                  <div className="gender">
                    <label htmlFor="">Gender</label>
                    <div className="gend">
                    <label htmlFor="">Male</label>
                    <input type="radio" placeholder="Name" name='Gender' value='Male' required onChange={(e)=>setGender(e.target.value)}/>
                    <label htmlFor="">Female</label>
                    <input type="radio" placeholder="Name" name='Gender' value='Female' required onChange={(e)=>setGender(e.target.value)}/>
                    </div>
               
                    </div>

                    <button className="but_dept" type="submit">SUBMIT</button>
                     
                   
                 
                 
                    
                    </form>
    </div>
  )
}

export default AddUser