import React,{useState, useEffect} from 'react'

import Create from './Create'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

  const [student, setStudent] = useState([]);
  useEffect(()=>{
    async function getAllStudent(){
      try {
          const students = await axios.get("http://localhost:3001/students");
          setStudent(students.data);
        }catch(error){
          console.log("Something Wrong")
        }
      }
    getAllStudent();
  },[]);




  return (
    <div className='container'>
     <div className='row pt-5'>
    <div className='col-lg-4'>
       <Create />

    </div>

      <div className='col-lg-8'>
        <h2 className='bg-success p-3 text-white'>STUDENT LIST</h2>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">View</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
           {
            student.map((students,i)=>{
              return (
                <tr key={i}>
              <th scope="row">{i+1}</th>
              <td>{students.stuname}</td>
              <td>{students.email}</td>
              <td><Link to={`/view/${students.id}`} className='btn btn-success'>View</Link></td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
              )
            })
           }
          </tbody>
        </table>
      </div>

     </div>
  
    </div>
  )
}

export default Home
