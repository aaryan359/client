import ProjectCard from "./atoms/ProjectCard"

function Projects() {
  return (
   <>
     <div className="flex flex-col justify-center p-10 bg-[#10101E]">

      <span className=" text-white text-center text-[50px] font-bold">
        Projects
      </span>


   <div className="flex gap-8 p-12">
   <ProjectCard/>
     <ProjectCard/>
     <ProjectCard/>
   </div>
    

     </div>
  
   
   
   </>
  )
}

export default Projects