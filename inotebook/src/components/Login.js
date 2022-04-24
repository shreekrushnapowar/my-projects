import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';

function Login(props) {

const [credentials, setcredentials] = useState({email:"",password:""})
let history=useHistory(); 
const handleClick=async(e)=>
    {   
        console.log(credentials.email,'wqpekrjgt',credentials.password);
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
              },
               body: JSON.stringify({email:credentials.email,password:credentials.password}) 
          }); 
           const json= await response.json();
           console.log(json);
           if(json.success){
               //alert('success')
               localStorage.setItem('token',json.authToken)
            //    console.log('token-',localStorage.getItem('token'))
               props.showAlert('loged in successfully',"success")
               history.push('/')
              
           }
           else{
              props.showAlert('invalid credentials','danger')
           }
           //setcredentials(credentials.concat(credential))
    }

    const onChange=(e)=>{
      //... spread opertater je properties already ahet te rahude ntr je yetat te update or overwrite kar. target name je ahe tech value pan kar
      setcredentials({...credentials,[e.target.name]:e.target.value})
    }


    return (
        <div className="container">
           <form onSubmit={handleClick}>
            
           <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
               <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp"/>
           </div>
           <div className="mb-3">
               <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
               <input type="password" className="form-control" value={credentials.password} onChange={onChange} id="password" name="password"/>
          </div>  
          <button type="submit" className="btn btn-primary">Submit</button>
        </form> 
        </div>
     )
}

export default Login
