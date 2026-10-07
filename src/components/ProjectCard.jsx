function ProjectCard({ title, description, link, technologies }) {
  return (
    <section>
       {/*<div className="overflow-hidden rounded-xl border shadow-sm w-[499px]">
          <img
            src={image}
            alt={title}
            className="h-40 w-full object-cover"
          />
    
          <div className="p-6">
            <h3 className="text-xl font-bold">
              {title}
            </h3>
    
            <p className="mt-3 text-gray-600">
              {description}
            </p>
    
            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span key={technology} className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                  {technology}
                </span>
              ))}
            </div>
            
            <a
              href={link}
              className="mt-6 inline-block font-semibold text-blue-600 hover:text-blue-800"
            >
              View Project →
            </a>
          </div>
        </div>*/}
  <div className="flex w-full flex-col overflow-hidden rounded-xl border shadow-sm lg:flex-row">

    {/* Content */}
    <div className="p-6">
      <h3 className="font-heading text-2xl font-bold">
        {title}
      </h3>

      <p className="font-body mt-3 text-gray-600">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-[#d8c4ac] px-3 py-1 text-sm"
          >
            {technology}
          </span>
        ))}
      </div>

      <a
        href={link}
        className="font-body mt-6 inline-block font-semibold text-[#4d0e13] hover:text-[#cba49f]"
      >
        View Project →
      </a>
    </div>

  </div>
    </section>

  )
}

export default ProjectCard