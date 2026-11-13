import SectionHeading from './SectionHeading.jsx'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience">
      <div className="w reveal">
        <SectionHeading eyebrow="04 / EXPERIENCE" title="Professional Experience" />
        <div className="timeline">
          <article className="timeline-item">
            <div className="timeline-date">MARCH 2025 – SEPTEMBER 2025</div>
            <h3>Backend Developer Intern</h3>
            <div className="timeline-organization">Simpsoft Solutions Pvt. Ltd.</div>
            <p>
              Worked as a Backend Developer Intern, gaining practical exposure to backend
              application development, API development and software engineering workflows.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
