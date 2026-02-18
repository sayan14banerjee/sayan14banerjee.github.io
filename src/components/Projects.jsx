import { ExternalLink } from 'lucide-react'
import './Projects.css'

const projects = [
  {
    title: 'Aura Workspace – Smart Workspace Management Platform',
    description: 'Architecting a scalable multi-tenant SaaS platform for workspace collaboration and project management. Implementing secure JWT authentication, role-based access control, and 20+ RESTful APIs with optimized MongoDB schemas. Designed for real-time workflows and future AI-powered automation pipelines.',
    technologies: ['React', 'Tailwind CSS', 'FastAPI', 'MongoDB', 'JWT', 'REST API'],
    status: 'progress',
    type: 'Full Stack SaaS',
    github: 'https://github.com/sayan14banerjee/aura-workspace'
  },
  {
    title: 'Smart PDF Chatbot – AI Semantic Search System',
    description: 'Built an AI-powered document question-answering system using vector embeddings and FAISS indexing. Implemented intelligent chunking, similarity-based retrieval, and LLM-driven context generation to enable accurate conversational search across uploaded PDFs.',
    technologies: ['Python', 'FastAPI', 'LangChain', 'FAISS', 'LLM APIs'],
    status: 'completed',
    type: 'AI / LLM System',
    github: 'https://github.com/sayan14banerjee/Smart_PDF_Chatbot'
  },
  {
    title: 'AI Software Developer Agent – Autonomous Code Generation System',
    description: 'Designed a multi-agent AI workflow that transforms natural language requirements into structured software projects. Implemented planner, architect, and coder agents using state-driven LLM orchestration to automate end-to-end code generation.',
    technologies: ['Python', 'LangGraph', 'Groq API', 'Pydantic', 'AI Agents', 'ReAct Pattern'],
    status: 'completed',
    type: 'AI Agent System',
    github: 'https://github.com/sayan14banerjee/AI_Software_developer_model'
  },
  {
    title: 'StreamSphere – Scalable Video & Microblogging Backend',
    description: 'Developed a production-style backend system supporting video publishing, subscriptions, and social microblogging features. Designed 25+ secure REST APIs with JWT authentication, aggregation-based feed generation, and optimized MongoDB queries for efficient data retrieval.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Aggregation Pipeline'],
    status: 'progress',
    type: 'Backend System',
    github: 'https://github.com/sayan14banerjee/backend_project'
  },
  {
    title: 'Smart Expense Tracker Platform',
    description: 'Built a FastAPI-powered financial management backend with 15+ secure REST endpoints. Implemented async processing, structured Pydantic schemas, and optimized database indexing to improve response performance and data reliability.',
    technologies: ['FastAPI', 'Python', 'MongoDB', 'Pydantic', 'JWT', 'Docker'],
    status: 'completed',
    type: 'Full Stack Application',
    LiveDemo: 'https://expense-tracker-jhfa.onrender.com/',
    github: 'https://github.com/sayan14banerjee/Expense-Tracker'
  },
  {
    title: 'Movie Recommendation System',
    description: 'Implemented a content-based recommendation engine using NLP vectorization and cosine similarity scoring. Processed 5,000+ movie records from the TMDB dataset to generate personalized recommendation results using machine learning techniques.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'NLTK'],
    status: 'completed',
    type: 'Machine Learning',
    github: 'https://github.com/sayan14banerjee/movie-Recommendation-System'
  }
];


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
              <p className="project-type">{project.type}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <br />
              <div className="project-links">
                {project.LiveDemo && (
                  <a href={project.LiveDemo} target="_blank" rel="noopener noreferrer" className="project-link">
                    Live Demo <ExternalLink size={16} />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
