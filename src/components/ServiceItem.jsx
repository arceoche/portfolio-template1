function ServiceItem({ title, description, image, link, technologies }) {
  return (
    <div className="overflow-hidden rounded-xl border shadow-sm bg-[#d8c4ac]">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="font-heading text-[#4d0e13] text-2xl font-bold">
          {title}
        </h3>

        <p className="font-body mt-3 text-gray-600">
          {description}
        </p>

        <div className="mt-4">
            <p className="text-xs font-body font-bold mb-1">Tools I Know</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span key={technology} className=" font-body rounded-full bg-[#cba49f] px-3 py-1 text-xs">
                  {technology}
                </span>
              ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceItem