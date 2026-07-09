const Experience = () => {
  return (
    <div className="items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 text-white" id="experience">
      <div className="text-center mb-8 pt-12">
        <h1 className="text-md font-light ">Experiences</h1>
        <h3 className="text-4xl font-bold">Work & Skills</h3>
      </div>

      <div className="flex justify-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 w-full h-fit max-w-4xl animate-slideinleft">
          <div className="border-2 border-gray-400 p-4 rounded-lg text-center outline outline-transparent outline-2 hover:outline-white hover:outline-2 transition duration-300 hover:scale-105 hover:border-none hover:bg-gray-900" >
            <h2 className="text-center text-2xl font-semibold mb-2">
              Professional Experience
            </h2>
            <ul className="mx-auto w-fit list-disc list-inside text-left space-y-1 text-lg">
              <li>Developed and managed branch -wise productivity reports to support strategic decision-making related to branch expansion, consolidation,and operational performance analysis.</li>
              <li>React.js</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="text-center border-2 border-gray-400 p-4 rounded-lg outline outline-transparent outline-2 hover:outline-white hover:outline-2 transition duration-300 hover:scale-105 hover:border-none hover:bg-gray-900 ">
            <h2 className="text-2xl font-semibold mb-2">Backend Development</h2>
            <ul className="mx-auto w-fit list-disc list-inside text-left space-y-1 text-lg">
              <li>Node.js, Express.js</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
