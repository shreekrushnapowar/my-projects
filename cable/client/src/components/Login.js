import React,{useState,useContext} from 'react'
import { NavLink,useHistory } from 'react-router-dom'
import Initialcontext from '../context/cable/CableContext'
const Login = () => {
        
       const [Login, setLogin] = useState({username:"",password:""});
       const context = useContext(Initialcontext)
       const {LoginCable}=context
       let history=useHistory(); 
const onChange=(e)=>
  {
    setLogin({...Login,[e.target.name]:e.target.value});
  }

  const handleclick=async(e)=>
  {
    e.preventDefault();
    // console.log(Login.username,Login.password);
    const cred=await LoginCable(Login.username,Login.password);
    if(cred.success===true)
    {   
        window.alert('sucessfully logged in');
        history.push('/about') 
    }
    else{
      window.alert('invalid credentials');
      history.push('/Login'); 
    }
    
  }
  
  return (
    <div>
        <div className='container shadow my-5'>
            <div className='row'>
                <div className='col-md-5 d-flex flex-column align-items-center text-white justify-content-center form'>
                    <h1 className="display-4 fw-bolder">welcome Back</h1>
                    <p className="lead">Enter Your Credentials To Login</p>
                    <h5 className='mb-4'>OR</h5>
                    <NavLink to='/register' className='btn btn-outline-light rounded-pill pb-2 w-50'>Register</NavLink>
                </div>
                <div className='col-md-6 p-5'>
                   <h1 className='display-6 fw-bolder mb-5'>LOGIN</h1>
                   <form>
                    <div className="mb-3">
               <label htmlFor="exampleInputEmail1" className="form-label">User ID</label>
               <input type="text" className="form-control"  aria-describedby="emailHelp" name="username" id="username" onChange={onChange}/>
             </div>
             <div className="mb-3">
               <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
               <input type="password" className="form-control" name="password" id="password" onChange={onChange}/>
             </div>
           
             <button type="submit" className="btn btn-outline-primary w-100 mt-4" onClick={handleclick}>Submit</button>
            </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login