// import image from "../images/portfolio_logo.jpg";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-700 to-gray-900 text-white">
      {/* <img
        className="w-36 h-36 m-10 rounded-full lg:w-52 lg:h-52 lg:m-20 "
        src={image}
        alt="Main-Image"
      /> */}
      <div className="p-2 m-8">
        <div className="text-center">
          <p className="text-sm font-light lg:text-lg">Hello, this is</p>
          <h1 className="text-lg md:text-2xl font-semibold lg:text-4xl">Abhishek</h1>
          <h2 className="font mt-4 lg:text-xl animate-zoomin italic ">Assitant Manager at Namdev Finvest. <br></br>Focused on financial transparency and data-driven decision strategy. <br></br>I specialize in creating data-driven solutions that drive business growth.</h2>

              <div className="md:flex justify-center text-xs font-light lg:text-lg mt-6 md:gap-4"> 
                <div className="mb-3 " ><a className="bg-black hover:bg-white hover:text-black text-white p-0.5 md:p-2 md:border-2 md:border-black rounded-full" href={`${import.meta.env.BASE_URL}Resume.pdf`} download="Resume.pdf" type="application/octet-stream">Download CV</a></div>
                <div><a className="bg-black hover:bg-white hover:text-black text-white p-0.5 md:p-2 md:border-2 md:border-black rounded-full" href="#">Contact info</a></div>
            </div>
        </div>

        
      </div>
    </div>
  );
};

export default HeroSection;
