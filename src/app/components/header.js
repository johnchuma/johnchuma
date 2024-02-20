import Image from "next/image";
import Link from "next/link"

const Header = () => {
  const emailAddress = 'johnvchuma@gmail.com';
  const subject = 'Hello, ...';
  const body = 'Your message here ....';

  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`;
    return ( <div className="bg-white w-full">
<div className="bg-indigo-700 flex justify-center py-5">
   <p className="text-white text-base ">Let me code your project for 50% discount today; <span className=" text-pink-300 underline">Call: +255 627 707 434 </span></p>
</div>
<div className="flex justify-between w-11/12 md:w-11/12 mx-auto  py-5 ">
<div className="flex space-x-4 items-center ">
<Link href={"/"}>
              <Image src={"/me.jpg"} height={500} width={500} className=" aspect-square rounded-full h-12 w-12 object-cover" />
            </Link>
              <Link href={"/"} className="cursor-pointer text-lg rounded-bg font-bold  transition-all">John Chuma</Link>
              

           
              
            </div>
      
            <div className="flex space-x-8 items-center ">
              <Link href={"blog"} className="cursor-pointer text-sm rounded-bg hover:text-indigo-700 transition-all">Mobile apps</Link>
              <Link href={"blog"} className="cursor-pointer text-sm rounded-bg hover:text-indigo-700 transition-all">Websites</Link>
              <Link href={"blog"} className="cursor-pointer text-sm rounded-bg hover:text-indigo-700 transition-all">Ecommerce</Link>
              <Link href={"blog"} className="cursor-pointer text-sm rounded-bg hover:text-indigo-700 transition-all">Management systems</Link>

           
              
            </div>
            <div className="flex space-x-8 items-center ">
              <Link href={"blog"} className="cursor-pointer text-sm rounded-bg hover:text-indigo-700 transition-all">Blog</Link>
              <a href={mailtoLink} target="__blank"  className="bg-indigo-700 rounded-lg text-sm cursor-pointer hover:bg-slate-950 transition-all
         text-white py-4 px-8">Hire me</a>
              
            </div>
      </div>
      <div className="w-full h-[2px] bg-black"></div>
    </div> );
}
 
export default Header;
