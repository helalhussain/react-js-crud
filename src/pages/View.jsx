import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const View = () => {

  const {id} =useParams();
  const [student, setStudent] = useState([]);

useEffect(()=>{
  async function getStudent(){
    try {
    
      const student = await axios.get(`http://localhost:3001/students/${id}`)
      setStudent(student.data);
    } catch (error){
      console.log("Something Wrong");
    }
    }
  getStudent();
})

  return (
    <div className='row pt-5'>
        <div className='col-lg-3 pl-auto'></div>
        <div className='col-lg-1 pl-auto'><Link to='/' className='btn btn-success'> Back</Link></div>
        <div className='col-lg-4 '>
      <div className="card">
            <div className="card-header bg-success text-white text-center ">
                <h2> Student Details</h2>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">ID : {student.id}</li>
                <li className="list-group-item">{student.stuname}</li>
                <li className="list-group-item">{student.email}</li>
            </ul>
            </div>
    </div>
    <div className='col-lg-4'></div>
    </div>
  )
}

export default View
