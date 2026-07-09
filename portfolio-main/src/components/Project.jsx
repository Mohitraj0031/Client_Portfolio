import { Link } from "react-router-dom";
import ProjectImage1 from "../images/Project-Image-1.jpg";
import ProjectImage2 from "../images/Project-Image-2.png";
import ProjectImage3 from "../images/Project-Image.png";

const Project = () => {
  return (
    <div className="items-center justify-center mt-20" id="projects">
      <div className="text-center">
        <h1 className="text-md font-light">Browse My recent project</h1>
        <p className="text-4xl font-bold">Projects</p>
      </div>

      <div className="flex justify-center mt-10 text-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-full md:max-w-4xl max-w-sm animate-fadeinup">
          <Link
            to="/projects/project-1"
            className="border-2 border-black p-4 rounded-lg hover:scale-105 transition duration-300 hover:border-none hover:bg-blue-50 hover:shadow-md"
          >
            <div className="p-4 rounded-lg">
              <img className="rounded-lg" src={ProjectImage1} alt="Project 1" />
            </div>
            <h3>Project 1</h3>

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
            className="border-2 border-black p-4 rounded-lg hover:scale-105 transition duration-300 hover:border-none hover:bg-blue-50 hover:shadow-md"
          >
            <div className="p-5 rounded-lg">
              <img className="rounded-lg" src={ProjectImage2} alt="Project 2" />
            </div>
            <h3>Project 2</h3>

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
            className="border-2 border-black p-4 rounded-lg hover:scale-105 transition duration-300 hover:border-none hover:bg-blue-50 hover:shadow-md md:col-span-2"
          >
            <div className="p-2 rounded-lg">
              <img className="rounded-lg" src={ProjectImage3} alt="Project 3" />
            </div>
            <h3>Project 3</h3>

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
