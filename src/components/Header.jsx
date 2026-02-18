import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className='logo'><img src="../../public/logo.png" alt="Sayan Banerjee Logo" /></div>
        
        <nav className={`nav ${isOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('expertise')} className="nav-link">Expertise</button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
        </nav>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
