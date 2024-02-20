import Image from "next/image"
import { projects } from "../utils/projects";
import Link from "next/link";
import ProjectList from "./project_list";
const Websites = () => {
    return ( <div>
        <div className="bg-indigo-50 py-24 md:text-start text-center">
        <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 gap-x-12 w-11/12 mx-auto items-center justify-center">
       
            <Image width={3000} height={3000} src={"/server.avif" }/>
        
        <div>
           <h1 className=" text-3xl md:text-4xl font-bold">Website projects</h1>
           <h1 className="text-lg mt-3 pe-0 md:pe-32">I have 10+ web projects projects that i have successfully developed and deployed </h1>
           <div className="text-sm flex flex-wrap justify-center md:justify-start mt-10 ">
           <ProjectList category={"Website"}/>


           </div>



        </div>
        </div>
      
        </div>
      <div className="w-full h-[2px] bg-black"></div>
       

    </div> );
}
 
export default Websites;