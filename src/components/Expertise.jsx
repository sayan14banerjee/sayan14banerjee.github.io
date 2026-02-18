import { Database, Cloud, Brain, Settings } from 'lucide-react'
import './Expertise.css'

const expertiseAreas = [
  {
    title: 'Backend Development',
    icon: Database,
    skills: ['REST APIs', 'Authentication Systems', 'Database Design', 'Scalable Architecture']
  },
  {
    title: 'Cloud & Deployment',
    icon: Cloud,
    skills: ['AWS', 'Serverless', 'Deployment Pipelines', 'Performance Optimization']
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    skills: ['NLP Systems', 'RAG', 'Chatbot Development', 'Computer Vision', 'Data-Driven Systems']
  },
  {
    title: 'System Design',
    icon: Settings,
    skills: ['Clean Architecture', 'Secure Systems', 'Code Optimization', 'Scalable Backend']
  }
]

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
