import { useEffect } from 'react'

function CalendlyBadge() {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://assets.calendly.com/assets/external/widget.css'

    document.head.appendChild(link)

    // Load Calendly JavaScript
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true

    document.body.appendChild(script)

    // Wait for Calendly script to load
    script.onload = () => {
      window.Calendly.initBadgeWidget({
        url: 'https://calendly.com/geminic/30min',
        text: 'Schedule a Call',
        color: '#4d0e13',
        textColor: '#ffffff',
        branding: true,
      })
    }

    // Cleanup when component is removed
    return () => {
      document.head.removeChild(link)
      document.body.removeChild(script)

      const badge = document.querySelector('.calendly-badge-widget')

      if (badge) {
        badge.remove()
      }
    }
  }, [])

  return null
}

export default CalendlyBadge