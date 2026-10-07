import heroImage from '../assets/hero-image.jpg'

function Hero(){
  return(
    <>
      {/*<section>
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7">
                  <h1 className="font-heading max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
                  <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                  <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                      Get started
                  </a>
                  <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                      Speak to Sales
                  </a> 
              </div>
              <div className="rounded-full lg:mt-0 lg:col-span-5 lg:flex">
                  <img src={heroImage} alt="hero image" />
              </div>                
          </div>
      </section>*/}

      <header>
        <div className="mt-12 flex flex-col-reverse md:items-center lg:flex-row lg:items-center lg:justify-around">

          <div className="flex flex-col items-center gap-5 lg:max-w-[50%] lg:items-start">

            <p className="tracking-wider text-center uppercase font-bold lg:text-[1.3rem] text-[#cba49f] lg:text-start">
              Hi, I'm Jasmine!
            </p>

            <h1 className="text-center text-[2.5rem] font-heading font-bold text-[#4d0e13] md:text-[3rem] lg:text-start lg:text-[4rem]">
              Helping you find more time for the work that matters.
            </h1>

            <div className="flex gap-3">
              <a href="#services" className="text-center mt-8 rounded-lg bg-[#4d0e13] px-6 py-3 font-semibold text-white  hover:bg-[#cba49f] hover:cursor-pointer">
                  View My Services
              </a> 
              <a className="text-center mt-8 rounded-lg bg-[#4d0e13] px-6 py-3 font-semibold text-white  hover:bg-[#cba49f] hover:cursor-pointer">
                  View Sample Works
              </a>
            </div>

          </div>

          <hr className="my-8 mx-auto px-4 w-[50%] border-[#cba49f] lg:hidden" />

          <div className="flex flex-col items-center gap-5 lg:w-[30%] lg:items-stretch">

            <img
              src={heroImage}
              alt=""
              className="max-w-[40%] rounded-[50%] lg:w-full lg:max-w-full lg:rounded-2xl"
            />

            <p className="font-bold text-center uppercase text-[#cba49f] lg:text-end">
              Philippines • UTC+08:00 • Available for Hire
            </p>

          </div>

        </div>
      </header>
    </>
  )
}

export default Hero
