import Image from "next/image"
const Languages = () => {
    return ( <div className="">
        <div className="py-14">
        <div className=" flex flex-col text-center w-12/12  pl-5   md:w-4/12 ms-auto mb-8 ">
           <Image height={1000} width={1000} className="object-cover rounded"  src={'/ecommerce.png'} />

         </div>
        <marquee >
         <div className="flex  space-x-4">
         {["Next.Js","React.Js","Tailwind CSS","Flutter",'Node JS',"Express","Mysql","Firebase"].map((item,key)=>{
            return <h1 key={key} className="text-white font-extrabold text-xl">{item}</h1>
        })}
         </div>
        </marquee>
        </div>
        
      <div className="w-full h-[2px] bg-black"></div>

    </div> );
}
 
export default Languages;