import React from 'react'



const Create = () => {




    const sub = (e)=>{
        e.preventDefault();
      }
      
  return (
    <div>
       <form onSubmit={sub}>
        <h2 className='bg-success p-3 text-white'>ADD STUDENT</h2>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Name</label>
            <input type="name" name='stuname' className="form-control" placeholder="Name" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" name='email' className="form-control" placeholder="Email" />
          </div>
          <button type='submit'  className='btn btn-success'>CREATE</button>
        </form>
    </div>
  )
}

export default Create
