import './Exploring.css'

const topics = [
  'Advanced Backend Architecture',
  'Distributed Systems',
  'Microservices',
  'Serverless Architecture',
  'Redis and Caching',
  'Asynchronous Processing',
  'AI Agent Workflows',
  'Production-oriented RAG',
  'Cloud Infrastructure',
]

export default function Exploring() {
  return (
    <section id="focus">
      <div className="w reveal">
        <div className="exploration">
          <div>
            <div className="exploration-label">06 / CURRENTLY LEARNING &amp; BUILDING</div>
            <h2>Currently Exploring</h2>
          </div>
          <ul>
            {topics.map((topic) => <li key={topic}>{topic}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
