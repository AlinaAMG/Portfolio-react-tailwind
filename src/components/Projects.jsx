import { projects } from "../data";
import ProjectsCard from "./ProjectsCard";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section className="py-2 align-element" id="projects">
          <SectionTitle text="web creations" />
          <div className="py-16 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects && projects.map(project => (
                  < ProjectsCard key={project.id} project={project} />
              ))}
          </div>
    </section>
  )
}

export default Projects
