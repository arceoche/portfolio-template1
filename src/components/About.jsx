import placeholderImage from '../assets/placeholder-image.jpg'

function About() {
  return (
    <section id="about" className="mt-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 text-center md:text-start md:flex-row md:gap-16">

        {/* Profile Image */}
        <div className="w-full md:w-1/2">
          <img
            src={placeholderImage}
            alt="Profile"
            className="mx-auto aspect-square w-full max-w-sm rounded-2xl object-cover"
          />
        </div>

        {/* About Content */}
        <div className="w-full md:w-1/2">

          <h2 className="font-heading text-[#4d0e13] text-3xl font-bold tracking-tight md:text-4xl">
            A little bit about me
          </h2>

          <p className="text-gray-600 mb-4 leading-7 mt-5 px-10">
            I'm a developer who enjoys building clean, responsive, and
            user-friendly websites. I love turning ideas into simple and
            meaningful digital experiences.
          </p>

          <p className="leading-7 text-gray-600 px-10">
            I'm always learning, experimenting with new technologies, and
            looking for better ways to build things on the web.
          </p>

          <a
            href="#contact"
            className="font-heading mt-6 inline-block rounded-lg bg-[#4d0e13] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#cba49f]"
          >
            Let's work together
          </a>
        </div>

      </div>
    </section>
  );
}

export default About