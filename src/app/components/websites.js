import Image from "next/image"
import { projects } from "../utils/projects";
import Link from "next/link";
import ProjectList from "./project_list";
const Websites = () => {
    return ( <div>
        <div className="bg-black py-10 md:text-start text-center">
      
        
       
         
           <div className="text-sm flex flex-wrap justify-center md:justify-start mt-10 ">
           <ProjectList category={"Website"}/>


           </div>



        
        </div>
    
      <div className="w-full h-[2px] bg-black"></div>
       

    </div> );
}
 
export default Websites;