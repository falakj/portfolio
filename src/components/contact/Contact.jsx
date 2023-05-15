import React from "react";
//import {Container, Row, Col} from "react-bootstrap";
//import { contactConfig } from "../../content_option.jsx";
import "./contact.scss";

const Contact = () => {
  return (
  
    <div className="contact">
       

      <div className="left">
      <p> LET'S CONNECT </p>
       <span class="line"></span>
        
        <form>
          <h1>Name</h1>
          <input type="text" id="1"></input>
          <label for="1">Full Name</label><br></br>
         
          <h1>Email*</h1>
          <input type="text" id="1"></input>
          
          
          <h1>Message*</h1>
          <textarea></textarea>
          
          <button type="Submit">Submit</button>
        </form>

        


      </div>





      <div className="right">
        <p>Mail me at:</p>
        <p1>falakjabin@gmail.com</p1>
        

        <div className="icons">
          <p>Follow me:</p>
          
          <img src="assets/LinkedIn Circled.svg" alt=""/>
          <img src="assets/GitHub.svg" alt=""/>
          <img src="assets/Behance.svg" alt=""/>
          <img src="assets/Instagram.svg" alt=""/>
        </div>
        
      </div>
    
    </div>

   
   
  );
}

export default Contact