interface ProjectData {
  project_name: string;
  description: string;
  link:string;
}

interface ProjectCardProps {
  url: string;
  data: ProjectData;
  link:string;

}





function ProjectCard({ url, data,link }: ProjectCardProps) {
 
  console.log("link is ",link)
  return (
    <div
      className="w-[300px] h-[500px] content-center justify-center align-middle bg-cover bg-center rounded-xl shadow-lg relative overflow-hidden"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90"></div>

      <div className="absolute bottom-6 left-4 space-y-3 text-white">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">{data.project_name}</span>
        </div>
        <p className="text-sm text-[#A1A1A1]">{data.description}</p>

        <a  href={link} className="bg-white text-black h-10 w-10 flex items-center justify-center rounded-full shadow-md hover:scale-105 transition transform"
        target="_blank"
         >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
