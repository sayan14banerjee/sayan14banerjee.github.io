import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import './Hero.css'

const email = 'mailto:banerjeesayan554@gmail.com'
const resume = 'https://drive.google.com/file/d/1UkRgzrVCLAuJ7-6juik8KI828508MuF4/view?usp=sharing'

function ArchitectureIllustration() {
  return (
    <svg viewBox="0 0 440 340" role="img" aria-label="Backend system architecture diagram">
      <g className="architecture-panels">
        <rect x="20" y="16" width="400" height="76" rx="10" />
        <rect x="20" y="132" width="400" height="76" rx="10" />
        <rect x="20" y="248" width="400" height="76" rx="10" />
      </g>
      <g className="architecture-headings">
        <text x="36" y="36">APPLICATION LAYER</text>
        <text x="36" y="152">BACKEND SERVICES</text>
        <text x="36" y="268">DATA &amp; INTEGRATION LAYER</text>
      </g>
      <g className="architecture-lines">
        <path d="M110 70V160M220 70V160M330 70V160M110 186V280M220 186V280M330 186V280" />
      </g>
      <g className="architecture-nodes">
        <rect x="50" y="48" width="120" height="30" rx="6" />
        <rect x="180" y="48" width="100" height="30" rx="6" />
        <rect x="290" y="48" width="110" height="30" rx="6" />
        <rect x="50" y="164" width="120" height="30" rx="6" />
        <rect x="180" y="164" width="100" height="30" rx="6" />
        <rect x="290" y="164" width="110" height="30" rx="6" />
        <rect x="50" y="280" width="120" height="30" rx="6" />
        <rect x="180" y="280" width="100" height="30" rx="6" />
        <rect x="290" y="280" width="110" height="30" rx="6" />
      </g>
      <g className="architecture-labels">
        <text x="110" y="67">WEB CLIENTS</text>
        <text x="230" y="67">AI INTERFACES</text>
        <text x="345" y="67">API CONSUMERS</text>
        <text x="110" y="183">PYTHON</text>
        <text x="230" y="183">REST APIs</text>
        <text x="345" y="183">AI SYSTEMS</text>
        <text x="110" y="299">DATABASES</text>
        <text x="230" y="299">VECTOR INDEX</text>
        <text x="345" y="299">LLM APIs</text>
      </g>
      <g className="architecture-pulses">
        <circle cx="110" cy="115" r="3" />
        <circle cx="220" cy="115" r="3" />
        <circle cx="330" cy="115" r="3" />
        <circle cx="110" cy="233" r="3" />
        <circle cx="220" cy="233" r="3" />
        <circle cx="330" cy="233" r="3" />
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <header className="hero" id="home">
      <div className="w">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hi">HELLO, I'M SAYAN</div>
            <h1>Sayan Banerjee</h1>
            <p className="role">Backend Developer &amp; AI Engineer</p>
            <p className="intro">
              I build backend applications, REST APIs and AI-powered systems. My work focuses on
              Python, FastAPI, database architecture, backend engineering and LLM integrations.
            </p>
            <div className="availability"><i />Open to Backend / Python Developer Opportunities</div>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">Explore My Work <ArrowRight size={16} /></a>
              <a className="btn" href={resume} target="_blank" rel="noreferrer">Download Resume <ArrowDown size={16} /></a>
              <a className="text-link" href="#contact">Get in Touch →</a>
            </div>
            <div className="hero-socials">
              <a className="text-link" href="https://github.com/sayan14banerjee" target="_blank" rel="noreferrer"><Github size={16} />GitHub</a>
              <a className="text-link" href="https://www.linkedin.com/in/sayan14banerjee/" target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn</a>
              <a className="text-link" href={email}><Mail size={16} />Email</a>
            </div>
          </div>
          <div className="hero-visual"><ArchitectureIllustration /></div>
        </div>
        <div className="hero-bottom">
          <span>ENGINEERING / AI SYSTEMS</span>
          <span>BUILDING WITH PURPOSE</span>
          <span>PYTHON · APIS · AI</span>
        </div>
      </div>
    </header>
  )
}
