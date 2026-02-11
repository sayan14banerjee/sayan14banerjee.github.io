import React from 'react';
import './Resume.css';

export default function Resume() {
  const experiences = [
    {
      title: 'Senior Backend Engineer',
      company: 'Tech Startup Inc.',
      period: '2022 - Present',
      description: 'Lead backend architecture for microservices infrastructure, improving system performance by 40% and reducing latency.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Developed scalable APIs and cloud solutions, managed deployment pipelines, and mentored junior developers.'
    },
    {
      title: 'Software Developer',
      company: 'StartUp Co.',
      period: '2019 - 2020',
      description: 'Built backend systems using Node.js and Python, integrated payment systems, and optimized database queries.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Your University',
      year: '2019',
      details: 'Specialized in AI & Machine Learning'
    },
    {
      degree: 'Cloud Architecture Certification',
      institution: 'AWS Training Academy',
      year: '2021',
      details: 'Solutions Architect Associate'
    }
  ];

  const skills = [
    { category: 'Backend', items: ['Node.js', 'Python', 'Java', 'Go'] },
    { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB'] },
    { category: 'Cloud', items: ['AWS', 'GCP', 'Docker', 'Kubernetes'] },
    { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain'] }
  ];

  return (
    <section className="resume-section">
      <div className="container">
        <h2 className="section-title">Resume</h2>

        {/* Download Button */}
        <div className="resume-header">
          <a href="#" className="download-btn">
            <span>Download Resume</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>

        {/* Experience */}
        <div className="resume-section-block">
          <h3 className="resume-subtitle">Experience</h3>
          <div className="timeline">
            {experiences.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <h4 className="timeline-title">{exp.title}</h4>
                  <p className="timeline-company">{exp.company}</p>
                  <p className="timeline-period">{exp.period}</p>
                  <p className="timeline-description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="resume-section-block">
          <h3 className="resume-subtitle">Education</h3>
          <div className="education-list">
            {education.map((edu, idx) => (
              <div key={idx} className="education-item">
                <h4 className="education-degree">{edu.degree}</h4>
                <p className="education-institution">{edu.institution}</p>
                <p className="education-year">{edu.year}</p>
                <p className="education-details">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="resume-section-block">
          <h3 className="resume-subtitle">Skills</h3>
          <div className="skills-grid">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="skill-group">
                <h4 className="skill-category">{skillGroup.category}</h4>
                <div className="skill-tags">
                  {skillGroup.items.map((skill, sidx) => (
                    <span key={sidx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
