import {projects} from "../../utils/projects"
import Link from "next/link";
import Image from "next/image"
import { useRouter } from "next/navigation";
const Page = ({params}) => {
    const project = projects[params.uuid]
    const router = useRouter()
    return ( <div className="  mx-auto w-11/12 md:w-11/12 py-24">
             <div className="flex justify-between">
                <h1 className="text-xl font-bold line-clamp-1">{project.title}</h1>
                <div className="flex space-x-1 text-base">
                    <div onClick={()=>{
                      router.back()
                    }}  className="cursor-pointer text-indigo-600" >Home </div>
                    <p className=" line-clamp-1">/ {project.title}</p>
                </div>
             </div>
             <div className=" grid md:grid-cols-12 text-center md:text-start mt-8 gap-8 items-center ">
                <div className="  md:col-span-5">
                     <Image src={project.Image} alt={project.title} height={2000} width={2000} className=" aspect-video w-screen  object-cover"/>
                 </div>
                <div className="  md:col-span-7">
                <div>
                <h1 className="font-bold text-4xl ">{project.title}</h1>
                <div className="flex cursor-pointer flex-wrap  space-x-2 justify-center md:justify-start py-4">
            {project.languages.map((item,index)=>{
              return <div key={index}  className={`bg-indigo-100 rounded-full px-3 py-2 text-sm mb-2`}>{item}</div>
            })}
          </div>
          <p className="text-base">{project.description}</p>
          <div className="mt-12">
          <a href={project.link} target="__blank"  className="bg-indigo-700 rounded-lg text-sm cursor-pointer hover:bg-slate-950 transition-all
         text-white py-4 px-8">Open project</a>
          </div>
        </div>
                </div>
             </div>
           

            
    </div> );
}
 
export default Page;