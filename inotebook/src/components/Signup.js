import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';

const Signup = (props) => {

const [credentials, setcredentials] = useState({name:"",email:"",password:"",cpassword:""})
let history=useHistory(); 
const handleClick=async(e)=>
    {   
      const {name,email,password,cpassword}=credentials;
      console.log(cpassword);
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
              },
               body: JSON.stringify({name,email,password}) 
          }); 
           const credential= await response.json();
           console.log(credential);
           if(credential.success){
               //alert('success')
               localStorage.setItem('token',credential.authToken)
               history.push('/login')
               props.showAlert('user created successfuly',"success");
           }
           else{
               props.showAlert('Invalid Details',"danger");
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
           <label htmlFor="Name" className="form-label">Name</label>
           <input type="name" className="form-control" name="name" id="name" onChange={onChange}aria-describedby="name"/>
         </div>
         <div className="mb-3">
           <label htmlFor="email" className="form-label">Email address</label>
           <input type="email" className="form-control" name="email" id="email" onChange={onChange}aria-describedby="name"/>
         </div>
         <div className="mb-3">
           <label htmlFor="password" className="form-label">Password</label>
           <input type="password" className="form-control" name="password" id="password" onChange={onChange}/>
         </div>
         <div className="mb-3">
           <label htmlFor="cpassword" className="form-label">Confirm Password</label>
           <input type="password" className="form-control" name="cpassword" id="password" onChange={onChange}/>
         </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
       </form>
    </div>
    )
}

export default Signup
