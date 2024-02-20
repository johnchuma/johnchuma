import Link from "next/link";
import {projects} from "../utils/projects"
const ProjectList = ({category}) => {
    return ( projects.filter((item)=>item.tags.includes(category)).map((item,index)=>{
        let position ;
         for (let index = 0; index < projects.length; index++) {
           if(item.title == projects[index].title){
            position = index;
           }
          
         }
       return <div className=" cursor-pointer hover:animate-pulse  me-3 mb-3 flex space-x-2  ">
        <Link href={`project/${position}`}>{item.title}</Link>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 underline">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
        
        </div>}));
}
 
export default ProjectList;