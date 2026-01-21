import React from 'react'
import { SiJavascript, SiReact, SiTailwindcss, SiBootstrap, SiRedux, SiNodedotjs, SiMongodb, SiPostman } from "react-icons/si";
import './Skills.css'; // move styling here

const Skills = () => {
    return (
        <div style={{minHeight:"80vh"}} id='skills'>
            <h1 className='skills-title'>
                <span className="underline">TEC</span>HNICAL
                <span className="green-text"> ARSENAL.</span>
            </h1>

            <div className="skill-cards-container">
                <div className="skill-cards-grid">
                    {/* Card 1 */}
                    <div className="skill-card javascript-card">
                        <SiJavascript style={{ color: '#F7DF1E', fontSize: '60px' }} />
                        <p style={{fontSize: "12px", color: 'rgba(144, 144, 144, 1)', backgroundColor: "transparent", fontWeight: "bold", marginTop:"20px" }}>JAVASCRIPT</p>
                    </div>
                    {/* Card 2 */}
                    <div className="skill-card react-card">
                        <SiReact style={{ color: '#61DAFB', fontSize: '60px' }} />
                        <p style={{fontSize: "12px", color: 'rgba(144, 144, 144, 1)', backgroundColor: "transparent", fontWeight: "bold", marginTop:"20px" }}>REACT</p>
                    </div>
                    {/* Card 3 */}
                    <div className="skill-card tailwind-card">
                        <SiTailwindcss style={{ color: '#06B6D4', fontSize: '60px' }} />
                        <p style={{fontSize: "12px", color: 'rgba(144, 144, 144, 1)', backgroundColor: "transparent", fontWeight: "bold", marginTop:"20px" }}>TAILWIND CSS</p>
                    </div>
                    {/* Card 4 */}
                    <div className="skill-card bootstrap-card">
                        <SiBootstrap style={{ color: '#7952B3', fontSize: '60px' }} />
                        <p style={{fontSize: "12px", color: 'rgba(144, 144, 144, 1)', backgroundColor: "transparent", fontWeight: "bold", marginTop:"20px" }}>BOOTSTRAP</p>
                    </div>
                    {/* Card 5 */}
                    <div className="skill-card redux-card">
                        <SiRedux style={{ color: '#764ABC', fontSize: '60px' }} />
                        <p style={{fontSize: "12px", color: 'rgba(144, 144, 144, 1)', backgroundColor: "transparent", fontWeight: "bold", marginTop:"20px" }}>REDUX / CONTEXT</p>
                    </div>
                    {/* Card 6 */}
                    <div className="skill-card nodejs-card">
                        <SiNodedotjs style={{ color: '#339933', fontSize: '60px' }} />
                        <p style={{fontSize: "12px", color: 'rgba(144, 144, 144, 1)', backgroundColor: "transparent", fontWeight: "bold", marginTop:"20px" }}>NODE + EXPRESS</p>
                    </div>
                    {/* Card 7 */}
                    <div className="skill-card mongodb-card">
                        <SiMongodb style={{ color: '#13AA52', fontSize: '60px' }} />
                        <p style={{fontSize: "12px", color: 'rgba(144, 144, 144, 1)', backgroundColor: "transparent", fontWeight: "bold", marginTop:"20px" }}>MONGODB</p>
                    </div>
                    {/* Card 8 */}
                    <div className="skill-card postman-card">
                        <SiPostman style={{ color: '#FF6C37', fontSize: '60px' }} />
                        <p style={{fontSize: "12px", color: 'rgba(144, 144, 144, 1)', backgroundColor: "transparent", fontWeight: "bold", marginTop:"20px" }}>API TESTING</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
