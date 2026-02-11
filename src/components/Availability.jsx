import { CheckCircle } from 'lucide-react'
import './Availability.css'

const opportunities = [
  'Full-time roles',
  'Freelance projects',
  'Startup collaborations',
  'Backend & AI consulting'
]

export default function Availability() {
  return (
    <section className="availability-section">
      <div className="container">
        <h2 className="section-title">Open to Opportunities</h2>
        
        <div className="availability-content">
          <p className="availability-description">
            I'm actively looking to collaborate on exciting projects that challenge me to grow and create real impact. 
            Whether you're building a startup, need specialized backend expertise, or want to explore AI solutions, let's talk.
          </p>

          <div className="opportunities-grid">
            {opportunities.map((opp, idx) => (
              <div key={idx} className="opportunity-item">
                <CheckCircle size={24} className="check-icon" />
                <span>{opp}</span>
              </div>
            ))}
          </div>

          <div className="availability-cta">
            <p className="availability-label">Response time: 24-48 hours</p>
          </div>
        </div>
      </div>
    </section>
  )
}
