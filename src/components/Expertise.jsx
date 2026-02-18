import { Database, Cloud, Brain, Settings } from 'lucide-react'
import './Expertise.css'

const expertiseAreas = [
  {
    title: 'Backend Engineering',
    icon: Database,
    skills: [
      'REST API Design (FastAPI & Express)',
      'JWT Authentication & RBAC',
      'Async Processing',
      'MongoDB & DynamoDB Modeling',
      'Production-Grade API Architecture'
    ]
  },
  {
    title: 'Cloud & Serverless Systems',
    icon: Cloud,
    skills: [
      'AWS Lambda & API Gateway',
      'DynamoDB & S3 Integration',
      'Serverless Architecture Design',
      'Secure IAM Access Control',
      'Dockerized Deployments'
    ]
  },
  {
    title: 'AI & Generative AI Systems',
    icon: Brain,
    skills: [
      'LLM API Integration',
      'Vector Databases (FAISS)',
      'RAG Pipelines',
      'Prompt Engineering',
      'Semantic Search Systems'
    ]
  },
  {
    title: 'System Architecture & Security',
    icon: Settings,
    skills: [
      'Multi-Tenant SaaS Design',
      'Role-Based Access Control',
      'Optimized Database Indexing',
      'Scalable Data Models',
      'Clean & Modular Architecture'
    ]
  }
];


export default function Expertise() {
  return (
    <section id="expertise" className="section expertise-section">
      <div className="container">
        <h2 className="section-title">Core Expertise</h2>
        
        <div className="expertise-grid">
          {expertiseAreas.map((area, idx) => {
            const Icon = area.icon
            return (
              <div key={idx} className="expertise-card">
                <div className="icon-wrapper">
                  <Icon size={32} />
                </div>
                <h3>{area.title}</h3>
                <ul className="skills-list">
                  {area.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
