
import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
const ProjectsCard = ({project}) => {
  return (
      <article className="duration-300 bg-white shadow-md rounder-lg hover:shadow-xl">
          <img src={project.img} alt={project.title} className="object-cover w-full h-64 rounded-t-lg" /> 
          <div className="p-8 capitalize">
              <h2 className="text-xl font-medium tracking-wide">{project.title}</h2>
              <p className="mt-4 leading-loose text-slate-700">{project.text}</p>
              <div className="flex mt-4 gap-x-4">
                  <a href={project.url}>
                      <TbWorldWww className="w-8 h-8 duration-300 text-slate-500 hover:text-purple-600"/>
                  </a>
                   <a href={project.github}>
                      <FaGithubSquare className="w-8 h-8 duration-300 text-slate-500 hover:text-purple-600"/>
                  </a>
              </div>
          </div>
    </article>
      
   
  )
}

export default ProjectsCard
