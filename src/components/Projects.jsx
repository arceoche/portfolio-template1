import ProjectCard from './ProjectCard'
function Projects() {
  const projects = [
    {
      title: 'Personal Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab eaque dolor. Saepe quae unde natus laboriosam autem? Dolore, enim!',
      link: '#',
      technologies: ['Tool1', 'Tool2'],
    },
    {
      title: 'Personal Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab eaque dolor. Saepe quae unde natus laboriosam autem? Dolore, enim!',
      link: '#',
      technologies: ['Tool 1', 'Tool2', 'Tool3'],
    },
    {
      title: 'Personal Project 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab eaque dolor. Saepe quae unde natus laboriosam autem? Dolore, enim!',
      link: '#',
      technologies: ['Tool 1', 'Tool2', 'Tool3', 'Tool4'],
    },
    {
      title: 'Personal Project 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab eaque dolor. Saepe quae unde natus laboriosam autem? Dolore, enim!',
      link: '#',
      technologies: ['Tool 1', 'Tool2', 'Tool3'],
    }
  ]

  return (
    <section id="projects" className="mt-20">
      <div className="mx-auto">
        <h2 className="text-center text-3xl font-bold font-heading md:text-start md:text-4xl">
          Personal Projects
        </h2>

        <div className="max-w-325 mx-auto">
          <div className="mt-10 grid gap-6 grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))]">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                link={project.link}
                technologies={project.technologies}
              />
            ))}
          </div>
        </div> 
      </div>
    </section>
  )
}

export default Projects