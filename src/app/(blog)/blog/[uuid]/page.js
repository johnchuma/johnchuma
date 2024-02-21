"use client"
import { getBlog } from "@/app/controllers/blog_controller"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"
import { timeAgo } from "@/app/utils/time_ago";

const Page = ({params}) => {
    const [blog,setBlog] = useState(null)
   const uuid = params.uuid;

    useEffect(()=>{
        getBlog(uuid).then((body)=>{
            setBlog(body)
        })
    },[])
    return ( blog==null? <div className="flex justify-center items-center py-60">
         <div className="h-32 w-32 border-2 rounded-full border-l-0 border-b-0 animate-spin border-slate-950 "></div>
        </div>:
        <div className=" mx-auto py-12">
        <div className="flex justify-between w-11/12 md:w-11/12 mx-auto mb-12">
                <h1 className="line-clamp-1">5 min read</h1>
                <div className="flex space-x-1">
                    <Link href={"/blog"}  className=" text-indigo-600" >Posts</Link>
                    <p className="  line-clamp-1">/{blog.title}</p>
                </div>
             </div>

             <div className=" w-11/12 md:w-5/12 mx-auto">
             <h1 className="text-4xl font-bold">{blog.title}</h1>
             <div className="flex items-center  space-x-2 mt-6">
                <div>
                    <Image src={"/me.jpg"} height={2000} width={2000} className=" rounded-full h-10 w-10 object-cover"/>
                </div>
                <div>
                    <p>John Vedastus Chuma</p>
                    <p className="text-sm opacity-70">published: {timeAgo(blog.createdAt)} </p>
                </div>
             </div>
        <Image width={2000} height={2000} alt={blog.title} className="w-full mt-8" src={blog.image}/>
        <div className="space-y-4 mt-8 text-lg">
        <p>{blog.introduction}</p>
        <p>{blog.paragraph1}</p>
        <p>{blog.paragraph2}</p>
        <p>{blog.conclusion}</p>
        </div>
        
             </div>
        

    </div> );
}
 
export default Page;