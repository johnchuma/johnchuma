import Image from "next/image"
const Price = () => {
    return ( 
    <div>
         <div className="h-96 relative ">
    
    <Image src="/bg.jpg" width={3000} height={3000} className="w-screen h-96 object-cover absolute" />
    <div className="absolute w-full h-96 my-24 justify-center items-center text-center">
       <div className="w-7/12 p-8 ring-2  ring-indigo-700 bg-slate-50 rounded-lg mx-auto ">
       <h1 className="text-5xl uppercase font-bold text-center">
           I will do your project for a starting price of $100
       </h1>
        <p className="text-lg mt-5">I will work with you with up to 4 revisions </p>
       </div>
       
    </div>

</div>
      <div className="w-full h-[2px] bg-black"></div>

    </div>
    );
}
 
export default Price;