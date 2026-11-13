import SectionHeading from './SectionHeading.jsx'
import './Education.css'

const education = [
  {
    date: 'CURRENTLY PURSUING',
    title: 'Master of Computer Applications (MCA)',
    organization: 'University of North Bengal',
  },
  {
    title: 'Bachelor of Science – Computer Science',
    organization: 'Mankar College, University of Burdwan',
  },
]

export default function Education() {
  return (
    <section id="education" className="alt">
      <div className="w reveal">
        <SectionHeading eyebrow="05 / EDUCATION" title="Academic Background" />
        <div className="education-timeline">
          {education.map((item) => (
            <article className="education-item" key={item.title}>
              {item.date && <div className="timeline-date">{item.date}</div>}
              <h3>{item.title}</h3>
              <div className="timeline-organization">{item.organization}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
