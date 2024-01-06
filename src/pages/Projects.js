import Project from "../Components/Project/Project";

import { projects } from "../helpers/projectsList";
import ScrollToTop from "../utils/scrollToTop";

const Projects = () => {
  <ScrollToTop/>
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Проекты</h2>
        <ul className="projects">
          {projects.map((project, index) => {
            return (
              <Project key={index} title={project.title} img={project.img} index={index} />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
