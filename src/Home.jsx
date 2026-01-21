import React, { Suspense } from 'react'
import Navigationbar from './Navigationbar'
import myphoto from './Images/IMG_6717.PNG'
import { MdDownload } from "react-icons/md"
import './Home.css'

// 👇 Lazy loaded components
const About = React.lazy(() => import('./About'))
const Projects = React.lazy(() => import('./Projects'))
const Skills = React.lazy(() => import('./Skills'))
const Contact = React.lazy(() => import('./Contact'))
const Footer = React.lazy(() => import('./Footer'))

const Home = () => {

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <div style={{ backgroundColor: 'black', color: 'white', width: '100vw', scrollBehavior: 'smooth', minHeight: '100vh' }}>
      <Navigationbar />

      <div id="home" className="home">
        <div className="home-left">

          <h6 className="role-tag mobile-1">
            Full Stack Web Developer
          </h6>

          <h1 className="home-title mobile-3">
            <span className='name'> Anshad</span>
            <span className="highlight"> Muhammed</span>
          </h1>

          <p className="home-desc mobile-4">
            <span className="gray">I build</span>
            <span className="green"> modern, scalable MERN applications </span>
            <span className="gray">
              with a strong focus on performance, security, and maintainability.
              I specialize in crafting robust React ecosystems and intuitive user interfaces
              that deliver seamless user experiences.
            </span>
          </p>

          <div className="home-buttons mobile-5">
            <button className="exploreprojects" onClick={scrollToProjects}>
              Explore Projects
            </button>

            <a
              href="/ANSHAD_MUHAMMED_M_P.pdf"
              download="ANSHAD_MUHAMMED_M_P.pdf"
              style={{ textDecoration: "none" }}
            >
              <button className="resume">
                <MdDownload /> Resume
              </button>
            </a>
          </div>
        </div>

        <div className="home-right mobile-2">
          <img
            src={myphoto}
            alt="profile"
            loading="lazy"
          />
        </div>
      </div>

      {/* 👇 Suspense fallback for lazy components */}
      <Suspense fallback={<div style={{ textAlign: 'center', padding: '40px' }}>Loading...</div>}>
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  )
}

export default Home
