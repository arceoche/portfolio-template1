import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#4d0e13] p-10 text-white">

      {/* Navigation */}
      <nav className="grid grid-flow-col gap-4">
        <a href="#home" className="link link-hover">
          Home
        </a>
        <a href="#about" className="link link-hover">
          About
        </a>

        <a href="#projects" className="link link-hover">
          Projects
        </a>

        <a href="#services" className="link link-hover">
          Services
        </a>

        <a href="#contact" className="link link-hover">
          Contact
        </a>
      </nav>

      {/* Social Media */}
      <nav>
        <div className="grid grid-flow-col gap-4 text-xl">

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="transition-colors hover:text-[#cba49f]"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="transition-colors hover:text-[#cba49f]"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className="transition-colors hover:text-[#cba49f]"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>

        </div>
      </nav>

      {/* Copyright */}
      <aside>
        <p className="text-[#cba49f]">
          © {new Date().getFullYear()} Jasmine. All rights reserved.
        </p>
      </aside>

    </footer>
  )
}

export default Footer