import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link as ScrollLink, scroller } from 'react-scroll'
import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const sectionId = location.state?.scrollTo

    if (location.pathname !== '/' || !sectionId) {
      return
    }

    scroller.scrollTo(sectionId, {
      smooth: true,
      duration: 800,
      offset: -100,
    })

    navigate(location.pathname, { replace: true, state: null })
  }, [location.pathname, location.state, navigate])

  const handleSectionClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } })
      return
    }
  }

  return (
    <nav className="navbar sticky top-0 z-50 flex items-center justify-end w-full text-sm md:text-sm xl:text-lg xl:font-normal bg-white/80 backdrop-blur-md border-b border-slate-200/70">
      <div className="flex w-full items-center px-6 py-4 md:px-20">
        <div className="shrink-0">
          <ScrollLink
            to="home"
            smooth
            duration={800}
            offset={-100}
            className="cursor-pointer transition-transform text-2xl md:text-3xl"
            onClick={() => handleSectionClick('home')}
          >
            <AiFillHome className="text-gray-900 hover:scale-125" />
          </ScrollLink>
        </div>

        <ul className="ml-auto flex items-center gap-x-2 md:gap-x-6 xl:gap-x-8">
          <li>
            <ScrollLink
              to="about_me"
              smooth
              duration={800}
              offset={-100}
              className="cursor-pointer rounded-full p-1 pr-4 pl-4 hover:bg-gray-900 hover:text-white"
              onClick={() => handleSectionClick('about_me')}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="experience"
              smooth
              duration={800}
              offset={-100}
              className="cursor-pointer rounded-full p-1 pr-4 pl-4 hover:bg-gray-900 hover:text-white"
              onClick={() => handleSectionClick('experience')}
            >
              Experience
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth
              duration={800}
              offset={-100}
              className="cursor-pointer rounded-full p-1 pr-4 pl-4 hover:bg-gray-900 hover:text-white"
              onClick={() => handleSectionClick('projects')}
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact_us"
              smooth
              duration={800}
              offset={-100}
              className="cursor-pointer rounded-full p-1 pr-4 pl-4 hover:bg-gray-900 hover:text-white"
              onClick={() => handleSectionClick('contact_us')}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



