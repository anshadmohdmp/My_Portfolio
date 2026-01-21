import React from 'react'
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { LuMessageCircle } from "react-icons/lu";
import './Footer.css';

const Footer = () => {
  const handleLinkedIn = () => window.open(import.meta.env.VITE_LINKEDIN_URL, '_blank');
  const handleGitHub = () => window.open(import.meta.env.VITE_GITHUB_URL, '_blank');
  const handleMessage = () => window.open(import.meta.env.VITE_EMAILID, '_blank');

  return (
    <div className='wholefooter'>
      <hr />
      <div className="footer-container">
        {/* Column 1: Name + Para */}
        <div className="footer-col name-col">
          <h1 className="footer-name">
            <span style={{ color: "rgba(255, 255, 255, 1)",fontSize:"22px" }}>ANSHAD</span>
            <span style={{ color: "rgb(172, 215, 71)", fontSize:"22px" }}> MUHAMMED.</span>
          </h1>
          <p style={{fontSize:"12px", width:"320px", color:"grey"}} className="footer-para">
            Computer Science Engineer specializing in high-performance MERN & Mobile experiences.
          </p>
        </div>

        {/* Column 2: Links */}
        <div className="footer-col links-col">
          <div className="footer-links">
            <a className='links' href="#home">HOME</a>
            <a className='links' href="#projects">PROJECTS</a>
            <a className='links' href="#contact">CONTACT</a>
          </div>
        </div>

        {/* Column 3: Social icons */}
        <div className="footer-col social-col">
          <div className="footer-social">
            <button className="social-btn" onClick={handleLinkedIn} title="LinkedIn"><FiLinkedin /></button>
            <button className="social-btn" onClick={handleGitHub} title="GitHub"><LuGithub /></button>
            <button className="social-btn" onClick={handleMessage} title="Message"><LuMessageCircle /></button>
          </div>
        </div>
      </div>

      <hr style={{ width: "90%", margin: "20px auto", borderStyle: "dashed" }} />
      <p style={{ textAlign: "center", fontSize: "12px", color: "rgba(144, 144, 144, 1)", margin: "20px 0" }}>
        © 2026 Anshad Muhammed. All rights reserved.
      </p>
    </div>
  )
}

export default Footer;
