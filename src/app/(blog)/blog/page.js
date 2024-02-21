"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect,useState } from "react";
import {timeAgo} from "../../utils/time_ago"
import {getBlogs} from "../../controllers/blog_controller"
import {categories} from "../../utils/categories"
const Page = () => {
    const [blogs,setBlogs] = useState([])
    const [page,setpage] = useState(1)
    const [limit,setlimit] = useState(4)
    const [totalPages, setTotalPages] = useState(0)
    const [count, setcount] = useState(0)


    useEffect(()=>{
        getBlogs(page,limit).then((body)=>{
            setBlogs(body.data)
            setcount(body.count)
            setTotalPages(body.totalPages)
        })
    },[page])
    return ( <div className="w-11/12 md:w-11/12 mx-auto py-24">
        {/* <div className="text-indigo-600 font-bold text-2xl py-12 border-b-[2px] brder-slate-200 text-center ">Blog</div> */}
        {
            blogs.length <1 ? <div className="flex justify-center items-center flex-col py-32">
                     <div className="h-12 w-12 border-2 rounded-full border-l-0 border-b-0 animate-spin border-slate-950 "></div>
        </div>:<div  >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className=" col-span-8 space-y-8">
                {blogs.map((item,key)=>{
                return <Link href={`/blog/${item.uuid}`} key={key} className="grid grid-cols-12 gap-4">
                    <div className=" col-span-7 md:col-span-8">
                        <h1 className=" text-xl md:text-2xl font-bold">{item.title}</h1>
                        <p className="mb-2 opacity-70">Published: {timeAgo(item.createdAt)}</p>
                         <div className="hidden md:block">
                         <p className="line-clamp-2 ">{item.introduction}</p>
                         </div>
                    </div>
                    <div className=" col-span-5 md:col-span-4">
                        <Image height={2000} width={2000} className="w-full aspect-square md:aspect-video object-cover" src={item.image}/>
                    </div>



                </Link>
                 })}

                 <div className="flex md:justify-start justify-center space-x-2">
                    <div className={`cursor-pointer font-bold ${page != 1 ?"text-indigo-600":"text-slate-400"}  `} onClick={()=>{
                        if(page >1){
                          setpage(page-1)
                        }
                    }}>Prev</div>
                    <div>{page} of {totalPages}</div>
                    <div className={`cursor-pointer font-bold ${page != totalPages?"text-indigo-600":"text-slate-400"}`} onClick={()=>{
                        if(page < totalPages){
                         setpage(page+1)
                        }
                    }}>Next</div>

                 </div>
                </div>
                <div className="col-span-8 md:col-span-4 space-y-4">
                    <h1>Filter posts by categories</h1>
                    <div className="flex flex-wrap items-start  ">
                    {categories.map((item,key)=><div key={key} className="py-2 px-3 me-2 rounded-full mb-2 bg-indigo-100 text-sm">{item}</div>)}

                    </div>
                </div>
            </div>
        </div>
        }
        


    </div> );
}
 
export default Page;