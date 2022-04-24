import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import Sign_in from "../images/login.png"
function Login() {

  const [Login, setLogin] = useState({email:'',password:''});

  const history=useHistory();
     
  const handleClick=async(e)=>
  {    console.log(Login.email,'wqpekrjgt',Login.password);
      e.preventDefault();
      const response = await fetch("http://localhost:3300/signin", {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
            },
             body: JSON.stringify({email:Login.email,password:Login.password}) 
        }); 
         const json= await response.json();
         console.log(json);
         if(json.success){
            // res.cookie("jwtokennn",json.authToken);
             //alert('success')
             localStorage.setItem('token',json.authToken)
          //  console.log('token-',localStorage.getItem('token'))
            //  props.showAlert('loged in successfully',"success")
            // console.log('success');
             history.push('/about');            
         }
         else{
            // props.showAlert('invalid credentials','danger')
            console.log('unsuccess');
         }
         //setcredentials(credentials.concat(credential))
  }

  const onChange=(e)=>{
    setLogin({...Login,[e.target.name]:e.target.value})

  }

    return (
        <div>
             <div className="col d-flex justify-content-center">
                    <div className="card"  style={{width:"450px"}}>
                      <h5 className="card-header">Sign In</h5>
                      <div className="card-body">
                      <form onSubmit={handleClick}>
                        <div className='sign-in image'>
                         <figure>
                           <img src={Sign_in} alt="singup page"  width="300" height="50"/>
                         </figure>
                        </div>
                      <div className="mb-2 mx-4">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control" id="email" name="email" style={{width:"350px"}} onChange={onChange} aria-describedby="name" required/>
                      </div>                   
                     
                      <div className="mb-2 mx-4">
                        <label htmlFor="email" className="form-label">Password</label>
                        <input type="text" className="form-control" id="password" style={{width:"350px"}} onChange={onChange} name="password" required/>
                      </div>
                   
                      <div className="d-flex justify-content-center" >
                      <button type="submit" className="btn btn-primary" value="Search" >Submit</button>
                      </div>
                    </form>
                      </div>
                    </div>
                    </div>
        </div>
    )
}

export default Login
