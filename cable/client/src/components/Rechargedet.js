import React,{useState,useContext} from 'react'
import Initialcontext from '../context/cable/CableContext'
import RechdetList from './RechdetList';
const Rechargedet = () => {
  let count=0;
  const Initialrech=[]
  const [dailyrech, setdailyrech] = useState(Initialrech);
  const context = useContext(Initialcontext);
  const {getrechcustomer}=context;

const onchange=async(e)=>{
  // setdate({...date,[e.target.name]:e.target.value})   
  const data=await getrechcustomer(e.target.value);
  setdailyrech(data);  
}
  return (
    <div className="container-fluid mb-5">
      Select Date :
         <input placeholder="Select date" type="date" id="example" className=" w-20" onChange={onchange}/>
         <hr/>
         <h1>Recharge Detail:</h1>
      <table className="table">
       <thead className="thead-dark">   
           <tr>
             <th scope="col">SR.NO</th>
             <th scope="col">VC Number</th>  
             <th scope="col">Date</th>
             <th scope="col">Amount</th>
             <th scope="col">pack</th>             
           </tr>
         </thead>
         <tbody>  
            
          {dailyrech.map((rech)=>
          {
                  return <RechdetList key={rech._id} count={++count} rech={rech} />
            //    return console.log("count",++count);                              
        })} 
         </tbody>
       </table>
    </div>
    
  )
}

export default Rechargedet