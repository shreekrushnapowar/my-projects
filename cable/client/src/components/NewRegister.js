import React,{useContext,useState} from 'react'
import { NavLink} from 'react-router-dom'
import Initialcontext from '../context/cable/CableContext'

const NewRegister = () => {
  // const history=useHistory();
  const context = useContext(Initialcontext);
  const {NewRegister1}=context;
  const [Register, setRegister] = useState({username:"",vcnumber:"",mbnumber:""})
  const handleClick=async (e)=>{
    e.preventDefault();
    const con=window.confirm('Are you sure?');
   
    if(con)
    {
      const id= await NewRegister1(Register.username,Register.vcnumber,Register.mbnumber);  
      if(id.success===1)
          {
            window.alert('Registered Successfully');
            // window.location.reload(true);
          }
          else if(id.success===2)
          {
            window.alert('Already exist');
          }
          else
          {
            window.alert('Internal error');
          }
    }
    }
  
  const onChange=(e)=>
  {
    setRegister({...Register,[e.target.name]:e.target.value});
  }
  return (
    <div>
        <div>
    <div className='container shadow my-5'>
        <div className='row justify-content-end'>
            <div className='col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2'>
                <h1 className="display-4 fw-bolder ">Hello,Friend</h1>
                <p className="lead">Enter Your Details To Register</p>
                <h5 className='mb-4'>OR</h5>
                <NavLink to='/Recharge' className='btn btn-outline-light rounded-pill pb-2 w-50'>Recharege</NavLink>
            </div>
            <div className='col-md-6 p-5'>
               <h1 className='display-6 fw-bolder mb-5'>REGISTER</h1>
               <form>
               <div className="mb-3">
             <label htmlFor="username" className="form-label">VC Number</label>
             <input type="number" className="form-control" id="vcnumber"  name= "vcnumber" aria-describedby="emailHelp" onChange={onChange} required/>
            </div>
            <div className="mb-3">
             <label htmlFor="username" className="form-label">User Name</label>
             <input type="text" className="form-control" id="username" name="username" aria-describedby="emailHelp" onChange={onChange} required/>
            </div>
            <div className="mb-3">
             <label htmlFor="username" className="form-label">Mobile Number</label>
             <input type="number" className="form-control" id="mbnumber" name="mbnumber" aria-describedby="emailHelp" onChange={onChange} required/>
            </div>
      
         <button  disabled={Register.username.length<1 || Register.vcnumber.length<1 ||Register.mbnumber.length<10 || Register.mbnumber.length>10}type="submit" className="btn btn-outline-primary w-100 mt-4"  onClick={handleClick} >Submit</button>
        </form>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default NewRegister