import ServiceItem from './ServiceItem'

function Services() {

  const services = [
    {
      title: 'Service Item 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab eaque dolor. Saepe quae unde natus laboriosam autem? Dolore, enim!',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      technologies: ['Tool', 'Tool2', 'Tool3', 'Tool4', 'Tool5'],
    },
    {
      title: 'Service Item 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab eaque dolor. Saepe quae unde natus laboriosam autem? Dolore, enim!',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b',
      technologies: ['Tool', 'Tool2', 'Tool3', 'Tool4', 'Tool5'],
    },
    {
      title: 'Service Item 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab eaque dolor. Saepe quae unde natus laboriosam autem? Dolore, enim!',
      image: 'https://images.unsplash.com/photo-1499346030926-9a72daac6c63',
      technologies: ['Tool', 'Tool2', 'Tool3', 'Tool4', 'Tool5'],
    },
    {
    title: 'Service Item 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab eaque dolor. Saepe quae unde natus laboriosam autem? Dolore, enim!',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    technologies: ['Tool', 'Tool2', 'Tool3', 'Tool4', 'Tool5'],
    }
  ]

  return (
    <section id="services" className="mt-20">
      <div className="mx-auto">
        <h2 className="text-center text-3xl font-heading font-bold md:text-start md:text-4xl">
          My Services
        </h2>

        <div className="max-w-325 mx-auto">
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <ServiceItem
                key={service.title}
                title={service.title}
                description={service.description}
                image={service.image}
                technologies={service.technologies}
              />
            ))}
          </div>
        </div>  
      </div>
    </section>
  )
}

export default Services