import ProfileImg from "../images/ai-generated-9020931_1280.png";

const AboutMe = () => {
  return (
    <section className=" bg-gray-900 min-h-screen w-full flex flex-col justify-center text-white" id="about_me">
      <div className="text-center mb-10">
        <h1 className="text-md font-light">Get To Know More</h1>
        <h4 className="text-4xl font-bold">About Me</h4>
      </div>

      <div className="flex justify-center p-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full max-w-5xl animate-slideinright">
          <div className="text-center border-2 border-gray-400 p-4 rounded-lg">
            <img
              className="object-center h-36 *:w-36 md:h-72 md:w-72 rounded-full mx-auto"
              src={ProfileImg}
              alt="About Me"
            />
          </div>
          <div className ="grid grid-cols-1 md:grid-rows-2 gap-4">
            <div className="border-2 border-gray-400 text-center rounded-lg top-0">
              <h1 className="mt-8 font-bold text-xl">Experiece</h1>
              <p className="font-light text-md">1+ Years</p>
              <p className="font-light text-md mb-4">Currenlty Desiganted to Assistant Manager at Namdev Finvest Limited</p>
            </div>
            <div className="border-2 border-gray-400 w-full max-w-xl text-center rounded-lg ">
              <h1 className="mt-8 font-bold text-xl">Education</h1>
              <p className="font-light mb-4 text-md">
                Master of Business Administration (MBA) 
              </p>
              <p className="font-light mb-4 text-md">
                Bachelor of Commerce (B.Com)
              </p>  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
