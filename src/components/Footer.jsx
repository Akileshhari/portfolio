import { smoothScrollToSection } from '../utils/smoothScroll.js'
import './Footer.css'

const CURRENT_YEAR = new Date().getFullYear()

function Footer() {
  const scrollToSection = (e, id, path) => {
    e.preventDefault()
    smoothScrollToSection(id, path)
  }

  const scrollToTop = () => {
    smoothScrollToSection('home', '/', 800)
  }

  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <a
              href="/"
              onClick={(e) => scrollToSection(e, 'home', '/')}
              className="footer__logo-link"
              aria-label="Akilesh Hariharan — Back to Top"
            >
              <img src="/logo.png" alt="Akilesh Hariharan Logo" className="footer__logo-img" />
              <span className="footer__logo">
                Akilesh hariharan<span className="footer__logo-accent">.</span>
              </span>
            </a>
            <p className="footer__tagline">
              Frontend Developer &amp; UI/UX Designer crafting scalable, responsive, and high-performance web applications.
            </p>
          </div>

          {/* Highlighted Navigation Links */}
          <nav className="footer__nav" aria-label="Footer Navigation">
            <a href="/" onClick={(e) => scrollToSection(e, 'home', '/')} className="footer__nav-pill">
              Home
            </a>
            <a href="/about" onClick={(e) => scrollToSection(e, 'about', '/about')} className="footer__nav-pill">
              About
            </a>
            <a href="/work" onClick={(e) => scrollToSection(e, 'work', '/work')} className="footer__nav-pill">
              Work &amp; Case Studies
            </a>
            <a href="/experience" onClick={(e) => scrollToSection(e, 'experience', '/experience')} className="footer__nav-pill">
              Experience
            </a>
            <a href="/skills" onClick={(e) => scrollToSection(e, 'skills', '/skills')} className="footer__nav-pill">
              Skills
            </a>
            <a href="/contact" onClick={(e) => scrollToSection(e, 'contact', '/contact')} className="footer__nav-pill">
              Contact
            </a>
          </nav>

          <button
            type="button"
            className="footer__top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>↑ Back to Top</span>
          </button>
        </div>

        {/* Highlighted Direct Connect Links */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {CURRENT_YEAR} Akilesh Hariharan. Built with React.js, Vite &amp; Poppins.
          </p>
          <div className="footer__socials">
            <a
              href="mailto:akileshvj726@gmail.com"
              className="footer__contact-pill footer__contact-pill--email"
              title="Send email directly"
            >
              <span className="footer__pill-icon">✉️</span>
              <span className="footer__pill-text">akileshvj726@gmail.com</span>
            </a>

            <a
              href="tel:+919514142099"
              className="footer__contact-pill footer__contact-pill--phone"
              title="Direct call"
            >
              <span className="footer__pill-icon">📞</span>
              <span className="footer__pill-text">+91-9514142099</span>
            </a>

            <a
              href="https://linkedin.com/in/akileshhari2001"
              target="_blank"
              rel="noreferrer"
              className="footer__contact-pill footer__contact-pill--linkedin"
              title="LinkedIn Profile"
            >
              <span className="footer__pill-icon">💼</span>
              <span className="footer__pill-text">LinkedIn ↗</span>
            </a>

            <a
              href="https://dribbble.com/akilesh_hari"
              target="_blank"
              rel="noreferrer"
              className="footer__contact-pill footer__contact-pill--dribbble"
              title="Dribbble Portfolio"
            >
              <span className="footer__pill-icon">🏀</span>
              <span className="footer__pill-text">Dribbble ↗</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
