import React from 'react'
import aboutus from '../image/Aboutus.jpg'
const About = () => {
  return (
    <div>
        <section id="about">
              <div className="container my-5 py-5">
                  <div className="row">
                      <div className="col-md-6">
                         <img src={aboutus} alt="About" className="w-75 mt-5"/>
                      </div>
                      <div className="col-md-6">
                           <h3 className="fs-5 mb-0">About Us</h3>
                           <h1 className="display-6 mb-2">who <b>We</b> Are</h1>
                           <hr className="w-50"/>
                           <p className='lead mb-4'>Sai cable, cable operator</p>
                           <button className="btn btn-primary rounded-pill px-4 py-2">About Us</button>
                           <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact</button>
                      </div>
                  </div>

              </div>
        </section>
    </div>
  )
}

export default About