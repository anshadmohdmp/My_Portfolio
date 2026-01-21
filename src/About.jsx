import React from 'react'
import { BiCode } from "react-icons/bi";
import { CiMobile2 } from "react-icons/ci";
import { FaReact } from "react-icons/fa";
import { HiOutlineCircleStack } from "react-icons/hi2";
import './About.css';

const About = () => {
    return (
        <div style={{ minHeight: "90vh" }} id="about">
            <div style={{ display: 'flex' }} className="about-wrapper">
                <div style={{ width: "60%" }} className="about-left">
                    <h1 className='about-title'>
                        <span style={{ textDecoration: "underline", textDecorationColor: "rgb(172, 215, 71)", textUnderlineOffset: "15px" }} >AB</span><span >OUT</span>
                        <span style={{ color: "rgba(172, 215, 71, 1)" }}> ME.</span> </h1>
                        <div className="about-text">
                    <p style={{ width: "600px", marginLeft: "150px", marginBottom: "20px", color: "rgba(144, 144, 144, 1)", marginTop: "150px" }}>
                        I am a passionate <span style={{ fontWeight: "bold", color: "white" }} > Full Stack Developer </span> specializing in the MERN ecosystem, with a strong focus on building scalable and efficient web applications. I enjoy working across the full development lifecycle, from designing robust backend architectures using <span style={{ fontWeight: "bold", color: "white" }}>Node.js </span>and <span style={{ fontWeight: "bold", color: "white" }}>Express</span>  to managing data with <span style={{ fontWeight: "bold", color: "white" }}> MongoDB</span>.
                    </p>
                    <p style={{ width: "600px", marginLeft: "150px", color: "rgba(144, 144, 144, 1)" }}>On the frontend, I craft responsive and intuitive user interfaces using <span style={{ fontWeight: "bold", color: "white" }}> React </span>, ensuring a smooth user experience and maintainable code structure. I am committed to writing clean, performance-oriented code and continuously improving my skills to deliver reliable and modern web solutions.</p>
                    </div>
                    <h6 style={{ fontSize: "15px", margin: "60px 20px 0 150px" }} className="about-tags" >
                        <span className="about-tag">ARCHITECTURE</span>
                        <span className="about-tag">FrontEnd</span>
                        <span className="about-tag">API</span>
                        <span className="about-tag">BACKEND</span>
                        
                    </h6>
                </div>
                <div style={{ width: "40%", display: 'flex', justifyContent: 'center', alignItems: 'flex-start',margin:"130px 0 0 -80px" }} className="about-right">
                    <div className="about-cards" style={{ width: '80%', marginTop: '40px' }} >
                        <div style={{textAlign:"center",backgroundColor: "rgba(172, 215, 71, 0.04)"}} className="about-card">
                            <div style={{ backgroundColor: "rgba(172, 215, 71, 0.13)", padding: "10px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", flexShrink: 0, border: 'none' }}>
                                <BiCode style={{ color: 'rgb(172, 215, 71)', fontSize: '24px', backgroundColor: 'transparent' }} />
                            </div>
                           <h2 style={{fontWeight:"bold",backgroundColor:"transparent",marginTop:"15px"}}>1+</h2>
                           <p style={{ fontSize:"12px",color: 'rgba(144, 144, 144, 1)',backgroundColor:"transparent",fontWeight:"bold" }}>
                    EXPERIENCE
                </p>
                        </div>

                        <div style={{textAlign:"center",backgroundColor: "rgba(172, 215, 71, 0.04)"}} className="about-card">
                            <div style={{ backgroundColor: "rgba(172, 215, 71, 0.13)", padding: "10px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", flexShrink: 0, border: 'none' }}>
                                <CiMobile2 style={{ color: 'rgb(172, 215, 71)', fontSize: '24px', backgroundColor: 'transparent' }} />
                            </div>
                            <h2 style={{fontWeight:"bold",backgroundColor:"transparent",marginTop:"15px"}}>2+</h2>
                           <p style={{ fontSize:"12px",color: 'rgba(144, 144, 144, 1)',backgroundColor:"transparent",fontWeight:"bold" }}>
                    APPS BUILT
                </p>
                        </div>

                        <div style={{textAlign:"center",backgroundColor: "rgba(172, 215, 71, 0.04)"}} className="about-card">
                            <div style={{ backgroundColor: "rgba(172, 215, 71, 0.13)", padding: "10px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", flexShrink: 0, border: 'none' }}>
                                <FaReact style={{ color: 'rgb(172, 215, 71)', fontSize: '24px', backgroundColor: 'transparent' }} />
                            </div>
                            <h2 style={{fontWeight:"bold",backgroundColor:"transparent",marginTop:"15px"}}>REACT</h2>
                           <p style={{ fontSize:"12px",color: 'rgba(144, 144, 144, 1)',backgroundColor:"transparent",fontWeight:"bold" }}>
                    JAVASCRIPT
                </p>
                        </div>

                        <div style={{textAlign:"center",backgroundColor: "rgba(172, 215, 71, 0.04)"}}  className="about-card">
                            <div style={{ backgroundColor: "rgba(172, 215, 71, 0.13)", padding: "10px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", flexShrink: 0, border: 'none' }}>
                                <HiOutlineCircleStack style={{ color: 'rgb(172, 215, 71)', fontSize: '24px', backgroundColor: 'transparent' }} />
                            </div>
                            <h2 style={{fontWeight:"bold",backgroundColor:"transparent",marginTop:"15px"}}>MERN</h2>
                           <p style={{ fontSize:"12px",color: 'rgba(144, 144, 144, 1)',backgroundColor:"transparent",fontWeight:"bold" }}>
                    STACK
                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About