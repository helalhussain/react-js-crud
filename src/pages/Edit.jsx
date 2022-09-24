import React, { useState, useEffect } from 'react'

import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
  const { id } = useParams();

  const [student, setStudent] = useState({
   stuname: "",
   email: ""
  });
  useEffect(() => {
   async function getStudent() {
    try {
     const student = await axios.get(`http://localhost:3001/students/${id}`)
     // console.log(student.data);
     setStudent(student.data);
    } catch (error) {
     console.log("Something is Wrong");
    }
   }
   getStudent();
  }, [id]);
 
  function onTextFieldChange(e) {
   setStudent({
    ...student,
    [e.target.name]: e.target.value
   })
  }
 
  async function onFormSubmit(e) {
   e.preventDefault()
   try {
    await axios.put(`http://localhost:3001/students/${id}`, student)
   
   } catch (error) {
    console.log("Something is Wrong");
   }
  }
  return (
    <div className='row pt-5'>
    <div className='col-lg-3 pl-auto'></div>
    <div className='col-lg-1 pl-auto'><Link to='/' className='btn btn-success'> Back</Link></div>
    <div className='col-lg-4 '>
  <div className="card p-3">
        <div className="card-header bg-success text-white text-center ">
            <h2>Edit Student</h2>
        </div>
        <form method='POST'>
  
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Name</label>
            <input type="text" autoComplete="stuname" value={student.stuname} name='stuname' className="form-control"
             placeholder="Name" onChange={e =>onTextFieldChange(e)} />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" autoComplete="email" value={student.email} name='email' className="form-control" 
            placeholder="Email" onChange={e =>onTextFieldChange(e)} />
          </div>
          <button type='submit' onClick={e=>onFormSubmit(e)} className='btn btn-success'>EDIT</button>
        </form>
        </div>
</div>
<div className='col-lg-4'></div>
</div>
  )
}

export default Edit
