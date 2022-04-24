import React from 'react';
import ReactWhatsapp from 'react-whatsapp';
import img from '../image/wpimag.jpg'
// import img from '../public/wpimag.jpg'
const Whatsapp = (props) => {
  return <div>
      <ReactWhatsapp number={`+91`+props.number}>
          <img src={img} alt=""/>
     send a message
  </ReactWhatsapp>
  </div>;
};

export default Whatsapp;
