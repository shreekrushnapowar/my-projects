import React,{useState} from 'react'
import CableContext from './CableContext'

const CableState = (props) => {
    const host="http://localhost:3300";
    const initialcustomer=[];
    const [customers, setcustomers] = useState(initialcustomer);
    const [username, setusername] = useState('');
    
    const LoginCable=async(username,password)=>{
      const response = await fetch(`${host}/signin`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          },
           body: JSON.stringify({username,password}) 
      }); 
       const json= await response.json();
       if(json.success){             
        localStorage.setItem('token',json.token)           
         }
       return json;
    }
    
    const NewRegister1=async (username,userid,number)=>
    {
       const response = await fetch(`${host}/addcustomer`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username,userid,number}) 
      }); 
       const json=await response.json();
       console.log(json);
       return json;
    }
      const getcustomer=async()=>{
      const response = await fetch(`${host}/getcustomers`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
        },
       
      }); 
       const json=await response.json();    
       setcustomers(json);       
      }
    
      const Deletecust=async(id)=>{
        const val=window.confirm('Are you sure?');
        if(val)
        { const response = await fetch(`${host}/delete/${id}`, {
          method: 'DELETE', 
          headers: {
            'Content-Type': 'application/json',
          },
        }); 
         const json=await response.json();  
         console.log(json);
         const newCust=customers.filter((customer)=>{return customer._id!==id})
        //  setcakes(newCake);  
         setusername(newCust);    
      }
      
    }
  const getusername=async(userid)=>{
        const response = await fetch(`${host}/username`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({userid}) 
        }); 
         const json=await response.json();
         if(json!==1)
         {setusername(json);}
         else{setusername('');}    
          
       }
  const DailyRecharge=async(userid,pack,amount)=>{
    console.log(userid,pack,amount);
    const response = await fetch(`${host}/recharge`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({userid,pack,amount}) 
    }); 
     const json=await response.json();
     return json;
  } 

  const getrechcustomer=async(date)=>{
    const response = await fetch(`${host}/getrechargedet`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({date}) 
    }); 
     const json=await response.json(); 
     console.log(json)   
     return json;       
    }
  return (
         <CableContext.Provider value={{NewRegister1,getcustomer,customers,Deletecust,getusername,username,DailyRecharge,getrechcustomer,LoginCable}}>
             {props.children}
         </CableContext.Provider>
  )
}

export default CableState