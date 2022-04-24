import React,{useState,useContext} from 'react'
import { NavLink } from 'react-router-dom'
import  img2 from "../images/forgot.svg"
import initialcontext from '../context/moment/Momentcontext'
const Forgetpass = () => {
    const [forget, setforget] = useState({email:""})
    const context = useContext(initialcontext)
    const {Forgetpass}=context
    const onChange=(event)=>
    {
        setforget({...forget,[event.target.name]:event.target.value})
    }
    const handleclick=async(e)=>{
          e.preventDefault();
          const ismailsent=await Forgetpass(forget.email);
          if(ismailsent.success===1)
          {
             alert("Mail has been sent to you please check in spam");
          }
          else if(ismailsent.success===2)
          {
            alert("Email Does not exist");
          }
          else
          {
            alert("Something Went wrong");
          }

    }
  return (
    <div>
         <div>
    <div className='container shadow my-5'>
        <div className='row'>
            <div className='col-md-5 d-flex flex-column align-items-center text-white justify-content-center form'>
            <img src={img2} alt="/"/>
            </div>
            <div className='col-md-6 p-5'>
            <h2 className="title"><b>Forgot Password</b></h2>
               <form>
            
              <div className="input-field">
                     <i className="fas fa-envelope"></i>
                     <input type="email" placeholder="Email" onChange={onChange} id='email' name='email'/>
              </div>
           
         <button type="submit" className="btn btn-outline-primary w-100 mt-4" onClick={handleclick}>Submit</button>
        OR<NavLink to='/Login' >Login</NavLink>
        </form>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Forgetpass