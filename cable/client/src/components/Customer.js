import React,{useEffect,useContext} from 'react'
import CustomerList from './CustomerList';
import Initialcontext from '../context/cable/CableContext'


const Customer = () => {
    const  context= useContext(Initialcontext)
    const {getcustomer,customers}=context;
    let count=0;
    useEffect(() => {
        console.log('hello');
        getcustomer();    
    }, [])
 
  return (
    <div>
      <h1>Customers</h1>
      <table className="table">
       <thead className="thead-dark">   
           <tr>
             <th scope="col">SR.NO</th>
             <th scope="col">Name</th>
             <th scope="col">VC Number</th>  
             <th scope="col">MB.Number</th>
             <th scope="col">Date</th>
             <th scope="col">Delete</th>             
           </tr>
         </thead>
         <tbody>  
         
        {customers.map((customer)=>{
                 //return cake.cakename
                //return <Cakeitem key={cake._id}  cake={cake} updateCake={updateCake}/> 
                     
                  return <CustomerList key={customer._id} count={++count} customer={customer} />
            //    return console.log("count",++count);                              
        })}
         </tbody>
       </table>
    
</div>
  )
}

export default Customer