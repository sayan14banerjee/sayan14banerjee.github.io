import './About.css'

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Backend & AI Engineer focused on building scalable, secure, and cloud-native systems using Python, Node.js, and AWS. 
              I design production-grade REST APIs with JWT authentication, role-based access control, and optimized database models.
            </p>
            <p>
              My experience includes developing serverless backend architectures using AWS Lambda, API Gateway, and DynamoDB, 
              along with integrating Generative AI capabilities such as LLM APIs, vector search (FAISS), and RAG pipelines into real-world applications.
            </p>
            <p>
              I enjoy architecting multi-tenant SaaS systems, optimizing performance, and building intelligent backend systems 
              that combine clean architecture with AI-driven automation.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">6+</div>
              <div className="stat-label">Months Production Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">60+</div>
              <div className="stat-label">APIs Designed & Implemented</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">8+</div>
              <div className="stat-label">AI & Backend Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
