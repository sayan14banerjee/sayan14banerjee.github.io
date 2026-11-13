import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import './Header.css'

const navigation = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Expertise', 'expertise'],
  ['Projects', 'projects'],
  ['Experience', 'experience'],
  ['Education', 'education'],
  ['Contact', 'contact'],
]

const github = 'https://github.com/sayan14banerjee'
const linkedin = 'https://www.linkedin.com/in/sayan14banerjee/'
const resume = 'https://drive.google.com/file/d/1UkRgzrVCLAuJ7-6juik8KI828508MuF4/view?usp=sharing'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id)
      })
    }, { rootMargin: '-45% 0px -50% 0px' })

    navigation.forEach(([, id]) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-nav">
      <div className="w nav-inner">
        <a className="brand" href="#home" aria-label="Sayan Banerjee home">
          <strong>SB.</strong><span>Sayan Banerjee</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary">
          {navigation.map(([label, id]) => (
            <a className={activeSection === id ? 'active' : ''} href={`#${id}`} key={id}>{label}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="text-link" href={github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="text-link" href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn btn-primary btn-small" href={resume} target="_blank" rel="noreferrer">
            Resume <ArrowUpRight size={14} />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <nav id="mobile-nav" className={`mobile-nav ${menuOpen ? 'open' : ''}`} aria-label="Mobile">
        {navigation.map(([label, id]) => (
          <a
            className={activeSection === id ? 'active' : ''}
            href={`#${id}`}
            key={id}
            onClick={closeMenu}
          >
            {label}
          </a>
        ))}
        <a href={github} target="_blank" rel="noreferrer" onClick={closeMenu}>GitHub ↗</a>
        <a href={linkedin} target="_blank" rel="noreferrer" onClick={closeMenu}>LinkedIn ↗</a>
        <a className="btn btn-primary" href={resume} target="_blank" rel="noreferrer" onClick={closeMenu}>View resume</a>
      </nav>
    </header>
  )
}
