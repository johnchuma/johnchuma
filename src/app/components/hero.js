const HeroSection = () => {
    const emailAddress = 'johnvchuma@gmail.com';
    const subject = 'Hello, ...';
    const body = 'Your message here ....';
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`;
    return ( <div className="bg-pink-50 bg-opacity-30 ">
         <div className=" w-12/12 px-4  md:w-8/12 mx-auto  py-36 ">
      <div className=" text-5xl md:text-7xl text-center font-bold  ">
        Websites and mobile app developer, interested in decentralized applications
        </div>
        <p className="text-center py-10 text-lg w-9/12 mx-auto hidden md:block ">
        Hello, <span className="bg-pink-200 opacity-100">I'm John Vedastus Chuma</span> – your dedicated Full stack Developer. I'm driven by a profound passion for crafting inventive 
        decentralized applications and delving into the boundless possibilities of blockchain technology. 
        I bring a keen eye for cutting-edge solutions to revolutionize the digital landscape. 
        </p>
        <p className="text-center py-10 text-lg w-11/12 mx-auto block md:hidden ">
        Hello, <span className=" opacity-100">I'm John Vedastus Chuma.</span> 
        </p>
        <div className="flex space-x-4 justify-center">
        <a href="https://github.com/johnchuma" target="__blank" className="py-4 px-8 border cursor-pointer border-black rounded-lg hover:border-indigo-700 transition-all flex space-x-2">
          <div>
          Github repo
          </div>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
        </svg>
          </div>
          
          </a>
          <a href={mailtoLink} target="__blank"  className="bg-indigo-700 rounded-lg text-sm cursor-pointer hover:bg-slate-950 transition-all
         text-white py-4 px-8">Hire me</a>
        </div>
      </div>
      <div className="w-full h-[2px] bg-black"></div>
    </div> );
}
 
export default HeroSection;