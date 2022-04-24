import React,{useState} from 'react'
import MomentContext from './Momentcontext';

const Momentstate = (props) => {
    const host="http://localhost:3300";
    const [reqvalue, setreqvalue] = useState(4);
    const inimoment=[]
    const [Moments, setMoments] = useState(inimoment);
    
    const [resetval,setresetval]=useState(4);
    const [successpass, setsuccesspass] = useState(5)
    const AddUser=async (name,email,password)=>
      {
        const response = await fetch(`${host}/register`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name,email,password}) 
        }); 
         const json=await response.json();
         return json;      
      }
     const activation=async(token)=>
     {
      const response = await fetch(`${host}/activation/${token}`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
        }, 
      }); 
       const json=await response.json();
      //  console.log(json.success);
      //  return json;
      setreqvalue(json.success);  
     }
     const LoginUser=async(email,password)=>
     {
      const response = await fetch(`${host}/signin`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email,password}) 
      }); 
       const json=await response.json();
       return json;   
     }

     const Forgetpass=async(email)=>
     {
      const response = await fetch(`${host}/forgetpassword`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email}) 
      }); 
       const json=await response.json();
       return json;   
     }

     const Resetpass=async(token)=>
     {
      const response = await fetch(`${host}/resetpasswordd/${token}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
      }); 
       const json=await response.json();
    
       setresetval(json.success)   
     }
     

     const changePasswordd=async(token,password,conformpass)=>
     {
      const response = await fetch(`${host}/resetpassword/${token}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({password,conformpass}) 
      }); 
       const json=await response.json();
       setsuccesspass(json.success)
       return json.success; 
     }

     const UploadImage=async(data)=>
     {
      const response = await fetch(`${host}/add`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({data}) 
      }); 
       const newmomwnt=await response.json(); 
      //  console.log('initial',Moments);
      //  console.log('new',newmomwnt);
       setMoments(Moments.concat(newmomwnt))  
      //  console.log('update',Moments) 
     }
     const deleteMoment=async (id)=>{
      const response = await fetch(`${host}/delete/${id}`, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json',
          "auth-token":localStorage.getItem('token')   
        }
      }); 
       const json=response.json();
      //  console.log(json);
       const newMoments=Moments.filter((Moment)=>{return Moment._id!==id})
       setMoments(newMoments);
  
    }

     const getMoment=async (data)=>{
      const response = await fetch(`${host}/fetchalldet`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          "auth-token":localStorage.getItem('token')   
        },
        body: JSON.stringify({data}) 
      }); 
       const json=await response.json();
       
        setMoments(json);
      
    }
  return (
        <MomentContext.Provider value={{AddUser,activation,reqvalue,LoginUser,Forgetpass,Resetpass,resetval,changePasswordd,successpass,UploadImage,getMoment,Moments,deleteMoment,setMoments}}>
              {props.children}
          </MomentContext.Provider>
  )
}

export default Momentstate