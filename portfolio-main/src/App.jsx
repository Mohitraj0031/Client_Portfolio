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
import ProjectImage2 from './images/Project-Image-2.png'
import ProjectImage3 from './images/Project-Image.png'


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
      <Route path="/projects/project-2" element={<ProjectPage title="Project 2" image={ProjectImage2} description="This page is opened through route navigation from the Project 2 tab." />} />
      <Route path="/projects/project-3" element={<ProjectPage title="Project 3" image={ProjectImage3} description="This page is opened through route navigation from the Project 3 tab." />} />
    </Routes>
  )
}

export default App
