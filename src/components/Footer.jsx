import { Github, Linkedin, Mail } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="w footer-content">
        <div className="footer-identity">
          <div><strong>SB.</strong> Sayan Banerjee</div>
          <span>Backend Developer | Python &amp; AI Engineering</span>
        </div>
        <nav className="footer-links" aria-label="Social links">
          <a href="https://github.com/sayan14banerjee" target="_blank" rel="noreferrer"><Github size={16} />GitHub</a>
          <a href="https://www.linkedin.com/in/sayan14banerjee/" target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn</a>
          <a href="mailto:banerjeesayan554@gmail.com"><Mail size={16} />Email</a>
        </nav>
        <div className="copyright">© {new Date().getFullYear()} Sayan Banerjee</div>
      </div>
    </footer>
  )
}
