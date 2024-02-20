import Image from "next/image"
const Price = () => {
    return ( 
    <div>
         <div style={{backgroundImage:"url(bg.jpg)"}} className="  ">
  
    <div className=" w-full  py-16  justify-center items-center text-center">
       <div className=" w-11/12 md:w-7/12 p-8 ring-2  ring-indigo-700 bg-slate-50 rounded-lg mx-auto ">
       <h1 className=" text-2xl md:text-5xl uppercase font-bold text-center">
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