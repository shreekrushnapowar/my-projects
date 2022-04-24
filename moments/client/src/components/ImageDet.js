import React,{useContext} from 'react'
import initialcontext from '../context/moment/Momentcontext'
const ImageDet = (props) => {
  const context = useContext(initialcontext);
  const {deleteMoment}=context
  return (
    
        <div className="col-md-3">   
               <div className="card my-3">
               <img src={`http://localhost:3300/public/images/${props.moment.photo}`} class="card-img-top" alt="..."/>
                 <div className="card-body">
                  <h5 className="card-title">{props.moment.title}</h5>
                 
                  <p className="card-text">{props.moment.des}</p>
                  {/* arrow function becuase we are going to pass arguments */}
                  <i className="far fa-trash-alt mx-2" onClick={()=>{deleteMoment(props.moment._id)}}></i>
                  <i className="far fa-edit mx-2 " ></i>
                 </div>
                </div>
                </div>
        
   
  )
}

export default ImageDet