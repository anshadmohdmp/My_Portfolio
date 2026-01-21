import React from 'react'
import { FiCpu } from "react-icons/fi";
import { FaLink } from "react-icons/fa";
import { GoStack } from "react-icons/go";
import { FiMessageSquare } from "react-icons/fi";
import './Projects.css';

const Projects = () => {
    return (
        <div style={{ minHeight: "70vh" }} id="projects">
            <h1 className='title' style={{ fontSize: "60px", fontWeight: "bold", marginLeft: "150px", fontStyle: "italic" }}>
                <span style={{ textDecoration: "underline", textDecorationColor: "rgb(172, 215, 71)", textUnderlineOffset: "15px" }} >FEA</span><span >TURED</span>
                <span style={{ color: "rgba(172, 215, 71, 1)" }}> WORK.</span> </h1>
            {/* Single featured card above the grid (kept) */}
            {/* Featured card styled like the project cards (converted to div for consistent styling) */}
            <div className="project-card " style={{ width: "80%", marginLeft: "10%", marginTop: "100px", display: "flex", alignItems: "center", gap: "20px" }} >
                <div style={{ backgroundColor: "rgba(172, 215, 71, 0.13)", padding: "10px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", flexShrink: 0, border: 'none' }}>
                    <FiCpu style={{ color: 'rgb(172, 215, 71)', fontSize: '24px', backgroundColor: 'transparent' }} />
                </div>
                <div style={{ backgroundColor: "transparent" }}>
                    <p className='project-card-tag'>
                        ACTIVE ENVIRONMENT
                    </p>
                    <h6 className='project-card-text'>Anshad Muhammed Portfolio</h6>
                </div>
                <div style={{ justifyContent: "center", marginLeft: "auto", backgroundColor: "transparent" }}>
                    <button style={{ backgroundColor: 'rgb(172, 215, 71)', fontSize: "12px", color: 'black', border: 'none', padding: '14px 25px', borderRadius: '15px', fontWeight: "bold", marginRight: "20px" }}> Current Link <FaLink className='button-link' /></button>
                </div>
            </div>

            {/* Next line onwards: two cards per row */}
            <div className="projects-grid" style={{ width: '80%', margin: '40px auto' }}>
                <div className="grid-card">  {/* <-- changed classname */}
                    <div style={{ backgroundColor: "rgba(172, 215, 71, 0.13)", padding: "10px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", flexShrink: 0, border: 'none' }}>
                        <GoStack style={{ color: 'rgb(172, 215, 71)', fontSize: '24px', backgroundColor: 'transparent' }} />
                    </div>
                    <p style={{ fontSize: "12px", color: 'rgb(172, 215, 71)', marginTop: "10px", backgroundColor: "transparent" }}>
                        ECOMMERCE APP
                    </p>
                    <h3 style={{ fontSize: "20px", fontWeight: "bold", backgroundColor: "transparent" }}>BLUSH & BLOOM ECOMMERCE WEB APP</h3>
                    <p style={{ marginTop: "20px", color: "rgba(144, 144, 144, 1)", backgroundColor: "transparent" }}>
                        Blush & Bloom is a modern e-commerce website designed for a beauty brand...
                    </p>
                    <a style={{backgroundColor:"transparent"}} href="https://blush-bloom-chi.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <button style={{ backgroundColor: 'rgb(172, 215, 71)', fontSize: "12px", color: 'black', border: 'none', padding: '14px 25px', borderRadius: '15px', fontWeight: "bold", marginRight: "20px", marginTop: "20px" }}>
                            Current Link <FaLink style={{ color: "black", backgroundColor: "transparent", width: "14px", height: "14px" }} />
                        </button>
                    </a>
                </div>

                <div className="grid-card"> {/* <-- changed classname */}
                    <div style={{ backgroundColor: "rgba(172, 215, 71, 0.13)", padding: "10px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", flexShrink: 0, border: 'none' }}>
                        <FiMessageSquare style={{ color: 'rgb(172, 215, 71)', fontSize: '24px', backgroundColor: 'transparent' }} />
                    </div>
                    <p style={{ fontSize: "12px", color: 'rgb(172, 215, 71)', marginTop: "10px", backgroundColor: "transparent" }}>
                        ERP SYSTEM APP
                    </p>
                    <h3 style={{ fontSize: "20px", fontWeight: "bold", backgroundColor: "transparent" }}>BillQ ERP SYSTEM</h3>
                    <p style={{ marginTop: "20px", color: "rgba(144, 144, 144, 1)", backgroundColor: "transparent" }}>
                        A comprehensive ERP application designed to manage core business operations...
                    </p>
                    <button style={{ backgroundColor: 'rgb(172, 215, 71)', fontSize: "12px", color: 'black', border: 'none', padding: '14px 25px', borderRadius: '15px', fontWeight: "bold", marginRight: "20px", marginTop: "20px" }}>
                        Current Link <FaLink style={{ color: "black", backgroundColor: "transparent", width: "14px", height: "14px" }} />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Projects