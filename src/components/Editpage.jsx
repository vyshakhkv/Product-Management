import React from 'react'
import axios from 'axios'
import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import '../styles/edit.css'


function Editpage() {

    let [Name, setName] = useState("")
    let [DOB, setDOB] = useState("")
    let [Email, setEmail] = useState("")
    let [Salary, setSalary] = useState("")
    let [ID, setID] = useState("")
    let [Gender, setGender] = useState("")


    const {id}=useParams();

    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:2000/user/${id}`)
        .then((res) => {
            setName(res.data.Name);
            setDOB(res.data.DOB);
            setEmail(res.data.Email);
            setSalary(res.data.Salary);
            setID(res.data.ID);
            setGender(res.data.Gender);
             
          
        });
      }, []);
      let data={Name,DOB,Email,Salary,ID,Gender}

      function Update(e) {
        e.preventDefault();
        axios.put(`http://localhost:2000/user/${id}`,data).then(navigate("/admin/view-user"));
      }



  return (
    <div className='userEdit'>
                       <h1>EDIT USER DETAILS</h1>
<form action=""  >
                   <div className="id">
                    <label htmlFor="">ID</label>
                    <input type="text" placeholder="ID" value={ID} required onChange={(e)=>setID(e.target.value)}/>
                    </div>

                    <div className="name">
                    <label htmlFor="">NAME</label>
                    <input type="text" placeholder="Name" value={Name} required onChange={(e)=>setName(e.target.value)}/>
                    </div>
                         

                    <div className="DOB">
                    <label htmlFor="">DATE OF BIRTH</label>
                    <input type="date" placeholder="Name" value={DOB} required onChange={(e)=>setDOB(e.target.value)}/>
                    </div>

                   <div className="email">
                   <label htmlFor="">EMAIL</label>
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

                    <button className="but_dept" onClick={Update} type="submit">UPDATE</button>
                     </form>




    </div>
  )
}

export default Editpage