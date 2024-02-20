import Image from "next/image"
const Languages = () => {
    return ( <div className="">
        <div className="py-14">
        <div className=" flex flex-col text-center w-11/12 md:w-4/12 mx-auto mb-8 ">
            <h1 className="text-xl md:text-2xl">AFTER FOUR YEARS OF CODING</h1>
            <h1 className="bg-pink-400 text-xl md:text-2xl font-bold  ">I HAVE MASTERED THESE TECH</h1>

         </div>
        <marquee>
         <div className="flex overflow-hidden space-x-24">
         {["next.png","node.png","tailwind.png","solidity.png",'express.png',"react.png"].map((item,key)=>{
            return <Image key={key} height={500} width={500} className=" h-12 md:h-16 w-auto" src={"/"+item}/>
        })}
         </div>
        </marquee>
        </div>
        
      <div className="w-full h-[2px] bg-black"></div>

    </div> );
}
 
export default Languages;