import { Link } from "react-router-dom";
import ProjectImage1 from "../images/Financial_Accounting01.jpg";
import ProjectImage2 from "../images/Finanacial_Modelling04.jpg";
import ProjectImage3 from "../images/J.P_Morgen03.png";

const Project = () => {
  return (
    <div className="items-center justify-center bg-gray-900 text-white" id="projects">
      <div className="text-center pt-10">
        <h1 className="text-md font-light">Browse My recent certifications</h1>
        <p className="text-4xl font-bold">Certifications</p>
      </div>

      <div className="flex justify-center mt-10 text-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:w-full md:max-w-4xl max-w-sm animate-fadeinup">
          <Link
            to="/projects/project-1"
            className="border-2 border-black p-4 rounded-lg hover:scale-105 transition duration-300 hover:border-none hover:bg-blue-50 hover:shadow-md bg-gray-700"
          >
            <div className="p-4 rounded-lg">
              <img className="rounded-lg" src={ProjectImage1} alt="Project 1" />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-black">Financial Analyst Certification</h3>

            {/* <div className="flex justify-center items-center text-sm font-light gap-4 mt-10">
              <div className="border-2 border-black rounded-2xl hover:bg-black hover:text-white">
                <span className="p-4 block">Github</span>
              </div>
              <div className="border-2 border-black rounded-2xl hover:bg-black hover:text-white">
                <span className="p-4 block">Live Demo</span>
              </div>
            </div> */}
          </Link>

          <Link
            to="/projects/project-2"
            className="border-2 border-black p-4 rounded-lg hover:scale-105 transition duration-300 hover:border-none hover:bg-blue-50 hover:shadow-md bg-gray-700"
          >
            <div className="p-5 rounded-lg">
              <img className="rounded-lg" src={ProjectImage2} alt="Project 2" />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-black">Financial Modelling Certification</h3>

            {/* <div className="flex justify-center items-center text-sm font-light gap-4 mt-10">
              <div className="border-2 border-black rounded-2xl hover:bg-black hover:text-white">
                <span className="p-4 block">Github</span>
              </div>
              <div className="border-2 border-black rounded-2xl hover:bg-black hover:text-white">
                <span className="p-4 block">Live Demo</span>
              </div>
            </div> */}
          </Link>

          <Link
            to="/projects/project-3"
            className="border-2 border-black p-4 rounded-lg hover:scale-105 transition duration-300 hover:border-none hover:bg-blue-50 hover:shadow-md bg-gray-700"
          >
            <div className="p-2 rounded-lg">
              <img className="rounded-lg" src={ProjectImage3} alt="Project 3" />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-black">JP Morgan Chase Certification</h3>

            {/* <div className="flex justify-center items-center text-sm font-light gap-4 mt-10">
              <div className="border-2 border-black rounded-2xl hover:bg-black hover:text-white">
                <span className="p-4 block">Github</span>
              </div>
              <div className="border-2 border-black rounded-2xl hover:bg-black hover:text-white">
                <span className="p-4 block">Live Demo</span>
              </div>
            </div> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
