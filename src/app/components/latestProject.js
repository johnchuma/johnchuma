

const LatestProject = () => {
 
    return ( 
        <div>
           <div className=" w-12/12 px-5  md:w-8/12 mx-auto  py-0 mt-10 ">
      <div className=" text-4xl text-white md:text-7xl text-start font-bold">
        Explore all of my previous projects
        </div>
        <p className="text-start pt-7 text-white text-base ">
         I have an experiance of doing small projects and big projects, explore my projects below from my previous statisfied clients
        </p>
        
        <div className="flex mt-8 ">
          <a  target="__blank"  className="bg-primary font-bold rounded text-sm
           cursor-pointer hover:bg-slate-950 transition-all
         text-white py-4 px-8">Open latest project</a>
        </div>
      </div>
      <div className="w-full h-[2px] bg-black"></div>

        </div>
    );
}
 
export default LatestProject;