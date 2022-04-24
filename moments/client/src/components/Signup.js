import React,{useState,useContext} from 'react'
import { NavLink } from 'react-router-dom'
import  img2 from "../images/register.svg"
import initialcontext from '../context/moment/Momentcontext'
const Signup = (props) => {
  const context = useContext(initialcontext);
  const {AddUser}=context;
  const [userdetails, setuserdetails] = useState({name:"",email:"",password:""})
  const handleclick=async(e)=>{
    e.preventDefault();
    const result=await AddUser(userdetails.name,userdetails.email,userdetails.password);
    console.log(result);
    if(result.success===1)
      {
        alert('mail has been sent to you');
      }
    else if(result.success===2)
      {
        alert('mail id already exist');
      }
      else
      {
        alert('something went wrong');
      }
  }
  const onChange=async(event)=>{
    setuserdetails({...userdetails,[event.target.name]:event.target.value})
  }
  return (
    <div>
    <div className='container shadow my-5'>
        <div className='row'>
            <div className='col-md-5 d-flex flex-column align-items-center text-white justify-content-center form'>
            <img src={img2} alt="/"/>
            </div>
            <div className='col-md-6 p-5'>
            <h2 className="title"><b>sign up</b></h2>
               <form>
              <div className="input-field">
                    <i className="fas fa-user"></i>
                     <input type="text" placeholder="Username" onChange={onChange} id='name' name='name'/>
              </div>
              <div className="input-field">
               <i className="fas fa-envelope"></i>
                     <input type="email" placeholder="Email" onChange={onChange} id='email' name='email'/>
              </div>
              <div className="input-field">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" onChange={onChange} id='password' name='password'/>
        </div>
         <button type="submit" className="btn btn-outline-primary w-100 mt-4" onClick={handleclick}>Submit</button>
        OR<NavLink to='/signup' >Register</NavLink>
        </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Signup