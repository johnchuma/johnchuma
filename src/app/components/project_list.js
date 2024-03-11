import Link from "next/link";
import {projects} from "../utils/projects"
import Image from "next/image";
const ProjectList = ({category}) => {
    return ( projects.filter((item)=>item.tags.includes(category)).map((item,index)=>{
        let position ;
         for (let index = 0; index < projects.length; index++) {
           if(item.title == projects[index].title){
            position = index;
           }
          
         }
       return <div key={index} className="   ">
           <div className=" flex flex-col text-center w-12/12  pl-5   md:w-4/12 ms-auto mb-8 ">
           <Image height={1000} width={1000} className="object-cover rounded"  src={'/ecommerce.png'} />
           
         </div>
         <div className="text-start px-5 pb-10">
          <div className="flex space-x-4 items-start">
           <div>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            className="w-6 mt-1 h-6 text-white">
  <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
</svg>
</div>
          <div>
          <h1 className="text-white font-bold text-lg ">{item.title}</h1>
          <p className="text-white text-base mt-2 line-clamp-3">{item.description}</p>

          </div>
          
          </div>

         </div>
         
         <div className="w-full h-[2px] bg-white bg-opacity-10 mb-8"></div>
    
        
        </div>}));
}
 
export default ProjectList;