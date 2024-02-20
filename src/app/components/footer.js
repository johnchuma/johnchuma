import Image from "next/image";
import Experience from "./experience"
const Footer = () => {
    return ( <div>
        <div className="w-full bg-slate-950 py-20 text-white">
        <Experience/>
        <div className="grid grid-cols-1 md:grid-cols-12  w-11/12 space-y-3 text-center md:text-start justify-center md:justify-start md:w-11/12 mx-auto">
            <div className="col-span-8">
                <div className="flex items-center space-x-2">
                <Image src={"/me.jpg"} height={1000} width={1000} className="aspect-squire rounded-full h-10 w-10 object-cover" alt="John Vedastus Chuma"/>
                <h1 className="text-lg">John Chuma</h1>
                </div>
                <p className="text-lg py-4">Subscribe to receive blog updates</p>
                <div className="flex justify-between pe-4 bg-indigo-700 rounded-lg w-4/12">
                    <input placeholder="Write your email here..." className=" py-4  rounded-s-lg "/>
                    <button >Subscribe</button>
                </div>
                <p className="text-sm mt-4">By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our this website</p>
            </div>
            <div className="col-span-2">
            <h2 className="text-white font-bold text-lg pb-4">Address</h2>
            <address className="space-y-2">
               {["Dar es salaam","Tanzania."].map((item,key)=>{
                return <p className="text-white opacity-80 not-italic" key={key}>{item}</p>
               })}
            </address>
            </div>
            <div className="col-span-2">
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
