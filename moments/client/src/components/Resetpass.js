import React,{useContext,useEffect,useState} from 'react'
import { useHistory } from 'react-router-dom'
import initialcontext from '../context/moment/Momentcontext'
import  img2 from "../images/reset.svg"

const Resetpass = () => 
    {
        const context = useContext(initialcontext)
        const {resetval,Resetpass,changePasswordd,successpass}=context
        const [changepassword, setchangepassword] = useState({password:"",cpassword:""})
        // const [successpass, setsuccesspass] = useState(5)
        const lk=window.location.href
        var array = lk.split("resetpassword/");
        const token =array[1];
        const history=useHistory();
       
           useEffect(() => {
            Resetpass(token); 
             
            // eslint-disable-next-line
           }, [])
            
    const onChange=(event)=>{
        setchangepassword({...changepassword,[event.target.name]:event.target.value})
       
    }

    const handleclick=async (e)=>{
      e.preventDefault();
      const retval=await changePasswordd(token,changepassword.password,changepassword.cpassword);
       if(retval===1)
       {
          alert('password updated successfully');
          history.push('/login');
       }
       else if(retval===2)
       {
          alert('insternal error');
       }
       else if(retval===3)
       {
          alert('user with this link doesnt exist');
       }
       else if(retval===4)
       {
          alert('password doesnot matched');
       }
       else if(retval===0)
       {
          alert('wrong link');
       }
       else
       {
         alert('something went wrong');
       }
    }
           
      return (
   <>
   {resetval===1?
    <div>
    <div>
    <div className='container shadow my-5'>
        <div className='row'>
            <div className='col-md-5 d-flex flex-column align-items-center text-white justify-content-center form'>
            <img src={img2} alt="/"/>
            </div>
            <div className='col-md-6 p-5'>
            <h2 className="title"><b>Forgot Password</b></h2>
               <form>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" id='password' name='password' onChange={onChange}/>
            </div>
           
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="conform Password" id='cpassword' name='cpassword' onChange={onChange}/>
            </div>
         <button type="submit" className="btn btn-outline-primary w-100 mt-4" onClick={handleclick}>Submit</button>
       
        </form>
            </div>
        </div>
    </div>
</div>
    </div>
    :<></>}
    </>

      )
    }

export default Resetpass