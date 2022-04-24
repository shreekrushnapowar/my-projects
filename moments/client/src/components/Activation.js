import React,{useContext,useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import initialcontext from '../context/moment/Momentcontext'
const Activation = () => {
    const context = useContext(initialcontext)
    const {activation,reqvalue}=context
    
    const lk=window.location.href
    var array = lk.split("activation/");
    const token =array[1];
   
    console.log(token);
 
       useEffect(() => {
         activation(token);    
        // eslint-disable-next-line
       }, [])
       
   const history=useHistory()
   
    

    const onClick=(value)=>
    {
     if(value===0)
       {
        alert('Incorrect token or expired');
        history.push('/signup');
       }
    else if(value===1)
      {
         alert('registered successfully please login ');
         history.push('/Login');
      }  
    else if(value===2)
     {
        alert('Already Exist');
        history.push('/signup');
     }
    else
     {
        alert('Something Went Wrong');
        history.push();
     }

   }

  return (
    <div>
        <button onClick={()=>{onClick(reqvalue)}}>Continue????</button>
    </div>
  )
}

export default Activation