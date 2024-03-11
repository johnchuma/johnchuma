const Experience = () => {
    return ( <div>
            <div className="bg-primary w-11/12 mx-auto  py-24 my-12 rounded-xl md:text-start text-center">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 ">
                    <div className=" col-span-12 md:col-span-4 md:px-24">
                      <h1 className=" text-3xl md:text-7xl font-bold">
                        Here is my work experience
                      </h1>
                      <p className="text-lg mt-5 md:block hidden"> I have experience of 4+ years</p>
                    </div>
                    <div className="col-span-12 md:col-span-8  md:px-24">
                    {[
       
       {title:"Shule Yetu",subtitle:"Full stack developer (MERN stack)",
       duration:"2023 - 2024",
       description:"Worked as full stack developer working on development and deployment of various systems such as Shule alumni, Anza marketplace and Anza management system"
       },
    //    {title:"Haki mawasiliano",subtitle:"Programs Designing and Digital Development Officer",
    //    duration:"2022 - present",
    //    description:"Working with this Non-Governmental Organization to conceptualize and implement programs"
    //  },
       {title:"Silabu",subtitle:"Mobile app developer (Flutter)",
       duration:"2022 - 2023",
       description:"I developed silabu app features such as chatting, quiz, tutor booking also selcom payment integration."
       },
       {title:"AL-HUSNAIN motor traders",subtitle:"Website developer (Laravel)",
       duration:"2021",
       description:"My role was develpment and maintainance of company e-commerce website"
       },
     ].map((item,index)=>{
         return  <div className=" md:mb-4 md:border-b md:border-b-white p-4" key={index}>
         <div className="flex flex-col md:flex-row justify-between pb-2">
           <div>
           <h1 className="font-bold text-lg">{item.title}</h1>
           <p>{item.subtitle}</p>
           </div>
           <div className="flex justify-center space-x-2 items-center">
             <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-indigo-700">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
               </svg>
           </div>
             <div className="text-sm font-bold whitespace-nowrap text-nowrap text-white">{item.duration}</div>
 
             
           </div>
          </div>
          <p className=" opacity-80">{item.description}</p>
 
         </div>
       })}
                        </div>
                </div>
            </div>
    </div> );
}
 
export default Experience;