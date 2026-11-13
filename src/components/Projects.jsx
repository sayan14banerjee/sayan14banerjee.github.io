import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import './Projects.css'

const github = 'https://github.com/sayan14banerjee/'

const projects = [
  {
    id: 'nexora-ai',
    layout: 'full-row featured',
    category: 'AI WORKSPACE · FLAGSHIP',
    status: 'IN DEVELOPMENT',
    name: 'NEXORA AI',
    subtitle: 'AI Intelligence Workspace',
    description: 'An AI-powered workspace bringing conversational AI and real-time web search into one platform, with an extensible foundation for future intelligent tools and AI agents.',
    details: ['Conversational AI', 'Streaming AI responses', 'Real-time web search integration', 'Markdown rendering & syntax highlighting', 'Code copying', 'Smart scrolling'],
    stack: ['Python', 'FastAPI', 'Next.js', 'React', 'TypeScript', 'Groq API'],
    repo: 'NEXORA-AI-Intelligence-Assistant',
    illustration: ['WEB CLIENT', 'AI CHAT', 'SEARCH', 'STREAMING API', 'LLM ROUTER', 'WEB SEARCH', 'DATABASE', 'VECTOR INDEX', 'TOOLS'],
  },
  {
    id: 'nexora-docs',
    layout: 'seven-columns',
    category: 'DOCUMENT INTELLIGENCE',
    status: 'FOUNDATION DONE · EXPANDING',
    name: 'NEXORA Docs',
    subtitle: 'Multimodal Document Intelligence Platform',
    description: 'Query uploaded documents in natural language, using chunking, embeddings and FAISS retrieval. Being extended beyond PDF Q&A.',
    details: ['PDF upload & text extraction', 'Intelligent chunking', 'Embedding generation', 'FAISS vector indexing', 'Similarity-based retrieval', 'Context-aware question answering'],
    stack: ['Python', 'FastAPI', 'LangChain', 'Hugging Face', 'FAISS', 'LLM APIs'],
    repo: 'NEXORA-Docs-Multimodal-Document-Intelligence-Platform',
    illustration: ['PDF INPUT', 'CHUNKING', 'EMBEDDINGS', 'FAISS INDEX', 'RETRIEVAL', 'LLM ANSWER'],
  },
  {
    id: 'streamsphere',
    layout: 'five-columns',
    category: 'BACKEND PLATFORM',
    status: 'IN DEVELOPMENT',
    name: 'StreamSphere',
    subtitle: 'Scalable Video & Microblogging Backend',
    description: 'A backend-oriented platform project exploring video sharing, microblogging, user interactions and scalable API design.',
    details: ['Planned: authentication & profiles', 'Planned: posts, comments, likes', 'Planned: follows & content feeds', 'Planned: video upload & media storage', 'Planned: background processing, caching, rate limiting'],
    stack: ['Node.js', 'Express.js', 'MongoDB'],
    repo: 'backend_project',
    illustration: ['CLIENTS', 'API LAYER', 'USERS & POSTS', 'VIDEO PIPELINE', 'DATABASE', 'MEDIA STORAGE'],
  },
  {
    id: 'nexora-interview',
    layout: 'five-columns',
    category: 'AI · RAG',
    status: 'PROJECT',
    name: 'NEXORA Interview',
    subtitle: 'AI-Powered Interview Practice Platform',
    description: 'Generates contextual interview questions from a resume and evaluates answers with RAG and LLM-based scoring.',
    details: ['Resume processing', 'Technical & behavioral interviews', 'RAG-based retrieval', 'LLM answer evaluation', 'Scoring & feedback reports', 'JWT, refresh tokens, RBAC'],
    stack: ['Python', 'FastAPI', 'React', 'SQLAlchemy', 'FAISS', 'LLM APIs', 'AWS S3'],
    repo: 'NEXORA-Interview-AI-Powered-Interview-Practice-Platform',
    illustration: ['RESUME', 'CONTEXT', 'QUESTIONS', 'EVALUATION', 'FEEDBACK'],
  },
  {
    id: 'ai-developer-agent',
    layout: 'seven-columns',
    category: 'MULTI-AGENT SYSTEM',
    status: 'ENGINEERING PROJECT',
    name: 'AI Software Developer Agent',
    subtitle: 'Multi-Agent Code Generation System',
    description: 'Planner, Architect and Coder agents turn natural language requirements into structured plans and generated project files.',
    details: ['Requirement analysis & planning', 'Task decomposition', 'Iterative code generation', 'File-system tools', 'Structured state management', 'ReAct-based workflow'],
    stack: ['Python', 'LangGraph', 'LangChain', 'Groq API'],
    repo: 'AI_Software_developer_model',
    illustration: ['REQUIREMENT', 'PLANNER', 'ARCHITECT', 'CODER', 'PROJECT FILES'],
  },
  {
    id: 'expense-tracker',
    layout: 'full-row reverse',
    category: 'FULL-STACK',
    status: 'COMPLETED',
    name: 'Expense Tracker',
    subtitle: 'Full-Stack Finance Management Application',
    description: 'Organise personal expenses with a FastAPI backend, React frontend and MongoDB, secured with JWT authentication.',
    details: ['JWT authentication', 'Create, update, delete expenses', 'Date & category filtering', 'Protected API endpoints', 'Responsive React interface', 'Docker & Docker Compose'],
    stack: ['Python', 'FastAPI', 'React', 'MongoDB', 'JWT', 'Docker'],
    repo: 'Expense-Tracker',
    illustration: ['WEB APP', 'EXPENSE API', 'AUTH SERVICE', 'CATEGORIES', 'MONGODB', 'REPORTS'],
  },
]

function ProjectVisual({ project }) {
  const labels = project.illustration
  const points = labels.map((label, index) => {
    const col = index % 3
    const row = Math.floor(index / 3)
    return { label, x: 28 + col * 116, y: 55 + row * 58 }
  })

  return (
    <div className="project-visual">
      <svg viewBox="0 0 400 250" role="img" aria-label={`${project.name} system diagram`}>
        <rect className="diagram-frame" x="16" y="18" width="368" height="214" rx="10" />
        <text className="diagram-title" x="30" y="40">{project.category}</text>
        {points.map((point, index) => (
          <g key={point.label}>
            {index < points.length - 1 && (
              <path
                className="diagram-connector"
                d={`M${point.x + 98} ${point.y + 22}h12`}
              />
            )}
            <rect
              className={index === 1 || index === points.length - 1 ? 'diagram-node highlighted' : 'diagram-node'}
              x={point.x}
              y={point.y}
              width="98"
              height="40"
              rx="6"
            />
            <text className="diagram-label" x={point.x + 49} y={point.y + 24}>{point.label}</text>
          </g>
        ))}
        <circle className="diagram-status" cx="30" cy="218" r="3" />
        <text className="diagram-footnote" x="40" y="221">SYSTEM WORKFLOW</text>
      </svg>
    </div>
  )
}

function ProjectCard({ project }) {
  const [open, setOpen] = useState(project.id === 'nexora-ai')

  return (
    <article className={`project-card ${project.layout} reveal`} id={project.id}>
      <ProjectVisual project={project} />
      <div className="project-body">
        <div className="project-meta">
          <span>{project.category}</span>
          <span className="project-status">{project.status}</span>
        </div>
        <h3>{project.name}</h3>
        <div className="project-subtitle">{project.subtitle}</div>
        <p>{project.description}</p>
        <div className="project-stack">
          {project.stack.map((item) => <span className="used" key={item}>{item}</span>)}
        </div>
        <details open={open} onToggle={(event) => setOpen(event.currentTarget.open)}>
          <summary>{open ? 'Implemented capabilities' : 'Details'}</summary>
          <ul>{project.details.map((item) => <li key={item}>{item}</li>)}</ul>
        </details>
        <div className="project-links">
          {project.repo
            ? <a className="btn btn-small" href={`${github}${project.repo}`} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
            : <span className="pending">Repository link to be added</span>}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="alt">
      <div className="w">
        <SectionHeading
          eyebrow="03 / SELECTED WORK"
          title="Engineering through projects."
          description="A collection of backend systems, AI applications and engineering experiments. Each project represents a different problem, architecture and technical challenge."
        />
        <div className="projects-grid">
          {projects.map((project) => <ProjectCard project={project} key={project.id} />)}
        </div>
        <article className="other-project reveal">
          <div>
            <div className="project-meta"><span>OTHER ENGINEERING PROJECTS · MACHINE LEARNING</span></div>
            <h3>Deepfake Detection System</h3>
            <p>
              A machine-learning video analysis project extracting facial behavior features,
              including blink rate, lip movement and eye-region measurements, to investigate
              real-versus-fake video classification.
            </p>
            <div className="project-stack">
              {['Python', 'OpenCV', 'MediaPipe', 'Scikit-learn'].map((item) => <span className="used" key={item}>{item}</span>)}
            </div>
          </div>
          <a className="btn" href={`${github}Deepfake_detection`} target="_blank" rel="noreferrer" aria-label="Deepfake Detection GitHub repository">
            GitHub <ArrowUpRight size={15} />
          </a>
        </article>
      </div>
    </section>
  )
}
