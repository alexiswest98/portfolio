import React from 'react';
import { github, linkedin } from '../assets';
import resume from "../assets/AlexisWestResume.pdf";
import "./feedback.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Feedbacks = () => {
  return (
    <div className='contact-container'>
      <div className="contact-inner">
        <a target="_blank" href='https://www.linkedin.com/in/alexis-west-596a6b203/'
          className='linkedin-tag'
        >
          <img src={linkedin} alt="linkedin logo" className='linkedin-img'></img>
        </a>
        <a target="_blank" href='https://github.com/alexiswest98'
          className='linkedin-tag'
        >
          <img src={github} alt="github logo" className='linkedin-img'></img>
        </a>
        <div className='button-container'>
        <a className="button" href={resume} download="AlexisWestResume.pdf" role="button">
          <span>Resume</span>
          <div className="icon">
            <FontAwesomeIcon icon={faDownload} style={{color: "#29008a",}} className="fa"/>
          </div>
        </a>
        </div>
      </div>
    </div>
  )
}

export default Feedbacks;
