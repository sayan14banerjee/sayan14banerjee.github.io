import SectionHeading from './SectionHeading.jsx'
import './Expertise.css'

const primarySkills = [
  {
    label: 'BACKEND ENGINEERING',
    title: 'Server-side systems & APIs',
    className: '',
    skills: [
      ['Python', true], ['FastAPI', true], ['Django', false], ['REST APIs', true],
      ['Node.js', false], ['Express.js', false], ['Authentication', true], ['Databases', true],
    ],
  },
  {
    label: 'AI ENGINEERING',
    title: 'LLM-powered applications',
    className: 'ai',
    skills: [
      ['LangChain', true], ['Hugging Face', true], ['LLM APIs', true], ['RAG', true],
      ['FAISS', true], ['Vector Embeddings', true], ['Semantic Search', true], ['AI Agents', true],
    ],
  },
]

const secondarySkills = [
  { label: 'MACHINE LEARNING', skills: [['Scikit-learn', true], ['OpenCV', true], ['XGBoost', false]] },
  { label: 'DATABASES', skills: [['MongoDB', true], ['MySQL', false], ['DynamoDB', false]] },
  { label: 'CLOUD & DEVOPS', skills: [['S3', true], ['Docker', true], ['AWS Lambda', false], ['API Gateway', false], ['Terraform', false]] },
  { label: 'FRONTEND & TOOLS', skills: [['React', true], ['Next.js', true], ['JavaScript', false], ['HTML', false], ['CSS', false], ['Git', true], ['GitHub', true], ['Postman', false]] },
]

function SkillTags({ skills }) {
  return (
    <div className="skill-tags">
      {skills.map(([name, used]) => <span className={used ? 'used' : ''} key={name}>{name}</span>)}
    </div>
  )
}

export default function Expertise() {
  return (
    <section id="expertise">
      <div className="w">
        <SectionHeading
          eyebrow="02 / TECHNICAL EXPERTISE"
          title="Tools I work with."
          description="A practical toolkit across backend engineering, AI applications, databases and full-stack development."
        />
        <div className="primary-skills">
          {primarySkills.map((group) => (
            <article className={`primary-skill ${group.className}`} key={group.label}>
              <small>{group.label}</small>
              <h3>{group.title}</h3>
              <SkillTags skills={group.skills} />
            </article>
          ))}
        </div>
        <div className="secondary-skills">
          {secondarySkills.map((group) => (
            <article className="secondary-skill" key={group.label}>
              <small>{group.label}</small>
              <div className="skill-spacer" />
              <SkillTags skills={group.skills} />
            </article>
          ))}
        </div>
        <div className="skill-legend">
          <span className="used">Used hands-on in my projects</span>
          <span>Familiar / learning</span>
        </div>
      </div>
    </section>
  )
}
