import React,{useState,useContext} from 'react'
import { NavLink, useHistory } from 'react-router-dom'
 import  img2 from "../images/log.svg"
import GoogleLogin from 'react-google-login'
import axios from 'axios'
import initialcontext from '../context/moment/Momentcontext'
// import web4 from '../images/cake4.jpeg'
const Login = () => {
  const context = useContext(initialcontext);
  const {LoginUser}=context;
  const [user, setuser] = useState({email:"",password:""});
const history=useHistory();
  const responsesuccessGoogle=async(response)=>{
      
       const res=await axios({
         method:"POST",
         url:"http://localhost:3300/googlesignin",
         data:{tokenId:response.tokenId}
       })
       console.log('res',res);
       try{
        localStorage.setItem('tokenmoment',res.data.token);
        localStorage.setItem('useridmoment',res.data.user._id) 
        history.push('/About');
       }
       catch{

       }
      
              // console.log(response.data.token);

  }
  const responsefalureGoogle=(response)=>
  {
       console.log(response);
  }
  const onChange=(event)=>{
    setuser({...user,[event.target.name]:event.target.value})
  }
 
  const handleclick=async(e)=>
  {
    e.preventDefault();
    // console.log(Login.username,Login.password);
    const cred=await LoginUser(user.email,user.password);
    console.log(cred.user._id)
    localStorage.setItem('tokenmoment',cred.token)  
    localStorage.setItem('useridmoment',cred.user._id)  
    if(cred.success===1)
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
                <img src={img2} alt="/"/>
                </div>
                <div className='col-md-6 p-5'>
                <h2 className="title"><b>Log in</b></h2>
               
                   <form>
                  <div className="input-field">
                        <i className="fas fa-envelope"></i>
                         <input type="email" placeholder="email" id='email' name='email' onChange={onChange}/>
                  </div>
                  <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" id='password' name='password' onChange={onChange}/>
            </div>
             <button type="submit" className="btn btn-outline-primary w-100 mt-4" onClick={handleclick}>Submit</button>
            <NavLink to='/signup' >Register</NavLink><NavLink to='/forget' >forgetpassword</NavLink>
            <GoogleLogin
                    clientId="565478494922-je9goqtcj64lqgvpees4ltkoo2i77j3u.apps.googleusercontent.com"
                    buttonText="Login with google"
                    onSuccess={responsesuccessGoogle}
                    onFailure={responsefalureGoogle}
                    cookiePolicy={'single_host_origin'}
                     />
            </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login