import React from "react";
import logo from "./Images/habot-logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const footer = () => {
  return (
    <div style={{ background: "#123557", height: "210px"
    }} className="d-flex  w-1oo text-white">
     
      <div>
        <img src={logo} style={{ height: "100px", width:"350px", margin: "20px", paddingLeft: "90px",  paddingRight: "50px" }} className="my-5 mx-5" />
      </div>
      

      <div className="px-4 my-5" >
        <p >
          {" "}
          <b>Company </b>
        </p>
        <p>About</p>
        <p>FAQ</p>
      </div>
      <div className="px-4 my-5">
        <p><b>Terms</b></p>
        <p>Data Privacy</p>
        <p>Terms</p>
        <p>Accesibility</p>
      </div>
      <div className="px-4 my-5">
        <p><b>Related</b></p>
        <p>Find Buyer</p>
        <p>Feedback</p>
      </div>

      <div>
      <div className="d-flex justify-content-center mt-5" style={{paddingLeft:"200px", paddingTop:"50px"}}>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-3">
        <FontAwesomeIcon icon={faFacebook} size="2x" color="white" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-3">
        <FontAwesomeIcon icon={faTwitter} size="2x" color="white" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-3">
        <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-3">
        <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />
      </a>
    </div>
      </div>
    </div>
  );
};

export default footer;
