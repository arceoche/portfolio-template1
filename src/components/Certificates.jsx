import placeholderImage from '../assets/placeholder-image.jpg'
import placeholderImage2 from '../assets/placeholder-image2.jpg'

function Certificates() {
  const images = [
    placeholderImage,
    placeholderImage2,
    placeholderImage,
    placeholderImage2,
    placeholderImage,
    placeholderImage2
  ]

  return (
    <section className="mt-40 overflow-hidden text-center">

      <div className="relative mx-auto overflow-hidden">
  <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-[#eee4da] to-transparent" />

  <div className="flex w-max gap-6 animate-slide">
    {[...images, ...images].map((image, index) => (
      <img
        key={index}
        src={image}
        alt=""
        className="h-75 w-62.5 shrink-0 rounded-xl object-cover"
      />
    ))}
  </div>

  <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-[#eee4da] to-transparent" />
</div>

    </section>
  )
}

export default Certificates