import { useEffect, useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  function handleSubmit(event) {
    event.preventDefault()

    alert(`Thanks for contacting me, ${name}!`)
  }

  return (
    <section id="contact" className="mt-20">

      <div className="text-center mx-auto grid max-w-6xl gap-12 md:text-start lg:grid-cols-2">

        {/* Contact Form */}
        <div>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Contact Me
          </h2>

          <p className="font-body mt-3 text-gray-600">
            Have a project in mind? Send me a message.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">

            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-lg border p-3"
            />

            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border p-3"
            />

            <textarea
              placeholder="Your message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="h-32 w-full rounded-lg border p-3"
            />

            <button
              type="submit"
              className="rounded-lg bg-[#4d0e13] px-6 py-3 font-semibold text-white hover:bg-[#cba49f]"
            >
              Send Message
            </button>

          </form>
        </div>


        {/* Calendly */}
        <div>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Schedule a Discovery Call
          </h2>

          <p className="mt-3 text-gray-600">
            Prefer to talk? Choose a time that works for you.
          </p>

          <div
            className="calendly-inline-widget mt-8 min-w-[320px]"
            data-url="https://calendly.com/geminic/30min?hide_event_type_details=1&&hide_gdpr_banner=1&text_color=cba49f&primary_color=4d0e13"
            style={{ height: '700px' }}
          />
        </div>

      </div>

    </section>
  )
}

export default Contact
