import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoCall, IoPerson, IoHomeSharp } from "react-icons/io5";
import { MdDownload } from "react-icons/md";
import { FaBoxOpen, FaTools } from "react-icons/fa";
import logo from './Images/IMG_6708.PNG';
import './Navigationbar.css';

const Navigationbar = () => {

  const [expanded, setExpanded] = useState(false);

   const handleNavClick = (event, id) => {
  event.preventDefault(); // stop default jump

  // Close mobile menu
  setExpanded(false);

  // Wait for the menu collapse animation to finish (~250ms)
  setTimeout(() => {
    const element = document.getElementById(id);
    const navbar = document.querySelector('.navbar');
    const offset = navbar ? navbar.offsetHeight : 80; // actual navbar height

    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, 300); // adjust 300ms if your collapse animation is faster/slower
};

  return (
    <div>
      <Navbar 
        expand="xxl" 
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        style={{ backgroundColor: 'black', margin: '80px 150px 50px 150px'}}
      >
        <Container>
          {/* Logo and Name */}
          <Navbar.Brand style={{ fontSize: "25px" }} href="#home">
            <img 
              src={logo} 
              alt="Logo" 
              style={{ height: "50px", marginRight: "-9px", marginBottom: "12px" }} 
            />
            <span>nshad Muhammed</span>
          </Navbar.Brand>

          {/* Hamburger Toggle */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: "auto", gap: '20px' }}>
              <Nav.Link onClick={(e) => handleNavClick(e, 'home')} href="#home">
                <IoHomeSharp style={{ marginRight: "5px", marginBottom: "2px" }} /> Home
              </Nav.Link>
              <Nav.Link onClick={(e) => handleNavClick(e, 'about')} href="#about">
                <IoPerson style={{ marginRight: "5px", marginBottom: "2px" }} /> About Me
              </Nav.Link>
              <Nav.Link onClick={(e) => handleNavClick(e, 'projects')} href="#projects">
                <FaBoxOpen style={{ marginRight: "5px", marginBottom: "2px" }} /> Projects
              </Nav.Link>
              <Nav.Link onClick={(e) => handleNavClick(e, 'skills')} href="#skills">
                <FaTools style={{ marginRight: "5px", marginBottom: "2px" }} /> Skills
              </Nav.Link>
              <Nav.Link onClick={(e) => handleNavClick(e, 'contact')} href="#contact">
                <IoCall style={{ marginRight: "5px", marginBottom: "2px" }} /> Contact
              </Nav.Link>

              {/* Resume Button */}
              <a 
                href="/ANSHAD_MUHAMMED_M_P.pdf" 
                download="ANSHAD_MUHAMMED_M_P.pdf" 
                style={{ textDecoration: 'none' }}
              >
                <button
                  className="resumebutton"
                  style={{
                    backgroundColor: 'rgb(172, 215, 71)',
                    color: 'black',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '25px',
                    fontWeight: 'bold'
                  }}
                >
                  <MdDownload 
                    style={{ marginBottom: '2px', color: "black", backgroundColor: "rgb(172, 215, 71)" }} 
                  /> Get Resume
                </button>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
