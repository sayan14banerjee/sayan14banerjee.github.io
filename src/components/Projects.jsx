import { ExternalLink } from 'lucide-react'
import './Projects.css'

const projects = [
  {
    title: 'Smart Expense Tracker Platform',
    description: 'Full-stack financial tracking system with secure authentication and real-time data management using Node.js and MongoDB. Built with scalable backend architecture and optimized database queries.',
    technologies: ['Node.js', 'MongoDB', 'React', 'JWT Auth'],
    status: 'completed'
  },
  {
    title: 'AI Chatbot Assistant',
    description: 'Intelligent chatbot system leveraging NLP and machine learning models. Deployed on AWS Lambda with real-time processing and conversation memory management.',
    technologies: ['Python', 'TensorFlow', 'AWS', 'WebSocket'],
    status: 'completed'
  },
  {
    title: 'Microservices Architecture Platform',
    description: 'Enterprise-grade microservices infrastructure with containerized services, API gateways, and load balancing. Implements distributed logging and monitoring systems.',
    technologies: ['Docker', 'Kubernetes', 'Node.js', 'PostgreSQL'],
    status: 'completed'
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'High-performance analytics platform processing thousands of events per second. Features real-time data visualization with WebSocket integration and serverless backend.',
    technologies: ['React', 'Node.js', 'AWS Lambda', 'Redis'],
    status: 'completed'
  },
  {
    title: 'Cloud Infrastructure Automation',
    description: 'Infrastructure-as-Code solutions for automated deployment and scaling. Implements CI/CD pipelines with GitHub Actions and Terraform for cloud provisioning.',
    technologies: ['Terraform', 'AWS', 'GitHub Actions', 'Docker'],
    status: 'completed'
  },
  {
    title: 'Machine Learning API Service',
    description: 'Production-ready ML model serving platform with REST APIs. Implements model versioning, A/B testing, and automatic scaling based on demand.',
    technologies: ['FastAPI', 'PyTorch', 'AWS', 'MLOps'],
    status: 'completed'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className={`status-badge status-${project.status}`}>
                  {project.status}
                </span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
