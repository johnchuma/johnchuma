const LatestProject = () => {
    return ( 
        <div>
        <div className="bg-indigo-700 py-24">
        <div className="flex space-y-10 md:flex-row flex-col text-center items-center w-11/12 mx-auto justify-between">
        <div>
      <h1 className=" text-3xl md:text-5xl font-bold text-white">My Latest project</h1>
      <p className="text-lg w-11/12 mx-auto md:me-auto md:w-10/12 text-gray-100  mt-5">ChuoApp (A platform for students to learn from mentors through joining communities)</p>

      </div>
      <div className="text-white text-lg mt-0 md:mt-5 bg-black py-4 px-24 h-20 rounded-lg cursor-pointer flex justify-center items-center">Open project</div>
        </div>
      
    </div>
      <div className="w-full h-[2px] bg-black"></div>

        </div>
    );
}
 
export default LatestProject;