import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sayan Banerjee</h3>
            <p>AI & Backend Developer | Building Scalable Solutions</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#expertise">Expertise</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Social</h4>
            <ul>
              <li><a href="https://linkedin.com/in/sayan-banerjee" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/sayan14banerjee" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="mailto:banerjeesayan554@gmail.com">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>© {currentYear} Sayan Banerjee — Built with React & deployed on GitHub Pages</p>
        </div>
      </div>
    </footer>
  )
}
