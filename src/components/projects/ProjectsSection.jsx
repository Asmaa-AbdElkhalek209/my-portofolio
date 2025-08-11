import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Pagination from '../pagintion/Pagination';
import { Projects } from "../../data/projectsData";
import ModalCard from './ModalCard';

function ProjectsSection() {
  const projects = Projects;

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = 6;
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <>
      <section className="flex-1 w-full  flex flex-col items-center lg:px-20 xl:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 py-5 sm:mt-0 sm:py-0 sm:px-0 gap-x-8 gap-y-8">
          {currentProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project?.title}
              image={project?.image}
              link={project?.link}
              onClick={() => {
                setSelectedProject(project);
                document.getElementById('my_modal_2').showModal();
              }}
            />
          ))}
        </div>

        {/* modal */}
        <ModalCard className="my_modal_2" selectedProject={selectedProject} />
      </section>

      {/* Pagination*/}
      <div className="flex justify-center items-center w-full gap-x-2">
        <Pagination
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}

export default ProjectsSection;
