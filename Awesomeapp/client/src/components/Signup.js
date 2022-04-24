import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import Sign_up from "../images/SignUp2.png"
function Signup() {
  const [user, setUser] = useState({ name:"",email:"",phone:"",work:"",password:"",cpassword:"" });
  let history=useHistory(); 
  const handleClick=async(e)=>
      {   
        const {name,email,phone,work,password,cpassword}=user;
        console.log(cpassword);
          e.preventDefault();
          const response = await fetch("http://localhost:3300/register", {
              method: 'POST', 
              headers: {
                'Content-Type': 'application/json',
                },
                 body: JSON.stringify({name,email,phone,work,password,cpassword}) 
            }); 
             const Users= await response.json();
             console.log('this a user',Users);
             if(Users.success){
                 //alert('success')
                 localStorage.setItem('token',Users.authToken);
                 console.log(localStorage.getItem('token'))
                 history.push('/Login');
                 console.log('hello');
                //  props.showAlert('user created successfuly',"success");
             }
             else{
                //  props.showAlert('Invalid Details',"danger");
                console.log('error');
             }
             //setcredentials(credentials.concat(credential))
      }
  const onChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }
    return (
                    <div className="col d-flex justify-content-center">
                    <div className="card"  style={{width:"450px"}} >
                      <h5 className="card-header">Registration</h5>
                      <div className="card-body">
                      <form onSubmit={handleClick}>
                        <div className='sign-in image'>
                         <figure>
                           <img src={Sign_up} alt="singup page"  width="300" height="50"/>
                         </figure>
                        </div>
                      <div className="mb-2 mx-4">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" onChange={onChange} style={{width:"350px"}} aria-describedby="name" required/>
                      </div>
                      <div className="mb-2 mx-4">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control" id="email" style={{width:"350px"}} name="email" onChange={onChange} required/>
                      </div>
                      <div className="mb-2 mx-4">
                        <label htmlFor="mobile number" className="form-label">Mobile Number</label>
                        <input type="number" className="form-control" id="phone"  style={{width:"350px"}} name="phone" onChange={onChange} required/>
                      </div>
                      <div className="mb-2 mx-4">
                        <label htmlFor="work" className="form-label">Proffession</label>
                        <input type="text" className="form-control" id="work" style={{width:"350px"}} name="work" onChange={onChange} required/>
                      </div>
                      <div className="mb-2 mx-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="text" className="form-control" id="password" style={{width:"350px"}} name="password" onChange={onChange}  required/>
                      </div>
                      <div className="mb-2 mx-4">
                        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                        <input type="text" className="form-control" id="cpassword" style={{width:"350px"}} name="cpassword" onChange={onChange} required/>
                      </div>
                      <div className="d-flex justify-content-center" >
                      <button type="submit" className="btn btn-primary" value="Search" >Submit</button>
                      </div>
                    </form>
                      </div>
                    </div>
                    </div>
                        )
                    }
                    
export default Signup
