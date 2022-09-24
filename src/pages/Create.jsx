import React,{useState} from 'react'
import Home from './Home'
import axios from 'axios';

const Create = () => {

const [student, setStudent] = useState({stuname:"",email:""});

 function onTextFieldChange(e){
    setStudent({
        ...student,
        [e.target.name]: e.target.value
    })
    console.log(student);
}
async function onFormSubmit(e){
  try{
     const creates =await axios.post(`http://localhost:3001/students`, student);
     if(creates){
      return <Home />
    }
  }catch(error) {
    console.log('Something Wrong');
  }
}

    const sub = (e)=>{
        e.preventDefault();
      }
      
  return (
    <div>
       <form onSubmit={sub} method='POST'>
        <h2 className='bg-success p-3 text-white'>ADD STUDENT</h2>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Name</label>
            <input type="text" onChange={e =>onTextFieldChange(e)} name='stuname' className="form-control" placeholder="Name" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" onChange={e => onTextFieldChange(e)} name='email' className="form-control" placeholder="Email" />
          </div>
          <button type='submit' onClick={e=>onFormSubmit(e)}  className='btn btn-success'>CREATE</button>
        </form>
    </div>
  )
}

export default Create
