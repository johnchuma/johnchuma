"use client"
import Image from "next/image";
import Experience from "./experience"
import toast, { Toaster } from "react-hot-toast";
const Footer = () => {
    return ( <div>
         <Toaster />
        <div className="w-full bg-black py-10 text-white">
        {/* <Experience/> */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-center 
          w-11/12 space-y-3 text-center md:text-start justify-center md:justify-start md:w-11/12 mx-auto">
            <div className="col-span-8">
                <div className="flex flex-col md:flex-row items-center md:items-start space-x-2 space-y-2">
                <Image src={"/me.jpg"} height={1000} width={1000} 
                className="aspect-squire rounded-full h-20 w-20 md:h-10 md:w-10 object-cover" alt="John Vedastus Chuma"/>
                <h1 className=" md:text-lg md:block hidden">John Chuma</h1>
                </div>
                <p className="text-lg py-4">Subscribe to receive blog updates</p>
                <form onSubmit={(e)=>{
                        e.preventDefault();
                        toast.success("Subscribed successfully")
                        e.target.email.value = null;
                }}>
                <div className=" grid grid-cols-12 justify-between  items-center  rounded md:w-4/12">
                    <div className="col-span-8">
                    <input name="email" placeholder="Write your email here..." className=" text-black py-4 border-0  rounded-s-lg "/>
                    </div>
                    <div className="col-span-4">
                    <button className="bg-primary py-5 w-full px-3 text-sm rounded-e-lg">Subscribe</button>
                    </div>

                    
                </div>
                </form>
                
                <p className="text-xs md:text-sm mt-4 opacity-80">By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our this website</p>
            </div>
            <div className=" col-span-12 md:col-span-2">
            <h2 className="text-white font-bold text-lg pb-4">Address</h2>
            <address className=" flex justify-center md:flex-col">
               {["Dar es salaam,","Tanzania."].map((item,key)=>{
                return <p className="text-white opacity-80 not-italic mb-2" key={key}>{item}</p>
               })}
            </address>
            </div>
            <div className=" col-span-12 md:col-span-2">
            <h2 className="text-white font-bold text-lg pb-4">Contact</h2>
            <address className="space-y-2">
               {["+255 627 707 434","johnvchuma@gmail.com"].map((item,key)=>{
                return <p className="text-white opacity-80 not-italic" key={key}>{item}</p>
               })}
            </address>
            </div>

        </div>
       </div>
    </div> );
}
 
export default Footer;
