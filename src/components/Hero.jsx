import { ChevronDown } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>AI & Backend Developer</h1>
        <p className="hero-subtitle">Building Scalable Digital Solutions</p>
        <p className="hero-description">
          Specialized in backend systems, cloud architecture, and AI-powered applications for startups and growing businesses.
        </p>
        
        <div className="cta-buttons">
          <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
            View Projects
          </button>
          <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
            Contact Me
          </button>
        </div>
      </div>

      <button 
        className="scroll-indicator" 
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to about section"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  )
}
