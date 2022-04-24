import React,{useContext} from 'react'
import Moment from 'react-moment'
import Initialstate from '../context/cable/CableContext'
const CustomerList = (props) => {
     const context = useContext(Initialstate);
     const {Deletecust}=context;
  return (
    <>
      <tr>
             <td scope="col">{props.count}</td>
             <td scope="col">{props.customer.username}</td>
             <td scope="col">{props.customer.userid}</td>  
             <td scope="col">{props.customer.number}</td>
             <td scope="col"><Moment format="D-MM-YYYY">{props.customer.date}</Moment></td>             
             <td scope="col"> <i className="far fa-trash-alt mx-2" onClick={()=>{Deletecust(props.customer._id)}}></i></td>
            </tr>
    </>
  )
}

export default CustomerList