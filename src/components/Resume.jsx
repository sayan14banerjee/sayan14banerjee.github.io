import React from 'react';
import './Resume.css';

export default function Resume() {
  const experiences = [
  {
    title: 'Backend Developer Intern',
    company: 'Simpsoft Solutions Pvt. Ltd.',
    period: 'Mar 2025 – Sep 2025',
    description: 'Built and maintained production-grade REST APIs using Node.js and AWS Lambda. Resolved 30+ production bugs, improved API reliability and response time, and implemented secure authentication with RBAC and IAM-based access control. Worked with API Gateway, DynamoDB, and serverless architectures.'
  },
  {
    title: 'Production Associate',
    company: 'MobiSmart Card Technology Pvt. Ltd.',
    period: 'Dec 2025 – Present',
    description: 'Handled secure data processing within smart card personalization workflows. Ensured compliance with strict security, quality standards, and operational reliability in production environments.'
  }
];


  const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'University of North Bengal',
    year: '2023 – 2025',
    details: 'CGPA: 7.98 | Focused on Backend Development, Cloud Systems & AI Applications'
  },
  {
    degree: 'B.Sc. in Computer Science',
    institution: 'University of Burdwan',
    year: '2020 – 2023',
    details: 'CGPA: 9.14 | Strong foundation in Data Structures, Algorithms & Software Development'
  }
];

const skills = [
  { 
    category: 'Backend Development', 
    items: ['Python', 'Node.js', 'FastAPI', 'Flask', 'REST APIs', 'JWT', 'RBAC'] 
  },
  { 
    category: 'Databases', 
    items: ['DynamoDB', 'MongoDB', 'MySQL', 'FAISS'] 
  },
  { 
    category: 'Cloud & DevOps', 
    items: ['AWS Lambda', 'API Gateway', 'S3', 'Docker', 'Terraform'] 
  },
  { 
    category: 'AI & Generative AI', 
    items: ['LLM APIs', 'AI Inference Pipelines', 'Prompt Engineering', 'Scikit-learn'] 
  }
];


  return (
    <section className="resume-section">
      <div className="container">
        <h2 className="section-title">Resume</h2>

        {/* Download Button */}
        <div className="resume-header">
          <a href="https://drive.google.com/file/d/1YQyKVt7ql_wp_uUX0de6OlrBGDR4Io7N/view?usp=sharing" className="download-btn">
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
