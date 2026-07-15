import { Routes, Route } from 'react-router-dom'
import { Element } from 'react-scroll'
import ProjectPage from './components/ProjectPage'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Project from './components/Project'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import ProjectImage2 from "./images/Finanacial_Modelling04.jpg";
import ProjectImage3 from "./images/J.P_Morgen03.png";


function App() {

  return (
    <Routes>
      <Route
        path="/"
        element={(
          <>
            <Navbar></Navbar>
            <Element name="home">
              <HeroSection></HeroSection>
            </Element>
            <Element name="about_me">
              <AboutMe></AboutMe>
            </Element>
            <Element name="experience">
              <Experience></Experience>
            </Element>
            <Element name="projects">
              <Project></Project>
            </Element>
            <Element name="contact_us">
              <ContactUs></ContactUs>
            </Element>
            <Footer></Footer>
          </>
        )}
      />
      <Route path="/projects/project-1" element={<ProjectPage title="Project 1" />} />
      <Route path="/projects/project-2" element={<ProjectPage title="Certification" image={ProjectImage2} description="This page is opened through route navigation from Financial Modelling Certification." />} />
      <Route path="/projects/project-3" element={<ProjectPage title="Certification" image={ProjectImage3} description="This page is opened through route navigation from the J.P. Morgan Certification tab." />} />
    </Routes>
  )
}

export default App
