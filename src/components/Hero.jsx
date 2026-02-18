import { ChevronDown } from 'lucide-react'
import './Hero.css'
import { Github, Linkedin } from 'lucide-react'


export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-wrapper">
      <div className="hero-content">
        <h1 className="hero-title">Sayan Banerjee</h1>
        
        <h2 className="hero-subtitle">
          Backend & AI Engineer
        </h2>

        <p className="hero-tagline">
          Building scalable cloud-native systems and intelligent applications.
        </p>

        <p className="hero-description">
          I design production-grade REST APIs, serverless AWS systems, and AI-powered applications using Python and Node.js.
        </p>

        <div className="hero-socials">
          <a href="https://github.com/sayan14banerjee" target="_blank">
            <Github size={26} />
          </a>

          <a href="https://linkedin.com/in/sayan14banerjee" target="_blank">
            <Linkedin size={26} />
          </a>
        </div>
        <br />
        <div className="cta-buttons">
          <button 
            className="btn btn-primary" 
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </button>

          <button 
            className="btn btn-secondary" 
            onClick={() => scrollToSection('contact')}
          >
            Let's Connect
          </button>
        </div>
        </div>
        <div className="hero-image">
      <img src="/portfolio.image.png" alt="Sayan Banerjee" />
    </div>
      </div>

      

    </section>
  )
}
