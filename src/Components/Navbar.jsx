// import logo from "../assets/kevinRushLogo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src="./kevinRushLogo.png" alt="logo" />
        </div> 
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/mohamed-karim-kribi-31b30b248/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
        </a>
        <a href="https://github.com/KarimKribi02" target="_blank" rel="noopener noreferrer">
            <FaGithub/>
        </a>
          <a href="https://www.instagram.com/krm_02/" target="_blank" rel="noopener noreferrer">
            <FaInstagram/>
          </a>
        </div>
    </nav>
  )
}

export default Navbar
