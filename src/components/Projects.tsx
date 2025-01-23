import ProjectCard from "./atoms/ProjectCard";
import { project1 } from "../utils";
import { everypenny } from "../utils";

const projects = [
  {
    id: 1,
    url: project1,
    data: {
      project_name: "Open Course",
      link:'https://github.com/aaryan359/opencourse',
      description:
        "Open Course is an educational community platform that connects learners and educators, offering courses, resources, and a collaborative environment.",
    },
  },
  {
    id: 2,
    url: everypenny,
    data: {
      project_name: "EveryPenny",
      link:'https://github.com/aaryan359/reactnativeproject',
      description:
        "EveryPenny is a comprehensive financial management app designed to help users track expenses, budget effectively, and achieve their financial goals.",
    },
  },
];

function Projects() {
  return (
    <div className="flex flex-col justify-center p-10 bg-white dark:bg-[#10101E]">
      <h1 className="text-black dark:text-white text-center text-[50px] font-bold">
        Projects
      </h1>

      <div className="flex flex-wrap gap-8 p-12 justify-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} url={project.url} data={project.data} link={project.data.link} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
