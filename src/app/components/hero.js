const HeroSection = () => {
    const emailAddress = 'johnvchuma@gmail.com';
    const subject = 'Hello, ...';
    const body = 'Your message here ....';
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`;
    return ( <div className="">
         <div className=" w-12/12 px-5 md:w-8/12 mx-auto  py-7 ">
      <div className=" text-5xl text-white md:text-7xl text-start font-bold">
        Quality 
        </div>
        <div className=" flex text-5xl text-white md:text-7xl items-center space-x-4 text-start font-bold  ">
        <div className="h-1 bg-white w-10"/>
         <div>
          Software 
          </div>
        </div>
        <div className=" text-5xl flex text-white md:text-7xl text-start font-bold  ">
        development services
          
          
        </div>
        <p className="text-start pt-7 text-white text-base ">
         I can code your project Mobile application or Website or Managment system for a starting price of 300K. 
        </p>
        
        <div className="flex mt-8 ">
          <a href={mailtoLink} target="__blank"  className="bg-primary font-bold rounded text-sm
           cursor-pointer  transition-all
         text-white py-4 px-8">Send inquiry</a>
        </div>
      </div>
      <div className="w-full h-[2px] bg-black"></div>
    </div> );
}
 
export default HeroSection;