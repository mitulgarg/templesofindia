import React from 'react';
import NavHead from '../Home/NavHead';
import Dropdownbutton from '../Home/Dropdownbutton/Dropdownbutton';

const Contact = () => {

  return (
    <>
    <NavHead />
    <img src="templeicon.png" alt="temple" style={{ width: '400px', height: '400px', margin:"auto" }}></img>
    <h1 style={{marginLeft:"1rem",marginTop:'0rem'}}>Contact Details</h1> <br></br>
    <p style={{marginLeft:"2rem",marginTop:'1rem'}}>Mail : templesofindia@gmail.com</p>
    <p style={{marginLeft:"2rem",marginTop:'1rem'}}>Phone : 7406232174</p>

   </>
  );
};

export default Contact;