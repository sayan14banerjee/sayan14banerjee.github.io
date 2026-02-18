import { ExternalLink } from 'lucide-react'
import './Projects.css'

const projects = [
  {
    title: 'Aura Workspace – Smart Workspace Management System',
    description: 'Full-stack smart workspace management platform designed to streamline team collaboration, task organization, and project tracking. Features secure authentication, dynamic dashboards, and scalable architecture to support real-time data management and future AI-driven workspace automation.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'FastAPI', 'MongoDB', 'JWT Auth', 'REST API'],
    status: 'in progress'
  },
  {
    title: 'StreamSphere – Scalable Video & Microblogging Backend',
    description: 'Production-ready backend platform combining video publishing, social microblogging, and real-time interaction features. Implemented secure authentication, subscription systems, tweet feeds, and optimized database aggregation pipelines using a scalable REST API architecture.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Aggregation Pipeline', 'REST API'],
    status: 'ongoing'
  },
  {
    title: 'Smart Expense Tracker Platform',
    description: 'Backend-driven financial management system built using FastAPI and MongoDB. Features secure JWT authentication, structured Pydantic models, asynchronous API endpoints, and optimized database queries for managing user transactions and expense categorization.',
    technologies: ['FastAPI', 'Python', 'MongoDB', 'Pydantic', 'JWT', 'Async APIs', 'React'],
    status: 'completed', LiveDemo: "https://expense-tracker-jhfa.onrender.com/"
  },
  {
  title: 'Smart PDF Chatbot with Semantic Search',
  description: 'AI-driven chatbot that enables interactive Q&A over PDF documents using embeddings and vector search. Users can upload one or more PDFs and query their content naturally. Built with a modular architecture featuring PDF parsing, text embedding, vector storage, and a conversational interface.',
  technologies: ['Python', 'LangChain', 'FAISS', 'OpenAI API', 'PDF Parsing', 'Vector Search', 'FastAPI'],
  status: 'completed'
  },
  {
     title: 'AI Software Developer Agent',
    description: 'A multi-agent AI system that automatically plans, architects, and generates complete software projects from natural language descriptions. Utilizes advanced large language models and an agent-based architecture to break down user requirements into project plans, implementation tasks, and full working code.',
    technologies: ['Python', 'LangGraph', 'Groq API', 'Pydantic', 'AI Agents', 'ReAct Pattern', 'CLI'],
    status: 'completed'
  },
  {
    title: 'Movie Recommendation System',
    description: 'Content-based movie recommendation engine that processes movie metadata (descriptions, genres, cast, crew) using NLP and machine learning to provide personalized movie suggestions. Built using Python with text embeddings and similarity scoring techniques on the TMDB 5000 Movie Dataset.',
    technologies: ['Python', 'NumPy', 'Pandas', 'scikit-learn', 'NLTK', 'Jupyter Notebook'],
    status: 'completed'
  },

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
