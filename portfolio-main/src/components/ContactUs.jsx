import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-700 to-gray-900 animate-fadein" id="contact_us">
      <div className="text-center text-xl">
        <h1 className="text-md font-light text-center">Get In Touch</h1>
        <p className="text-3xl font-3xl text-center">Contact Me</p>

        <div className="flex mt-10 border-2 border-black p-4 rounded-lg gap-10 hover:scale-105 hover:transition duration-300 hover:bg-blue-100 hover:shadow-md animate-bounce">
          <div className="flex items-center gap-2">
            <MdOutlineMail />
            <a href="mailto:abhisheksharma07012@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
          </div>
          <div className="flex items-center gap-2">
            <FaLinkedin />
            <a href="https://www.linkedin.com/in/abhishek-sharma-5b17631b7/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
