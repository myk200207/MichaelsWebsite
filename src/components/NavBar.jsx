import {useState} from 'react'
import resume from '../assets/resume.pdf'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 text-white w-screen px-10 md:px-10 flex justify-center ">
      <div className="w-screen py-3 flex justify-between items-center">
        <div className="text-white text-2xl font-montserrat md:inline">
          Michael
        </div>

        
        <div className="hidden md:block space-x-6">
          <a href="#LandingPage" className="hover:text-black ">
            Home
          </a>
          <a href="#AboutPage" className="hover:text-black">
            About
          </a>
          <a href="#SkillPage" className="hover:text-black">
            Skills
          </a>
          <a href="#ExperiencePage" className="hover:text-black">
            Experience
          </a>
          <a href="#ProjectPage" className="hover:text-black">
            Projects
          </a>
          <a href="#ContactPage" className="hover:text-black">
            Contact
          </a>
        </div>
        <a
          href={resume}
          target="_blank"
          className="bg-transparent text-white hidden md:inline transform transition-transform duration-300 cursor-pointer "
        >
          Resume
        </a>
        <div className="md:hidden flex flex-col items-center w-20 z-10 ">
          <button onClick={toggleMenu} className="text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          }  absolute bg-transparent flex flex-col text-center top-16 gap-2 z-20 transition-transform duration-300 ease-in-out transform ${isMenuOpen? 'translate-x-0':'translate-x-full'}`}
        >
          <a href="#LandingPage" className="block hover:text-black">
            Home
          </a>
          <a href="#AboutPage" className="block hover:text-black">
            About
          </a>
          <a href="#SkillPage" className="block hover:text-black">
            Skills
          </a>
          <a href="#ExperiencePage" className="block hover:text-black">
            Experience
          </a>
          <a href="#ProjectPage" className="block hover:text-black">
            Projects
          </a>
          <a href="#ContactPage" className="block hover:text-black">
            Contact
          </a>
          <a
            href={resume}
            download
            target="_blank"
            className="block text-white hover:text-black"
          >
            Resume
          </a>
        </div>
        </div>
        
      </div>
    </nav>
  );
}

export default NavBar