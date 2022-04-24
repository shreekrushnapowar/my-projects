import React,{useState,useContext,useEffect} from 'react'
import {  useHistory } from 'react-router-dom'
// const dotenv=require('dotenv');
import  img2 from "../images/upload.svg"
// require('dotenv').config();
// dotenv.config({path:'./config.env'});
import axios from 'axios';
import ImageDet from './ImageDet';
import initialcontext from '../context/moment/Momentcontext'
const About = () => {
  const context = useContext(initialcontext);

  const [newUser, setNewUser] = useState(
    {
         title: '',
         des: '',
         photo: '',
    }
);
const {getMoment,Moments,setMoments}=context;
const history=useHistory();
useEffect(() => {
  if(localStorage.getItem('tokenmoment'))
  {
    getMoment(localStorage.getItem('useridmoment'));
  }
  else{
    history.push('/login')
  }

}, [])


const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('userid', localStorage.getItem('useridmoment'));
    formData.append('photo', newUser.photo);
    formData.append('des', newUser.des);
    formData.append('title', newUser.title);

  const res=  await axios.post('http://localhost:3300/add/', formData)
  //  console.log(Moments)      
  // console.log('data',res.data);
  setMoments(Moments.concat(res.data))  
        // setMoments(res.data)
}

const handleChange = (e) => {
  setNewUser({...newUser, [e.target.name]: e.target.value});
}

const handlePhoto = (e) => {
  setNewUser({...newUser, photo: e.target.files[0]});
}
  return (
    <div className='container'>
       {/* {localStorage.getItem('useridmoment')}
       {localStorage.getItem('tokenmoment')} */}
        {localStorage.getItem('tokenmoment')?
        <div>
    <div className='container shadow my-5'>
          <div className='row'>
              <div className='col-md-5 d-flex flex-column align-items-center text-white justify-content-center form'>
                      <img src={img2} alt="/"/>
              </div>
              <div className='col-md-6 p-5'>
                      <h2 className="title"><b>Upload Image</b></h2>
                      <form onSubmit={handleSubmit} encType='multipart/form-data'>
                      <input 
                          type="file" 
                          accept=".png, .jpg, .jpeg"
                          name="photo"
                          onChange={handlePhoto}
                      />

                      <input 
                          type="text"
                          placeholder="name"
                          name="title"
                          value={newUser.title}
                          onChange={handleChange}
                      />

                      <textarea 
                          type="text"
                          name="des"
                          value={newUser.des}
                          onChange={handleChange}
                      />

               <input 
                type="submit"
               />
                </form>

              </div>
          </div>
     </div>
     <div className="row my-3"> 
    {Moments.map((Moment)=>{
          //  <Noteitem key={note._id} note={note} updateNote={updateNote} showAlert={props.showAlert}/>
           return <ImageDet key={Moment._id} moment={Moment}/>
          // return console.log(Moment)
        })} 
    </div>
</div>:<></>}
       
        
       
    </div>
  )
}

export default About