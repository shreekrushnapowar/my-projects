import React,{useState,useContext} from 'react'
import { NavLink } from 'react-router-dom'
import Initialcontext from '../context/cable/CableContext'
const Recharge = () => {
  const [Recharge, setRecharge] = useState({vcnumber:"",username:"",pack:"",amount:""})
  const context = useContext(Initialcontext);
  const {getusername,username,DailyRecharge}=context;
  const onChangevc=(e)=>{
    setRecharge({...Recharge,[e.target.name]:e.target.value});
    getusername(e.target.value);
  }
  const onChange=(e)=>{
    setRecharge({...Recharge,[e.target.name]:e.target.value});
      }
      const handleclick=async(e)=>{
        e.preventDefault();
        const con=window.confirm('Are you sure?');
        if(con)
        {
          const id= await DailyRecharge(Recharge.vcnumber,Recharge.pack,Recharge.amount);
          if(id)
              {
                window.alert('Recharged Successfully');
                // window.location.reload(true);
              }
              else
              {
                window.alert('Internal error');
              }
    }

      }
  return (
    <div>
         <div>
        <div>
    <div className='container shadow my-5'>
        <div className='row justify-content-end'>
            <div className='col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2'>
                <h1 className="display-4 fw-bolder ">Hello,Friend</h1>
                <p className="lead">Monthly Recharge </p>
                <h5 className='mb-4'>OR</h5>
                <NavLink to='/Recharge' className='btn btn-outline-light rounded-pill pb-2 w-50'>Recharege</NavLink>
            </div>
            <div className='col-md-6 p-5'>
               <h1 className='display-6 fw-bolder mb-5'>RECHARGE</h1>
               <form>
               <div className="mb-3">
             <label htmlFor="username" className="form-label">VC Number</label>
             <input type="number" className="form-control" onChange={onChangevc} id="vcnumber" name="vcnumber" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
             <label htmlFor="username" className="form-label">User Name</label>
             <input type="text" value={username} className="form-control" id="username" name="username"  aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
             <label htmlFor="pack" className="form-label">Pack</label>
             <input type="text" className="form-control" id="pack" name="pack" onChange={onChange} aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
             <label htmlFor="username" className="form-label">Amount</label>
             <input type="number" className="form-control" id="amount" onChange={onChange} name="amount" aria-describedby="emailHelp"/>
            </div>
         <button disabled={Recharge.vcnumber.length<1 ||Recharge.pack.length<1|| Recharge.amount.length<1} type="submit" className="btn btn-outline-primary w-100 mt-4" onClick={handleclick}>Submit</button>
        </form>
            </div>
        </div>
    </div>
</div>
    </div>
    </div>
  )
}

export default Recharge