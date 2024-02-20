"use client"
import toast, { Toaster } from "react-hot-toast";
import { postBlog } from "../../controllers/blog_controller";
import { useState } from "react";
import  Spinner from "../../components/spinnner"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { categories } from "@/app/utils/categories";

const Page = () => {

   const [uploading,setUploading] = useState(false)
   const [image,setimage] = useState(null)
  const router = useRouter()

    return ( <div className="py-12 ">
        <div className="flex justify-between w-11/12 md:w-9/12 mx-auto">
                <h1 className="text-lg font-bold line-clamp-1">New blog post</h1>
                <div className="flex space-x-1">
                    <Link href={"/"}  className=" text-indigo-600" >Blogs </Link>
                    <p className="  line-clamp-1">/newBlog</p>
                </div>
             </div>
        <form className="mt-8" onSubmit={(e)=>{
            e.preventDefault();
            setUploading(true);
             const title = e.target.title.value;
             const introduction = e.target.introduction.value;
             const conclusion = e.target.conclusion.value;
             const paragraph1 = e.target.paragraph1.value;
             const paragraph2 = e.target.paragraph2.value;
             const paragraph3 = e.target.paragraph3.value;
             const paragraph4 = e.target.paragraph4.value;
             const paragraph5 = e.target.paragraph5.value;
             const tag = e.target.tag.value;
             const file = e.target.image.files[0];

             const data = {title,tag,introduction,conclusion,paragraph1,paragraph2,paragraph3,paragraph4,paragraph5,file};
             postBlog(data).then(()=>{
                toast.success("Published successfully")
                router.back()
                setUploading(false);

             })



        }}>
            
            <div className="grid grid-cols-1 gap-4 w-11/12 md:w-5/12 mx-auto">
                <div>
                    <label for="image">
                        {image  == null? <div className="w-full border text-center bg-white border-slate-200 hover:ring-slate-200 rounded flex justify-center items-center">
                            <div className="my-24 flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                            stroke="currentColor" className="w-6 h-6  ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <p className="text-sm opacity-60">Upload image</p>
                            </div>
                           
                        </div>:<div>
                         <Image width={2000} height={2000} src={image} className="w-full aspect-video object-cover"/>
                        </div> }
                       
                    </label>
                    <input name="image" onChange={(e)=>{
                        setimage(URL.createObjectURL(e.target.files[0]))
                    }} id="image" className="sr-only" type="file" placeholder="Image"/>
                </div>
                <div>
                
                    <input required className="w-full text-3xl font-bold border-slate-200 hover:ring-slate-200 rounded" name="title" file placeholder="Enter title"/>
                </div>
                <div>
                   
                    <select required className="w-full border-slate-200 hover:ring-slate-200 rounded" name="tag">
                        <option >Select tag</option>

                        {categories.map((item,key)=>{
                            return <option key={key} value={item}>
                                {item}
                            </option>
                        })}
                    </select>
                </div>

                <div>
                
                    <textarea required className="w-full border-slate-200 hover:ring-slate-200 rounded" name="introduction" file placeholder="Write introduction here"/>
                </div>
                <div>
               
                    <textarea className="w-full border-slate-200 hover:ring-slate-200 rounded" name="paragraph1" file placeholder="First paragraph"/>
                </div>
                <div>
                    
                    <textarea className="w-full border-slate-200 hover:ring-slate-200 rounded" name="paragraph2" file placeholder="Second paragraph"/>
                </div>
                <div>
                   
                    <textarea className="w-full border-slate-200 hover:ring-slate-200 rounded" name="paragraph3" file placeholder="Third paragraph"/>
                </div>
                <div>
                   
                    <textarea className="w-full border-slate-200 hover:ring-slate-200 rounded" name="paragraph4" file placeholder="Fourth paragraph"/>
                </div>
                <div>
                   
                    <textarea className="w-full border-slate-200 hover:ring-slate-200 rounded" name="paragraph5" file placeholder="Fifth paragraph"/>
                </div>
                <div>
                   
                    <textarea required className="w-full border-slate-200 hover:ring-slate-200 rounded" name="conclusion" file placeholder="Write conclusion here"/>
                </div>
            </div>
            <button className="py-3 px-4 bg-green-700 flex mt-8  w-5/12 mx-auto justify-center text-white " type="submit">
                {uploading?<Spinner/>:"Publish post"}
                </button>
        </form>
        <Toaster/>
    </div> );
}
 
export default Page;