import React,{useEffect,useState} from 'react'
// import shreepic from "../images/shree.jpg"
function About() {
    const initialabout=[];
    const [about, setabout] = useState(initialabout);
    const callaboutpage=async ()=>{
        const response = await fetch("http://localhost:3300/about", {
            method: 'GET', 
            headers: {
              'Content-Type': 'application/json',
              "auth-token":localStorage.getItem('token')   
            }
          }); 
           const json=await response.json();
           console.log(json);
           setabout(json);
    }
    useEffect(() => {
        if(localStorage.getItem('token'))
        {callaboutpage();}
        else{
        //   history.push("/login");
        }
    }, [])
    return (
        <div>
              <div className="container">
                  <form method="">
                      <div className="col-md-4">
                          {/* <img src={shreepic} alt="shree" width="600" height="500"/> */}
                      </div>
                      <div className="col-md-2">
                         <h5>{about.name}</h5>
                         <h6>{about.work}</h6>
                         
                      </div>
                  </form>
              </div>
        </div>
    )
}

export default About
