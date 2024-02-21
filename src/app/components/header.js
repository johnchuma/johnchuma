import Image from "next/image";
import Link from "next/link"

const Header = () => {
  const emailAddress = 'johnvchuma@gmail.com';
  const subject = 'Hello, ...';
  const body = 'Your message here ....';

  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`;
    return ( <div className="bg-white w-full">
<div className="bg-indigo-700 flex justify-center  py-5">
   <p className="text-white text-base text-center ">Let me code your project for 50% discount today; <span className=" text-pink-300 underline">Call: +255 627 707 434 </span></p>
</div>
<div className="flex justify-between items-center w-11/12 md:w-11/12 mx-auto  py-5 ">
<div className="flex space-x-3 md:space-x-4 items-center ">
<Link href={"/"}>
              <Image src={"/me.jpg"} height={500} width={500} className=" aspect-square rounded-full h-10 w-10 md:h-12 md:w-12 object-cover" />
            </Link>
              <Link href={"/"} className="cursor-pointer text-lg rounded-bg font-bold  transition-all">John Chuma</Link>
              

           
              
            </div>
           <div className="md:block hidden">
           <div className="flex space-x-8 items-center   ">
              <Link href={"#apps"} className="cursor-pointer text-sm rounded-bg hover:text-indigo-700 transition-all">Mobile apps</Link>
              <Link href={"#websites"} className="cursor-pointer text-sm rounded-bg hover:text-indigo-700 transition-all">Websites</Link>
              <Link href={"#ecommerce"} className="cursor-pointer text-sm rounded-bg hover:text-indigo-700 transition-all">Ecommerce</Link>
              <Link href={"#ms"} className="cursor-pointer text-sm rounded-bg hover:text-indigo-700 transition-all">Management systems</Link>

           
              
            </div>
           </div>
          
            <div className="flex space-x-3 md:space-x-8 items-center ">
              <Link href={"blog"} className="cursor-pointer text-sm md:block hidden rounded-bg hover:text-indigo-700 transition-all">Blog</Link>
              <a href={mailtoLink} target="__blank"  className="bg-indigo-700 rounded-lg text-sm cursor-pointer
               hover:bg-slate-950 transition-all
         text-white py-4 px-4 md:px-8">Hire me</a>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 block md:hidden">
  <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
</svg>

              
            </div>
      </div>
      <div className="w-full h-[2px] bg-black"></div>
    </div> );
}
 
export default Header;
