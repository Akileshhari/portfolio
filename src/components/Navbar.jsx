import { useEffect, useState, useCallback } from 'react'
import { smoothScrollToSection } from '../utils/smoothScroll.js'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', id: 'home', path: '/' },
  { label: 'About', id: 'about', path: '/about' },
  { label: 'Work', id: 'work', path: '/work' },
  { label: 'Experience', id: 'experience', path: '/experience' },
  { label: 'Skills', id: 'skills', path: '/skills' },
  { label: 'Contact', id: 'contact', path: '/contact' },
]

function Logo({ onNavClick }) {
  return (
    <a
      className="navbar__logo"
      href="/"
      aria-label="Akilesh Hariharan — Home"
      onClick={(e) => onNavClick(e, 'home', '/')}
    >
      <img
        src="/logo.png"
        alt="Akilesh Hariharan Logo"
        className="navbar__logo-img"
      />
      <div className="navbar__brand-text">
        <span className="navbar__wordmark">
          Akilesh hariharan<span className="navbar__wordmark-accent">.</span>
        </span>
        <span className="navbar__wordmark-sub">UI / Frontend</span>
      </div>
    </a>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const closeMenu = useCallback(() => setIsOpen(false), [])

  const handleNavClick = useCallback(
    (e, id, path) => {
      e.preventDefault()
      closeMenu()
      setActiveSection(id)
      smoothScrollToSection(id, path)
    },
    [closeMenu],
  )

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu()
    }
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
      return () => window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, closeMenu])

  // Handle initial page load and back/forward browser navigation
  useEffect(() => {
    const handleUrlNavigation = () => {
      const currentPath = window.location.pathname
      const matched = NAV_LINKS.find((l) => l.path === currentPath)
      if (matched && matched.id !== 'home') {
        setActiveSection(matched.id)
        setTimeout(() => {
          smoothScrollToSection(matched.id, matched.path, 700)
        }, 150)
      }
    }

    handleUrlNavigation()
    window.addEventListener('popstate', handleUrlNavigation)
    return () => window.removeEventListener('popstate', handleUrlNavigation)
  }, [])

  // Active section observer as user scrolls
  useEffect(() => {
    const sections = NAV_LINKS.map(({ id }) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) {
          const currentId = visible.target.id
          setActiveSection(currentId)
          const matched = NAV_LINKS.find((l) => l.id === currentId)
          if (matched && window.history && window.location.pathname !== matched.path) {
            window.history.replaceState({ sectionId: currentId }, '', matched.path)
          }
        }
      },
      { rootMargin: '-25% 0px -45% 0px', threshold: [0, 0.2, 0.5, 0.8] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) setIsOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className={`navbar${isScrolled ? ' navbar--scrolled' : ''}`}>
      <nav className="navbar__inner" aria-label="Main">
        <Logo onNavClick={handleNavClick} />

        <button
          className={`navbar__toggle${isOpen ? ' navbar__toggle--open' : ''}`}
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>

        {isOpen && (
          <div
            className="navbar__backdrop"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        <div
          id="primary-navigation"
          className={`navbar__menu${isOpen ? ' navbar__menu--open' : ''}`}
        >
          <ul className="navbar__list">
            {NAV_LINKS.map(({ label, id, path }) => (
              <li key={id} className="navbar__item">
                <a
                  className={`navbar__link${activeSection === id ? ' navbar__link--active' : ''}`}
                  href={path}
                  aria-current={activeSection === id ? 'page' : undefined}
                  onClick={(e) => handleNavClick(e, id, path)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <a
              className="navbar__cta"
              href="/contact"
              onClick={(e) => handleNavClick(e, 'contact', '/contact')}
            >
              Get in Touch
            </a>
          </div>

          <div className="navbar__mobile-footer">
            <div className="navbar__mobile-status">
              <span className="navbar__status-dot" />
              <span>Available for opportunities</span>
            </div>
            <div className="navbar__mobile-links">
              <a
                href="mailto:akileshvj726@gmail.com"
                className="navbar__mobile-contact-link"
              >
                akileshvj726@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/akileshhari2001"
                target="_blank"
                rel="noreferrer"
                className="navbar__mobile-contact-link"
              >
                LinkedIn Profile ↗
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
