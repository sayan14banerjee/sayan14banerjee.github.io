import './About.css'

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a backend engineer and AI enthusiast with a passion for building scalable, production-ready systems. 
              My expertise spans from designing robust REST APIs and microservices to implementing AI-driven solutions that solve real-world problems.
            </p>
            <p>
              I specialize in clean architecture, database optimization, and deploying applications on cloud infrastructure. 
              I believe in writing maintainable code, following best practices, and creating systems that can scale with your business needs.
            </p>
            <p>
              With experience in multiple backend frameworks, cloud platforms, and machine learning implementations, I'm equipped to handle complex technical challenges and deliver solutions that businesses can rely on.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">6+</div>
              <div className="stat-label">Months Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
